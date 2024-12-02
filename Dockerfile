FROM mcr.microsoft.com/playwright:v1.49.0-noble
WORKDIR /app
RUN apt-get update && apt-get install -y p7zip-full fonts-noto fonts-noto-color-emoji
RUN curl -fsSL https://deno.land/x/install/install.sh | sh
ENV PATH="/root/.deno/bin:${PATH}"
COPY . .
RUN npm install playwright
EXPOSE 8080
RUN deno cache main.tsx
CMD ["deno", "run", "-A", "main.tsx"]