# Use official Playwright base image matching your installed version
FROM mcr.microsoft.com/playwright:v1.64.1-noble

# Set working directory inside container
WORKDIR /app

# Copy dependency manifests
COPY package*.json ./

# Install dependencies cleanly
RUN npm ci

# Copy the rest of the automation framework
COPY . .

# Environment variable to inform configs that it is running in CI/Container
ENV CI=true

# Default command to run regression tests
CMD ["npx", "playwright", "test"]