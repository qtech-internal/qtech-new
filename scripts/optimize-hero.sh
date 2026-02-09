#!/bin/bash

# Hero Image Optimization Script

echo "🚀 Optimizing hero.png..."

# Check if ffmpeg is installed (we'll use it for image conversion)
if ! command -v ffmpeg &> /dev/null; then
    echo "❌ ffmpeg is not installed. Please install it first:"
    echo "   Ubuntu/Debian: sudo apt-get install ffmpeg"
    echo "   macOS: brew install ffmpeg"
    exit 1
fi

if [ -f "public/hero.png" ]; then
    # Convert to WebP with quality 80
    ffmpeg -i public/hero.png -c:v libwebp -quality 80 public/hero.webp -y
    echo "✅ Created hero.webp"
    
    # Show file sizes
    echo ""
    echo "📊 File size comparison:"
    echo "Original PNG: $(ls -lh public/hero.png | awk '{print $5}')"
    echo "Optimized WebP: $(ls -lh public/hero.webp | awk '{print $5}')"
    
    # Calculate savings
    original=$(stat -f%z public/hero.png 2>/dev/null || stat -c%s public/hero.png)
    optimized=$(stat -f%z public/hero.webp 2>/dev/null || stat -c%s public/hero.webp)
    savings=$((original - optimized))
    percent=$((savings * 100 / original))
    
    echo ""
    echo "💾 Savings: $((savings / 1024))KB ($percent%)"
else
    echo "⚠️  hero.png not found in public/ directory"
fi

echo ""
echo "✨ Optimization complete!"
