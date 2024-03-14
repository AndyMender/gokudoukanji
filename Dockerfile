FROM node:lts-slim

WORKDIR /opt/app

# Copy over all app resources
COPY ./models /opt/app/models
COPY ./public /opt/app/public
COPY ./src /opt/app/src
COPY *.js index.html package.json /opt/app/

COPY ./resources/app_data /opt/app/resources/app_data

# Install deps and build app
RUN npm install && npm run build

# NOTE: Overwritable - defaults defined in vite.config.js
ARG APP_PORT 5173
EXPOSE ${APP_PORT}

# Run app
CMD ["npm", "run", "dev"]
