# Performance Optimization Guide

This guide explains how to optimize Eaglercraft 1.14 for better FPS and reduced lag.

## Quick Optimizations Applied

The following optimizations are already configured in `index.html`:

### 1. Framebuffer Objects (FBO)
```javascript
fboEnable: true
```
- Enables hardware-accelerated rendering
- Significantly improves FPS on most devices
- Uses GPU more efficiently

### 2. Optimized Render Distance
```javascript
renderDistance: 4
```
- Default set to 4 chunks (balanced performance)
- Lower values = better FPS
- Adjustable in-game: Options > Video Settings > Render Distance
- Range: 2-16 chunks
  - **2-4 chunks**: Best for low-end devices (60+ FPS)
  - **6-8 chunks**: Balanced (30-60 FPS)
  - **10-16 chunks**: High-end only (may drop below 30 FPS)

### 3. Resource Preloading
```html
<link rel="preload" href="classes.js" as="script" />
<link rel="preload" href="assets.epk" as="fetch" />
```
- Loads critical resources faster
- Reduces initial loading time
- Browser prioritizes these resources

### 4. DNS Prefetching
```html
<link rel="dns-prefetch" href="//mc.sealcentral.co" />
```
- Pre-resolves server domains
- Faster multiplayer connections
- Reduces connection lag

## In-Game Performance Settings

Access these through **Options > Video Settings** in-game:

### Essential Settings for Better FPS

1. **Graphics: Fast**
   - Disables fancy graphics
   - +20-30% FPS improvement
   - Less visual detail but much smoother

2. **Render Distance: 2-6 chunks**
   - Most impactful setting
   - Each chunk = ~5-10 FPS impact
   - Start at 4, adjust based on FPS

3. **Max Framerate: Unlimited or 120 FPS**
   - Unlimited: Best for high-end PCs
   - 60 FPS: Good balance
   - 30 FPS: Only for very slow devices

4. **Particles: Decreased or Minimal**
   - Reduced particle effects
   - +5-15% FPS improvement
   - Minimal visual impact

5. **Entity Shadows: OFF**
   - Disables shadow rendering
   - +10-20% FPS improvement
   - Significant performance gain

6. **Clouds: OFF**
   - Disables cloud rendering
   - +5-10% FPS improvement
   - Less atmospheric but faster

7. **Smooth Lighting: OFF**
   - Disables lighting calculations
   - +15-25% FPS improvement
   - More blocky lighting

8. **Ambient Occlusion: OFF**
   - Disables advanced shadows
   - +10-15% FPS improvement
   - Less realistic but faster

### Advanced Optimizations

9. **VSync: OFF**
   - Disables frame synchronization
   - Can increase FPS beyond 60
   - May cause screen tearing

10. **Mipmap Levels: 0**
    - Disables texture smoothing at distance
    - +5-10% FPS improvement
    - Slightly pixelated distant textures

11. **View Bobbing: OFF**
    - Disables camera shake
    - Very minor FPS gain
    - Can reduce motion sickness

## Performance Profiles

### Low-End Device Profile (30-45 FPS target)
```
Graphics: Fast
Render Distance: 2-4 chunks
Max Framerate: 60 FPS
Particles: Minimal
Entity Shadows: OFF
Clouds: OFF
Smooth Lighting: OFF
Ambient Occlusion: OFF
VSync: OFF
```

### Mid-Range Device Profile (45-60 FPS target)
```
Graphics: Fast
Render Distance: 4-8 chunks
Max Framerate: Unlimited
Particles: Decreased
Entity Shadows: OFF
Clouds: Fast
Smooth Lighting: Minimum
Ambient Occlusion: OFF
VSync: OFF
```

### High-End Device Profile (60+ FPS target)
```
Graphics: Fancy
Render Distance: 8-12 chunks
Max Framerate: Unlimited
Particles: All
Entity Shadows: ON
Clouds: Fancy
Smooth Lighting: Maximum
Ambient Occlusion: ON
VSync: Optional
```

## Browser Optimizations

### 1. Use Hardware Acceleration
- Chrome: Settings > System > "Use hardware acceleration when available"
- Firefox: Settings > Performance > "Use recommended performance settings"
- Edge: Settings > System > "Use hardware acceleration when available"

### 2. Close Unnecessary Tabs
- Each tab uses RAM
- More free RAM = better FPS
- Close background applications

### 3. Clear Browser Cache (if laggy)
- Old cached data can slow things down
- Clear cache: Settings > Privacy > Clear browsing data
- Reload the game after clearing

### 4. Update Graphics Drivers
- Outdated drivers = poor performance
- Visit GPU manufacturer website (NVIDIA, AMD, Intel)
- Install latest drivers

### 5. Use Chrome/Edge for Best Performance
- Generally better WebGL performance than Firefox
- Better JavaScript optimization
- Hardware acceleration more reliable

## Network Lag Reduction (Multiplayer)

1. **Use wired connection** instead of WiFi
2. **Close bandwidth-heavy applications** (streaming, downloads)
3. **Choose nearby servers** for lower ping
4. **Check server status** - overloaded servers lag regardless of client

## Monitoring Performance

### In-Game FPS Display
- Press **F3** to show debug overlay
- Shows FPS, chunk updates, memory usage
- Use this to test different settings

### Browser DevTools (Advanced)
- Press **F12** to open DevTools
- Go to Performance tab
- Record gameplay to find bottlenecks

## Troubleshooting Low FPS

### If FPS is still low after optimizations:

1. **Check CPU/GPU usage** in Task Manager
   - High usage = your device may be too slow
   - Consider upgrading hardware

2. **Try different browsers**
   - Chrome usually fastest
   - Edge second best
   - Firefox may be slower

3. **Reduce browser window size**
   - Smaller window = less pixels to render
   - Can significantly improve FPS

4. **Close other applications**
   - Free up RAM and CPU
   - Especially resource-heavy apps

5. **Check for overheating**
   - Thermal throttling reduces performance
   - Clean dust from vents
   - Use laptop cooling pad

## Expected Performance

| Device Type | Render Distance | Expected FPS |
|-------------|-----------------|--------------|
| Low-end laptop | 2-4 chunks | 30-45 FPS |
| Mid-range laptop | 4-8 chunks | 45-60 FPS |
| Gaming laptop | 8-12 chunks | 60-120 FPS |
| Desktop (integrated GPU) | 4-8 chunks | 45-60 FPS |
| Gaming desktop | 12-16 chunks | 60-144+ FPS |

## Additional Tips

- **Fullscreen mode** (F11) can improve FPS slightly
- **Lower screen resolution** if playing on 4K display
- **Restart browser** if game becomes laggy over time (memory leaks)
- **Disable browser extensions** that might interfere
- **Update your browser** to latest version for performance improvements
