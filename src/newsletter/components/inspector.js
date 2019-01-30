const { __ } = wp.i18n;
const { Component } = wp.element;
const { InspectorControls, PanelColorSettings } = wp.editor;
const { TextControl, PanelBody } = wp.components;

export default class Inspector extends Component {
	render() {
		const {
			attributes: {
				emailFieldLabel,
				nameFieldLabel,
				submitFieldLabel,
				successMessage,
				errorMessage,
				submitMessage,
				duplicateMessage,
				apiKey,
				submitButtonTextColor,
				submitButtonBackgroundColor,
				newsletterbackgroundColor,
			},
			setAttributes,
		} = this.props;

		return (
			<div>
				<InspectorControls>
					<PanelBody>
						<TextControl
							label={ 'API Key' }
							value={ apiKey }
							onChange={ ( value ) => setAttributes( { apiKey: value } ) }
						/>
						<TextControl
							label={ 'Email Field Label' }
							value={ emailFieldLabel }
							onChange={ ( value ) => setAttributes( { email_field_label: value } ) }
						/>
						<TextControl
							label={ 'Name Field Label' }
							value={ nameFieldLabel }
							onChange={ ( value ) => setAttributes( { nameFieldLabel: value } ) }
						/>
						<TextControl
							label={ 'Submit Button Label' }
							value={ submitFieldLabel }
							onChange={ ( value ) => setAttributes( { submitFieldLabel: value } ) }
						/>
						<TextControl
							label={ 'Success Message' }
							value={ successMessage }
							onChange={ ( value ) => setAttributes( { successMessage: value } ) }
						/>
						<TextControl
							label={ 'Submit Message' }
							value={ submitMessage }
							onChange={ ( value ) => setAttributes( { submitMessage: value } ) }
						/>
						<TextControl
							label={ 'Error Message' }
							value={ errorMessage }
							onChange={ ( value ) => setAttributes( { errorMessage: value } ) }
						/>
						<TextControl
							label={ 'Duplicate Message' }
							value={ duplicateMessage }
							onChange={ ( value ) => setAttributes( { duplicateMessage: value } ) }
						/>

						<PanelColorSettings
							title={ __( 'Color Settings' ) }
							initialOpen={ false }
							colorSettings={ [
								{
									value: submitButtonTextColor,
									onChange: value => setAttributes( { submitButtonTextColor: value } ),
									label: __( 'Button Text Color' ),
								},
								{
									value: submitButtonBackgroundColor,
									onChange: value => setAttributes( { submitButtonBackgroundColor: value } ),
									label: __( 'Button Background Color' ),
								},
								{
									value: newsletterbackgroundColor,
									onChange: value => setAttributes( { newsletterbackgroundColor: value } ),
									label: __( 'Background Color' ),
								},
							] }
						/>
					</PanelBody>
				</InspectorControls>
			</div>
		);
	}
}
