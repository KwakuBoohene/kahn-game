# Use Node.js LTS
FROM node:20.11.1

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Expose Vite dev server port
EXPOSE 5173

# Start development server with host flag to allow external access
CMD ["npm", "run", "dev", "--", "--host"]
