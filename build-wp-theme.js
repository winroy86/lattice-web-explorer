#!/usr/bin/env node

/**
 * WordPress Theme Build Script
 * 
 * This script converts the React/Vite build output into a WordPress theme
 * by creating PHP templates and integrating WordPress functionality.
 */

const fs = require('fs');
const path = require('path');

const DIST_DIR = './dist';
const WP_DIR = './wp-theme';
const SRC_WP_DIR = './src/wordpress';

async function buildWordPressTheme() {
    console.log('🔄 Building WordPress theme...');
    
    // Create WordPress theme directory
    if (!fs.existsSync(WP_DIR)) {
        fs.mkdirSync(WP_DIR, { recursive: true });
    }
    
    // Copy WordPress-specific files
    console.log('📁 Copying WordPress template files...');
    copyRecursively(SRC_WP_DIR, WP_DIR);
    
    // Copy built assets
    console.log('🎨 Copying built assets...');
    if (fs.existsSync(DIST_DIR)) {
        copyRecursively(path.join(DIST_DIR, 'assets'), path.join(WP_DIR, 'assets'));
    }
    
    // Create main template files
    console.log('📄 Creating WordPress templates...');
    createMainTemplates();
    
    // Create theme configuration files
    console.log('⚙️  Creating theme configuration...');
    createThemeConfig();
    
    console.log('✅ WordPress theme built successfully!');
    console.log(`📦 Theme files are in: ${WP_DIR}`);
    console.log('🚀 Ready to upload to WordPress!');
}

function copyRecursively(src, dest) {
    if (!fs.existsSync(src)) return;
    
    const stats = fs.statSync(src);
    
    if (stats.isDirectory()) {
        if (!fs.existsSync(dest)) {
            fs.mkdirSync(dest, { recursive: true });
        }
        
        fs.readdirSync(src).forEach(item => {
            copyRecursively(path.join(src, item), path.join(dest, item));
        });
    } else {
        fs.copyFileSync(src, dest);
    }
}

function createMainTemplates() {
    // index.php - Main template
    const indexTemplate = `<?php
/**
 * Main template file
 * 
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 */

get_header(); ?>

<div class="container mx-auto px-4 py-12">
    <?php if (have_posts()) : ?>
        <?php while (have_posts()) : the_post(); ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class('mb-12'); ?>>
                <header class="entry-header mb-6">
                    <h1 class="font-merriweather font-bold text-3xl mb-4">
                        <a href="<?php the_permalink(); ?>" class="hover:text-cobalt">
                            <?php the_title(); ?>
                        </a>
                    </h1>
                    
                    <div class="text-sm text-muted-foreground">
                        <?php echo get_the_date(); ?> by <?php the_author(); ?>
                    </div>
                </header>

                <div class="entry-content">
                    <?php the_excerpt(); ?>
                    <a href="<?php the_permalink(); ?>" class="cta-button primary mt-4">
                        Read More
                    </a>
                </div>
            </article>
        <?php endwhile; ?>
        
        <?php the_posts_pagination(); ?>
    <?php else : ?>
        <p>No posts found.</p>
    <?php endif; ?>
</div>

<?php get_footer(); ?>`;

    // header.php
    const headerTemplate = `<!DOCTYPE html>
<html <?php language_attributes(); ?> dir="<?php echo is_rtl() ? 'rtl' : 'ltr'; ?>">
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    
    <!-- Preconnect to external resources -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://cdn.jsdelivr.net">
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Merriweather:wght@400;700&display=swap" rel="stylesheet">
    
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site">
    <header id="masthead" class="site-header">
        <nav class="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
            <div class="container mx-auto px-4">
                <div class="flex items-center justify-between h-16">
                    <div class="flex items-center space-x-4">
                        <a href="<?php echo home_url(); ?>" class="font-merriweather font-bold text-xl text-foreground hover:text-cobalt transition-colors">
                            CDLT Theory
                        </a>
                    </div>
                    
                    <div class="hidden md:flex items-center space-x-8">
                        <?php
                        wp_nav_menu(array(
                            'theme_location' => 'primary',
                            'container' => false,
                            'menu_class' => 'flex items-center space-x-6',
                            'fallback_cb' => false,
                        ));
                        ?>
                    </div>
                </div>
            </div>
        </nav>
    </header>

    <main id="primary" class="site-main">`;

    // footer.php
    const footerTemplate = `    </main>

    <footer id="colophon" class="site-footer bg-neutral-light border-t border-border mt-16">
        <div class="container mx-auto px-4 py-12">
            <div class="grid md:grid-cols-3 gap-8">
                <?php if (is_active_sidebar('footer-1')) : ?>
                    <div class="footer-widget-area">
                        <?php dynamic_sidebar('footer-1'); ?>
                    </div>
                <?php endif; ?>
                
                <?php if (is_active_sidebar('footer-2')) : ?>
                    <div class="footer-widget-area">
                        <?php dynamic_sidebar('footer-2'); ?>
                    </div>
                <?php endif; ?>
                
                <?php if (is_active_sidebar('footer-3')) : ?>
                    <div class="footer-widget-area">
                        <?php dynamic_sidebar('footer-3'); ?>
                    </div>
                <?php endif; ?>
            </div>
            
            <div class="border-t border-border pt-8 mt-8 text-center text-sm text-muted-foreground">
                <p>&copy; <?php echo date('Y'); ?> Roy Winter's Cubic-Diamond-Lattice Theory. All rights reserved.</p>
                <p>
                    <a href="https://orcid.org/0000-0000-0000-0000" target="_blank" rel="noopener" class="hover:text-cobalt">
                        ORCID iD
                    </a>
                    | Licensed under 
                    <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener" class="hover:text-cobalt">
                        CC BY-SA 4.0
                    </a>
                </p>
            </div>
        </div>
    </footer>
</div>

<?php wp_footer(); ?>
</body>
</html>`;

    fs.writeFileSync(path.join(WP_DIR, 'index.php'), indexTemplate);
    fs.writeFileSync(path.join(WP_DIR, 'header.php'), headerTemplate);
    fs.writeFileSync(path.join(WP_DIR, 'footer.php'), footerTemplate);
}

