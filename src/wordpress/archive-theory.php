<?php
/**
 * Template for displaying theory archive (Theory Explorer)
 */

get_header(); ?>

<div class="container mx-auto px-4 py-12">
    <div class="text-center mb-16">
        <h1 class="font-merriweather font-bold text-4xl md:text-5xl mb-6">
            Theory Explorer
        </h1>
        <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dive deep into the mathematical foundations and physical principles of the 
            Cubic-Diamond-Lattice Theory. Each section builds upon the previous, 
            creating a comprehensive understanding of this revolutionary approach to physics.
        </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <?php if (have_posts()) : ?>
            <?php while (have_posts()) : the_post(); ?>
                <article class="theory-card hover:shadow-lg transition-all duration-300 group">
                    <header class="text-center p-6">
                        <?php if (has_post_thumbnail()): ?>
                            <div class="w-16 h-16 rounded-full bg-neutral-light flex items-center justify-center mx-auto mb-4 text-cobalt group-hover:scale-110 transition-transform duration-300">
                                <?php the_post_thumbnail('thumbnail', array('class' => 'w-8 h-8')); ?>
                            </div>
                        <?php endif; ?>
                        
                        <h2 class="font-merriweather text-xl mb-2">
                            <a href="<?php the_permalink(); ?>" class="hover:text-cobalt">
                                <?php the_title(); ?>
                            </a>
                        </h2>
                    </header>
                    
                    <div class="text-center p-6 pt-0">
                        <?php if (has_excerpt()): ?>
                            <p class="text-muted-foreground mb-6">
                                <?php the_excerpt(); ?>
                            </p>
                        <?php endif; ?>
                        
                        <a href="<?php the_permalink(); ?>" class="cta-button primary w-full">
                            Explore <?php the_title(); ?>
                            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                </article>
            <?php endwhile; ?>
        <?php endif; ?>
    </div>

    <div class="text-center">
        <h2 class="font-merriweather font-bold text-2xl mb-6">
            Ready for More?
        </h2>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="<?php echo home_url('/lab'); ?>" class="cta-button secondary">
                Interactive Lab
            </a>
            <a href="<?php echo get_post_type_archive_link('publication'); ?>" class="cta-button secondary">
                Research Papers
            </a>
            <a href="<?php echo get_post_type_archive_link('course'); ?>" class="cta-button secondary">
                Structured Courses
            </a>
        </div>
    </div>
</div>

<?php get_footer(); ?>