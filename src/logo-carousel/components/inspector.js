/**
 * Inspector Controls
 */

// Setup the block
const { __ } = wp.i18n;
const { Component } = wp.element;
const {
  InspectorControls,
  BlockDescription,
} = wp.editor;
const {
	Toolbar,
	Button,
	PanelBody,
	PanelRow,
	RangeControl,
	ToggleControl,
} = wp.components;
export default class Inspector extends Component {

	constructor( props ) {
		super( ...arguments );
	}

	render() {
		return (
			<div>

			</div>
		);
	}
}
