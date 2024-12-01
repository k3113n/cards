FROM denoland/deno:alpine
WORKDIR /app
COPY . .
EXPOSE 8080
RUN apt-get update && apt-get install -y fontconfig font-noto
RUN fc-cache -fv
RUN fc-list : family | cat
RUN mkdir -p /root/.cache/deno/npm/registry.npmjs.org/yoga-wasm-web/0.2.0/dist/ && \
    wget -O /root/.cache/deno/npm/registry.npmjs.org/yoga-wasm-web/0.2.0/dist/yoga.wasm \
    https://cdn.jsdelivr.net/npm/yoga-wasm-web@0.2.0/dist/yoga.wasm
RUN deno cache main.tsx
CMD ["run", "start"]