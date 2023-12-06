FROM node:slim
WORKDIR /commitservice
COPY . /commitservice
ARG AWS_ACCESS_KEY_ID_ARG
ENV AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID_ARG
ARG AWS_SECRET_ACCESS_KEY_ARG
ENV AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY_ARG
RUN npm install
EXPOSE 3000
CMD node index.js







# FROM node:slim
# WORKDIR /commitsservice
# COPY . /commitsservice
# RUN npm install
# EXPOSE 3000
# CMD node index.js
