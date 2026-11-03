import { readFileSync } from "node:fs"
import path from "node:path"

export type ColorToken = { name: string; light: string; dark?: string }

const HEX = /^#[0-9a-f]{3,8}$/i

function readBlock(css: string, selector: string) {
  const start = css.indexOf(`${selector} {`)
  if (start === -1) return new Map<string, string>()
  const body = css.slice(start, css.indexOf("}", start))
  const vars = new Map<string, string>()
  for (const [, name, value] of body.matchAll(/--([\w-]+):\s*([^;]+);/g)) {
    const v = value.trim()
    if (HEX.test(v)) vars.set(name, v.toUpperCase())
  }
  return vars
}

/** Every hex color custom property in app/globals.css, in source order, with its dark value. */
export function getColorTokens(): ColorToken[] {
  const css = readFileSync(path.join(process.cwd(), "app/globals.css"), "utf8")
  const light = readBlock(css, ":root")
  const dark = readBlock(css, ".dark")
  return [...light].map(([name, value]) => ({ name, light: value, dark: dark.get(name) }))
}
