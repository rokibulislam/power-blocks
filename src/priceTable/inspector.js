const { __ } = wp.i18n;
const { Component } = wp.element;
const { InspectorControls, PanelColorSettings } = wp.editor;
const { PanelBody,RangeControl, SelectControl } = wp.components;


export default class Inspector extends Component {
	render() {

		const {
	        attributes,
	        setAttributes,
	        isSelected,
	        isSelectedBlockInRoot,
	    } = this.props;

	    const {
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
			imageUrl,
			imageID,
			header,
			features,
			price,
			buttonText,
        } = attributes;

	    const Colors = [
			{ color: '#F78DA7', name: 'GPB Color' },
			{ color: '#CF2E2E', name: 'Prunus Avium' },
			{ color: '#FF6903', name: 'Chi-gong' },
			{ color: '#FCB902', name: 'Pico-8' },
			{ color: '#7BDCB5', name: 'Robin\'s Egg Blue' },
			{ color: '#FE4A5A', name: 'Orange Ville' },
			{ color: '#24C030', name: 'Bright Yarrow' },
			{ color: '#4BBDFF', name: 'Light Greenish Blue' },
			{ color: '#9013FE', name: 'Mint Leaf' },
			{ color: '#4C84FF', name: 'Exodus Fruit' },
			{ color: '#BD10E0', name: 'Sour Lemon' },
			{ color: '#F0F0F0', name: 'First Date' },
			{ color: '#000000', name: 'Green Darnet Tail' },
		];

		return (
			<InspectorControls>
                <PanelColorSettings
					title={ __( 'Color Settings' ) }
					initialOpen={ false }
					colorSettings={
						[
							{
								value: backgroundColor,
								colors: Colors,
								onChange: ( value ) => {
                                    setAttributes( {
                                    	backgroundColor: value
                                    } )
                                },
								label: __( 'Background  Color' ),
							},
							{
								value: titleColor,
								colors: Colors,
								onChange: ( value ) => {
                                    setAttributes( {
                                    	titleColor: value
                                    } )
                                },
								label: __( 'Title  Color' ),
							},
							{
								value: priceBackgroundColor,
								colors: Colors,
								onChange: ( value ) => {
                                    setAttributes( {
                                        priceBackgroundColor: value,
                                    } )
                                },
								label: __( 'Price Background  Color' ),
							},
							{
								value: priceColor,
								colors: Colors,
								onChange: ( value ) => {
                                    setAttributes( {
                                       priceColor: value,
                                    } )
                                },
								label: __( 'Price  Color' ),
							},
							{
								value: featuresColor,
								colors: Colors,
								onChange: ( value ) => {
                                    setAttributes( {
                                    	featuresColor: value,
                                    } )
                                },
								label: __( 'Feature Color' ),
							},
							{
								value: buttonBackgroundColor,
								colors: Colors,
								onChange: ( value ) => {
                                    setAttributes( {
                                    	buttonBackgroundColor: value,
                                    } )
                                },
								label: __( 'Button Background  Color' ),
							},
							{
								value: buttonColor,
								colors: Colors,
								onChange: ( value ) => {
                                    setAttributes( {
                                    	buttonColor: value,
                                    } )
                                },
								label: __( 'Button Color' ),
							},
							{
								value: buttonBackgroundColorHover,
								colors: Colors,
								onChange: ( value ) => {
                                    setAttributes( {
                                    	buttonBackgroundColorHover: value,
                                    } )
                                },
								label: __( 'Button Hover Background  Color' ),
							},
							{
								value: buttonColorHover,
								colors: Colors,
								onChange: ( value ) => {
                                    setAttributes( {
                                    	buttonColorHover: value,
                                    } )
                                },
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
						value= { titleFontSize }
						onChange= { ( value ) => {
							setAttributes( { titleFontSize : value } )
						} }
						min={ 14 }
						max={ 24 }
						step={ 1 }
					/>

					<RangeControl
						label={ __( 'Price Font Size' ) }
						value={ priceFontSize }
						onChange= { ( value ) => {
							setAttributes( {
								priceFontSize:value,
							} )
						} }
						min={ 14 }
						max={ 24 }
						step={ 1 }
					/>
					<RangeControl
						label={ __( 'Feature Font Size' ) }
						value={ featuresFontSize }
						onChange= { ( value ) => {
							setAttributes( {
								featuresFontSize:value,
							} )
						} }
						min={ 14 }
						max={ 24 }
						step={ 1 }
					/>
				</PanelBody>
			</InspectorControls>
		)
	}
}
