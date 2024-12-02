import * as fontkit from "npm:fontkit";
import { writeFile } from "node:fs/promises";
import { join } from "node:path";
const ttcPath = "/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc";
const outputDir = "/usr/share/fonts/truetype/noto/";
const collection = fontkit.openSync(ttcPath);
collection.fonts.forEach(async (font) => {
  const fontName = font.fullName.replace(/\s+/g, "");
  const rawOutputPath = join(outputDir, `${fontName}.otf`);
  try {
    const fontData = new Uint8Array(font.stream.buffer);
    await writeFile(rawOutputPath, fontData);
    console.log(`Saved extracted font: ${rawOutputPath}`);
  } catch (error) {
    console.error(`Error processing ${fontName}:`, error);
  }
});