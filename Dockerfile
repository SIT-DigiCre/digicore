FROM node:20.5.1@sha256:2e627b2c2cb49df1f9898a357b48058ff33ba064aaba05e652a6edcae746dfab as dev

WORKDIR /app
COPY ["package.json", "yarn.lock", "."]
RUN yarn install
CMD yarn dev

FROM node:20.5.1@sha256:2e627b2c2cb49df1f9898a357b48058ff33ba064aaba05e652a6edcae746dfab as prod

WORKDIR /app
COPY ["package.json", "yarn.lock", "."]
RUN yarn install --frozen-lockfile
COPY . . 
RUN yarn build
CMD yarn start
