const sharp = require('sharp');
const path = require('path');

const inputJpg = path.join(__dirname, '..', 'public', 'logo.jpg');
const outputPng = path.join(__dirname, '..', 'public', 'logo.png');

sharp(inputJpg)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true })
  .then(({ data, info }) => {
    const { width, height, channels } = info;
    for (let i = 0; i < data.length; i += channels) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      // If near white background, convert to transparent alpha
      if (r > 225 && g > 225 && b > 225) {
        data[i + 3] = 0; // alpha = 0
      } else if (r > 200 && g > 200 && b > 200) {
        // smooth feathering edge
        const factor = (225 - (r + g + b) / 3) / 25;
        data[i + 3] = Math.max(0, Math.floor(255 * factor));
      }
    }
    return sharp(data, {
      raw: { width, height, channels }
    })
      .png()
      .toFile(outputPng);
  })
  .then(() => {
    console.log('Successfully generated transparent public/logo.png!');
  })
  .catch((err) => {
    console.error('Error processing logo:', err);
  });
