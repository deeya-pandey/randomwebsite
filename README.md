# Nova Dental Care — website

React + Vite + TypeScript + Tailwind. Fully static: every route is prerendered to HTML at build time. No Node server needed in production.

## Commands
```bash
npm install
npm run dev        # local development
SITE_URL=https://www.your-domain.com npm run build   # production build -> dist/
npm run preview    # (optional) preview dist
```

## Deploy to cPanel
1. Run the build with your real `SITE_URL` (used for canonical URLs, sitemap, Open Graph).
2. In cPanel File Manager, open `public_html` (or the domain's folder). Enable "Show hidden files".
3. Upload the **contents** of `dist/` (including `.htaccess`), not the folder itself. Or zip `dist/*`, upload and extract.
4. Install SSL (cPanel → SSL/TLS Status → Run AutoSSL). The `.htaccess` forces HTTPS, so delete that rule if SSL isn't active yet.
5. Domain: point the domain's A record to the hosting IP, or use the nameservers your host gives you.
6. If deploying into a sub-folder, set `base: '/folder/'` in `vite.config.ts` and rebuild.

## Languages
English lives at `/`, Nepali at `/ne/`. Each has prerendered pages, `hreflang` tags and a header language switch. All text is in `src/i18n/copy.ts` (service text in English is in `src/data/clinic.ts`). **Have a native Nepali speaker review the Nepali text before launch.** Page titles for Nepali are in `src/data/seo.ts`.

## Booking form
Uses Web3Forms: create a free access key at web3forms.com, then set `VITE_WEB3FORMS_KEY` in `.env` before building (the key is public by design). Without a key, the button reads "Send via WhatsApp" and opens WhatsApp with the details pre-filled. It never pretends to submit.

## Before launch: confirm with the owner (see `src/data/clinic.ts`)
- Business name spelling: the logo says "Nova" but the flyer headline reads "Nove Dental Care Pvt. Ltd." (likely a typo; the site uses Nova)
- Address wording (Google: "Kalopul-Ratopul Rd" vs socials: "Gaushala–Ratopul Road") and third number 014533224
- Full opening hours (only "opens 9:00 AM" is known)
- Real list of treatments (set `confirmed: true` per item; the preview note then disappears)
- Dentist names, qualifications, registration, portraits
- Photos: the site uses free Pexels stock photos (`public/images`, labelled as illustrative in the footer and alt text). Replace with the clinic's own photos when authorised. The logo was extracted from the clinic's flyer at low resolution (186 px wide); ask for the original file.
- Add `public/og-image.png` (1200×630) for social sharing
- Facebook page link, email, real domain

## Launch checklist
- [ ] Facts above confirmed · [ ] `SITE_URL` set · [ ] Form key set and a test submission received
- [ ] SSL active · [ ] Submit `sitemap.xml` in Google Search Console · [ ] Claim/verify the Google Business Profile and add the website URL