function createThemeConfig() {
    // Create screenshot.png placeholder
    const screenshotContent = `Theme screenshot placeholder - replace with actual screenshot`;
    fs.writeFileSync(path.join(WP_DIR, 'screenshot.txt'), screenshotContent);
    
    // Create README.txt for theme directory
    const readmeContent = `=== Roy Winter's Cubic-Diamond-Lattice Theory ===

Contributors: lovable-ai
Tags: physics, science, education, mathematics, research
Requires at least: 6.0
Tested up to: 6.4
Requires PHP: 7.4
Stable tag: 1.0.0
License: GPL v2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

A modern WordPress theme for Roy Winter's Cubic-Diamond-Lattice Theory of Everything.

== Description ==

This theme is specifically designed for presenting Roy Winter's Cubic-Diamond-Lattice Theory of Everything. Features include:

* Interactive 3D model displays using Three.js
* Mathematical equation rendering with MathJax
* Custom post types for Theory Pages, Courses, and Publications
* Advanced Custom Fields integration for easy content management
* Multilingual support (English/Hebrew) with RTL compatibility
* WCAG 2.2 AA accessibility compliance
* Responsive design optimized for academic content

== Installation ==

1. Upload the theme files to '/wp-content/themes/cdlt-theory/'
2. Activate the theme through the 'Appearance > Themes' menu in WordPress
3. Install the required plugins (see README-WP.txt for full list)
4. Configure the theme through 'Appearance > Customize'

== Required Plugins ==

* MathJax-LaTeX - For equation rendering
* Advanced Custom Fields (Pro) - For content management
* react-i18next-wp-helper - For multilingual support
* Three-D-Viewer - For 3D model display
* LifterLMS - For course management

See README-WP.txt for the complete plugin list and configuration instructions.

== Changelog ==

= 1.0.0 =
* Initial release
* Custom post types for Theory, Courses, Publications
* 3D model and equation shortcode support
* Multilingual and accessibility features
`;

    fs.writeFileSync(path.join(WP_DIR, 'readme.txt'), readmeContent);
}

// Run the build process
buildWordPressTheme().catch(console.error);