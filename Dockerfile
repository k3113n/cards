FROM denoland/deno:alpine
WORKDIR /app
COPY . .
EXPOSE 8080
RUN apk add --no-cache fontconfig wget
RUN mkdir -p /usr/share/fonts/noto
RUN wget -O /usr/share/fonts/noto/NotoSans-Regular.ttf https://github.com/googlefonts/noto-fonts/raw/main/hinted/ttf/NotoSans/NotoSans-Regular.ttf \
    && wget -O /usr/share/fonts/noto/NotoEmoji-Regular.ttf https://github.com/googlefonts/noto-emoji/raw/main/fonts/NotoEmoji-Regular.ttf
RUN fc-cache -fv
RUN mkdir -p /root/.cache/deno/npm/registry.npmjs.org/yoga-wasm-web/0.2.0/dist/ && \
    wget -O /root/.cache/deno/npm/registry.npmjs.org/yoga-wasm-web/0.2.0/dist/yoga.wasm \
    https://cdn.jsdelivr.net/npm/yoga-wasm-web@0.2.0/dist/yoga.wasm
RUN deno cache main.tsx
CMD ["run", "start"]