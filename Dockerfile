FROM mcr.microsoft.com/playwright:v1.49.0-jammy
RUN apt-get update && apt-get install -y \
    unzip \
    fonts-noto-core \
    fonts-noto-cjk \
    fonts-noto-color-emoji && \
    apt-get clean && rm -rf /var/lib/apt/lists/* && \
    curl -fsSL https://bun.sh/install | bash
ENV PATH="/root/.bun/bin:$PATH"
WORKDIR /app
COPY . .
RUN bun init && bun install
CMD ["bun", "index.tsx"]