<?php
/**
 * Template for displaying the homepage
 */

get_header(); ?>

<div class="min-h-screen">
    <!-- Hero Section -->
    <section class="hero-gradient py-20">
        <div class="container mx-auto px-4 text-center">
            <h1 class="font-merriweather font-bold text-4xl md:text-6xl mb-6 text-foreground">
                <?php echo get_theme_mod('hero_title', 'Cubic-Diamond-Lattice Theory of Everything'); ?>
            </h1>
            <p class="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                <?php echo get_theme_mod('hero_subtitle', 'A revolutionary approach to understanding the fundamental structure of spacetime through discrete lattice mechanics.'); ?>
            </p>
            
            <!-- 3D Lattice Placeholder -->
            <div class="interactive-3d-container w-full max-w-2xl mx-auto mb-8 h-64">
                <div class="w-full h-full bg-gradient-to-br from-background to-neutral-light rounded-lg flex items-center justify-center">
                    <div class="animate-pulse text-cobalt">
                        <div class="w-32 h-32 border-4 border-cobalt rounded-lg animate-rotate-slow"></div>
                    </div>
                </div>
            </div>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/theory/" class="cta-button primary">
                    Start Learning
                </a>
                <a href="/publications/" class="cta-button secondary">
                    Download White Paper
                </a>
            </div>
        </div>
    </section>
    
    <!-- Theory Overview -->
    <section class="py-16">
        <div class="container mx-auto px-4">
            <h2 class="font-merriweather font-bold text-3xl text-center mb-12">
                Theory Explorer
            </h2>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <?php
                $theory_pages = get_posts(array(
                    'post_type' => 'theory',
                    'posts_per_page' => 6,
                    'post_status' => 'publish'
                ));
                
                foreach ($theory_pages as $theory_page): ?>
                    <div class="theory-card">
                        <h3 class="font-merriweather font-bold text-xl mb-3">
                            <a href="<?php echo get_permalink($theory_page->ID); ?>" class="hover:text-cobalt transition-colors">
                                <?php echo $theory_page->post_title; ?>
                            </a>
                        </h3>
                        <p class="text-muted-foreground mb-4">
                            <?php echo wp_trim_words($theory_page->post_excerpt, 20); ?>
                        </p>
                        <a href="<?php echo get_permalink($theory_page->ID); ?>" class="text-cobalt hover:text-cobalt-dark font-medium">
                            Learn more →
                        </a>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>
</div>

<?php get_footer(); ?>