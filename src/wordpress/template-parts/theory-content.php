<?php
/**
 * Template part for displaying theory page content
 */

$theory_equation = get_field('theory_equation');
$theory_3d_model = get_field('theory_3d_model');
$theory_model_caption = get_field('theory_model_caption');
?>

<article id="post-<?php the_ID(); ?>" <?php post_class('theory-page-content'); ?>>
    <header class="entry-header mb-12">
        <nav class="mb-8">
            <ol class="flex items-center space-x-2 text-sm text-muted-foreground">
                <li><a href="<?php echo get_post_type_archive_link('theory'); ?>" class="hover:text-cobalt">Theory Explorer</a></li>
                <li>/</li>
                <li class="text-foreground"><?php the_title(); ?></li>
            </ol>
        </nav>

        <h1 class="font-merriweather font-bold text-4xl md:text-5xl mb-6">
            <?php the_title(); ?>
        </h1>
        
        <?php if (has_excerpt()): ?>
            <p class="text-xl text-muted-foreground max-w-4xl">
                <?php the_excerpt(); ?>
            </p>
        <?php endif; ?>
    </header>

    <div class="entry-content">
        <div class="grid lg:grid-cols-2 gap-12 mb-16">
            <div class="space-y-8">
                <?php if ($theory_equation): ?>
                    <div class="theory-card">
                        <h2 class="font-merriweather font-semibold text-2xl mb-4 text-cobalt">
                            Main Equation
                        </h2>
                        <?php echo do_shortcode('[equation display="true"]' . esc_html($theory_equation) . '[/equation]'); ?>
                    </div>
                <?php endif; ?>
                
                <div class="theory-card">
                    <?php the_content(); ?>
                </div>
            </div>

            <div class="space-y-8">
                <?php if ($theory_3d_model): ?>
                    <?php echo do_shortcode('[3d-model src="' . esc_attr($theory_3d_model) . '" caption="' . esc_attr($theory_model_caption) . '" autorotate="true"]'); ?>
                <?php endif; ?>
                
                <?php if (is_active_sidebar('theory-sidebar')): ?>
                    <aside class="theory-sidebar">
                        <?php dynamic_sidebar('theory-sidebar'); ?>
                    </aside>
                <?php endif; ?>
            </div>
        </div>
    </div>

    <footer class="entry-footer">
        <?php
        // Get next and previous theory pages
        $prev_post = get_previous_post(true, '', 'theory_category');
        $next_post = get_next_post(true, '', 'theory_category');
        ?>
        
        <div class="flex justify-between items-center">
            <?php if ($prev_post): ?>
                <a href="<?php echo get_permalink($prev_post->ID); ?>" class="cta-button secondary">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                    Previous: <?php echo get_the_title($prev_post->ID); ?>
                </a>
            <?php endif; ?>
            
            <?php if ($next_post): ?>
                <a href="<?php echo get_permalink($next_post->ID); ?>" class="cta-button primary">
                    Next: <?php echo get_the_title($next_post->ID); ?>
                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </a>
            <?php endif; ?>
        </div>
    </footer>
</article>