FROM node:18-bookworm-slim

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
ENV NODE_OPTIONS=--openssl-legacy-provider

WORKDIR /data

COPY . .

RUN yarn install \
  --prefer-offline \
  --frozen-lockfile \
  --non-interactive \
  --production=false \
  && yarn cache clean \
  && yarn autoclean --init \
  && yarn autoclean --force

EXPOSE 3000

CMD ["node", "start.mjs"]
