FROM --platform=linux/amd64 node:18-slim AS builder

WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED 1
COPY . .
RUN apt-get update 

RUN npm install
RUN npm run build

FROM --platform=linux/amd64 node:18-slim as runner

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

COPY --from=builder /app/next.config.js next.config.js
COPY --from=builder /app/.next .next
# COPY --from=builder /app/.env .env
COPY --from=builder /app/public public
COPY --from=builder /app/node_modules node_modules
COPY --from=builder /app/package.json package.json
# COPY --from=builder /app/package-lock.json package-lock.json

CMD ["npm", "run", "start"]