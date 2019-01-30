/**
 * Accordion Wrapper
 */

// Setup the block
const { Component } = wp.element;
// Components
const { __ } = wp.i18n;
// Register editor components
const {
	RichText,
	AlignmentToolbar,
	BlockControls,
	InnerBlocks,
} = wp.editor;

import Accordion from './accordion';
import Inspector from './inspector';

export default class EditAccordion extends Component {
	render() {
		// Setup the attributes
		const { attributes: { accordionTitle, accordionText, accordionAlignment, accordionFontSize, accordionOpen }, isSelected, className, setAttributes } = this.props;
		// return
		return [
			// Show the block alignment controls on focus
			<BlockControls key="controls">
				<AlignmentToolbar
					value={ accordionAlignment }
					onChange={ ( value ) => this.props.setAttributes( { accordionAlignment: value } ) }
				/>
			</BlockControls>,
			// Show the block controls on focus
			<Inspector
				{ ...this.props }
			/>,
			// Show the button markup in the editor
			<Accordion { ...this.props }>
				<RichText
					tagName="p"
					placeholder={ __( 'Accordion Title', 'power-blocks' ) }
					value={ accordionTitle }
					className="power-accordion-title"
					onChange={ ( value ) => this.props.setAttributes( { accordionTitle: value } ) }
				/>
				<div class="power-accordion-text">
					<InnerBlocks />
				</div>
			</Accordion>
		];
	}

}
