# DigitalOcean Droplet deployment

This project runs as one Next.js Node.js process on `127.0.0.1:3001`. PM2 keeps it alive, systemd restores PM2 after a reboot, and Nginx is the only public entry point.

## Server prerequisites

- Ubuntu with Node.js 22 and npm. On a shared server, install the QuadB runtime
  at `/opt/node22` so PM2 can use it without changing the Node.js version used
  by unrelated applications.
- Git
- PM2 installed globally
- Nginx
- Certbot with the Nginx plugin

Do not expose port `3001` in the DigitalOcean firewall or UFW. Allow only SSH, HTTP and HTTPS.

## First deployment

1. Clone the private repository into a non-root deploy user's application directory and check out `main`.
2. Create `.env` in the repository root using the production values from `.env.local.example`. Create it before building because the public analytics and Turnstile values are compiled into the browser bundle.
3. Protect the file with `chmod 600 .env`. Never commit or copy it into logs.
4. Install and verify the release:

   ```bash
   npm ci
   npm run check
   npm audit --audit-level=high
   ```

5. Start the application:

   ```bash
   pm2 start ecosystem.config.cjs --env production
   pm2 save
   pm2 startup systemd
   ```

   The PM2 configuration automatically uses `/opt/node22/bin/node` when it is
   present. Set `QUADB_NODE_INTERPRETER` only when Node.js 22 is installed at a
   different absolute path.

6. Run the `sudo ... pm2 startup systemd ...` command printed by PM2, then run `pm2 save` again.
7. Confirm the local application responds:

   ```bash
   curl --fail --head http://127.0.0.1:3001/
   pm2 status
   ```

## Nginx and HTTPS

Review `deploy/nginx.quadbtechnologies.com.conf` against any existing Nginx configuration before installing it. Do not overwrite a working production configuration without keeping a backup.

After installing the site configuration, validate and reload Nginx:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

Once the domain points to the Droplet, issue or renew the certificate with Certbot for both `quadbtechnologies.com` and `www.quadbtechnologies.com`. Confirm automatic renewal is active.

## Subsequent releases

Run these commands as the deploy user from the application directory:

```bash
git pull --ff-only origin main
npm ci
npm run check
npm audit --audit-level=high
pm2 reload ecosystem.config.cjs --only quadbtech --env production --update-env
pm2 save
```

Then verify the local application and public HTTPS site before ending the release.

## Production checks

- Submit one real inquiry and confirm delivery and `Reply-To` behavior.
- Confirm Turnstile appears and the form rejects an invalid token.
- Confirm `/robots.txt`, `/sitemap.xml` and `/llms.txt` return `200`.
- Check GA4 Realtime after granting analytics consent.
- Confirm the homepage and a case study generate the expected link preview.
- Review `pm2 logs quadbtech --lines 100` and the Nginx error log for unexpected errors.
