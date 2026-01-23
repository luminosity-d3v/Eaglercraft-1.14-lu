# Configuration Guide

This document explains how Eaglercraft 1.14 is configured to support both singleplayer and multiplayer modes without conflicts.

## Architecture Overview

The game uses a single configuration object (`window.eaglercraftXOpts`) that defines settings for both modes:

```javascript
window.eaglercraftXOpts = {
    container: "game_frame",       // HTML element ID for game canvas
    assetsURI: "assets.epk",       // Shared game assets
    localesURI: "lang/",           // Shared language files
    worldsDB: "worlds/",           // Singleplayer world storage
    servers: [...]                 // Multiplayer server list
};
```

## Mode Separation

### Singleplayer Configuration
- **worldsDB**: `"worlds/"` - IndexedDB database name prefix
  - Stores world data in browser's IndexedDB
  - Completely local, no network access
  - Each world is an independent database entry
  - Does NOT conflict with multiplayer

### Multiplayer Configuration
- **servers**: Array of server objects
  - Each server has `addr` (WebSocket URL) and `name` (display name)
  - Connects to remote servers via WebSocket protocol
  - Server data is fetched from remote, not stored locally
  - Does NOT access singleplayer world storage

### Shared Resources
- **assetsURI**: Game assets (textures, models, sounds)
- **localesURI**: Language/translation files
- Both modes use the same assets but maintain separate game states

## How Separation is Maintained

1. **Storage Isolation**
   - Singleplayer: Uses IndexedDB with `worlds/` namespace
   - Multiplayer: Uses network connections, no local world storage
   - No shared storage means no conflicts

2. **Game State Management**
   - The compiled game code in `classes.js` handles mode switching
   - When you click "Singleplayer", it initializes local world management
   - When you click "Multiplayer", it initializes network client
   - Returning to main menu cleanly disconnects/saves current mode

3. **Resource Sharing**
   - Assets (EPK file) are read-only and shared safely
   - No write conflicts possible with shared resources

## Adding/Modifying Servers

To add or modify multiplayer servers, edit the `servers` array in `index.html`:

```javascript
servers: [
    { addr: "wss://your-server.com", name: "Your Server Name" },
    // Add more servers here
]
```

This does NOT affect singleplayer functionality at all.

## Technical Details

### IndexedDB Structure (Singleplayer)
- Database prefix: `worlds/`
- Each world gets its own database entry
- Structure managed by the game engine
- Can be viewed in browser DevTools > Application > IndexedDB

### WebSocket Protocol (Multiplayer)
- Uses WebSocket Secure (wss://) for encrypted connections
- Protocol: EaglercraftX 1.14.4
- No local caching of server world data
- Connection closed when leaving server

## Troubleshooting

### Singleplayer Issues
- Check browser IndexedDB storage quota
- Clear IndexedDB if worlds are corrupted
- Does NOT affect multiplayer connections

### Multiplayer Issues
- Check server WebSocket URL
- Verify server is online and compatible
- Check browser console for connection errors
- Does NOT affect singleplayer worlds

### Both Modes Not Working
- Check that `assets.epk` is accessible
- Verify `classes.js` loaded correctly
- Check browser console for loading errors
- These are shared resources needed by both modes
