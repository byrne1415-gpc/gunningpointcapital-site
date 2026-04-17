# Gunning Point Capital — Website

Production build of gunningpointcapital.com.

## Local preview

Open `index.html` in a browser, or serve the folder with any static server:

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .
```

Then visit http://localhost:8000.

---

## Deploy to Cloudflare Pages

### One-time setup

1. **Create a GitHub account** at https://github.com/signup (if you don't have one).
2. **Create a new repository** called `gunningpointcapital-site`. Make it private.
3. **Push this folder** to that repo:
   ```bash
   cd dist
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/gunningpointcapital-site.git
   git push -u origin main
   ```
   (If you're not comfortable with the command line, use GitHub Desktop — https://desktop.github.com — and drag the `dist` folder in.)

4. **Create a Cloudflare account** at https://cloudflare.com (free).

5. **Create the Pages project**:
   - Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
   - Authorize GitHub, pick the `gunningpointcapital-site` repo.
   - Build settings: **leave empty**. Build output directory: `/` (root).
   - Click **Save and Deploy**.

6. After ~60 seconds the site is live at `gunningpointcapital-site.pages.dev`. Test it thoroughly before pointing your domain.

### Connect your custom domain

1. In Cloudflare Pages → your project → **Custom domains** → **Set up a custom domain** → enter `gunningpointcapital.com` and `www.gunningpointcapital.com`.
2. Cloudflare will show you DNS records to add.
3. Log into Squarespace → **Domains → gunningpointcapital.com → DNS Settings**.
4. Replace Squarespace's existing records with the ones Cloudflare gave you (usually two `CNAME` records).
5. Wait 10–60 minutes for DNS to propagate. The site is now live on your domain.

### Cancel Squarespace

Once the new domain is verified working:
1. Squarespace → **Settings → Billing → Subscriptions**.
2. Cancel the website plan. **Keep the domain registration** ($20/yr) — we're still using it.
3. Later, if you want to save money, transfer the domain to Cloudflare Registrar (wholesale pricing, ~$10/yr).

---

## Editing the site later

Anything in these files:
- `Nav.jsx`, `Footer.jsx`, `HomeSections.jsx`, `Sections.jsx` — React components / page content
- `kit.css`, `colors_and_type.css` — styling
- `index.html` — page shell, meta tags, scripts
- `assets/` — images

Edit locally, commit, push to GitHub. Cloudflare Pages auto-deploys on every push. Takes ~30 seconds.

## Upgrading the contact form

The form currently uses `mailto:` — it opens the user's email client. This works but isn't ideal (some users don't have a desktop email client configured).

To upgrade to a real form handler (takes 5 minutes):

### Option: Formspree
1. Sign up at https://formspree.io (free tier: 50 submissions/mo).
2. Create a new form, get your form ID (e.g. `xpzgvlab`).
3. In `Sections.jsx`, replace the `mailto:` block in `ContactSection` with:
   ```jsx
   const submit = async (e) => {
     e.preventDefault();
     await fetch('https://formspree.io/f/YOUR_FORM_ID', {
       method: 'POST',
       headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
       body: JSON.stringify(form),
     });
     onSubmit && onSubmit(form);
   };
   ```
4. Commit + push. Done.

---

## Support files

- `_headers` — caching + security headers (Cloudflare Pages reads this automatically).
- `_redirects` — sends unknown paths to `index.html` so the in-app navigation works.
