# 🚀 Netlify Deployment Guide

This guide will help you deploy your Fresh Kicks e-commerce website to Netlify.

## 📋 Prerequisites

- GitHub account with your repository
- Netlify account (free)
- Node.js installed locally (for testing)

## 🎯 Quick Deployment (Recommended)

### Step 1: Push to GitHub

Make sure your code is pushed to GitHub:

```bash
git add .
git commit -m "Ready for Netlify deployment"
git push origin main
```

### Step 2: Deploy to Netlify

1. **Go to Netlify**
   - Visit [netlify.com](https://netlify.com)
   - Sign up or log in

2. **Create New Site**
   - Click "New site from Git"
   - Choose "GitHub"
   - Select your repository: `Avarov11/elbob`

3. **Configure Build Settings**
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: `18` (or leave default)

4. **Deploy**
   - Click "Deploy site"
   - Wait for build to complete (2-3 minutes)

5. **Custom Domain (Optional)**
   - Go to "Site settings" → "Domain management"
   - Add your custom domain

## 🔧 Manual Deployment

If you prefer manual deployment:

1. **Build locally**
   ```bash
   npm install
   npm run build
   ```

2. **Upload to Netlify**
   - Go to Netlify dashboard
   - Drag and drop the `dist` folder
   - Your site is live instantly!

## ⚙️ Configuration Files

### netlify.toml
This file is already configured with:
- Build settings
- Redirects for SPA routing
- Security headers
- Cache optimization

### Environment Variables (Optional)
Add these in Netlify dashboard → Site settings → Environment variables:

```env
NODE_VERSION=18
NPM_FLAGS=--legacy-peer-deps
```

## 🔍 Troubleshooting

### Build Fails
1. Check Node.js version (use 18+)
2. Ensure all dependencies are installed
3. Check for TypeScript errors locally first

### Images Not Loading
1. Verify image paths in `src/data/products.ts`
2. Ensure images are in `src/photos/` directory
3. Check file permissions

### Routing Issues
1. The `netlify.toml` includes SPA redirects
2. All routes redirect to `index.html`
3. Client-side routing handles navigation

### Performance Issues
1. Images are optimized with caching headers
2. Static assets are cached for 1 year
3. Gzip compression is enabled

## 📱 Mobile Testing

After deployment:
1. Test on iPhone/Android
2. Check responsive design
3. Verify touch interactions
4. Test image loading on mobile

## 🔄 Continuous Deployment

Netlify automatically:
- Deploys on every Git push
- Creates preview deployments for PRs
- Maintains deployment history
- Provides rollback options

## 📊 Analytics (Optional)

Add Google Analytics:
1. Go to Site settings → Analytics
2. Add Google Analytics tracking ID
3. Or use Netlify Analytics

## 🛡️ Security

The deployment includes:
- Security headers
- XSS protection
- Content type validation
- Frame options

## 📞 Support

If you encounter issues:
1. Check Netlify build logs
2. Test locally first: `npm run build`
3. Verify all files are committed to Git
4. Check Netlify status page

---

**Your site will be live at: `https://your-site-name.netlify.app`**

🎉 **Congratulations! Your Fresh Kicks e-commerce site is now live!** 