# Hostinger deployment

## Build
- Use Node.js 22 or newer and npm 10.
- In the project root run `npm ci`, then `npm run build`.
- Vite creates the production website in `dist/`.

## Upload to Hostinger
- Open hPanel → Websites → Manage → File Manager.
- Open `public_html`.
- Upload the **contents** of the generated `dist/` folder into `public_html` (not the `dist` folder itself).
- Ensure `public_html/Resume.Pdf` exists and that the existing `public/.htaccess` file was uploaded. It already contains the Hostinger/Apache PDF MIME, inline-display, worker MIME, and SPA rewrite rules; keep it in place.
- Keep the filename `Resume.Pdf` exactly as written (capitalization matters on Linux hosting).
- Enable/retain SSL and use the HTTPS website URL.

## Resume preview
The preview uses the browser's built-in PDF viewer through a same-origin iframe. This avoids relying on a separately hosted PDF.js worker, which can fail when shared hosting serves worker files with an incorrect MIME type. The original `public/Resume.Pdf` is copied unchanged by Vite.

## Important
Do not run image optimization, PDF compression, or asset conversion on this project. Upload the full-resolution source assets and the original PDF.
