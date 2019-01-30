/**
 * Inspector Controls
 */

// Setup the block
const { Component } = wp.element;

// Import block components
const { InspectorControls, BlockDescription } = wp.editor;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
	render() {
		return (

			<div>
				<InspectorControls>
				</InspectorControls>

			</div>
		);
	}

}
