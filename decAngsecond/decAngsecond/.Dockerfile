FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build 
#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/dec-angsecond /usr/share/nginx/html