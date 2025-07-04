<?php
/**
 * Template for displaying pages
 */

get_header(); ?>

<div class="container mx-auto px-4 py-12">
    <?php while (have_posts()) : the_post(); ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
            <header class="entry-header mb-8">
                <h1 class="font-merriweather font-bold text-4xl mb-4">
                    <?php the_title(); ?>
                </h1>
                
                <?php if (has_post_thumbnail()) : ?>
                    <div class="mb-6">
                        <?php the_post_thumbnail('large', array('class' => 'w-full h-auto rounded-lg')); ?>
                    </div>
                <?php endif; ?>
            </header>

            <div class="entry-content prose prose-lg max-w-none">
                <?php the_content(); ?>
            </div>
        </article>
    <?php endwhile; ?>
</div>

<?php get_footer(); ?>