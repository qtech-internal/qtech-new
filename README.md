# QuadB Technologies website

The production website for [quadbtechnologies.com](https://quadbtechnologies.com), built with Next.js, React, TypeScript and Tailwind CSS.

## Local development

Use Node.js 22 or newer.

```bash
npm install
cp .env.local.example .env.local
npm run dev
```

## Required production configuration

- `RESEND_API_KEY`: Resend server key.
- `CONTACT_TO_EMAIL`: inquiry recipient; defaults to `vinayak.kalra@quadbtech.com`.
- `CONTACT_FROM_EMAIL`: verified sender on `quadbtechnologies.com`.
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and `TURNSTILE_SECRET_KEY`: Cloudflare Turnstile widget and verification credentials.
- `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`: persistent contact rate limiting.
- `NEXT_PUBLIC_GA_ID`: optional Google Analytics 4 measurement ID.
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`: optional Search Console verification value.

The contact API fails closed in production when security or mail credentials are missing. In local development, Turnstile and rate limiting may be omitted; Resend remains required to deliver a real message.

## DigitalOcean deployment

The production process definition and Droplet deployment checklist are in [`ecosystem.config.cjs`](./ecosystem.config.cjs) and [`deploy/README.md`](./deploy/README.md). The app binds only to `127.0.0.1:3001`; Nginx terminates public HTTP/HTTPS traffic.

## Verification

```bash
npm run check
npm run test:e2e
npm audit
```

The legal pages are implementation drafts and must be reviewed by counsel before launch.

## Deployment checklist

1. Verify `quadbtechnologies.com` as a sending domain in Resend.
2. Configure all environment variables on the existing hosting provider.
3. Deploy a preview and exercise the contact form with Turnstile enabled.
4. Confirm GA4 consent behavior and conversion events.
5. Add the domain property in Search Console and submit `/sitemap.xml`.
6. Add the site in Bing Webmaster Tools; submit the same sitemap and enable IndexNow if the hosting workflow supports change notifications.
7. Validate the homepage, one service page and two case studies with Google's Rich Results Test and URL Inspection after the preview is public.
8. Confirm that `/robots.txt`, `/sitemap.xml` and the optional `/llms.txt` reference are publicly reachable. Google currently ignores `llms.txt`, but it is kept as a concise source map for other systems that may consume it.
9. Complete legal review, then promote the preview to production.
