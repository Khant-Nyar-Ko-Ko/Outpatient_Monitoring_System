FROM node:alpine
WORKDIR /app
COPY package*.json ./
ARG REACT_APP_AUTH_URL
ENV REACT_APP_AUTH_URL=$REACT_APP_AUTH_URL
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
