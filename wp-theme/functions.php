<?php
/**
 * Roy Winter's Cubic-Diamond-Lattice Theory WordPress Theme Functions
 * 
 * Core theme functionality including custom post types, shortcodes,
 * and WordPress integration for physics content management.
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Theme Setup
 */
function cdlt_theme_setup() {
    // Add theme support for various features
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
    add_theme_support('custom-logo');
    add_theme_support('editor-styles');
    
    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Navigation', 'cdlt-theme'),
        'footer' => __('Footer Navigation', 'cdlt-theme'),
        'theory-nav' => __('Theory Section Navigation', 'cdlt-theme'),
    ));
    
    // Add editor styles
    add_editor_style('assets/index.css');
}
add_action('after_setup_theme', 'cdlt_theme_setup');

/**
 * Enqueue Scripts and Styles
 */
function cdlt_enqueue_assets() {
    // Main stylesheet
    wp_enqueue_style('cdlt-style', get_stylesheet_uri(), array(), '1.0.0');
    
    // MathJax for equation rendering
    wp_enqueue_script('mathjax', 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js', array(), '3.0', true);
    
    // MathJax configuration
    wp_add_inline_script('mathjax', '
        window.MathJax = {
            tex: {
                inlineMath: [["\\\\(", "\\\\)"]],
                displayMath: [["\\\\[", "\\\\]"]],
                processEscapes: true,
                processEnvironments: true
            },
            options: {
                skipHtmlTags: ["script", "noscript", "style", "textarea", "pre", "code"],
                ignoreHtmlClass: "tex2jax_ignore",
                processHtmlClass: "tex2jax_process"
            }
        };
    ', 'before');
    
    // Three.js for 3D models
    wp_enqueue_script('threejs', 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.min.js', array(), '0.160.0', true);
    wp_enqueue_script('threejs-controls', 'https://cdn.jsdelivr.net/npm/three@0.160.0/examples/js/controls/OrbitControls.js', array('threejs'), '0.160.0', true);
    wp_enqueue_script('threejs-loader', 'https://cdn.jsdelivr.net/npm/three@0.160.0/examples/js/loaders/GLTFLoader.js', array('threejs'), '0.160.0', true);
}
add_action('wp_enqueue_scripts', 'cdlt_enqueue_assets');

/**
 * Register Custom Post Types
 */
function cdlt_register_post_types() {
    // Theory Pages
    register_post_type('theory', array(
        'labels' => array(
            'name' => __('Theory Pages', 'cdlt-theme'),
            'singular_name' => __('Theory Page', 'cdlt-theme'),
            'add_new' => __('Add New Theory Page', 'cdlt-theme'),
            'add_new_item' => __('Add New Theory Page', 'cdlt-theme'),
            'edit_item' => __('Edit Theory Page', 'cdlt-theme'),
            'new_item' => __('New Theory Page', 'cdlt-theme'),
            'view_item' => __('View Theory Page', 'cdlt-theme'),
            'search_items' => __('Search Theory Pages', 'cdlt-theme'),
        ),
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-chart-line',
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields', 'page-attributes'),
        'rewrite' => array('slug' => 'theory'),
        'show_in_rest' => true,
    ));
    
    // Courses
    register_post_type('course', array(
        'labels' => array(
            'name' => __('Courses', 'cdlt-theme'),
            'singular_name' => __('Course', 'cdlt-theme'),
            'add_new' => __('Add New Course', 'cdlt-theme'),
            'add_new_item' => __('Add New Course', 'cdlt-theme'),
            'edit_item' => __('Edit Course', 'cdlt-theme'),
        ),
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-welcome-learn-more',
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
        'rewrite' => array('slug' => 'courses'),
        'show_in_rest' => true,
    ));
    
    // Lessons (child of courses)
    register_post_type('lesson', array(
        'labels' => array(
            'name' => __('Lessons', 'cdlt-theme'),
            'singular_name' => __('Lesson', 'cdlt-theme'),
            'add_new' => __('Add New Lesson', 'cdlt-theme'),
        ),
        'public' => true,
        'hierarchical' => true,
        'menu_icon' => 'dashicons-book-alt',
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields', 'page-attributes'),
        'rewrite' => array('slug' => 'lessons'),
        'show_in_rest' => true,
    ));
    
    // Publications
    register_post_type('publication', array(
        'labels' => array(
            'name' => __('Publications', 'cdlt-theme'),
            'singular_name' => __('Publication', 'cdlt-theme'),
            'add_new' => __('Add New Publication', 'cdlt-theme'),
        ),
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-media-document',
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
        'rewrite' => array('slug' => 'publications'),
        'show_in_rest' => true,
    ));
}
add_action('init', 'cdlt_register_post_types');

/**
 * Register Widget Areas
 */
function cdlt_register_widgets() {
    register_sidebar(array(
        'name' => __('Theory Sidebar', 'cdlt-theme'),
        'id' => 'theory-sidebar',
        'description' => __('Sidebar for theory explorer pages', 'cdlt-theme'),
        'before_widget' => '<div id="%1$s" class="widget %2$s mb-6">',
        'after_widget' => '</div>',
        'before_title' => '<h3 class="widget-title font-merriweather font-bold text-lg mb-4">',
        'after_title' => '</h3>',
    ));
    
    // Footer widget areas
    for ($i = 1; $i <= 3; $i++) {
        register_sidebar(array(
            'name' => sprintf(__('Footer Widget Area %d', 'cdlt-theme'), $i),
            'id' => 'footer-' . $i,
            'description' => sprintf(__('Footer widget area %d', 'cdlt-theme'), $i),
            'before_widget' => '<div id="%1$s" class="widget %2$s mb-6">',
            'after_widget' => '</div>',
            'before_title' => '<h4 class="widget-title font-merriweather font-bold text-sm mb-3">',
            'after_title' => '</h4>',
        ));
    }
    
    register_sidebar(array(
        'name' => __('Community Sidebar', 'cdlt-theme'),
        'id' => 'community-sidebar',
        'description' => __('Sidebar for community page', 'cdlt-theme'),
        'before_widget' => '<div id="%1$s" class="widget %2$s mb-6">',
        'after_widget' => '</div>',
        'before_title' => '<h3 class="widget-title font-merriweather font-bold text-lg mb-4">',
        'after_title' => '</h3>',
    ));
}
add_action('widgets_init', 'cdlt_register_widgets');

/**
 * Custom Shortcodes
 */

// Equation Block Shortcode
function cdlt_equation_shortcode($atts, $content = null) {
    $atts = shortcode_atts(array(
        'type' => 'display', // 'inline' or 'display'
    ), $atts);
    
    $wrapper_class = 'equation-block';
    if ($atts['type'] === 'inline') {
        $wrapper_class .= ' inline';
    }
    
    return '<div class="' . $wrapper_class . '">' . do_shortcode($content) . '</div>';
}
add_shortcode('equation', 'cdlt_equation_shortcode');

// 3D Model Viewer Shortcode
function cdlt_3d_viewer_shortcode($atts) {
    $atts = shortcode_atts(array(
        'src' => '',
        'width' => '100%',
        'height' => '400px',
        'caption' => '',
        'controls' => 'true',
    ), $atts);
    
    if (empty($atts['src'])) {
        return '<p class="error">3D Viewer: No model source specified.</p>';
    }
    
    $id = 'viewer-' . uniqid();
    $controls_attr = $atts['controls'] === 'true' ? 'true' : 'false';
    
    $html = '<div class="interactive-3d-container" style="width: ' . esc_attr($atts['width']) . '; height: ' . esc_attr($atts['height']) . ';">';
    $html .= '<div id="' . esc_attr($id) . '" class="threejs-viewer" data-src="' . esc_url($atts['src']) . '" data-controls="' . $controls_attr . '"></div>';
    
    if (!empty($atts['caption'])) {
        $html .= '<p class="caption text-center mt-2 text-sm text-muted-foreground">' . esc_html($atts['caption']) . '</p>';
    }
    
    $html .= '</div>';
    
    // Add inline script to initialize the viewer
    $html .= '<script>
    document.addEventListener("DOMContentLoaded", function() {
        const container = document.getElementById("' . esc_js($id) . '");
        if (container && window.THREE) {
            initThreeJSViewer(container);
        }
    });
    </script>';
    
    return $html;
}
add_shortcode('3d-viewer', 'cdlt_3d_viewer_shortcode');

// CTA Button Shortcode
function cdlt_cta_button_shortcode($atts, $content = null) {
    $atts = shortcode_atts(array(
        'variant' => 'primary',
        'href' => '#',
        'target' => '_self',
        'class' => '',
    ), $atts);
    
    $classes = 'cta-button ' . esc_attr($atts['variant']);
    if (!empty($atts['class'])) {
        $classes .= ' ' . esc_attr($atts['class']);
    }
    
    return '<a href="' . esc_url($atts['href']) . '" target="' . esc_attr($atts['target']) . '" class="' . $classes . '">' . do_shortcode($content) . '</a>';
}
add_shortcode('cta-button', 'cdlt_cta_button_shortcode');

/**
 * Add Custom Fields Support for Theory Pages
 */
function cdlt_add_theory_meta_boxes() {
    add_meta_box(
        'theory-equation',
        __('LaTeX Equation', 'cdlt-theme'),
        'cdlt_theory_equation_callback',
        'theory',
        'normal',
        'high'
    );
    
    add_meta_box(
        'theory-3d-model',
        __('3D Model', 'cdlt-theme'),
        'cdlt_theory_3d_model_callback',
        'theory',
        'side',
        'default'
    );
}
add_action('add_meta_boxes', 'cdlt_add_theory_meta_boxes');

function cdlt_theory_equation_callback($post) {
    wp_nonce_field('cdlt_save_theory_meta', 'cdlt_theory_meta_nonce');
    $equation = get_post_meta($post->ID, '_theory_equation', true);
    
    echo '<p><label for="theory_equation">' . __('Enter LaTeX equation (use \\[ \\] for display math):', 'cdlt-theme') . '</label></p>';
    echo '<textarea id="theory_equation" name="theory_equation" rows="6" cols="80" style="width: 100%; font-family: monospace;">' . esc_textarea($equation) . '</textarea>';
    echo '<p class="description">' . __('Example: \\[ E = mc^2 \\] or \\( \\psi(x,t) = Ae^{i(kx-\\omega t)} \\)', 'cdlt-theme') . '</p>';
}

function cdlt_theory_3d_model_callback($post) {
    $model_src = get_post_meta($post->ID, '_theory_3d_model', true);
    $model_caption = get_post_meta($post->ID, '_theory_3d_model_caption', true);
    
    echo '<p><label for="theory_3d_model">' . __('3D Model URL:', 'cdlt-theme') . '</label></p>';
    echo '<input type="url" id="theory_3d_model" name="theory_3d_model" value="' . esc_attr($model_src) . '" style="width: 100%;" />';
    echo '<p class="description">' . __('Upload .glb file to Media Library and paste URL here', 'cdlt-theme') . '</p>';
    
    echo '<p><label for="theory_3d_model_caption">' . __('Model Caption:', 'cdlt-theme') . '</label></p>';
    echo '<input type="text" id="theory_3d_model_caption" name="theory_3d_model_caption" value="' . esc_attr($model_caption) . '" style="width: 100%;" />';
}

function cdlt_save_theory_meta($post_id) {
    if (!isset($_POST['cdlt_theory_meta_nonce']) || !wp_verify_nonce($_POST['cdlt_theory_meta_nonce'], 'cdlt_save_theory_meta')) {
        return;
    }
    
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }
    
    if (!current_user_can('edit_post', $post_id)) {
        return;
    }
    
    if (isset($_POST['theory_equation'])) {
        update_post_meta($post_id, '_theory_equation', sanitize_textarea_field($_POST['theory_equation']));
    }
    
    if (isset($_POST['theory_3d_model'])) {
        update_post_meta($post_id, '_theory_3d_model', esc_url_raw($_POST['theory_3d_model']));
    }
    
    if (isset($_POST['theory_3d_model_caption'])) {
        update_post_meta($post_id, '_theory_3d_model_caption', sanitize_text_field($_POST['theory_3d_model_caption']));
    }
}
add_action('save_post', 'cdlt_save_theory_meta');

/**
 * Add Three.js Viewer JavaScript
 */
function cdlt_add_threejs_viewer_script() {
    ?>
    <script>
    function initThreeJSViewer(container) {
        const src = container.dataset.src;
        const hasControls = container.dataset.controls === 'true';
        
        // Create scene, camera, renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        
        renderer.setSize(container.offsetWidth, container.offsetHeight);
        renderer.setClearColor(0x000000, 0);
        container.appendChild(renderer.domElement);
        
        // Add lighting
        const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
        scene.add(ambientLight);
        
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(1, 1, 1);
        scene.add(directionalLight);
        
        // Load model
        const loader = new THREE.GLTFLoader();
        loader.load(src, function(gltf) {
            scene.add(gltf.scene);
            
            // Center and scale the model
            const box = new THREE.Box3().setFromObject(gltf.scene);
            const center = box.getCenter(new THREE.Vector3());
            const size = box.getSize(new THREE.Vector3());
            
            const maxDim = Math.max(size.x, size.y, size.z);
            const scale = 2 / maxDim;
            gltf.scene.scale.multiplyScalar(scale);
            gltf.scene.position.sub(center.multiplyScalar(scale));
            
            camera.position.z = 3;
            
            // Add controls if enabled
            if (hasControls && window.THREE.OrbitControls) {
                const controls = new THREE.OrbitControls(camera, renderer.domElement);
                controls.enableDamping = true;
                controls.dampingFactor = 0.05;
                
                function animate() {
                    requestAnimationFrame(animate);
                    controls.update();
                    renderer.render(scene, camera);
                }
                animate();
            } else {
                // Simple rotation animation
                function animate() {
                    requestAnimationFrame(animate);
                    gltf.scene.rotation.y += 0.005;
                    renderer.render(scene, camera);
                }
                animate();
            }
        }, undefined, function(error) {
            console.error('Error loading 3D model:', error);
            container.innerHTML = '<p class="error">Failed to load 3D model. Please check the file path.</p>';
        });
        
        // Handle resize
        function handleResize() {
            camera.aspect = container.offsetWidth / container.offsetHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.offsetWidth, container.offsetHeight);
        }
        
        window.addEventListener('resize', handleResize);
    }
    </script>
    <?php
}
add_action('wp_footer', 'cdlt_add_threejs_viewer_script');

/**
 * Customize TinyMCE Editor for Theory Pages
 */
function cdlt_customize_tinymce($init_array) {
    global $post;
    
    if (isset($post) && $post->post_type === 'theory') {
        $init_array['body_class'] = 'theory-content';
    }
    
    return $init_array;
}
add_filter('tiny_mce_before_init', 'cdlt_customize_tinymce');

/**
 * Add custom styles to admin
 */
function cdlt_admin_styles() {
    echo '<style>
    .post-type-theory .editor-post-title__input {
        font-family: "Merriweather", serif !important;
    }
    
    .acf-field[data-name="theory_equation"] textarea,
    #theory_equation {
        font-family: "JetBrains Mono", "Courier New", monospace !important;
        font-size: 14px;
        line-height: 1.5;
    }
    
    .theory-content {
        font-family: "Inter", sans-serif;
        line-height: 1.6;
    }
    </style>';
}
add_action('admin_head', 'cdlt_admin_styles');

