# Sahand Hajizadeh — Portfolio

Static HTML/CSS/JS portfolio site. No build step. Deploy to Vercel in 2 minutes.

## Pages
- `index.html` — Home / work overview
- `golf-ranch.html` — Golf Ranch case study (full)
- `inkwell.html` — Inkwell case study (password protected)
- `evernote.html` — Evernote case study
- `ebay.html` — eBay thumbnail
- `flo-recruit.html` — Flo Recruit thumbnail
- `about.html` — About page

## Deploy to Vercel

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial portfolio"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main

# 2. Go to vercel.com → New Project → Import from GitHub
# 3. No build settings needed — it's static HTML
# 4. Deploy
```

Or via Vercel CLI:
```bash
npx vercel --prod
```

## Customise before launch
- [ ] Update email address (currently sahand@example.com)
- [ ] Update LinkedIn URL if needed
- [ ] Replace placeholder images with real screenshots
- [ ] Update Inkwell password in inkwell.html (currently: sahand2026)
- [ ] Update "Open to Senior IC roles" dot to turn off when not looking
- [ ] Add real hero image or remove the placeholder text

## Placeholder images
All `[ screenshot description ]` blocks are placeholder divs.
Replace them with `<img>` tags pointing to real screenshots.
Recommended: export from Figma at 2x, save to /images/

## Fonts
Using Google Fonts (Cormorant Garamond + DM Sans).
Loaded via @import in style.css — no install needed.
