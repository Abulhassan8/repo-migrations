FROM node:14

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

EXPOSE 3000

# ENV MONGODB_USERNAME root
# ENV MONGODB_PASSWORD password

CMD ["npm", "start"]

