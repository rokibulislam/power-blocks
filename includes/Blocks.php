<?php
namespace PowerBlocks;

/**
 * Blocks
 */
class Blocks {

    function __construct() {
    	add_action( 'enqueue_block_assets', array( $this, 'frontend_assets' ) );
    	add_filter( 'block_categories', array( $this, 'register_block_category' ), 10, 2 );
		add_action( 'enqueue_block_editor_assets', array( $this, 'editor_assets' ) );
		add_action('wp_enqueue_scripts', array(__CLASS__, 'enqueue_scripts'));	
		if( is_admin() ){
			add_action('wp_ajax_pb_mailchimp_block_save_key', array($this, 'save_key'));
			add_action('wp_ajax_nopriv_pb_mailchimp_block_save_key', array($this, 'save_key'));
		}
    }

    /**
	 * Register Gutenberg block category
	 *
	 * @param array  $categories Block categories.
	 * @param object $post Post object.
	 *
	 * @since 0.1.0
	 */
	function register_block_category( $categories, $post ) {
		return array_merge( $categories, array(
				array(
					'slug'  => 'power-blocks',
					'title' => __( 'Power Blocks', 'power-blocks' ),
				),
			)
		);
	}

    /**
     * Enqueue Gutenberg block assets for both frontend + backend.
     *
     * @uses {wp-editor} for WP editor styles.
     * @since 0.1.0
     */
    function frontend_assets() { // phpcs:ignore
    	// Styles.
    	wp_enqueue_style(
    		'powerblocks-style-css', // Handle.
    		plugins_url( 'dist/blocks.style.build.css', POWERBLOCKS_ROOT_FILE ), // Block style CSS.
    		array( 'wp-editor' ), // Dependency to include the CSS after it.
    		filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.build.css' ) // Version: File modification time.
    	);
    }

    /**
     * Enqueue Gutenberg block assets for backend editor.
     *
     * @uses {wp-blocks} for block type registration & related functions.
     * @uses {wp-element} for WP Element abstraction — structure of blocks.
     * @uses {wp-i18n} to internationalize the block's text.
     * @uses {wp-editor} for WP editor styles.
     *
     * @since 0.1.0
     */
    function editor_assets() { // phpcs:ignore
    	// Scripts.
    	wp_enqueue_script(
    		'powerblocks-block-js', // Handle.
    		plugins_url( '/dist/blocks.build.js', POWERBLOCKS_ROOT_FILE ), // Block.build.js: We register the block here. Built with Webpack.
    		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ), // Dependencies, defined above.
    		filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: File modification time.
    		true // Enqueue the script in the footer.
    	);

    	// Styles.
    	wp_enqueue_style(
    		'powerblocks-block-editor-css', // Handle.
    		plugins_url( 'dist/blocks.editor.build.css', POWERBLOCKS_ROOT_FILE ), // Block editor CSS.
    		array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
    		filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: File modification time.
    	);
	}
	
	function enqueue_scripts(){
		$pb_mailchimp_block = array('ajaxurl' => admin_url( 'admin-ajax.php'));
		wp_localize_script('pb-mailchimp-block-frontend', 'pb_mailchimp_block', $pb_mailchimp_block);
		wp_enqueue_script('wf-mailchimp-block-frontend');
	} // enqueue_scripts


	function save_key() {
		// echo 'hello';
		// exit();
    	require_once __DIR__ . '/mailchimp.php';
		// new PowerBlocks\MailChimp();
		if (!empty($_POST['api_key'])) {
			$api_key = sanitize_title($_POST['api_key']);
			// $api_key = substr($api_key, 0, 40);
			// echo $api_key;
			// die();
			try {
				$mailchimp = new PowerBlocks\MailChimp($api_key);
				$result = $mailchimp->makeRequest('GET','lists/');
				wp_send_json_success($result);
			  } catch(Exception $e) {
				wp_send_json_error('Invalid API key.');
			}
			  
		} else {
			wp_send_json_error('Invalid API key.');
		}
		die();
	}
}
