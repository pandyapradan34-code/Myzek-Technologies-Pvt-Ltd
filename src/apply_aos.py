import os
import re

directory = r'd:\Myzek\Myzek-Technologies-Pvt-Ltd\src\pages'

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Simple regex replacements
    content = re.sub(r'className="([^"]*\bsection\b[^"]*)"(?!.*data-aos)', r'className="\1" data-aos="fade-up"', content)
    content = re.sub(r'className="([^"]*\bcard\b[^"]*)"(?!.*data-aos)', r'className="\1" data-aos="fade-up"', content)
    content = re.sub(r'className="([^"]*\bsection-intro\b[^"]*)"(?!.*data-aos)', r'className="\1" data-aos="fade-up"', content)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Processed {filepath}")

for root, _, files in os.walk(directory):
    for file in files:
        if file.endswith('.jsx'):
            process_file(os.path.join(root, file))
