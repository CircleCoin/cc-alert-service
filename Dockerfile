FROM node:7.9

WORKDIR /razor

COPY . /razor

RUN npm install
RUN npm start

EXPOSE 3000 5000

WORKDIR razor/service

CMD ["forever", "main.js"]
