# Video editing landing page (Arabic, RTL)

A static website: plain HTML, CSS and JavaScript. There is no build step and no framework.

## Structure

    index.html          Page markup
    css/style.css       All styles
    js/main.js          Video play/pause behavior
    assets/videos/      Work videos (work-1.mp4 ... work-3.mp4)
    assets/images/      Video poster images
    vercel.json         Vercel settings (clean URLs, asset caching)
    package.json        Local dev script

## Run locally

    npm run dev

Then open http://localhost:3000. You can also open `index.html` directly in a browser.

## Deploy with GitHub and Vercel

1. Create a GitHub repository and push this folder to it.
2. In Vercel, choose "Add New Project" and import the repository.
3. Framework Preset: **Other**. Leave Build Command and Output Directory empty.
4. Click Deploy.

## Editing

- WhatsApp number: search `wa.me/212679459929` in `index.html` (4 links).
- Fonts: IBM Plex Sans Arabic is loaded from Google Fonts in the `<head>` of `index.html`.
- To add or replace a video, put the file in `assets/videos/`, update the `src` and `poster` of the matching `<video>` tag in `index.html`. Keep each file under 100 MB (GitHub's limit).
