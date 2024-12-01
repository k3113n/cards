import * as fontkit from "npm:fontkit";
import { writeFile } from "node:fs/promises";
import { join } from "node:path";
const ttcPath = "/usr/share/fonts/noto/NotoSansCJK-Regular.ttc";
const outputDir = "/usr/share/fonts/noto/";
const collection = fontkit.openSync(ttcPath);
collection.fonts.forEach(async (font) => {
  const fontName = font.fullName.replace(/\s+/g, "");
  const outputPath = join(outputDir, `${fontName}.ttf`);
  try {
    const fontData = new Uint8Array(font.stream.buffer);
    await writeFile(outputPath, fontData);
    console.log(`Saved: ${outputPath}`);
  } catch (error) {
    console.error(`Error writing ${fontName}.ttf:`, error);
  }
});