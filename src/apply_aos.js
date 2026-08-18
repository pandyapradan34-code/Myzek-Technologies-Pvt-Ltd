import fs from 'fs';
import path from 'path';

const directory = 'd:/Myzek/Myzek-Technologies-Pvt-Ltd/src/pages';

function processFile(filepath) {
  let content = fs.readFileSync(filepath, 'utf-8');
  
  // Simple regex replacements for className="...section...", "...card...", "...section-intro..."
  // Adding data-aos="fade-up"
  content = content.replace(/className="([^"]*\bsection\b[^"]*)"(?!.*data-aos)/g, 'className="$1" data-aos="fade-up"');
  content = content.replace(/className="([^"]*\bcard\b[^"]*)"(?!.*data-aos)/g, 'className="$1" data-aos="fade-up"');
  content = content.replace(/className="([^"]*\bsection-intro\b[^"]*)"(?!.*data-aos)/g, 'className="$1" data-aos="fade-up"');
  
  fs.writeFileSync(filepath, content, 'utf-8');
  console.log(`Processed ${filepath}`);
}

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      processFile(fullPath);
    }
  }
}

walk(directory);
