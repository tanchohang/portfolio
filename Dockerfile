FROM node
WORKDIR /var/www/portfolio
COPY . .
RUN npm install
RUN npm run build
CMD ["npm","start"]
