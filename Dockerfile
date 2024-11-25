FROM denoland/deno:alpine
WORKDIR /app
COPY . .
EXPOSE 8000
RUN mkdir -p /root/.cache/deno/npm/registry.npmjs.org/yoga-wasm-web/0.2.0/dist/ && \
    wget -O /root/.cache/deno/npm/registry.npmjs.org/yoga-wasm-web/0.2.0/dist/yoga.wasm \
    https://cdn.jsdelivr.net/npm/yoga-wasm-web@0.2.0/dist/yoga.wasm
RUN deno cache main.tsx
CMD ["run", "start"]