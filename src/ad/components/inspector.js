const { __ } = wp.i18n;
const { Component } = wp.element;
const {
	InspectorControls,
	PanelColorSettings,
	MediaUpload,
} = wp.editor;
const { PanelBody } = wp.components;
export default class Inspector extends Component {
	render() {
		const {
			adBackgroundColor,
		} = this.props;
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
									value: adBackgroundColor,
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
