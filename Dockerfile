# Build stage
FROM node:jessie as build-stage
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . /app
RUN npm run build

# Production stage
FROM nginx:1.14.2-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80