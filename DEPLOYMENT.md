# Deployment Guide - Vercel

## Quick Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Configure Domain (Optional)**
   - After deployment, go to Project Settings → Domains
   - Add your custom domain (e.g., emshuvo.com)
   - Follow DNS configuration instructions

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy (from project directory)
vercel

# For production deployment
vercel --prod
```

## Environment Variables

No environment variables required for basic deployment.

## Post-Deployment Checklist

- [ ] Update `sitemap.ts` with your actual domain URL
- [ ] Update `robots.ts` with your actual domain URL
- [ ] Update Open Graph URL in `app/layout.tsx`
- [ ] Test all navigation links
- [ ] Verify email links work correctly
- [ ] Test mobile responsiveness
- [ ] Check SEO meta tags in browser dev tools

## Custom Domain Setup

1. In Vercel Dashboard → Your Project → Settings → Domains
2. Add your domain (e.g., `emshuvo.com`)
3. Follow DNS instructions:
   - Add A record pointing to Vercel's IP
   - Or add CNAME record pointing to Vercel's domain
4. Wait for DNS propagation (usually 5-30 minutes)

## Performance Optimization

The site is already optimized with:
- ✅ Next.js automatic code splitting
- ✅ Image optimization ready (when you add images)
- ✅ CSS optimization via Tailwind
- ✅ SEO meta tags and structured data
- ✅ Responsive design

## Troubleshooting

**Build fails?**
- Check Node.js version (requires 18+)
- Run `npm install` locally first
- Check for TypeScript errors: `npm run build`

**Styles not loading?**
- Ensure Tailwind CSS is properly configured
- Check `tailwind.config.ts` paths
- Verify `postcss.config.mjs` exists

**404 errors?**
- Ensure all routes use hash navigation (`#section`)
- Check `Header.tsx` navigation links match section IDs

