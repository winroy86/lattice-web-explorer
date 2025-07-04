<?php
/**
 * Custom search form template
 */
?>

<form role="search" method="get" class="search-form" action="<?php echo home_url('/'); ?>">
    <div class="flex">
        <label class="sr-only" for="s"><?php _e('Search for:', 'cdlt-theme'); ?></label>
        <input 
            type="search" 
            class="flex-1 px-4 py-2 border border-border rounded-l-lg focus:ring-2 focus:ring-cobalt focus:border-cobalt outline-none" 
            placeholder="<?php _e('Search theory, courses, publications...', 'cdlt-theme'); ?>" 
            value="<?php echo get_search_query(); ?>" 
            name="s" 
            id="s" 
        />
        <button 
            type="submit" 
            class="px-6 py-2 bg-cobalt text-white rounded-r-lg hover:bg-cobalt-dark transition-colors"
        >
            <?php _e('Search', 'cdlt-theme'); ?>
        </button>
    </div>
</form>