# Yalka Portfolio

This is a responsive one-page portfolio website for Yalka, a creator-led UGC video specialist for AI and SaaS brands.

## Run locally

From this folder, run:

```bash
python -m http.server 8000
```

Then open http://localhost:8000 in your browser.

## Edit the configuration

Update the email address in [script.js](script.js) by changing the `CONFIG.email` value.

## Media assets

The Tiimo project cover uses a still from the supplied demo video, saved at `assets/images/tiimo-video-cover.jpg`. The original portrait remains separate in the page header. If you replace the cover, update both the video's `poster` and the cover image source in [index.html](index.html).

Optional replacement media can be organized at these paths:

- Portrait image: assets/images/yalka-portrait.jpg
- NotebookLM video: assets/videos/notebooklm-study-demo.mp4
- Tiimo video: assets/videos/tiimo-product-demo.mp4

## Deployment

This project is a simple static website and can be deployed to any static hosting provider such as Netlify, Vercel, GitHub Pages, or Cloudflare Pages.

## Notes

- The contact section uses `yalkasurplusmedia@gmail.com`; update `CONFIG.email` in [script.js](script.js) to change it.
- The site avoids generic AI copy and does not claim client results or testimonials that were not supplied.
