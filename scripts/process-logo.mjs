import sharp from "sharp"

const src = "public/logo.png"
const out = "public/logo.png"

const img = sharp(src).ensureAlpha()
const { data, info } = await img.raw().toBuffer({ resolveWithObject: true })
const { width, height, channels } = info

// Make near-white pixels transparent
const threshold = 235
for (let i = 0; i < data.length; i += channels) {
  const r = data[i]
  const g = data[i + 1]
  const b = data[i + 2]
  if (r >= threshold && g >= threshold && b >= threshold) {
    data[i + 3] = 0
  } else if (r >= 215 && g >= 215 && b >= 215) {
    // soft edge: partial transparency
    const min = Math.min(r, g, b)
    data[i + 3] = Math.round(((235 - min) / 20) * 255)
  }
}

await sharp(data, { raw: { width, height, channels } })
  .png()
  .trim()
  .toFile(out + ".tmp")

await sharp(out + ".tmp").toFile(out)
console.log("Logo processed:", width, "x", height)
