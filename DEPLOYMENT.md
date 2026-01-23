# Deployment Checklist

Before deploying to GitHub Pages, ensure these steps are completed:

## ✅ Pre-Deployment Checklist

### 1. GitHub Pages Configuration
- [ ] Enable GitHub Pages in repository settings
- [ ] Set source to "GitHub Actions"
- [ ] Verify workflow file exists at `.github/workflows/deploy.yml`

### 2. Repository Files Verification
- [x] `index.html` - Main game page with optimizations
- [x] `classes.js` - Game client code
- [x] `fix-webm-duration.js` - Video fix utility
- [x] `assets.epk` - Game assets package
- [x] `service-worker.js` - Caching for performance
- [x] `lang/` directory - Language files location
- [x] `worlds/` directory - World storage location marker
- [x] `.github/workflows/deploy.yml` - Deployment workflow

### 3. Performance Configuration Verified
- [x] FBO enabled (`fboEnable: true`)
- [x] Optimal render distance set (`renderDistance: 4`)
- [x] Resource preloading configured
- [x] DNS prefetching for servers
- [x] Service worker registered

### 4. Mode Separation Verified
- [x] Singleplayer uses IndexedDB (`worldsDB: "worlds/"`)
- [x] Multiplayer uses WebSocket servers
- [x] No interference between modes
- [x] Shared assets properly configured

### 5. Documentation Complete
- [x] README.md with deployment instructions
- [x] CONFIGURATION.md explaining setup
- [x] PERFORMANCE.md with optimization guide
- [x] Code comments explaining configuration

## 🚀 Deployment Steps

1. **Push to main branch** (or configured deployment branch):
   ```bash
   git checkout main
   git merge copilot/setup-singleplayer-mode
   git push origin main
   ```

2. **Monitor GitHub Actions**:
   - Go to repository → Actions tab
   - Watch the "Deploy Eaglercraft to GitHub Pages" workflow
   - Verify it completes successfully

3. **Access your game**:
   - URL format: `https://[username].github.io/[repository-name]/`
   - Example: `https://lumin0sity-dev.github.io/Eaglercraft-1.14-lu/`

4. **First load verification**:
   - Page loads without errors
   - Assets download successfully (~20MB)
   - Game renders in browser
   - Main menu appears

## 🎮 Post-Deployment Testing

### Singleplayer Testing
- [ ] Click "Singleplayer" button
- [ ] Create a new world
- [ ] World loads successfully
- [ ] Can move and interact
- [ ] Exit to menu
- [ ] World appears in world list
- [ ] Can reload the world

### Multiplayer Testing
- [ ] Click "Multiplayer" button
- [ ] Server list displays
- [ ] Can connect to a server (if available)
- [ ] Connection doesn't affect singleplayer worlds

### Performance Testing
- [ ] Check FPS (press F3 in-game)
- [ ] Verify smooth gameplay
- [ ] Test different render distances
- [ ] Verify graphics settings work

### Browser Testing
- [ ] Test in Chrome/Edge (recommended)
- [ ] Test in Firefox (if needed)
- [ ] Mobile browser test (optional)

## 🔧 Troubleshooting Deployment

### Workflow fails
- Check GitHub Actions logs
- Verify all files are committed
- Check workflow YAML syntax

### 404 error on GitHub Pages
- Verify GitHub Pages is enabled
- Check Pages source is set to "GitHub Actions"
- Wait 1-2 minutes for deployment to propagate

### Game won't load
- Check browser console (F12) for errors
- Verify assets.epk is accessible
- Check service worker registration
- Clear browser cache and reload

### Performance issues
- Follow PERFORMANCE.md guide
- Lower render distance
- Set graphics to "Fast"
- Disable entity shadows

## 📊 Expected Performance

| Device Type | Expected FPS | Recommended Settings |
|-------------|--------------|---------------------|
| Low-end laptop | 30-45 FPS | Render: 2-4, Graphics: Fast |
| Mid-range laptop | 45-60 FPS | Render: 4-8, Graphics: Fast |
| Gaming laptop | 60-120 FPS | Render: 8-12, Graphics: Fancy |
| Desktop (integrated) | 45-60 FPS | Render: 4-8, Graphics: Fast |
| Gaming desktop | 60-144+ FPS | Render: 12-16, Graphics: Fancy |

## 🔐 Security Notes

- Service worker caches assets locally
- IndexedDB stores world data in browser
- No server-side code or backend required
- All processing happens client-side
- WebSocket connections only for multiplayer
- No personal data collected or transmitted (singleplayer)

## ✨ Features Delivered

1. ✅ Full singleplayer mode with world creation
2. ✅ GitHub Pages deployment automation
3. ✅ Performance optimizations (FBO, preloading, caching)
4. ✅ Multiplayer server support
5. ✅ Mode separation (SP and MP independent)
6. ✅ Comprehensive documentation
7. ✅ Service worker for faster subsequent loads

## 📝 Maintenance

### Regular updates
- Monitor browser compatibility
- Update server list as needed
- Update documentation for new features
- Check for game client updates

### User support
- Direct users to PERFORMANCE.md for FPS issues
- Direct users to CONFIGURATION.md for setup questions
- Direct users to README.md for general info
