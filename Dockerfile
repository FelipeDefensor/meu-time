FROM node:17-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
RUN npm run build
EXPOSE 4173
CMD [ "npm", "run", "preview" ]
