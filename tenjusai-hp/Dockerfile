FROM --platform=linux/amd64 node:18-slim AS builder

WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED 1
COPY . .
RUN apt-get update

ARG NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
ARG NEXT_PUBLIC_SUPABASE_URL
ARG NEXT_PUBLIC_SUPABASE_ANON_KEY

RUN npm install
RUN npm run build

FROM --platform=linux/amd64 node:18-slim as runner

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
ENV NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=$NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
ENV NEXT_PUBLIC_SUPABASE_ANON_KEY=$NEXT_PUBLIC_SUPABASE_ANON_KEY
ENV NEXT_PUBLIC_SUPABASE_URL=$NEXT_PUBLIC_SUPABASE_URL

COPY --from=builder /app/next.config.js next.config.js
COPY --from=builder /app/.next .next
# COPY --from=builder /app/.env .env
COPY --from=builder /app/public public
COPY --from=builder /app/node_modules node_modules
COPY --from=builder /app/package.json package.json
# COPY --from=builder /app/package-lock.json package-lock.json

CMD ["npm", "run", "start"]