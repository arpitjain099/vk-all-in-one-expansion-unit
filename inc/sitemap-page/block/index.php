<?php
/**
 * Register Child Page Index Block
 */

function veu_register_sitemap_block() {

    $asset_file = include plugin_dir_path( __FILE__ ) . '/build/block.asset.php';

    wp_register_script(
        'veu-block-sitemap',
        plugin_dir_url( __FILE__ )  . '/build/block.js',
        $asset_file['dependencies'],
        VEU_VERSION,
        true
    );

    wp_set_script_translations( 'veu-block-sitemap', 'vk-all-in-one-expansion-unit' );
    
    register_block_type(
        __DIR__,
        array(
            'attributes'      => array_merge(
                array(
                    'className' => array(
                        'type'    => 'string',
                        'default' => '',
                    ),
                ),
                veu_common_attributes()
            ),
            'editor_script'   => 'veu-block-sitemap',
            'editor_style'    => 'veu-block-editor',
            'render_callback' => 'veu_sitemap_block_callback',
            'supports'        => array(),
        )
    );
	
}
add_action( 'init', 'veu_register_sitemap_block', 15 );

function veu_sitemap_block_callback( $attributes, $content ) {

    $attributes = wp_parse_args(
		$attributes,
		array(
			'className' => '',
		)
	);

	$classes = 'veu_childPageIndex_block';

	if ( isset( $attributes['className'] ) ) {
		$classes .= ' ' . $attributes['className'];
	}

	if ( function_exists( 'veu_add_common_attributes_class' ) ) {
		$classes = veu_add_common_attributes_class( $classes, $attributes );
	}


	$r = vkExUnit_sitemap( $attributes  );

	if ( empty( $r ) ) {
		if ( isset( $_GET['context'] ) ) {
			return '<div class="alert alert-warning text-center ' . esc_attr( $classes ) . '">' . __( 'No Child Pages.', 'vk-all-in-one-expansion-unit' ) . '</div>';
		}
		return '';
	}
	return $r;
}