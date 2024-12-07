import { jwtVerify } from "jose";
import { chromium } from 'playwright';
import { renderToStaticMarkup} from 'react-dom/server';
import React from 'react';
import Card from "./card.tsx";

const secret = new TextEncoder().encode(process.env.JWT_SECRET || "I solemnly swear I'm up to no good.");
const port: number = parseInt(process.env.PORT || "3000", 10);

Bun.serve({
  port: port,
  fetch: async (req: Request) => {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return new Response("Unauthorized", { status: 401 });
    }
    const token = authHeader.slice(7);
    try {
      await jwtVerify(token, secret);
      if (req.method === "POST") {
        try {
          const browser = await chromium.launch();
          const context = await browser.newContext({
            viewport: { width: 750, height: 1050 },
            deviceScaleFactor: 1,
            isMobile: false,
          });
          const page = await context.newPage();
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
          const card = renderToStaticMarkup(
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
            />
          );
          await page.setContent(`
            <!DOCTYPE html>
            <html lang="en">
              <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Noto+Sans:wght@400;700&display=swap&subset=latin,cyrillic,greek,devanagari,hiragana,katakana,hangul,arabic,hebrew">
                <style>
                  body {height:1050px;width:750px;margin:0}
                </style>
              </head>
              <body>${card}</body>
            </html>
        `);
          const pngBuffer = await page.screenshot({ type: "png", omitBackground: true, });
          await browser.close();

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
    } catch (error) {
      console.error("Error: ", error);
      return new Response("Invalid Token", {status: 401});
    }
  },
});