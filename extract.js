const fs = require('fs');

async function extract() {
  const content = fs.readFileSync('merlux_bundle.js', 'utf8');

  // Let's print unique quotes, JSX text fragments, and interesting parts
  // Look for text, service definitions, headings, emails, etc.
  const regex = /["']([^"']{3,300})["']/g;
  let match;
  const matches = new Set();
  while ((match = regex.exec(content)) !== null) {
    const val = match[1];
    if (val.length > 5 && !val.includes(';') && !val.startsWith('http://www.w3.org')) {
      matches.add(val);
    }
  }

  const list = Array.from(matches);
  fs.writeFileSync('extracted_all_strings.txt', list.join('\n'));
  console.log('Total extracted strings:', list.length);

  // Filter specifically for company info
  const keywords = ['merlux', 'software', 'service', 'product', 'about', 'contact', 'email', 'phone', 'cloud', 'web', 'mobile', 'ai', 'solution', 'tech', 'transform', 'innovat', 'vision', 'mission', 'value', 'privacy', 'terms', 'coimbatore', 'chennai', 'india', 'street', 'road', 'com', 'in', 'http'];
  const companyInfo = list.filter(str => keywords.some(kw => str.toLowerCase().includes(kw)));
  fs.writeFileSync('extracted_company_info.txt', companyInfo.join('\n'));
  console.log('Company info strings:', companyInfo.length);
}

extract();
