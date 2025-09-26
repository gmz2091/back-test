FROM node:20-alpine AS build
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

FROM node:20-alpine
WORKDIR /app
COPY package.json yarn.lock ./
COPY --from=build /app/dist ./dist
RUN yarn install --production --frozen-lockfile
EXPOSE 3000

CMD ["node", "dist/index.js"]
