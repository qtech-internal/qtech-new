# Next.js SEO-Optimized Project

A production-ready Next.js application with comprehensive SEO setup, TypeScript, and Tailwind CSS.

## 🚀 Features

- **SEO Optimized**: Complete meta tags, Open Graph, Twitter Cards, structured data
- **Performance**: Image optimization, compression, static generation
- **Analytics**: Google Analytics 4 integration
- **PWA Ready**: Web app manifest and service worker support
- **Accessibility**: WCAG compliant components and semantic HTML
- **TypeScript**: Full type safety
- **Tailwind CSS**: Utility-first styling
- **ESLint**: Code quality and consistency

## 📋 SEO Features Included

### Meta Tags & Social Sharing
- Dynamic meta titles and descriptions
- Open Graph tags for Facebook/LinkedIn
- Twitter Card optimization
- Canonical URLs
- Robots meta tags

### Structured Data (JSON-LD)
- Organization schema
- Website schema
- Breadcrumb navigation
- Article/Product schemas (ready to implement)

### Technical SEO
- XML sitemap generation (`/sitemap.xml`)
- Robots.txt (`/robots.txt`)
- Proper heading hierarchy
- Image alt tags and optimization
- Core Web Vitals optimization

### Performance & UX
- Loading states
- Error boundaries
- 404 page
- Progressive Web App (PWA) manifest
- Font optimization with `next/font`

## 🛠️ Setup Instructions

### 1. Environment Variables
Copy `.env.local.example` to `.env.local` and configure:

```bash
cp .env.local.example .env.local
```

Fill in your values:
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://yoursite.com
```

### 2. SEO Configuration
Update the following files with your information:

**`src/lib/constants.ts`**
- Site name, description, and URLs
- Social media links

**`src/lib/seo.ts`**
- Default SEO values
- Author and publisher information

**`src/components/JsonLd.tsx`**
- Organization details
- Contact information
- Address

### 3. Favicon & Icons
Replace these files in `/public/`:
- `favicon.ico` (32x32)
- `favicon.svg` (vector)
- `apple-touch-icon.png` (180x180)
- `icon-192.png` (192x192)
- `icon-512.png` (512x512)
- `og-image.jpg` (1200x630)

### 4. Analytics Setup
1. Create a Google Analytics 4 property
2. Add your GA4 ID to `.env.local`
3. The Analytics component will automatically track page views

## 🚀 Getting Started

Install dependencies:
```bash
npm install
```

Run development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
npm start
```

## 📊 SEO Checklist

- [ ] Configure environment variables
- [ ] Update site information in constants
- [ ] Replace favicon and social images
- [ ] Set up Google Analytics
- [ ] Verify structured data with [Google's Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Test social sharing with [Facebook Debugger](https://developers.facebook.com/tools/debug/)
- [ ] Check Core Web Vitals with [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Submit sitemap to Google Search Console

## 🔧 Additional Scripts

- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run type-check` - TypeScript type checking
- `npm run analyze` - Bundle size analysis

## 📱 PWA Features

The app includes a web manifest for PWA capabilities:
- Installable on mobile devices
- Offline-ready (add service worker as needed)
- App-like experience

## 🎯 Performance Optimizations

- Image optimization with `next/image`
- Font optimization with `next/font`
- Automatic code splitting
- Static generation where possible
- Compression enabled
- Security headers configured

## 📈 Monitoring & Analytics

- Google Analytics 4 integration
- Core Web Vitals tracking
- Custom event tracking utilities
- Error boundary logging

## 🔒 Security

- Security headers configured
- XSS protection
- Content Security Policy ready
- HTTPS enforcement in production

## 📚 Learn More

- [Next.js SEO Guide](https://nextjs.org/learn/seo/introduction-to-seo)
- [Google Search Central](https://developers.google.com/search)
- [Web.dev Performance](https://web.dev/performance/)
- [Schema.org Documentation](https://schema.org/)

## 🚀 Deploy

Deploy easily on Vercel, Netlify, or any platform supporting Node.js:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Remember to configure environment variables in your deployment platform!