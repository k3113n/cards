FROM denoland/deno:debian
WORKDIR /app
COPY . .
EXPOSE 8080
RUN apt-get update && apt-get install -y wget fontforge python3-setuptools fonts-noto
RUN deno run fonts
RUN fontforge -lang=ff -c 'Open("/usr/share/fonts/truetype/noto/NotoSansCJKJP.otf"); Generate("/usr/share/fonts/truetype/noto/NotoSansCJKJP.ttf");'
RUN fontforge -lang=ff -c 'Open("/usr/share/fonts/truetype/noto/NotoSansCJKSC.otf"); Generate("/usr/share/fonts/truetype/noto/NotoSansCJKSC.ttf");'
RUN fontforge -lang=ff -c 'Open("/usr/share/fonts/truetype/noto/NotoSansCJKTC.otf"); Generate("/usr/share/fonts/truetype/noto/NotoSansCJKTC.ttf");'
RUN fontforge -lang=ff -c 'Open("/usr/share/fonts/truetype/noto/NotoSansCJKKR.otf"); Generate("/usr/share/fonts/truetype/noto/NotoSansCJKKR.ttf");'
RUN fc-cache -fv
RUN mkdir -p /root/.cache/deno/npm/registry.npmjs.org/yoga-wasm-web/0.2.0/dist/ && \
    wget -O /root/.cache/deno/npm/registry.npmjs.org/yoga-wasm-web/0.2.0/dist/yoga.wasm \
    https://cdn.jsdelivr.net/npm/yoga-wasm-web@0.2.0/dist/yoga.wasm
RUN deno cache main.tsx
CMD ["run", "start"]