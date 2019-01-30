const { __ } = wp.i18n;
const { Component } = wp.element;
// Import block components
const {
	InspectorControls,
	PanelColorSettings,
} = wp.editor;

const { PanelBody, ToggleControl, SelectControl, RangeControl } = wp.components;

export default class Inspector extends Component {
	render() {
		const {
			attributes: {
				content,
				url,
				textAlign,
				buttonText,
				buttonColor,
				textColor,
				fontSize,
			},
			setAttributes,
		} = this.props;
		return (
			<div>
				<InspectorControls>
					<PanelBody >
						<RangeControl
							label="FontSize"
							value={ fontSize }
							onChange={ value => setAttributes( { fontSize: value } ) }
							min={ 1 }
							max={ 100 }
							initialPosition={ 0.1 }
						/>
						<PanelColorSettings
							initialOpen={ false }
							title={ __( 'Color Settings' ) }
							colorSettings={ [
								{
									label: __( 'Button Background Color' ),
									value: buttonColor,
									onChange: value => setAttributes( { buttonColor: value } ),
								},

								{
									label: __( 'Text Color' ),
									value: textColor,
									onChange: value => setAttributes( { textColor: value } ),
								},
							] }
						/>
					</PanelBody>
				</InspectorControls>
			</div>
		)
	}
}
