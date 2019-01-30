const { __ } = wp.i18n;
const { Component } = wp.element;
// Import block components
const {
	InspectorControls,
	PanelColorSettings,
	MediaUpload,
} = wp.editor;

const { PanelBody } = wp.components;

export default class Inspector extends Component {
	render() {
		return (
			<InspectorControls>
				<PanelBody
					title={ __( 'Ad Settings' ) }
					initialOpen={ false }
				>
					<PanelColorSettings
						title={ __( 'Color Settings' ) }
						initialOpen={ false }
						colorSettings={ 
							[
								{
									value: memberBackgroundColor,
									label: __( 'Ad Background Color' ),
								},
							]
						}
					>

					</PanelColorSettings>
				</PanelBody>
			</InspectorControls>
		)
	}
}
