# Roy Winter's Cubic-Diamond-Lattice Theory WordPress Theme

## WordPress Conversion Instructions

This Lovable project has been designed to be easily converted to a WordPress theme using Lovable's "Convert to WP Theme" export feature.

### Required WordPress Plugins

Install these plugins before activating the theme:

1. **MathJax-LaTeX** - For equation rendering
2. **Three-D-Viewer** - For 3D model display  
3. **LifterLMS** - For course management
4. **RankMath SEO** - For search optimization
5. **TranslatePress** - For multilingual support
6. **UpdraftPlus** - For backups

### Custom Post Types Created

The theme will register these custom post types:
- `course` - Individual courses
- `lesson` - Course lessons (hierarchical)
- `publication` - Research papers and preprints

### WordPress Menus

Register these menu locations:
- `primary` - Main navigation
- `footer` - Footer links

### Widget Areas

- `theory-sidebar` - Theory Explorer sidebar

### Template Structure

- `index.php` - Blog index
- `single.php` - Single post template  
- `page.php` - Static page template
- `single-course.php` - Course template
- `single-lesson.php` - Lesson template
- `single-publication.php` - Publication template
- `404.php` - Error page

### Static Assets

All images, 3D models, and PDFs should be uploaded to WordPress Media Library.
Replace hardcoded paths with WordPress functions:
- Images: `wp_get_attachment_url()`
- PDFs: Upload to Media Library

### Build Commands

```bash
npm run build
lovable export --target wp-theme
```

Upload the resulting ZIP file as a WordPress theme.

### WordPress Hooks Integration

The following WordPress hooks are embedded as comments in templates:
- `wp_head()` - In <head> section
- `wp_footer()` - Before </body>
- `wp_nav_menu()` - For navigation
- Dynamic content areas marked with {{wp_content}} placeholders

### Content Migration

Replace static content with WordPress dynamic content:
- Page titles: `{{wp_title}}`
- Page content: `{{wp_content}}`  
- Featured images: `{{wp_featured_image}}`

All equation blocks and 3D interactive components will work seamlessly in WordPress.