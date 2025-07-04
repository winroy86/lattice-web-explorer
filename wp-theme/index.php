<?php
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

<?php get_footer(); ?>