<?php
/**
 * Template part for displaying theory content
 */

$equation = get_post_meta(get_the_ID(), '_theory_equation', true);
$model_src = get_post_meta(get_the_ID(), '_theory_3d_model', true);
$model_caption = get_post_meta(get_the_ID(), '_theory_3d_model_caption', true);
?>

<article id="post-<?php the_ID(); ?>" <?php post_class('theory-article'); ?>>
    <header class="entry-header text-center mb-12">
        <nav class="breadcrumb mb-6 text-sm">
            <a href="<?php echo home_url(); ?>" class="text-muted-foreground hover:text-cobalt">Home</a>
            <span class="mx-2 text-muted-foreground">→</span>
            <a href="<?php echo get_post_type_archive_link('theory'); ?>" class="text-muted-foreground hover:text-cobalt">Theory Explorer</a>
            <span class="mx-2 text-muted-foreground">→</span>
            <span class="text-foreground"><?php the_title(); ?></span>
        </nav>
        
        <h1 class="font-merriweather font-bold text-4xl md:text-5xl mb-6">
            <?php the_title(); ?>
        </h1>
        
        <?php if (has_excerpt()): ?>
            <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
                <?php the_excerpt(); ?>
            </p>
        <?php endif; ?>
    </header>

    <div class="entry-content max-w-4xl mx-auto">
        <div class="prose prose-lg mx-auto mb-12">
            <?php the_content(); ?>
        </div>
        
        <?php if (!empty($equation)): ?>
            <div class="equation-section mb-12">
                <h2 class="font-merriweather font-bold text-2xl mb-6 text-center">Mathematical Framework</h2>
                <div class="equation-block">
                    <?php echo wp_kses_post($equation); ?>
                </div>
            </div>
        <?php endif; ?>
        
        <?php if (!empty($model_src)): ?>
            <div class="model-section mb-12">
                <h2 class="font-merriweather font-bold text-2xl mb-6 text-center">3D Visualization</h2>
                <?php echo do_shortcode('[3d-viewer src="' . esc_url($model_src) . '" caption="' . esc_attr($model_caption) . '" height="500px"]'); ?>
            </div>
        <?php endif; ?>
        
        <div class="key-takeaways bg-neutral-light/50 rounded-lg p-8 mb-12">
            <h2 class="font-merriweather font-bold text-xl mb-4">Key Takeaways</h2>
            <ul class="space-y-2 text-muted-foreground">
                <li>• Understanding the discrete nature of space-time lattice structures</li>
                <li>• Mathematical relationships governing particle interactions</li>
                <li>• Implications for unified field theory development</li>
                <li>• Testable predictions and experimental considerations</li>
            </ul>
        </div>
    </div>

    <footer class="entry-footer">
        <div class="max-w-4xl mx-auto flex justify-between items-center pt-8 border-t border-border">
            <?php
            $prev_post = get_previous_post();
            $next_post = get_next_post();
            ?>
            
            <div class="prev-post">
                <?php if ($prev_post): ?>
                    <a href="<?php echo get_permalink($prev_post); ?>" class="cta-button secondary">
                        ← <?php echo get_the_title($prev_post); ?>
                    </a>
                <?php endif; ?>
            </div>
            
            <div class="next-post">
                <?php if ($next_post): ?>
                    <a href="<?php echo get_permalink($next_post); ?>" class="cta-button secondary">
                        <?php echo get_the_title($next_post); ?> →
                    </a>
                <?php endif; ?>
            </div>
        </div>
    </footer>
</article>