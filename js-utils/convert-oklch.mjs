/*! Convert all oklch colors in the given css file to hex ones.
 *
 * @since 2026.10.26
 * @changed 2026.10.26, 21:48
 *
 * Used `colorjs.io` library (must be installed in order to use the script).
 *
 * Usage example:
 *
 * node js-utils/convert-oklch.mjs src/index.css
 */

import Color from 'colorjs.io';
import fs from 'node:fs';

const filePath = process.argv[2];
let css = fs.readFileSync(filePath, 'utf8');

// Regex to find oklch(...)
css = css.replace(/oklch\([^)]+\)/g, (match) => {
  try {
    const color = new Color(match);
    // Convert to hex or srgb/rgba
    return color.to('srgb').toString({ format: 'hex' }); // or 'rgb'
  } catch (_e) {
    return match;
  }
});

fs.writeFileSync(filePath, css, 'utf8');
console.log(`Converted OKLCH colors in ${filePath}`);
