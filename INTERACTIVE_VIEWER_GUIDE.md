# Interactive 3D Product Viewer Guide

## Overview
The Interactive 3D Product Viewer provides a cinematic, immersive experience for showcasing ROWER agricultural equipment with smooth animations and interactive controls.

## Features

### Phase 1: Zoom-In Animation (0-1 second)
- Product scales from 0.3x to 1.5x then settles at 1x
- Smooth fade-in effect
- Creates dramatic entrance

### Phase 2: Auto 360° Rotation (1-4 seconds)
- Automatic Y-axis rotation from 0° to 360°
- 3-second smooth linear rotation
- Showcases product from all angles
- Gives users a complete view without interaction

### Phase 3: Split-Screen Interactive Mode (4+ seconds)
- **Left Side (50% width)**: Interactive 3D product image
  - Drag to rotate manually
  - Scroll to zoom (0.5x to 3x)
  - Real-time rotation angle display
  - Grab/grabbing cursor feedback
  
- **Right Side (50% width)**: Product details
  - Product name and title
  - Description paragraph
  - Specifications table (5+ specs)
  - Key features list (7+ features)
  - Action buttons (Request Quote, Download Brochure)

## Controls

### Mouse Controls
- **Drag**: Click and drag on the product image to rotate
- **Scroll**: Scroll wheel to zoom in/out
- **Click**: Click product card to open viewer

### Keyboard
- **ESC** or **× button**: Close viewer and return to products grid

## Visual Feedback
- Current zoom level display (top-left)
- Rotation angle indicator (bottom-center)
- Cursor changes: grab → grabbing during drag
- Smooth spring physics for natural feel

## Animation Timeline
```
0.0s - Viewer opens, zoom-in begins
1.0s - Auto-rotation starts
4.0s - Split-screen transition begins
5.0s - Interactive controls active
5.0s - Close button appears
```

## Technical Details

### Transform Properties
- **3D Perspective**: 2000px for realistic depth
- **Transform Style**: preserve-3d for proper 3D rendering
- **Rotation**: Y-axis (horizontal) and X-axis (vertical, limited to ±30°)
- **Zoom Range**: 0.5x to 3x with 0.1 increments

### Performance Optimizations
- GPU-accelerated transforms
- Spring physics with optimized stiffness (100) and damping (20)
- Pointer events disabled on image to prevent drag issues
- RAF-based smooth animations

## Integration

### In ProductsPage.jsx
```jsx
import Interactive3DViewer from "./components/Interactive3DViewer";

const [viewerOpen, setViewerOpen] = useState(false);

<Interactive3DViewer
  isOpen={viewerOpen}
  onClose={handleCloseViewer}
  productImage={seederImageData}
  productName="RoWeR MASS Multi Row Tractormount Seeder"
  productSpecs={productSpecs}
/>
```

### Product Specs Format
```javascript
{
  description: "Product description paragraph",
  specs: [
    { label: "Spec Name", value: "Spec Value" },
    // ... more specs
  ],
  features: [
    "Feature description",
    // ... more features
  ]
}
```

## Styling
- Dark gradient background (gray-900 → gray-800 → black)
- Glass-morphism effects (backdrop-blur + white/10)
- Red accent color (#dc2626) for CTA buttons
- White text with high contrast
- Drop shadows for depth

## Browser Compatibility
- Modern browsers with CSS 3D transforms support
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile-responsive (touch gestures for drag/zoom)

## Future Enhancements
- Multiple product images (image gallery/carousel)
- Real product photos instead of SVG placeholders
- AR view integration
- Share functionality
- Full-screen toggle
- Keyboard shortcuts (arrow keys for rotation)
- Touch gestures (pinch-to-zoom, two-finger rotate)
