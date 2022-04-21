FROM node:latest

WORKDIR /app

COPY package.json .

EXPOSE 80

VOLUME [ "/app/data" ]

# RUN npm install

COPY . .

CMD ["npm","start"]

