<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<?php
$current_text = 'Amolina Wp Block Dummy';

if ( ! empty( $attributes['showDummyText'] ) && ! empty( $attributes['dummyText'] ) ) {
    $display_text = $attributes['dummyText'] . ' – ' . $current_text;
} else {
    $display_text = $current_text;
}
?>

<p <?php echo get_block_wrapper_attributes(); ?> >
	<span class="text-3xl">
		<?php echo esc_html( $display_text ); ?>
	</span>
	
</p>
