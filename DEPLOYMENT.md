# GitHub Pages Deployment Guide

## 🚀 Quick Deployment Steps

### 1. Create GitHub Repository
1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `portfolio` (or any name you prefer)
3. Make it **public** (required for GitHub Pages)
4. Don't initialize with README (we already have files)

### 2. Connect Local Repository to GitHub
```bash
# Add your GitHub repository as remote origin
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

### 3. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. The workflow will automatically deploy your site

### 4. Update Configuration (Important!)
Before pushing, update the following files with your GitHub username:

**In `package.json`:**
```json
"homepage": "https://YOUR_USERNAME.github.io/portfolio"
```

**In `vite.config.ts`:**
```typescript
base: '/portfolio/'
```

### 5. Manual Deployment (Alternative)
If you prefer manual deployment:
```bash
# Build the project
npm run build

# Deploy to gh-pages branch
npm run deploy
```

## 🌐 Your Live Website
After deployment, your portfolio will be available at:
**https://YOUR_USERNAME.github.io/portfolio**

## 🔄 Automatic Deployment
The GitHub Actions workflow will automatically:
- Build your project when you push to `main` branch
- Deploy to GitHub Pages
- Update your live site

## 📝 Making Updates
To update your portfolio:
1. Make changes to your code
2. Commit and push to main branch:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```
3. GitHub Actions will automatically redeploy

## 🛠️ Troubleshooting

### Common Issues:
1. **404 Error**: Check that repository is public and Pages is enabled
2. **Build Fails**: Check GitHub Actions tab for error details
3. **Assets Not Loading**: Verify the `base` path in `vite.config.ts`

### Manual Fix:
If automatic deployment fails, you can always use:
```bash
npm run deploy
```

## 📞 Need Help?
- Check the **Actions** tab in your GitHub repository for build logs
- Ensure your repository is public
- Verify GitHub Pages is enabled in repository settings

---

**Your modern 3D AI/ML portfolio is ready to go live! 🎉**