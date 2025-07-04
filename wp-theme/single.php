<?php
/**
 * Template for displaying single posts
 */

get_header(); ?>

<div class="container mx-auto px-4 py-12">
    <?php while (have_posts()) : the_post(); ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class('max-w-4xl mx-auto'); ?>>
            <header class="entry-header mb-8">
                <h1 class="font-merriweather font-bold text-4xl mb-4">
                    <?php the_title(); ?>
                </h1>
                
                <div class="text-sm text-muted-foreground mb-6">
                    <time datetime="<?php echo get_the_date('c'); ?>">
                        <?php echo get_the_date(); ?>
                    </time>
                    by 
                    <span class="font-medium"><?php the_author(); ?></span>
                    <?php if (has_category()) : ?>
                        in <?php the_category(', '); ?>
                    <?php endif; ?>
                </div>
                
                <?php if (has_post_thumbnail()) : ?>
                    <div class="mb-8">
                        <?php the_post_thumbnail('large', array('class' => 'w-full h-auto rounded-lg')); ?>
                    </div>
                <?php endif; ?>
            </header>

            <div class="entry-content prose prose-lg max-w-none">
                <?php the_content(); ?>
            </div>
            
            <footer class="entry-footer mt-12 pt-8 border-t border-border">
                <?php if (has_tag()) : ?>
                    <div class="mb-4">
                        <strong>Tags:</strong> <?php the_tags('', ', '); ?>
                    </div>
                <?php endif; ?>
                
                <div class="flex justify-between">
                    <div>
                        <?php previous_post_link('%link', '← Previous: %title', true); ?>
                    </div>
                    <div>
                        <?php next_post_link('%link', 'Next: %title →', true); ?>
                    </div>
                </div>
            </footer>
        </article>
    <?php endwhile; ?>
</div>

<?php get_footer(); ?>