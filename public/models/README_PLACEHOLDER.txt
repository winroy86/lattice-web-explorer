PLACEHOLDER FILES FOR 3D MODELS
==============================

This file describes the required GLB model specifications for the Cubic-Diamond-Lattice Theory website.

REQUIRED MODELS:
===============

1. lattice-cube.glb
   - Cubic-diamond lattice structure with 3x3x3 unit cells
   - Planck-scale spheres as vertices (radius 0.1 relative units)
   - Bonds connecting nearest neighbors only  
   - APF = 0.34 geometry with proper spacing
   - Materials: Transparent blue spheres, white bonds
   - Size: ~200 vertices, optimized for web

2. photon-spiral.glb
   - Helical spiral path through lattice structure
   - 5-6 spheres highlighted along spiral trajectory
   - Wavelength ~3 lattice units for visibility
   - Animation: Propagation along spiral path (optional)
   - Materials: Bright yellow/orange spiral, dim lattice background
   - Size: ~150 vertices

3. electron-fig8.glb  
   - Figure-8 knot structure with 4 spheres
   - Closed loop path showing spin states
   - Compact knot fitting within 2x2x2 lattice cells
   - Animation: Rotation showing charge states (optional)
   - Materials: Red/blue spheres for spin states, gold path
   - Size: ~100 vertices

4. time-evolution.glb
   - Before/after collision states of sphere clusters
   - 2-3 collision events shown sequentially
   - Velocity vectors indicated by color gradients
   - Time step visualization with discrete states
   - Materials: Color-coded by collision density
   - Size: ~180 vertices

5. higgs-harmonic.glb
   - Central sphere with harmonic oscillation pattern
   - Surrounding lattice showing field coupling
   - Amplitude showing mass generation effect
   - 3x3x3 affected region around central disturbance
   - Materials: Central gold sphere, gradient field visualization
   - Size: ~200 vertices

TECHNICAL REQUIREMENTS:
=====================
- Format: GLB binary (optimized for web)
- Coordinate system: Right-handed, Y-up
- Units: Relative (1.0 = ~1 lattice spacing)
- Textures: Embedded in GLB, no external dependencies
- Animations: Optional, < 5 seconds loop
- File sizes: < 500KB each for web performance
- Compatibility: Three.js r140+ compatible materials

FALLBACK BEHAVIOR:
================
If GLB files are missing, the Interactive3D component will display the default cubic-diamond lattice generated procedurally in code. This ensures the website remains functional during development.

CREATION NOTES:
=============
These models should accurately represent Roy Winter's theoretical concepts:
- Maintain scientific accuracy in proportions
- Use color coding consistently across models  
- Optimize for educational visualization
- Test loading performance on mobile devices

Contact: Place finished GLB files in /public/models/ directory