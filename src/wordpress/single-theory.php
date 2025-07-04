<?php
/**
 * Template for displaying single theory pages
 */

get_header(); ?>

<div class="container mx-auto px-4 py-12">
    <?php while (have_posts()) : the_post(); ?>
        <?php get_template_part('template-parts/theory', 'content'); ?>
    <?php endwhile; ?>
</div>

<?php get_footer(); ?>