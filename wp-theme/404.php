<?php
/**
 * Template for displaying 404 pages (Not Found)
 */

get_header(); ?>

<div class="container mx-auto px-4 py-12 text-center">
    <div class="max-w-2xl mx-auto">
        <!-- Fun Einstein caricature placeholder -->
        <div class="mb-8">
            <div class="w-48 h-48 mx-auto bg-gradient-to-br from-neutral-light to-neutral-medium rounded-full flex items-center justify-center">
                <div class="text-6xl">🤔</div>
            </div>
        </div>
        
        <h1 class="font-merriweather font-bold text-4xl mb-4">
            Page Not Found
        </h1>
        
        <p class="text-xl text-muted-foreground mb-8">
            Even Einstein couldn't find this page! It seems like you've stumbled into a quantum uncertainty zone.
        </p>
        
        <!-- Search box -->
        <div class="mb-8">
            <?php get_search_form(); ?>
        </div>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="<?php echo home_url(); ?>" class="cta-button primary">
                Return Home
            </a>
            <a href="/theory/" class="cta-button secondary">
                Explore Theory
            </a>
        </div>
        
        <!-- Popular pages -->
        <div class="mt-12">
            <h2 class="font-merriweather font-bold text-2xl mb-6">Popular Pages</h2>
            <div class="grid md:grid-cols-2 gap-4">
                <?php
                $popular_pages = get_posts(array(
                    'post_type' => array('theory', 'post'),
                    'posts_per_page' => 4,
                    'meta_key' => 'post_views_count',
                    'orderby' => 'meta_value_num',
                    'order' => 'DESC'
                ));
                
                if (empty($popular_pages)) {
                    $popular_pages = get_posts(array(
                        'post_type' => array('theory', 'post'),
                        'posts_per_page' => 4,
                    ));
                }
                
                foreach ($popular_pages as $page): ?>
                    <div class="theory-card text-left">
                        <h3 class="font-merriweather font-bold text-lg mb-2">
                            <a href="<?php echo get_permalink($page->ID); ?>" class="hover:text-cobalt transition-colors">
                                <?php echo $page->post_title; ?>
                            </a>
                        </h3>
                        <p class="text-muted-foreground text-sm">
                            <?php echo wp_trim_words($page->post_excerpt ?: $page->post_content, 15); ?>
                        </p>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</div>

<?php get_footer(); ?>