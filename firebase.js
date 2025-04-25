import admin from 'firebase-admin';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load your service account ke
const serviceAccountPath = path.join(__dirname, './credentials/speakeasykey.json');
const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf-8'));


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  
});

export default admin;
