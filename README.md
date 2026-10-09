# Eaglercraft 1.14.4 - Singleplayer Edition

Play Minecraft 1.14.4 directly in your browser with full singleplayer support!

## Features

- ✨ Full singleplayer mode with world creation and management
- 🎮 Browser-based gameplay - no Java installation required
- 🌍 Connect to 1.14.4 multiplayer servers via WebSocket
- 💾 Worlds saved locally in browser storage (IndexedDB)
- 🚀 Hosted on GitHub Pages for easy access
- 🧪 Update kickoff: singleplayer UX refresh, off-hand keybind exposure, and profile cape menu updates
- ⚡ Performance optimized for better FPS and reduced lag
  - Hardware-accelerated rendering (FBO)
  - Optimized render distance (4 chunks default)
  - Resource preloading for faster startup
  - Service Worker caching for instant subsequent loads

## Deployment Instructions

### Setting up GitHub Pages

1. **Enable GitHub Pages** in your repository settings:
   - Go to Settings > Pages
   - Under "Build and deployment", select "GitHub Actions" as the source
   
2. **Deploy**: Push changes to the `main` branch (or your default branch)
   - The GitHub Actions workflow will automatically build and deploy
   - Your game will be available at: `https://[username].github.io/[repository-name]/`

3. **Access your game**: Once deployed, visit your GitHub Pages URL to play!

## Playing the Game

### First Launch
- The game may take 15-30 seconds to load initially (it's a large client)
- You might need to reload the page if it doesn't start immediately
- Click multiple times on the "press anywhere" screen if it appears
- Wait for assets to load completely

### Singleplayer Mode
- Click "Singleplayer" from the main menu
- Create new worlds or load existing ones
- Worlds are saved automatically in your browser's local storage (IndexedDB)
- **Note**: Singleplayer worlds are stored locally and do NOT interfere with multiplayer

### Multiplayer Mode
- Click "Multiplayer" to connect to compatible servers
- Pre-configured servers are listed in the server list
- You can also add custom 1.14.4 servers that support EaglercraftX protocol
- **Note**: Multiplayer connections are independent of singleplayer worlds

### Mode Separation
The game properly separates singleplayer and multiplayer functionality:
- **Singleplayer** uses browser IndexedDB (`worlds/` namespace) for world storage
- **Multiplayer** uses WebSocket connections to remote servers
- Both modes share the same game assets (textures, sounds, etc.) but maintain separate game states
- You can freely switch between modes without any conflicts

## Technical Details

- **Assets**: `assets.epk` contains all game assets
- **Client**: `classes.js` contains the compiled game client
- **Storage**: Worlds stored in IndexedDB (`worlds/` database)
- **Locales**: Language files in `lang/` directory

## Troubleshooting

- **Game won't load**: Try clearing browser cache and reloading
- **Blank screen**: Ensure you're accessing via HTTPS (required for GitHub Pages)
- **Slow loading**: First load downloads ~20MB of assets, subsequent loads are faster (cached by Service Worker)
- **Worlds not saving**: Check that your browser allows IndexedDB storage
- **Low FPS/Lag**: See [PERFORMANCE.md](PERFORMANCE.md) for optimization guide
  - Lower render distance in Video Settings (Options > Video Settings)
  - Set Graphics to "Fast" for better FPS
  - Disable Entity Shadows, Clouds, and Particles
  - Close other browser tabs and applications

## Credits

Debug Update: 0.1.4

Based on EaglercraftX 1.14.4 by the Eaglercraft development team.
