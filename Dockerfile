FROM node:alpine AS build

RUN addgroup --gid 1001 appuser \
    && adduser --uid 1001 --ingroup appuser --home /app --shell /bin/sh --disabled-password appuser

# Set working directory
WORKDIR /usr/app
RUN chown -R appuser:appuser /usr/app

COPY package.*  ./
RUN chown appuser:appuser package.*

USER appuser
# Install dependencies
RUN npm i

USER root

RUN apk add python3 python3-dev py3-pip build-base libressl-dev musl-dev libffi-dev rust cargo
RUN pip3 install pip --upgrade
RUN pip3 install certbot-nginx
RUN mkdir /etc/letsencrypt


# Copy all files
COPY . .

RUN chown -R appuser:appuser .

# Build app
RUN npm run export \
    && chown -R appuser:appuser .
# Base on offical NGINX Alpine image
FROM nginx

#Copy config files
COPY --from=build /usr/app/out /usr/share/nginx/html
COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY ./letsencrypt/ /etc/letsencrypt/

EXPOSE 80
EXPOSE 443
