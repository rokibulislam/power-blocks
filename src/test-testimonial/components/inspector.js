const { __ } = wp.i18n;
const { Component } = wp.element;
const {InspectorControls,BlockDescription,ColorPalette,PanelColorSettings} = wp.editor;
const {Toolbar,Button,PanelBody,PanelRow,FormToggle,RangeControl,SelectControl} = wp.components;

export default class Inspector extends Component {
	render() {
		// Cite Alignment Options
		const citeAlignOptions = [
			{ value: 'left-aligned', label: __( 'Left Aligned' ) },
			{ value: 'right-aligned', label: __( 'Right Aligned' ) },
		];

		const backgroundColors = [
			{ color: '#00d1b2', name: 'teal' },
			{ color: '#3373dc', name: 'royal blue' },
			{ color: '#209cef', name: 'sky blue' },
			{ color: '#22d25f', name: 'green' },
			{ color: '#ffdd57', name: 'yellow' },
			{ color: '#ff3860', name: 'pink' },
			{ color: '#7941b6', name: 'purple' },
			{ color: '#392F43', name: 'black' },
		];
		const { 
			attributes: { 
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
				testimonialImgURL, 
				testimonialImgID, 
				testimonialBackgroundColor, 
				testimonialTextColor, 
				testimonialFontSize, 
				testimonialCiteAlign,
				testimonialImageStyle,
				testimonialPadding,
				testimonialMargin,
			}, 
			isSelected, 
			className, 
			setAttributes 
		} = this.props;

		// Update color values
		const onChangeBackgroundColor = value => setAttributes( { testimonialBackgroundColor: value } );
		const onChangeTextColor = value => setAttributes( { testimonialTextColor: value } );
		const onChangeTestimonialNameColor = value => setAttributes( { testimonialNameColor: value } );
		const onChangeTestimonialTitleColor = value => setAttributes( { testimonialTitleColor: value } );
		const onChangeTestimonialContentColor = value => setAttributes( { testimonialContentColor: value } );
		return (
			<InspectorControls key="inspector">
				<PanelColorSettings
					title={ __( 'Color Settings' ) }
					initialOpen={ false }
					colorSettings={
						[
							{
								value: testimonialBackgroundColor,
								colors: backgroundColors,
								onChange: onChangeBackgroundColor,
								label: __( 'Background Color' ),
							},
							{
								value: testimonialTextColor,
								colors: backgroundColors,
								onChange: onChangeTextColor,
								label: __( 'Text Color' ),
							},
							{
								value: testimonialTitleColor,
								colors: backgroundColors,
								onChange: onChangeTestimonialTitleColor,
								label: __( 'Testimonial Title  Color' ),
							},
							{
								value: testimonialContentColor,
								colors: backgroundColors,
								onChange: onChangeTestimonialContentColor,
								label: __( 'Testimonial Content  Color' ),
							},
							{
								value: testimonialNameColor,
								colors: backgroundColors,
								onChange: onChangeTestimonialNameColor,
								label: __( 'Testimonial Name  Color' ),
							},
						]
					}
				>
				</PanelColorSettings>

				<PanelBody
					title={ __( 'Font  Settings' ) }
					initialOpen={ false }
				>
					<RangeControl
						label={ __( 'Font Size' ) }
						value={ testimonialFontSize }
						onChange={ ( value ) => this.props.setAttributes( { testimonialFontSize: value } ) }
						min={ 14 }
						max={ 24 }
						step={ 1 }
					/>

					<SelectControl
						label={ __( 'Testimonial Alignment' ) }
						description={ __( '' ) }
						options={ citeAlignOptions }
						value={ testimonialCiteAlign }
						onChange={ ( value ) => this.props.setAttributes( { testimonialCiteAlign: value } ) }
					/>
					<RangeControl
						label={ __( 'Testimonial Name Font Size' ) }
						value={ testimonialNameFontSize }
						onChange={ ( value ) => this.props.setAttributes( { testimonialNameFontSize: value } ) }
						min={ 14 }
						max={ 24 }
						step={ 1 }
					/>

					<RangeControl
						label={ __( 'Testimonial Title Font Size' ) }
						value={ testimonialTitleFontSize }
						onChange={ ( value ) => this.props.setAttributes( { testimonialTitleFontSize: value } ) }
						min={ 14 }
						max={ 24 }
						step={ 1 }
					/>

					<RangeControl
						label={ __( 'Testimonial Content Font Size' ) }
						value={ testimonialContentFontSize }
						onChange={ ( value ) => this.props.setAttributes( { testimonialContentFontSize: value } ) }
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
						onChange={ ( value ) => this.props.setAttributes( { testimonialMargin: value } ) }
						min={ 1 }
						max={ 30 }
						step={ 1 }
					/>

					<RangeControl
						label={ __( 'Testimonial Padding' ) }
						value={ testimonialPadding }
						onChange={ ( value ) => this.props.setAttributes( { testimonialPadding: value } ) }
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
						onChange={ ( value ) => this.props.setAttributes( { testimonialImageStyle: value } ) }
					/>
				</PanelBody>
			</InspectorControls>
		);
	}
}