/**
 * Filter content to automatically process equations
 */
function cdlt_process_equations($content) {
    // Auto-wrap LaTeX equations that aren't already in shortcodes
    $content = preg_replace('/\\\\\[(.*?)\\\\\]/s', '[equation type="display"]\\\\[$1\\\\][/equation]', $content);
    $content = preg_replace('/\\\\\((.*?)\\\\\)/', '[equation type="inline"]\\\\($1\\\\)[/equation]', $content);
    
    return $content;
}
add_filter('the_content', 'cdlt_process_equations');

/**
 * Theme customizer options
 */
function cdlt_customize_register($wp_customize) {
    // Colors section
    $wp_customize->add_section('cdlt_colors', array(
        'title' => __('CDLT Theme Colors', 'cdlt-theme'),
        'priority' => 30,
    ));
    
    $wp_customize->add_setting('cobalt_color', array(
        'default' => '#0066ff',
        'sanitize_callback' => 'sanitize_hex_color',
    ));
    
    $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'cobalt_color', array(
        'label' => __('Cobalt Accent Color', 'cdlt-theme'),
        'section' => 'cdlt_colors',
    )));
}
add_action('customize_register', 'cdlt_customize_register');

/**
 * Output customizer CSS
 */
function cdlt_customizer_css() {
    $cobalt_color = get_theme_mod('cobalt_color', '#0066ff');
    ?>
    <style type="text/css">
    :root {
        --cobalt: <?php echo esc_html($cobalt_color); ?>;
    }
    </style>
    <?php
}
add_action('wp_head', 'cdlt_customizer_css');
?>