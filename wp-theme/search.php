<?php
/**
 * Template for displaying search results
 */

get_header(); ?>

<div class="container mx-auto px-4 py-12">
    <header class="mb-8">
        <h1 class="font-merriweather font-bold text-3xl mb-4">
            <?php printf(__('Search Results for: %s', 'cdlt-theme'), '<span class="text-cobalt">' . get_search_query() . '</span>'); ?>
        </h1>
        <p class="text-muted-foreground">
            <?php printf(__('Found %s results', 'cdlt-theme'), $wp_query->found_posts); ?>
        </p>
    </header>

    <?php if (have_posts()) : ?>
        <div class="space-y-8">
            <?php while (have_posts()) : the_post(); ?>
                <article id="post-<?php the_ID(); ?>" <?php post_class('theory-card'); ?>>
                    <header class="mb-4">
                        <h2 class="font-merriweather font-bold text-xl mb-2">
                            <a href="<?php the_permalink(); ?>" class="hover:text-cobalt transition-colors">
                                <?php the_title(); ?>
                            </a>
                        </h2>
                        
                        <div class="text-sm text-muted-foreground mb-3">
                            <?php echo get_post_type_object(get_post_type())->labels->singular_name; ?> | 
                            <?php echo get_the_date(); ?>
                            <?php if (get_post_type() === 'post') : ?>
                                by <?php the_author(); ?>
                            <?php endif; ?>
                        </div>
                    </header>

                    <div class="mb-4">
                        <?php the_excerpt(); ?>
                    </div>
                    
                    <a href="<?php the_permalink(); ?>" class="text-cobalt hover:text-cobalt-dark font-medium">
                        Read more →
                    </a>
                </article>
            <?php endwhile; ?>
        </div>
        
        <div class="mt-12">
            <?php the_posts_pagination(array(
                'prev_text' => '← Previous',
                'next_text' => 'Next →',
            )); ?>
        </div>
        
    <?php else : ?>
        <div class="text-center py-12">
            <h2 class="font-merriweather font-bold text-2xl mb-4">No Results Found</h2>
            <p class="text-muted-foreground mb-8">
                Sorry, but nothing matched your search terms. Please try again with different keywords.
            </p>
            
            <div class="max-w-md mx-auto mb-8">
                <?php get_search_form(); ?>
            </div>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="<?php echo home_url(); ?>" class="cta-button primary">
                    Return Home
                </a>
                <a href="/theory/" class="cta-button secondary">
                    Browse Theory
                </a>
            </div>
        </div>
    <?php endif; ?>
</div>

<?php get_footer(); ?>