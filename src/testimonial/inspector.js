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
	       	testimonialName,
	    	testimonialNameColor,
	    	testimonialNameFontSize,
	    	testimonialTitle,
	    	testimonialTitleColor,
	    	testimonialTitleFontSize,
	    	testimonialContent,
	    	testimonialContentColor,
	    	testimonialContentFontSize,
	    	testimonialAlignment,
	    	image,
	    	testimonialBackgroundColor,
	    	testimonialImageStyle,
	    	testimonialPadding,
	    	testimonialMargin
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
		    <InspectorControls key="inspector">
				<PanelColorSettings
					title={ __( 'Color Settings' ) }
					initialOpen={ false }
					colorSettings={
						[
							{
								value: testimonialBackgroundColor,
								colors: Colors,
								onChange: value => setAttributes( {
									testimonialBackgroundColor: value
								} ),
								label: __( 'Background Color' ),
							},
							{
								value: testimonialTitleColor,
								colors: Colors,
								onChange: value => setAttributes( {
									testimonialTitleColor: value
								} ),
								label: __( 'Testimonial Title  Color' ),
							},
							{
								value: testimonialContentColor,
								colors: Colors,
								onChange: value => setAttributes( {
									testimonialContentColor: value
								} ),
								label: __( 'Testimonial Content  Color' ),
							},
							{
								value: testimonialNameColor,
								colors: Colors,
								onChange: value => setAttributes( {
									testimonialNameColor: value
								} ),
								label: __( 'Testimonial Name  Color' ),
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
						label={ __( 'Testimonial Name Font Size' ) }
						value={ testimonialNameFontSize }
						onChange={ ( value ) => setAttributes( { testimonialNameFontSize: value } ) }
						min={ 14 }
						max={ 24 }
						step={ 1 }
					/>

					<RangeControl
						label={ __( 'Testimonial Title Font Size' ) }
						value={ testimonialTitleFontSize }
						onChange={ ( value ) => setAttributes( { testimonialTitleFontSize: value } ) }
						min={ 14 }
						max={ 24 }
						step={ 1 }
					/>

					<RangeControl
						label={ __( 'Testimonial Content Font Size' ) }
						value={ testimonialContentFontSize }
						onChange={ ( value ) => setAttributes( { testimonialContentFontSize: value } ) }
						min={ 14 }
						max={ 24 }
						step={ 1 }
					/>
				</PanelBody>

				<PanelBody
					title={ __( 'Testimonial Settings' ) }
					initialOpen={ false }
				>
					<RangeControl
						label={ __( 'Testimonial Margin' ) }
						value={ testimonialMargin }
						onChange={ ( value ) => setAttributes( { testimonialMargin: value } ) }
						min={ 1 }
						max={ 30 }
						step={ 1 }
					/>

					<RangeControl
						label={ __( 'Testimonial Padding' ) }
						value={ testimonialPadding }
						onChange={ ( value ) => setAttributes( { testimonialPadding: value } ) }
						min={ 1 }
						max={ 30 }
						step={ 1 }
					/>

					<SelectControl
						label={ __( 'Image  Style' ) }
						description={ __( '' ) }
						options={ [
							{ label: 'Circle', value: 'circle' },
							{ label: 'Round', value: 'round' },
						] }
						value={ testimonialImageStyle }
						onChange={ ( value ) => setAttributes( { testimonialImageStyle: value } ) }
					/>
				</PanelBody>
			</InspectorControls>
		)
	}
}
