# Site updates v2 — real logo image

Upload ALL files to your GitHub repo, keeping the folder structure:

```
repo-root/
├── Nav.jsx           ← overwrites existing
├── Footer.jsx        ← overwrites existing
├── kit.css           ← overwrites existing
└── assets/
    └── logo-header.png   ← overwrites existing
```

## Upload method (GitHub web UI)

1. Go to your repo root.
2. **Add file → Upload files**.
3. Drag in `Nav.jsx`, `Footer.jsx`, `kit.css`.
4. Commit.
5. Click into the `assets/` folder.
6. **Add file → Upload files** → drag in `logo-header.png` from the `assets/` subfolder of this download.
7. Commit.
8. Wait 60 seconds for Cloudflare to deploy.
9. **Hard refresh** your site: Cmd+Shift+R (Mac) or Ctrl+F5 (Windows). Or open in an incognito window.

## What this does

- Nav and footer now display the actual cleaned-up logo PNG image (matches `preview/logos.html` exactly).
- Footer no longer shows the email address.
- Contact form still routes to joe@gunningpointcapital.com (unchanged).
