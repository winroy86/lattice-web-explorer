# Roy Winter's Cubic-Diamond-Lattice Theory Website - WordPress Conversion Guide

## Overview
This modern React/TypeScript website has been designed for seamless conversion to a classic WordPress theme using Lovable's "Convert to WP Theme" export functionality.

## WordPress Installation Instructions

### 1. Export & Upload
- Use Lovable's built-in WordPress export: `lovable export --target wp-theme`
- Upload the generated ZIP file to your WordPress site via Appearance > Themes > Add New > Upload Theme
- Activate the "CDLT Theory" theme

### 2. Required WordPress Plugins
Install these essential plugins for full functionality:

**Core Functionality:**
- **MathJax-LaTeX** - For rendering mathematical equations (\\( \\) and \\[ \\] syntax)
- **react-i18next-wp-helper** - Bridge for React i18n in WordPress (English/Hebrew support)
- **Advanced Custom Fields (Pro)** - For theory content management

**Course & Learning Management:**
- **LifterLMS** - Complete course management system for physics courses
- **LifterLMS Assignments** - For homework and problem sets
- **LifterLMS Certificates** - Award completion certificates

**SEO & Performance:**
- **RankMath SEO** - Search engine optimization for academic content
- **WP Rocket** - Caching and performance optimization
- **Smush** - Image optimization for 3D models and diagrams

**Multilingual & Accessibility:**
- **TranslatePress** - RTL language support and translations
- **WP Accessibility** - WCAG 2.2 AA compliance tools

**Backup & Security:**
- **UpdraftPlus** - Automated backups of research content
- **Wordfence Security** - Website security and malware protection

**Community & Communication:**
- **MailPoet** - Newsletter management for research updates
- **BuddyPress** - Community features and user forums
- **bbPress** - Discussion forums for theory collaboration

### 3. Custom Post Types (Auto-registered)
The theme automatically creates these custom post types:

- **Courses** (`course`) - Physics course catalog
- **Lessons** (`lesson`) - Individual course lessons with parent/child relationships
- **Publications** (`publication`) - Research papers and preprints
- **Theory Pages** (`theory`) - Detailed theory explanations with equations

### 4. Widget Areas
- **theory-sidebar** - Sidebar for theory explorer pages
- **footer-1, footer-2, footer-3** - Three-column footer widget areas
- **community-sidebar** - Community page sidebar for social links

### 5. Menu Locations
- **primary** - Main navigation menu
- **footer** - Footer navigation menu
- **theory-nav** - Theory section navigation (auto-populated)

### 6. Required Configurations

**MathJax Settings:**
- Enable MathJax rendering
- Use TeX input with \\( \\) for inline and \\[ \\] for display math
- Enable assistive MML for accessibility

**Media Settings:**
- Create `/models/` directory for .glb 3D model files
- Enable SVG uploads for lattice diagrams
- Set max upload size to 50MB for large research files

**Permalink Structure:**
- Set to "Post name" for clean URLs
- Theory pages: `/theory/[page-name]/`
- Courses: `/courses/[course-name]/`
- Publications: `/publications/[paper-slug]/`

### 7. Content Migration
WordPress editors can edit the following placeholders:
- `{{wp_title}}` - Page titles
- `{{wp_content}}` - Main content areas  
- `{{wp_featured_image}}` - Featured images for posts/pages
- `{{wp_excerpt}}` - Post excerpts and descriptions

### 8. 3D Model Integration
- Upload .glb files to `/wp-content/uploads/models/`
- Use the Three-D-Viewer plugin shortcode: `[3d-viewer src="/models/lattice.glb"]`
- Fallback PNG images should be placed in `/wp-content/uploads/models/fallbacks/`

### 9. Equation Rendering
- Inline math: `\\( E = mc^2 \\)`
- Display math: `\\[ \\psi(x,t) = Ae^{i(kx-\\omega t)} \\]`
- The EquationBlock component automatically wraps LaTeX in proper MathJax containers

### 10. Performance Optimization
- Enable object caching
- Use CDN for static assets
- Lazy-load images below the fold
- Minify CSS/JS (handled by WP Rocket)
- Enable GZIP compression

### 11. Accessibility Compliance
- All images have alt text placeholders for editors to fill
- Keyboard navigation is fully functional
- Color contrast meets WCAG 2.2 AA standards
- Screen reader compatibility via MathJax assistive MML

### 12. Development Notes
- The theme uses CSS Grid and Flexbox for responsive layouts
- All animations respect `prefers-reduced-motion`
- RTL language support is built-in
- Dark mode support can be enabled via theme customizer

### 13. Build Command
```bash
npm run build && lovable export --target wp-theme
```

### 14. Support Files
- Theme includes custom post type definitions
- Widget registration is in functions.php
- Custom fields for theory pages are pre-configured
- All PHP hooks and WordPress template tags are properly integrated

## Theme Customization
Use the WordPress Customizer to:
- Adjust the cobalt accent color
- Configure typography settings
- Set up social media links
- Enable/disable features like 3D models or LaTeX rendering

## WordPress Hooks Integration
The following WordPress hooks are embedded as comments in templates:
- `wp_head()` - In <head> section
- `wp_footer()` - Before </body>
- `wp_nav_menu()` - For navigation
- Dynamic content areas marked with {{wp_content}} placeholders

## Troubleshooting
- If equations don't render: Check MathJax plugin settings
- If 3D models don't load: Verify file permissions in /models/ directory  
- For performance issues: Enable caching and image optimization
- For accessibility concerns: Run WAVE accessibility checker

This theme is designed to be maintenance-free once properly configured with the recommended plugins.