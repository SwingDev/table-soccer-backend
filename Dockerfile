FROM node:12.16-alpine AS dev

# Ensure good permissions and create required directories
RUN chown -R root /opt && \
    chmod 755 /usr/local/bin/* && \
    mkdir -p /app && \
    apk add python

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . /app

RUN chown -R node /app

USER node

CMD ["npm", "run", "start:dev"]
