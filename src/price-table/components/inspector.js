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
					title={ __( 'Color Settings' ) }
					//colorValue={ backgroundColor }
					initialOpen={ false }
					colorSettings={
						[
							{
								value: backgroundColor,
								onChange: onChangeBackgroundColor,
								label: __( 'Backgroun  Color' ),
							},
							{
								value: titleColor,
								onChange: onChangeTitleColor,
								label: __( 'Title  Color' ),
							},
							{
								value: priceBackgroundColor,
								onChange: onChangePriceBackgroundColor,
								label: __( 'Price Background  Color' ),
							},
							{
								value: priceColor,
								onChange: onChangePriceColor,
								label: __( 'Price  Color' ),
							},
							{
								value: featuresColor,
								onChange: onChangeFeatureColor,
								label: __( 'Feature Color' ),
							},
							{
								value: buttonBackgroundColor,
								onChange: onChangeButtoneBackgroundColor,
								label: __( 'Button Background  Color' ),
							},
							{
								value: buttonColor,
								onChange: onChangeButtonColor,
								label: __( 'Button Color' ),
							},
							{
								value: buttonBackgroundColorHover,
								onChange: onChangeButtoneHoverBackgroundColor,
								label: __( 'Button Hover Background  Color' ),
							},
							{
								value: buttonColorHover,
								onChange: onChangeButtonHoverColor,
								label: __( 'Button Hover Color' ),
							},
						]
					}
				>

				</PanelColorSettings>

				<PanelBody
					title={ __( 'Font Settings' ) }
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

					<RangeControl
						label={ __( 'Price Font Size' ) }
						value={ priceFontSize }
						onChange={ ( value ) => this.props.setAttributes( { priceFontSize: value } ) }
						min={ 14 }
						max={ 24 }
						step={ 1 }
					/>
					<RangeControl
						label={ __( 'Feature Font Size' ) }
						value={ featuresFontSize }
						onChange={ ( value ) => this.props.setAttributes( { featuresFontSize: value } ) }
						min={ 14 }
						max={ 24 }
						step={ 1 }
					/>
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
