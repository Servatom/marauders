FROM node:18
WORKDIR /usr/src/app
COPY . .

RUN npm install

ENTRYPOINT ["/usr/local/bin/npm", "run"]
CMD ["start"]

EXPOSE 3000
