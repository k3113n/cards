import { serve } from "server";
import React from "react";
import { SignJWT, jwtVerify } from "jose";
import satori, { init } from "satori";
import initYoga from "yoga";
import { Resvg } from "resvg";
import cacheDir from "cache";
import Card from "./card.tsx";

const secret = new TextEncoder().encode(Deno.env.get("JWT_SECRET"));
const issuer = Deno.env.get("JWT_ISSUER");
const alg = Deno.env.get("JWT_ALG");
const port = Deno.env.get("PORT");

console.log(await new SignJWT({ iss: issuer })
  .setProtectedHeader({ alg: alg })
  .setExpirationTime("1h")
  .sign(secret));

const wasm = await Deno.readFile(
  `${cacheDir()}/deno/npm/registry.npmjs.org/yoga-wasm-web/0.2.0/dist/yoga.wasm`,
);
const yoga = await (initYoga as unknown as (wasm: Uint8Array) => Promise<unknown>)(wasm);
init(yoga);

serve(async (req) => {
  const authHeader = req.headers.get("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return new Response("Unauthorized", { status: 401 });
  }
  const token = authHeader.slice(7);
  try {
    const { payload } = await jwtVerify(token, secret);
    if (req.method === "POST") {
      try {
        const json = await req.json();
        const title = json.title;
        const subtitle = json.subtitle;
        const bg = json.bg;
        const type = json.type[0];
        const typeColor = json.type[1];
        const photo = json.photo;
        const left = json.details[0];
        const center = json.details[1];
        const right = json.details[2];
        const jewelChar1 = json.moves[0][0];
        const jewelColor1 = json.moves[0][1];
        const data1 = json.moves[0][2];
        const count1 = json.moves[0][3];
        const jewelChar2 = json.moves[1][0];
        const jewelColor2 = json.moves[1][1];
        const data2 = json.moves[1][2];
        const count2 = json.moves[1][3];
        const startTitle = json.stats[0][0];
        const startCount = json.stats[0][1];
        const middleTitle = json.stats[1][0];
        const middleCount = json.stats[1][1];
        const endTitle = json.stats[2][0];
        const endCount = json.stats[2][1];
        const biography = json.biography;
        const attribution = json.attribution;
        const logoURL = json.logo[0];
        const logoAlt = json.logo[1];
        const cardNumber = json.count;
        const cardCount = json.total;
        const svg = await satori(
          <Card
            title={title}
            subtitle={subtitle}
            bgColor={bg}
            typeChar={type}
            typeColor={typeColor}
            photo={photo}
            left={left}
            center={center}
            right={right}
            jewelChar1={jewelChar1}
            jewelColor1={jewelColor1}
            data1={data1}
            count1={count1}
            jewelChar2={jewelChar2}
            jewelColor2={jewelColor2}
            data2={data2}
            count2={count2}
            startTitle={startTitle}
            startCount={startCount}
            middleTitle={middleTitle}
            middleCount={middleCount}
            endTitle={endTitle}
            endCount={endCount}
            biography={biography}
            attribution={attribution}
            logoURL={logoURL}
            logoAlt={logoAlt}
            cardNumber={cardNumber}
            cardCount={cardCount}
          />, {
            width: 750,
            height: 1050,
            fonts: [
              {
                name: "NotoSans",
                data: await Deno.readFile("/usr/share/fonts/noto/NotoSans-Regular.ttf"),
                weight: 400,
                style: "normal",
              },
              {
                name: "NotoEmoji",
                data: await Deno.readFile("/usr/share/fonts/noto/NotoColorEmoji.ttf"),
                weight: 400,
                style: "normal",
              },
              {
                name: "NotoSansArabic",
                data: await Deno.readFile("/usr/share/fonts/noto/NotoSansArabic-Regular.ttf"),
                weight: 400,
                style: "normal",
              },
              {
                name: "NotoSansSC",
                data: await Deno.readFile("/usr/share/fonts/noto/NotoSansCJKSC.ttf"),
                weight: 400,
                style: "normal",
              },
              {
                name: "NotoSansTC",
                data: await Deno.readFile("/usr/share/fonts/noto/NotoSansCJKTC.ttf"),
                weight: 400,
                style: "normal",
              },
              {
                name: "NotoSansJP",
                data: await Deno.readFile("/usr/share/fonts/noto/NotoSansCJKJP.ttf"),
                weight: 400,
                style: "normal",
              },
              {
                name: "NotoSansKR",
                data: await Deno.readFile("/usr/share/fonts/noto/NotoSansKR.ttf"),
                weight: 400,
                style: "normal",
              },
              {
                name: "NotoSansDevanagari",
                data: await Deno.readFile("/usr/share/fonts/noto/NotoSansDevanagari-Regular.ttf"),
                weight: 400,
                style: "normal",
              },
              {
                name: "NotoSansThai",
                data: await Deno.readFile("/usr/share/fonts/noto/NotoSansThai-Regular.ttf"),
                weight: 400,
                style: "normal",
              },
              {
                name: "NotoSansHebrew",
                data: await Deno.readFile("/usr/share/fonts/noto/NotoSansHebrew-Regular.ttf"),
                weight: 400,
                style: "normal",
              },
            ]
          });

        const resvg = new Resvg(svg, {
          background: "rgba(0, 0, 0, 0)",
        });
        const pngData = resvg.render();
        const pngBuffer = pngData.asPng();

        return new Response(pngBuffer, {
          headers: {
            "Content-Type": "image/png",
          },
        });
      } catch (error) {
        console.error("Error: ", error);
        return new Response("Invalid JSON", {status: 400});
      }
    } else {
      return new Response("Method Not Allowed", {status: 405});
    }
  } catch (err) {
    return new Response("Invalid Token", {status: 401})
  }
}, {port: port});