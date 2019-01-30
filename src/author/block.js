/**
 * Accordion: blocks
 *
 * Registering a Accordion block with Gutenberg.
 * Accordion block, renders and saves the same content without any interactivity.
 */

// Import block dependencies and components
import Inspector from './components/inspector';
import Author from './components/author';
import EditAuthor from  './components/editauthor';
import icons from './components/icons';


//  Import CSS.
import './styles/style.scss';
import './styles/editor.scss';

// Components
const { __ } = wp.i18n;

// Extend component
const { Component } = wp.element;

// Register block
const {
	registerBlockType,
	createBlock,
} = wp.blocks;

// Register editor components
const {
	RichText,
	AlignmentToolbar,
	BlockControls,
	BlockAlignmentToolbar,
	InnerBlocks,
} = wp.editor;

// Register components
const {
	Button,
	withFallbackStyles,
	IconButton,
	Dashicon,
} = wp.components;

const blockAttributes = {

	accordionTitle: {
		type: 'array',
		selector: '.ab-accordion-title',
		source: 'children',
	},
	accordionText: {
		type: 'array',
		selector: '.ab-accordion-text',
		source: 'children',
	},
	accordionAlignment: {
		type: 'string',
	},
	accordionFontSize: {
		type: 'number',
		default: 18
	},
	accordionOpen: {
		type: 'boolean',
		default: false
	},
}


registerBlockType( 'power-blocks/author', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Author', 'power-blocks' ), // Block title.
	description: __( '.', 'power-blocks' ),
	icon: 'format-status', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'power-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Author', 'power-blocks' ),
	],
	attributes: {
		accordionTitle: {
			type: 'array',
			selector: '.ab-Author-title',
			source: 'children',
		},
		accordionText: {
			type: 'array',
			selector: '.ab-Author-text',
			source: 'children',
		},
		accordionAlignment: {
			type: 'string',
		},
		accordionFontSize: {
			type: 'number',
			default: 18
		},
		accordionOpen: {
			type: 'boolean',
			default: false
		},
	},

	styles: [

	],

	edit: ( props ) => {
		return (
			<section>
				<div>
					Author Admin
				</div>
			</section>
		);
	},

	save: function( props ) {

		return (
			<section>
				<div>
					Author frontend
				</div>
			</section>
		);
	}

});
