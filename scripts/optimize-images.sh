#!/bin/bash

# Image Optimization Script
# This script converts GIF to video and optimizes images

echo "🚀 Starting image optimization..."

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo "❌ ffmpeg is not installed. Please install it first:"
    echo "   Ubuntu/Debian: sudo apt-get install ffmpeg"
    echo "   macOS: brew install ffmpeg"
    exit 1
fi

# Convert GIF to video formats
echo "📹 Converting globe.gif to video formats..."
if [ -f "public/globe.gif" ]; then
    # WebM format (best compression)
    ffmpeg -i public/globe.gif -c:v libvpx-vp9 -b:v 0 -crf 30 -an public/globe.webm -y
    echo "✅ Created globe.webm"
    
    # MP4 format (fallback for Safari)
    ffmpeg -i public/globe.gif -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -an public/globe.mp4 -y
    echo "✅ Created globe.mp4"
    
    # Show file sizes
    echo ""
    echo "📊 File size comparison:"
    ls -lh public/globe.* | awk '{print $9, $5}'
else
    echo "⚠️  globe.gif not found in public/ directory"
fi

echo ""
echo "✨ Optimization complete!"
echo ""
echo "Next steps:"
echo "1. Check the video files play correctly in your browser"
echo "2. If satisfied, you can delete globe.gif to save space"
echo "3. Run 'npm run build' to test the production build"
