const { __ } = wp.i18n;
const { Component } = wp.element;
// Import block components
const {
	InspectorControls,
	PanelColorSettings,
} = wp.editor;
const { TextControl } = wp.components;

const { PanelBody, ToggleControl, SelectControl, RangeControl } = wp.components;
export default class Inspector extends Component {
	render() {
		const {
			attributes: {
				buttonText,
				buttonUrl,
				borderRadius,
				buttonSize,
				buttonBackground,
				borderColor,
				hoverColor,
				buttonTextColor,
				buttonTarget,
				buttonAlignment,
			},
			setAttributes,
		} = this.props;

		return (
			<div>
				<InspectorControls>
					<PanelBody>
						<TextControl
							label="Button Text"
							value={ buttonText }
							onChange={ ( value ) => setAttributes( { buttonText: value } ) }
						/>
						<TextControl
							label="Button Link"
							value={ buttonUrl }
							onChange={ ( value ) => setAttributes( { buttonUrl: value } ) }
						/>
						<ToggleControl
							label={ __( 'Open link in new window' ) }
							checked={ buttonTarget }
							onChange={ value => {
								setAttributes( { buttonTarget: value } );
							} }
						/>

						<SelectControl
							label="Button Size"
							value={ buttonSize }
							options={ [
								{ label: 'Normal', value: '' },
								{ label: 'Small', value: '.75em' },
								{ label: 'Medium', value: '1.25em' },
								{ label: 'Large', value: '1.5em' },
							] }
							onChange={ value => setAttributes( { buttonSize: value } ) }
						/>

						<RangeControl
							label="Border Radius"
							value={ borderRadius }
							onChange={ value => setAttributes( { borderRadius: value } ) }
							min={ 1 }
							max={ 100 }
							initialPosition={ 0.1 }
						/>

						<PanelColorSettings
							initialOpen={ false }
							title={ __( 'Color Settings' ) }
							colorSettings={ [
								{
									label: __( 'Background Color' ),
									value: buttonBackground,
									onChange: value => setAttributes( { buttonBackground: value } ),
								},

								{
									label: __( 'Border Color' ),
									value: borderColor,
									onChange: value => setAttributes( { borderColor: value } ),
								},
								{
									label: __( 'Hover Color' ),
									value: hoverColor,
									onChange: value => setAttributes( { hoverColor: value } ),
								},

								{
									label: __( 'Text Color' ),
									value: buttonTextColor,
									onChange: value => setAttributes( { buttonTextColor: value } ),
								},
							] }
						/>
					</PanelBody>
				</InspectorControls>
			</div>
		);
	}
}
