/**
 * Inspector Controls
 */

// Setup the block
const { __ } = wp.i18n;
const { Component } = wp.element;

// Import block components
const {
	InspectorControls,
	BlockDescription,
	ColorPalette,
	PanelColorSettings,
} = wp.editor;

// Import Inspector components
const {
	Toolbar,
	Button,
	PanelBody,
	PanelRow,
	FormToggle,
	RangeControl,
	SelectControl,
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {

	constructor( props ) {
		super( ...arguments );
	}

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

		// Setup the attributes
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
				testimonialCiteAlign 
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
				<PanelBody>
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

					<PanelColorSettings
						title={ __( 'Background Color' ) }
						initialOpen={ false }
						colorSettings={ [ {
							value: testimonialBackgroundColor,
							colors: backgroundColors,
							onChange: onChangeBackgroundColor,
							label: __( 'Background Color' ),
						} ] }
					>
					</PanelColorSettings>

					<PanelColorSettings
						title={ __( 'Text Color' ) }
						initialOpen={ false }
						colorSettings={ [ {
							value: testimonialTextColor,
							onChange: onChangeTextColor,
							label: __( 'Text Color' ),
						} ] }
					>
					</PanelColorSettings>
				</PanelBody>

				<PanelBody
					title={ __( 'Testimonial Name Settings' ) }
					initialOpen={ false }
				>
					<RangeControl
						label={ __( 'Testimonial Name Font Size' ) }
						value={ testimonialFontSize }
						onChange={ ( value ) => this.props.setAttributes( { testimonialNameFontSize: value } ) }
						min={ 14 }
						max={ 24 }
						step={ 1 }
					/>
					<PanelColorSettings
						title={ __( 'Testimonial Name Color' ) }
						initialOpen={ false }
						colorSettings={ [ {
							value: testimonialNameColor,
							onChange: onChangeTestimonialNameColor,
							label: __( 'Testimonial Name  Color' ),
						} ] }
					>
					</PanelColorSettings>

				</PanelBody>

				<PanelBody
					title={ __( 'Testimonial Designation Settings' ) }
					initialOpen={ false }
				>
					<RangeControl
						label={ __( 'Testimonial Title Font Size' ) }
						value={ testimonialTitleFontSize }
						onChange={ ( value ) => this.props.setAttributes( { testimonialTitleFontSize: value } ) }
						min={ 14 }
						max={ 24 }
						step={ 1 }
					/>
					<PanelColorSettings
						title={ __( 'Testimonial Title Color' ) }
						initialOpen={ false }
						colorSettings={ [ {
							value: testimonialTitleColor,
							onChange: onChangeTestimonialTitleColor,
							label: __( 'Testimonial Title  Color' ),
						} ] }
					>
					</PanelColorSettings>

				</PanelBody>

				<PanelBody
					title={ __( 'Testimonial Content Settings' ) }
					initialOpen={ false }
				>
					<RangeControl
						label={ __( 'Testimonial Content Font Size' ) }
						value={ testimonialContentFontSize }
						onChange={ ( value ) => this.props.setAttributes( { testimonialContentFontSize: value } ) }
						min={ 14 }
						max={ 24 }
						step={ 1 }
					/>
					<PanelColorSettings
						title={ __( 'Testimonial Content Color' ) }
						initialOpen={ false }
						colorSettings={ [ {
							value: testimonialContentColor,
							onChange: onChangeTestimonialContentColor,
							label: __( 'Testimonial Content  Color' ),
						} ] }
					>
					</PanelColorSettings>

				</PanelBody>
			</InspectorControls>
		);
	}
}
