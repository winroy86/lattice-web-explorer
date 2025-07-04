    </main>

    <footer id="colophon" class="site-footer bg-neutral-light border-t border-border mt-16">
        <div class="container mx-auto px-4 py-12">
            <div class="grid md:grid-cols-3 gap-8">
                <?php if (is_active_sidebar('footer-1')) : ?>
                    <div class="footer-widget-area">
                        <?php dynamic_sidebar('footer-1'); ?>
                    </div>
                <?php endif; ?>
                
                <?php if (is_active_sidebar('footer-2')) : ?>
                    <div class="footer-widget-area">
                        <?php dynamic_sidebar('footer-2'); ?>
                    </div>
                <?php endif; ?>
                
                <?php if (is_active_sidebar('footer-3')) : ?>
                    <div class="footer-widget-area">
                        <?php dynamic_sidebar('footer-3'); ?>
                    </div>
                <?php endif; ?>
            </div>
            
            <div class="border-t border-border pt-8 mt-8 text-center text-sm text-muted-foreground">
                <p>&copy; <?php echo date('Y'); ?> Roy Winter's Cubic-Diamond-Lattice Theory. All rights reserved.</p>
                <p>
                    <a href="https://orcid.org/0000-0000-0000-0000" target="_blank" rel="noopener" class="hover:text-cobalt">
                        ORCID iD
                    </a>
                    | Licensed under 
                    <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener" class="hover:text-cobalt">
                        CC BY-SA 4.0
                    </a>
                </p>
            </div>
        </div>
    </footer>
</div>

<?php wp_footer(); ?>
</body>
</html>