const { __ } = wp.i18n;
const { Component } = wp.element;
const { InspectorControls, PanelColorSettings } = wp.editor;
const { TextControl, PanelBody,SelectControl, ToggleControl, ColorPicker } = wp.components;
import ImagePicker from './ImagePicker';
export default class Inspector extends Component {
    componentDidMount () {
		this.props.onMount();
    }

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
				mailchimp_list,
				showlabel
			},
			setAttributes,
			state,
			onUpdateApiKey,
			updateList,
			onMount
		} = this.props;

		const Colors = [
				{ color: '#F78DA7', name: __( 'GPB Color' ) },
				{ color: '#CF2E2E', name: __( 'Prunus Avium' ) },
				{ color: '#FF6903', name: __( 'Chi-gong' ) },
				{ color: '#FCB902', name: __( 'Pico-8' ) },
				{ color: '#7BDCB5', name: __( 'Robin\'s Egg Blue' ) },
				{ color: '#FE4A5A', name: __( 'Orange Ville' ) },
				{ color: '#24C030', name: __( 'Bright Yarrow' ) },
				{ color: '#4BBDFF', name: __( 'Light Greenish Blue' ) },
				{ color: '#9013FE', name: __( 'Mint Leaf' ) },
				{ color: '#4C84FF', name: __( 'Exodus Fruit' ) },
				{ color: '#BD10E0', name: __( 'Sour Lemon' ) },
				{ color: '#F0F0F0', name: __( 'First Date' ) },
				{ color: '#000000', name: __( 'Green Darnet Tail' ) },
		];

		return (
			<div>
				<InspectorControls>
					<ImagePicker
						label={ __( 'Template View' ) }
						options={ [
							{
								value: '2',
								label: __( '' ),
								image: power_block_admin.plugin + './dist/images/mailchimp-left.svg',
								id: 'mailchimp_basic'

							},
							{
								value: '3',
								label: __( '' ),
								image: power_block_admin.plugin + './dist/images/mailchimp-center.svg',
								id: 'mailchimp_advance',

							},
							{
								value: '4',
								label: __( '' ),
								image: power_block_admin.plugin + './dist/images/mailchimp-advance.svg',

							},
						] }
					/>

					<PanelBody>
						<TextControl
							label={ __( 'Api Key' ) }
							value={ apiKey }
							onChange={ ( value ) => {
								setAttributes( { apiKey: value } )
								// this.onUpdateApiKey( value );
								onUpdateApiKey(value);
							} }
						/>
						<SelectControl className="pb-mailchimp-lists"
							label={ 'List' }
							value={ mailchimp_list }
							// options={ this.state.mc_list_options }
							options={ state.mc_list_options }
							onChange={ (value) => {
								setAttributes({
									mailchimp_list: value
								});
								// this.updateList( value );
								updateList( value );
							} }
						/>

						<ToggleControl
							label={ __( 'Show Label Field' ) }
							checked={ showlabel }
							onChange={ ( value ) => {
								setAttributes( {
									showlabel: value
								} )
							} }
						/>

						<TextControl
							label={ __( 'Email Field Label' ) }
							value={ emailFieldLabel }
							onChange={ ( value ) => setAttributes( { emailFieldLabel: value } ) }
						/>
						<TextControl
							label={ __( 'Name Field Label' ) }
							value={ nameFieldLabel }
							onChange={ ( value ) => setAttributes( { nameFieldLabel: value } ) }
						/>
						<TextControl
							label={ __( 'Submit Button Label' ) }
							value={ submitFieldLabel }
							onChange={ ( value ) => setAttributes( { submitFieldLabel: value } ) }
						/>
						<TextControl
							label={ __( 'Success Message') }
							value={ successMessage }
							onChange={ ( value ) => setAttributes( { successMessage: value } ) }
						/>
						<TextControl
							label={ __( 'Submit Message') }
							value={ submitMessage }
							onChange={ ( value ) => setAttributes( { submitMessage: value } ) }
						/>
						<TextControl
							label={ __( 'Error Message') }
							value={ errorMessage }
							onChange={ ( value ) => setAttributes( { errorMessage: value } ) }
						/>
						<TextControl
							label={ __( 'Duplicate Message' ) }
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
									colors: Colors,
								},
								{
									value: submitButtonBackgroundColor,
									onChange: value => setAttributes( { submitButtonBackgroundColor: value } ),
									label: __( 'Button Background Color' ),
									colors: Colors,
								},
								{
									value: newsletterbackgroundColor,
									onChange: value => setAttributes( { newsletterbackgroundColor: value } ),
									label: __( 'Background Color' ),
									colors: Colors,
								},
							] }
						/>
					</PanelBody>
				</InspectorControls>
			</div>
		);
	}
}
