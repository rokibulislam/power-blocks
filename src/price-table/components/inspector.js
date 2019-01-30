/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { InspectorControls, PanelColorSettings } = wp.editor;
const { PanelBody, PanelColor, RangeControl, TextControl } = wp.components;

/**
 * Inspector controls
 */
export default class Inspector extends Component {
	// Render
	render() {
		const {
			isSelected, 
			setAttributes,
			attributes,
		} = this.props;

		const {
			ID,
			items,
			backgroundColor,
			titleColor,
			titleFontSize,
			featuresColor,
			featuresFontSize,
			priceColor,
			priceFontSize,
			priceBackgroundColor,
			buttonColor,
			buttonBackgroundColor,
			buttonColorHover,
			buttonBackgroundColorHover,
			buttonUrl,
		} = attributes;

		// const PowerPriceTable = {
		// 	colors: [
		// 		{ color: '#F9583B', name: 'GPB Color' },
		// 		{ color: '#e84393', name: 'Prunus Avium' },
		// 		{ color: '#d63031', name: 'Chi-gong' },
		// 		{ color: '#fd79a8', name: 'Pico-8' },
		// 		{ color: '#00cec9', name: 'Robin\'s Egg Blue' },
		// 		{ color: '#e17055', name: 'Orange Ville' },
		// 		{ color: '#fdcb6e', name: 'Bright Yarrow' },
		// 		{ color: '#55efc4', name: 'Light Greenish Blue' },
		// 		{ color: '#00b894', name: 'Mint Leaf' },
		// 		{ color: '#6c5ce7', name: 'Exodus Fruit' },
		// 		{ color: '#ffeaa7', name: 'Sour Lemon' },
		// 		{ color: '#fab1a0', name: 'First Date' },
		// 		{ color: '#74b9ff', name: 'Green Darnet Tail' },
		// 		{ color: '#a29bfe', name: 'Sky Moment' },
		// 		{ color: '#2d3436', name: 'Dracula Orchid' },
		// 		{ color: '#dfe6e9', name: 'City Lights' },
		// 		{ color: '#636e72', name: 'American River' },
		// 	],
		// };
		const onChangeFeatureColor = value => setAttributes( { featuresColor: value } );
		const onChangePriceBackgroundColor = value => setAttributes( { priceBackgroundColor: value } );
		const onChangePriceColor = value => setAttributes( { priceColor: value } );
		const onChangeTitleColor = value => setAttributes( { titleColor: value } );
		const onChangeButtoneBackgroundColor = value => setAttributes( { buttonBackgroundColor: value } );
		const onChangeButtonColor = value => setAttributes( { buttonColor: value } );
		const onChangeButtoneHoverBackgroundColor = value => setAttributes( { buttonBackgroundColorHover: value } );
		const onChangeButtonHoverColor = value => setAttributes( { buttonColorHover: value } );
		const onChangeBackgroundColor = value => setAttributes( { buttonColorHover: value } );
		return (
			<InspectorControls key="inspector">
				<PanelColorSettings
					title={ __( 'Background Color' ) }
					colorValue={ backgroundColor }
					initialOpen={ false }
					colorSettings={ [ {
						value: backgroundColor,
						onChange: onChangeBackgroundColor,
						label: __( 'Title  Color' ),
					} ] }
				>

				</PanelColorSettings>

				<PanelBody
					title={ __( 'Title Settings' ) }
					initialOpen={ false }
				>
					<RangeControl
						label={ __( 'Title Font Size' ) }
						value={ titleFontSize }
						onChange={ ( value ) => this.props.setAttributes( { titleFontSize: value } ) }
						min={ 14 }
						max={ 24 }
						step={ 1 }
					/>

					<PanelColorSettings
						title={ __( 'Title Color' ) }
						colorValue={ titleColor }
						initialOpen={ false }
						colorSettings={ [ {
							value: titleColor,
							onChange: onChangeTitleColor,
							label: __( 'Title  Color' ),
						} ] }
					>

					</PanelColorSettings>

				</PanelBody>

				<PanelBody
					title={ __( 'Price Settings' ) }
					initialOpen={ false }
				>

					<PanelColorSettings
						title={ __( 'Price Background  Color' ) }
						colorValue={ priceBackgroundColor }
						initialOpen={ false }
						colorSettings={ [ {
							value: priceBackgroundColor,
							onChange: onChangePriceBackgroundColor,
							label: __( 'Price Background  Color' ),
						} ] }
					>
					</PanelColorSettings>

					<RangeControl
						label={ __( 'Price Font Size' ) }
						value={ priceFontSize }
						onChange={ ( value ) => this.props.setAttributes( { priceFontSize: value } ) }
						min={ 14 }
						max={ 24 }
						step={ 1 }
					/>

					<PanelColorSettings
						title={ __( 'Price Color' ) }
						colorValue={ priceColor }
						initialOpen={ false }
						colorSettings={ [ {
							value: priceColor,
							onChange: onChangePriceColor,
							label: __( 'Price Background  Color' ),
						} ] }
					>
					</PanelColorSettings>
				</PanelBody>

				<PanelBody
					title={ __( 'Feature Settings' ) }
					initialOpen={ false }
				>
					<PanelColorSettings
						title={ __( 'Feature  Color' ) }
						colorValue={ featuresColor }
						initialOpen={ false }
						colorSettings={ [ {
							value: featuresColor,
							onChange: onChangeFeatureColor,
							label: __( 'Feature Color' ),
						} ] }
					>
					</PanelColorSettings>

					<RangeControl
						label={ __( 'Feature Font Size' ) }
						value={ featuresFontSize }
						onChange={ ( value ) => this.props.setAttributes( { featuresFontSize: value } ) }
						min={ 14 }
						max={ 24 }
						step={ 1 }
					/>

				</PanelBody>

				<PanelBody
					title={ __( 'Button Settings' ) }
					initialOpen={ false }
				>

					<PanelColorSettings
						title={ __( 'Button Background  Color' ) }
						colorValue={ buttonBackgroundColor }
						initialOpen={ false }
						colorSettings={ [ {
							value: buttonBackgroundColor,
							onChange: onChangeButtoneBackgroundColor,
							label: __( 'Button Background  Color' ),
						} ] }
					>
					</PanelColorSettings>
					<PanelColorSettings
						title={ __( 'Button Color' ) }
						colorValue={ buttonColor }
						initialOpen={ false }
						colorSettings={ [ {
							value: buttonColor,
							onChange: onChangeButtonColor,
							label: __( 'Button Color' ),
						} ] }
					>
					</PanelColorSettings>

					<PanelColorSettings
						title={ __( 'Button Hover Background  Color' ) }
						colorValue={ buttonBackgroundColorHover }
						initialOpen={ false }
						colorSettings={ [ {
							value: buttonBackgroundColorHover,
							onChange: onChangeButtoneHoverBackgroundColor,
							label: __( 'Button Hover Background  Color' ),
						} ] }
					>
					</PanelColorSettings>
					<PanelColorSettings
						title={ __( 'Button Hover Color' ) }
						colorValue={ buttonColorHover }
						initialOpen={ false }
						colorSettings={ [ {
							value: buttonColorHover,
							onChange: onChangeButtonHoverColor,
							label: __( 'Button Hover Color' ),
						} ] }
					>
					</PanelColorSettings>

					<RangeControl
						label={ __( 'Button Font Size' ) }
						value={ featuresFontSize }
						onChange={ ( value ) => this.props.setAttributes( { featuresFontSize: value } ) }
						min={ 14 }
						max={ 24 }
						step={ 1 }
					/>

					<TextControl
						label="Button url"
						value={ buttonUrl }
						onChange={ ( value ) => this.props.setAttributes( {
							buttonUrl: value,
						} ) }
					/>
				</PanelBody>
			</InspectorControls>
		);
	}
}
