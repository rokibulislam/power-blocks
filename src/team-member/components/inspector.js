/**
 * Inspector Controls
 */

// Setup the block
const { __ } = wp.i18n;
const { Component } = wp.element;
// Import block components
const { PanelColorSettings, InspectorControls, RichText } = wp.editor;
// Import Inspector components
const { PanelBody, RangeControl, ToggleControl, SelectControl, TextControl } = wp.components;
/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
	render() {
		// Setup the attributes
		const {
			attributes: {
				memberName,
				memberNameFontSize,
				memberNameColor,
				memberDesignation,
				memberDesignationColor,
				memberDesignationFontSize,
				memberDescription,
				memberDescriptionColor,
				memberDescriptionFontSize,
				memberAlignment,
				memberBackgroundColor,
				memberBorderRadius,
				memberboxshadow,
				memberMargin,
				memberPadding,
				memberImageStyle,
				socialIconWidth,
				socialIconHeight,
				socialIconLineHeight,
				socialIconShow,
				socialColor,
				socialIconColor,
				socialIconBackgroundColor,
				socialIconBorderColor,
				hoverEffect,
				hoverBackgroundColor,
				hoverBackgroundOpacity,
				facebookLink,
				twitterLink,
				googleplusLink,
			},
		} = this.props;

		const { setAttributes } = this.props;

		// Update color values
		const onChangeBackgroundColor = value => setAttributes( { memberBackgroundColor: value } );
		const onChangeMemberNameColor = value => setAttributes( { memberNameColor: value } );
		const onChangeMemberDescriptionColor = value => setAttributes( { memberDescriptionColor: value } );
		const onChangeMemberDesignationColor = value => setAttributes( { memberDesignationColor: value } );
		return (

			<div>
				<InspectorControls key="inspector">
					<PanelColorSettings
						title={ __( 'Color Settings' ) }
						initialOpen={ false }
						colorSettings={ 
							[
								{
									value: memberBackgroundColor,
									onChange: onChangeBackgroundColor,
									label: __( 'Member Background Color' ),
								},

								{
									value: memberNameColor,
									onChange: onChangeMemberNameColor,
									label: __( 'MemberName Color' ),
								},
								{
									value: memberDescriptionColor,
									onChange: onChangeMemberDescriptionColor,
									label: __( 'Description Color' ),
								},
								{
									value: memberDesignationColor,
									onChange: onChangeMemberDesignationColor,
									label: __( 'Member Designation Color' ),
								},
								{
									value: hoverBackgroundColor,
									onChange: value => setAttributes( { hoverBackgroundColor: value } ),
									label: __( 'Hover Background Color' ),
								},
							]
						}
					>
					</PanelColorSettings>

					<PanelBody
						title={ __( 'Member Settings' ) }
						initialOpen={ false }
					>
						<RangeControl
							label={ __( 'Member Box Shdaow' ) }
							value={ memberboxshadow }
							onChange={ ( value ) => this.props.setAttributes( { memberboxshadow: value } ) }
							min={ 1 }
							max={ 10 }
							step={ 1 }
						/>

						<RangeControl
							label={ __( 'Member Border Radius' ) }
							value={ memberBorderRadius }
							onChange={ ( value ) => this.props.setAttributes( { memberBorderRadius: value } ) }
							min={ 1 }
							max={ 50 }
							step={ 1 }
						/>

						<RangeControl
							label={ __( 'Member Margin' ) }
							value={ memberMargin }
							onChange={ ( value ) => this.props.setAttributes( { memberMargin: value } ) }
							min={ 1 }
							max={ 30 }
							step={ 1 }
						/>

						<RangeControl
							label={ __( 'Member Padding' ) }
							value={ memberPadding }
							onChange={ ( value ) => this.props.setAttributes( { memberPadding: value } ) }
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
							value={ memberImageStyle }
							onChange={ ( value ) => this.props.setAttributes( { memberImageStyle: value } ) }
						/>
					</PanelBody>

					<PanelBody
						title={ __( 'Font Size Settings' ) }
						initialOpen={ false }
					>

						<RangeControl
							label={ __( 'MemberName Font Size' ) }
							value={ memberNameFontSize }
							onChange={ ( value ) => this.props.setAttributes( { memberNameFontSize: value } ) }
							min={ 14 }
							max={ 24 }
							step={ 1 }
						/>
						<RangeControl
							label={ __( 'Member Designation Font Size' ) }
							value={ memberDesignationFontSize }
							onChange={ ( value ) => this.props.setAttributes( { memberDesignationFontSize: value } ) }
							min={ 14 }
							max={ 24 }
							step={ 1 }
						/>

						<RangeControl
							label={ __( 'Description Font Size' ) }
							value={ memberDescriptionFontSize }
							onChange={ ( value ) => this.props.setAttributes( { memberDescriptionFontSize: value } ) }
							min={ 14 }
							max={ 24 }
							step={ 1 }
						/>
					</PanelBody>

					<PanelBody
						title={ __( 'Social Settings' ) }
						initialOpen={ false }
					>
						<ToggleControl
							label={ __( 'Show/Hide Social' ) }
							checked={ socialIconShow }
							onChange={ value => setAttributes( { socialIconShow: value } ) }
						/>

						<ToggleControl
							label={ __( 'Use Social Color' ) }
							checked={ socialColor }
							onChange={ value => setAttributes( { socialColor: value } ) }
						/>

						<RangeControl
							label={ __( 'Icon Box  Height' ) }
							value={ socialIconHeight }
							min={ 20 }
							max={ 40 }
							onChange={ ( value ) => setAttributes( { socialIconHeight: value } ) }
						/>
						<RangeControl
							label={ __( 'Icon Box Width' ) }
							value={ socialIconWidth }
							min={ 20 }
							max={ 40 }
							onChange={ ( value ) => setAttributes( { socialIconWidth: value } ) }
						/>
						<RangeControl
							label={ __( 'Icon Box Line Height' ) }
							value={ socialIconLineHeight }
							min={ 20 }
							max={ 40 }
							onChange={ ( value ) => setAttributes( { socialIconLineHeight: value } ) }
						/>
						<TextControl
							label="FaceBook Link"
							value={ facebookLink }
							onChange={ ( value ) => setAttributes( { facebookLink: value } ) }
						/>

						<TextControl
							label="Twitter Link"
							value={ twitterLink }
							onChange={ ( value ) => setAttributes( { twitterLink: value } ) }
						/>

						<TextControl
							label="Google Plus Link"
							value={ googleplusLink }
							onChange={ ( value ) => setAttributes( { googleplusLink: value } ) }
						/>

						<PanelColorSettings
							title={ __( 'Icon Color' ) }
							initialOpen={ false }
							colorSettings={ [
								{
									value: socialIconColor,
									onChange: value => setAttributes( { socialIconColor: value } ),
									label: __( 'Icon Color' ),
								},
								{
									value: socialIconBackgroundColor,
									onChange: value => setAttributes( { socialIconBackgroundColor: value } ),
									label: __( 'Icon Background Color' ),
								},
								{
									value: socialIconBorderColor,
									onChange: value => setAttributes( { socialIconBorderColor: value } ),
									label: __( 'Icon Border Color' ),
								},
							] }
						/>
					</PanelBody>

					<PanelBody
						title={ __( 'Hover Settings' ) }
						initialOpen={ false }
					>	
						<ToggleControl
							label={ __( 'Show/Hide Hover Effect' ) }
							checked={ hoverEffect }
							onChange={ value => setAttributes( { hoverEffect: value } ) }
						/>

						<RangeControl
							label={ __( 'Hover Background Opacity' ) }
							value={ hoverBackgroundOpacity }
							min={ 0 }
							max={ 1 }
							step={ .1 }
							onChange={ ( value ) => setAttributes( { hoverBackgroundOpacity: value } ) }
						/>

					</PanelBody>
				</InspectorControls>

			</div>
		);
	}
}
