FROM node:18-alpine AS build

WORKDIR /app
COPY . .

RUN yarn
RUN yarn build

FROM nginx:1.18-alpine AS deploy

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/public .
ENV CLOUDINARY_CLOUD_NAME=grootretro
ENV CLOUDINARY_API_KEY=297813253687341
ENV CLOUDINARY_API_SECRET=A_IlqhvQ4DtmzkupP9rwCshavTo

ENTRYPOINT ["nginx", "-g", "daemon off;"]
