# ============================
# Stage 1 — Build the React app
# ============================
FROM node:20 AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY ./apps/web/package*.json ./apps/web/

# Install dependencies
WORKDIR /app/apps/web
RUN npm install --legacy-peer-deps

# Copy all project files
COPY . .

# Build the app
RUN npm run build

# ============================
# Stage 2 — Serve the built app
# ============================
FROM node:20 AS runner

WORKDIR /app

# Copy only build output from builder
COPY --from=builder /app/apps/web/build ./build
COPY --from=builder /app/apps/web/package*.json ./

# Install only production dependencies
RUN npm install --omit=dev --legacy-peer-deps

EXPOSE 4000

# Start the app
CMD ["npm", "run", "preview"]
