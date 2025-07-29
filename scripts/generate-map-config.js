// scripts/generate-map-config.js
import dotenv from 'dotenv';
import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Load environment variables
dotenv.config({ path: join(__dirname, '../.env') });

const config = {
    mapUrl: `https://www.google.com/maps/embed/v1/place?q=187%20S%20Patterson%20Avenue%20%20Goleta%2C%20CA%2093111&key=${process.env.GOOGLE_MAPS_API_KEY}`
};

// Ensure the config directory exists
const configDir = join(__dirname, '../src/config');
mkdirSync(configDir, { recursive: true });

// Write the config to a JSON file that can be imported
writeFileSync(
    join(configDir, 'map-config.json'),
    JSON.stringify(config, null, 2)
);

console.log('Map configuration generated successfully');
