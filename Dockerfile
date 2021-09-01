# build step
FROM node:14.15 as build
RUN npm i -g npm
WORKDIR /ra-banner-maker
COPY ./package*.json ./
RUN npm install
RUN npm install -g serve
COPY . .
RUN npm run build


# run step
FROM node:14.15
RUN npm i -g npm
WORKDIR /ra-banner-maker
COPY ./package*.json ./
RUN npm install --only=production
RUN npm install -g serve
COPY --from=build /ra-banner-maker/build ./build
CMD npm start