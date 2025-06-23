# Stage 1: Dependencies
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# Stage 2: Builder
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Build the Vite application
RUN npm run build

# Stage 3: Production with simple HTTP server
FROM node:20-alpine AS runner
WORKDIR /app

# Install a simple static file server
RUN npm install -g serve

# Create non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 reactuser

# Copy built application from builder stage
COPY --from=builder /app/dist ./dist

# Change ownership
RUN chown -R reactuser:nodejs /app

USER reactuser

EXPOSE 3001

# Serve the built application
CMD ["serve", "-s", "dist", "-l", "3001"]