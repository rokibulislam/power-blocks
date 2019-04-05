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
    	add_action('wp_enqueue_scripts', array($this, 'enqueue_scripts'));


    	if( is_admin() ){
			add_action('wp_ajax_pb_mailchimp_block_save_key', array($this, 'save_key'));
			add_action('wp_ajax_nopriv_pb_mailchimp_block_save_key', array($this, 'save_key'));
			add_action('wp_ajax_pb_mailchimp_block_save_list', array($this, 'save_list'));
			add_action('wp_ajax_nopriv_pb_mailchimp_block_save_list', array($this, 'save_list'));
		}

		add_action('wp_ajax_pb_mailchimp_block_submit_form', array($this, 'submit_form'));
        add_action('wp_ajax_nopriv_pb_mailchimp_block_submit_form', array($this, 'submit_form'));
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

    	wp_register_script('pb-mailchimp-block', plugins_url( 'dist/blocks.build.js', dirname(__FILE__) )
    		// plugins_url( '', __FILE__ ) . '/dist/blocks.build.js',
    		// array('wp-editor', 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components')
    	);

    	// plugins_url('/dist/blocks.build.js', __FILE__
			$options      = get_option('pb-mailchimp-block');

			$optionlists  = get_option('pb-mailchimp-block-lists');

			$options_list = get_option('pb-mailchimp-block-list');

			$pb_mailchimp_block = array(
				'ajaxurl' => admin_url( 'admin-ajax.php'),
				'api_key' => isset( $options ) ? $options : '',
				'mailchimp_list' => isset( $options_list ) ? $options_list : '',
				'mailchimp_lists' => !empty( $optionlists ) ? maybe_unserialize( $optionlists ) :
					array((object)
					array(
						'name'=>'No Lists Found',
						'id'=>'-1'
					)
				),

			);

			wp_localize_script('pb-mailchimp-block', 'pb_mailchimp_block', $pb_mailchimp_block);

			wp_enqueue_script('pb-mailchimp-block');

	    // wp_localize_script( 'pb-mailchimp-block', 'pb_mailchimp_block', $pb_mailchimp_block );

		// wp_enqueue_script( 'pb-mailchimp-block' );
		
		wp_localize_script('pb-mailchimp-block', 'pb_mailchimp_block', $pb_mailchimp_block);

		wp_localize_script( 'powerblocks-block-js', 'power_block_admin', array(
			'plugin' => power_blocks_DIR_URL,
		) );
    }

    function save_list() {
	    $options_list = get_option('pb-mailchimp-block-list');
	    $options_list = sanitize_title($_POST['list']);
	    update_option('pb-mailchimp-block-list', $options_list);
	    die();
	} // save_list


    function enqueue_scripts(){

		// $pb_mailchimp_block = array('ajaxurl' => admin_url( 'admin-ajax.php'));

		// wp_localize_script('pb-mailchimp-block-frontend', 'pb_mailchimp_block', $pb_mailchimp_block);

		// wp_enqueue_script('pb-mailchimp-block-frontend');

	 //    $options = get_option('wf-mailchimp-block');

	 //    $pb_mailchimp_block = array(
	 //      'api_key' => isset( $options[ 'api_key' ] ) ? $options['api_key'] : '',
	 //    );

	 //    wp_localize_script( 'pb-mailchimp-block', 'pb_mailchimp_block', $pb_mailchimp_block );

	 //    wp_enqueue_script( 'pb-mailchimp-block' );

    	wp_register_script('pb-mailchimp-block-frontend',plugins_url( 'dist/pb-mailchimp-block.js', POWERBLOCKS_ROOT_FILE ), array('jquery') );

    	$pb_mailchimp_block = array('ajaxurl' => admin_url( 'admin-ajax.php'));

    	wp_localize_script('pb-mailchimp-block-frontend', 'pb_mailchimp_block', $pb_mailchimp_block);

    	wp_enqueue_script('pb-mailchimp-block-frontend');

	} // enqueue_scripts

   function save_key() {
	    	$options = get_option('wf-mailchimp-block');
			// $options['api_key'] = '';
			// $options['list']    = false;
			// $options['lists']   = array();
			if ( !empty( $_POST[ 'api_key' ] ) ) {
				$api_key  = $_POST['api_key'];
				$api_endpoint       = 'https://<dc>.api.mailchimp.com/3.0';
				list(, $datacentre) = explode('-', $api_key);
				$api_endpoint       = str_replace('<dc>', $datacentre, $api_endpoint);
				$url = $api_endpoint . '/' . '/lists/';
				error_log( print_r($url,true));
				$args = array(
					'headers'   => array(
						'Content-Type' => 'application/json',
						'Authorization' => 'Basic ' . $api_key,
					),
				);
				$result = wp_remote_get( $url, $args);
				if( is_wp_error( $result ) ) {
					error_log( print_r("error",true));
					error_log( print_r($result,true));
					update_option('pb-mailchimp-block', '');
					update_option('pb-mailchimp-block-lists', '');
					update_option('pb-mailchimp-block-list', '');
					return wp_send_json_error($result);
				}
				error_log( print_r("success",true));
				error_log( print_r($result,true));
				$result = wp_remote_retrieve_body( $result );
				$list = json_decode($result,true);
				update_option('pb-mailchimp-block', $api_key);
	    		update_option('pb-mailchimp-block-lists', maybe_serialize( $list['lists'] ) );
				wp_send_json_success($result);
			}
	}


	function submit_form() {

    	$fields = array();
		if ( empty( $_POST['email'] ) || !is_email( $_POST['email'] ) || empty( $_POST['name'] ) ||
			!preg_match( "/^[a-zA-Z ]*$/", $_POST['name'] ) ) {
			wp_send_json_error(4);
		}
		$options_api_key = get_option('pb-mailchimp-block');
		$options_list_id = get_option('pb-mailchimp-block-list');
		$memberId = md5( strtolower( $_POST['email'] ) );
		$api_endpoint       = 'https://<dc>.api.mailchimp.com/3.0';
		list(, $datacentre) = explode('-', $options_api_key);
		$api_endpoint       = str_replace('<dc>', $datacentre, $api_endpoint);
		$email = sanitize_email( $_POST['email'] );
    	$name = sanitize_text_field( $_POST['name'] );
		$url = $api_endpoint . '/' . '/lists/'. $options_list_id . '/members/';
		$json_data = json_encode( array( 'email_address' => $email, 'status' => "subscribed" ) );
		$args = array(
			'headers'   => array(
				'Content-Type' => 'application/json',
				'Authorization' => 'Basic ' . $options_api_key,
			),
			'body'      =>  $json_data,
			'sslverify' => false,
    	);
		$result = wp_remote_post( $url,$args);
		if( is_wp_error( $result ) ) {
			return wp_send_json_error($result);
		}
		$result = wp_remote_retrieve_body( $result );
		wp_send_json_success($result);
    	die();
  } // submit_form
}
