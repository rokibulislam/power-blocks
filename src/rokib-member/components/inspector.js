/**
 * Inspector Controls
 */

// Setup the block
const { __ } = wp.i18n;
const { Component } = wp.element;
// Import block components
const { PanelColorSettings, InspectorControls, RichText } = wp.editor;
// Import Inspector components
const { PanelBody, RangeControl, ToggleControl, SelectControl, TextControl, RadioControl } = wp.components;
// import { defaultAttributes } from './attributes';
import { gutenTeamAttribute } from './attributes';
/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
	faqsUpdate( index, key, newValue ) {
		const self = this;
		const items = self.props.attributes.items;
		return items.map( function( item, currIndex ) {
			if ( index === currIndex ) {
				item[ key ] = newValue;
			}
			return item;
		} );
	}

	// updatePadding = (...args) => {
	// 	const paddingLock = this.props.attributes.paddingLock;
	// 	const padding = this.props.attributes.padding[index];
	// 	const newPadding = args[0];
	// 	const position = {
	// 		top:0, right:1,button:2,left:3
	// 	}
	// 	const updatePadding = padding.map( (value,index) => {
	// 		if(!!paddingLock) {
	// 			return newPadding;
	// 		} else {
	// 			if ( index == position[args[1]]) {
	// 				return newPadding;
	// 			} else {
	// 				return value;
	// 			}
	// 		}
	// 	});
	// 	this.props.setAttributes( { padding: updatePadding})
	// }
	render() {
		// Setup the attributes
		const {
			attributes: {
				items,
				design,
			},
			state,
			setAttributes
		} = this.props;
		// const { setAttributes } = this.props;
		// Update color values
		// const onChangeBackgroundColor = value => setAttributes( { memberBackgroundColor: value } );
		// const onChangeMemberNameColor = value => setAttributes( { memberNameColor: value } );
		// const onChangeMemberDescriptionColor = value => setAttributes( { memberDescriptionColor: value } );
		// const onChangeMemberDesignationColor = value => setAttributes( { memberDesignationColor: value } );
		// console.log( 'rokib' + state.selected === undefined );
		// console.log( 'rokib' );
		// const newItems = [];

		// onChangeHandler =  value  => {
		// 	// newItems.push( defaultAttributes );
		// 	// newItems.push( defaultAttributes );
		// 	// newItems.push( defaultAttributes );
		// 	newItems = [
		// 		// {
		// 			gutenTeamAttribute,
		// 		// },
		// 		// {
		// 			gutenTeamAttribute,
		// 		// },
		// 		// {
		// 			// defaultAttributes,
		// 		// },
		// 	];

		// 	console.log( newItems );
		// 	console.log( 'rokib' + state.selected );

		// 	setAttributes( {
		// 		// design: value,
		// 		items: newItems,
		// 	} );
		// }

		// console.log( design );

		const options=[
			{
				image: 'https://picsum.photos/89', label: 'Basic', value: 'basic',
			},
			{
				image: 'https://picsum.photos/89', label: 'Advance', value: 'advance',
			},
		];

		const fixedOptions = options.map( option => {
			return {
				label: <div> { option.label }  <img src={ option.image } alt={ '' } /> </div>,
				title: option.label,
				value: option.value,
			}
		} );

		return (

			<div>
				<InspectorControls key="inspector">
{/*  
					<RadioControl
 						// { ...props }
 						className="ugb-design-control"
 						selected={ design }
 						options={ fixedOptions }
 						// options={ [
 						// 	{ label: 'basic', value: 'basic' },
 						// ] }
 						// onChange={ this.props.addItems() }
 						onChange={ onChangeHandler() }
 					/>  */}
					<PanelColorSettings
						title={ __( 'Color Settings' ) }
						initialOpen={ false }
						colorSettings={
							[
								{
									// value: memberBackgroundColor,
									// onChange: onChangeBackgroundColor,
									value: ( state.selected !== -1 ) ? items[ state.selected ].memberBackgroundColor : '',
									onChange: value => setAttributes( {
										items: this.faqsUpdate( state.selected, 'memberBackgroundColor', value ),
									} ),
									label: __( 'Member Background Color' ),
								},

								{
									// value: memberNameColor,
									// onChange: onChangeMemberNameColor,
									value: ( state.selected !== -1 ) ? items[ state.selected ].memberNameColor : '',
									onChange: value => setAttributes( {
										items: this.faqsUpdate( state.selected, 'memberNameColor', value ),
									} ),
									label: __( 'MemberName Color' ),
								},
								{
									// value: memberDescriptionColor,
									// onChange: onChangeMemberDescriptionColor,
									value: ( state.selected !== -1 ) ? items[ state.selected ].memberDescriptionColor : '',
									onChange: value => setAttributes( {
										items: this.faqsUpdate( state.selected, 'memberDescriptionColor', value ),
									} ),
									label: __( 'Description Color' ),
								},
								{
									// value: memberDesignationColor,
									// onChange: onChangeMemberDesignationColor,
									value: ( state.selected !== -1 ) ? items[ state.selected ].memberDesignationColor : '',
									onChange: value => setAttributes( {
										items: this.faqsUpdate( state.selected, 'memberDesignationColor', value ),
									} ),
									label: __( 'Member Designation Color' ),
								},
								{
									// value: hoverBackgroundColor,
									// onChange: value => setAttributes( {
									// 	items: this.faqsUpdate( state.selected, 'memberDesignationColor', value ),
									// } ),
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
							// value={ memberboxshadow }
							// onChange={ ( value ) => this.props.setAttributes( { memberboxshadow: value } ) }
							value={ ( state.selected !== -1 ) ? items[ state.selected ].memberboxshadow : '' }
							onChange={ ( value ) => setAttributes( {
								items: this.faqsUpdate( state.selected, 'memberboxshadow', value ),
							} ) }
							min={ 1 }
							max={ 10 }
							step={ 1 }
						/>

						<RangeControl
							label={ __( 'Member Border Radius' ) }
							// value={ memberBorderRadius }
							// onChange={ ( value ) => this.props.setAttributes( { memberBorderRadius: value } ) }
							value={ ( state.selected !== -1 ) ? items[ state.selected ].memberBorderRadius : '' }
							onChange={ ( value ) => setAttributes( {
								items: this.faqsUpdate( state.selected, 'memberBorderRadius', value ),
							} ) }
							min={ 1 }
							max={ 50 }
							step={ 1 }
						/>

						<RangeControl
							label={ __( 'Member Margin' ) }
							// value={ memberMargin }
							// onChange={ ( value ) => this.props.setAttributes( { memberMargin: value } ) }
							value={ ( state.selected !== -1 ) ? items[ state.selected ].memberMargin : '' }
							onChange={ ( value ) => setAttributes( {
								items: this.faqsUpdate( state.selected, 'memberMargin', value ),
							} ) }
							min={ 1 }
							max={ 30 }
							step={ 1 }
						/>

						<RangeControl
							label={ __( 'Member Padding' ) }
							// value={ memberPadding }
							// onChange={ ( value ) => this.props.setAttributes( { memberPadding: value } ) }
							value={ ( state.selected !== -1 ) ? items[ state.selected ].memberPadding : '' }
							onChange={ ( value ) => setAttributes( {
								items: this.faqsUpdate( state.selected, 'memberPadding', value ),
							} ) }
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
							value={ ( state.selected !== -1 ) ? items[ state.selected ].memberImageStyle : '' }
							onChange={ ( value ) => setAttributes( {
								items: this.faqsUpdate( state.selected, 'memberImageStyle', value ),
							} ) }
							// value={ memberImageStyle }
							// onChange={ ( value ) => this.props.setAttributes( { memberImageStyle: value } ) }
						/>
					</PanelBody>

					<PanelBody
						title={ __( 'Font Size Settings' ) }
						initialOpen={ false }
					>

						<RangeControl
							label={ __( 'MemberName Font Size' ) }
							// value={ memberNameFontSize }
							// onChange={ ( value ) => this.props.setAttributes( { memberNameFontSize: value } ) }
							value={ ( state.selected !== -1 ) ? items[ state.selected ].memberNameFontSize : '' }
							onChange={ ( value ) => setAttributes( {
								items: this.faqsUpdate( state.selected, 'memberNameFontSize', value ),
							} ) }
							min={ 18 }
							max={ 36 }
							step={ 1 }
						/>
						<RangeControl
							label={ __( 'Member Designation Font Size' ) }
							// value={ memberDesignationFontSize }
							// onChange={ ( value ) => this.props.setAttributes( { memberDesignationFontSize: value } ) }
							value={ ( state.selected !== -1 ) ? items[ state.selected ].memberDesignationFontSize : '' }
							onChange={ ( value ) => setAttributes( {
								items: this.faqsUpdate( state.selected, 'memberDesignationFontSize', value ),
							} ) }
							min={ 14 }
							max={ 24 }
							step={ 1 }
						/>

						<RangeControl
							label={ __( 'Description Font Size' ) }
							// value={ memberDescriptionFontSize }
							// onChange={ ( value ) => this.props.setAttributes( { memberDescriptionFontSize: value } ) }
							value={ ( state.selected !== -1 ) ? items[ state.selected ].memberDescriptionFontSize : '' }
							onChange={ ( value ) => setAttributes( {
								items: this.faqsUpdate( state.selected, 'memberDescriptionFontSize', value ),
							} ) }
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
							checked={ ( state.selected !== -1 ) ? items[ state.selected ].socialIconShow : false }
							//onChange={ value => setAttributes( { socialIconShow: value } ) }
							// value={ ( state.selected !== -1 ) ? items[ state.selected ].socialIconShow : false }
							onChange={ ( value ) => setAttributes( {
								items: this.faqsUpdate( state.selected, 'socialIconShow', value ),
							} ) }
						/>

						<ToggleControl
							label={ __( 'Use Social Color' ) }
							checked= {  ( state.selected !== -1 ) ? items[ state.selected ].socialColor : '' }
							// onChange={ value => setAttributes( { socialColor: value } ) }
							// value={ ( state.selected !== -1 ) ? items[ state.selected ].socialColor : '' }
							onChange={ ( value ) => setAttributes( {
								items: this.faqsUpdate( state.selected, 'socialColor', value ),
							} ) }
						/>

						<RangeControl
							label={ __( 'Icon Box  Height' ) }
							// value={ socialIconHeight }
							min={ 20 }
							max={ 40 }
							// onChange={ ( value ) => setAttributes( { socialIconHeight: value } ) }
							// value={ ( state.selected !== -1 ) ? items[ state.selected ].socialIconHeight : '' }
							onChange={ ( value ) => setAttributes( {
								items: this.faqsUpdate( state.selected, 'socialIconHeight', value ),
							} ) }
						/>
						<RangeControl
							label={ __( 'Icon Box Width' ) }
							// value={ socialIconWidth }
							min={ 20 }
							max={ 40 }
							//onChange={ ( value ) => setAttributes( { socialIconWidth: value } ) }
							value={ ( state.selected !== -1 ) ? items[ state.selected ].socialIconWidth : '' }
							onChange={ ( value ) => setAttributes( {
								items: this.faqsUpdate( state.selected, 'socialIconWidth', value ),
							} ) }
						/>
						<RangeControl
							label={ __( 'Icon Box Line Height' ) }
							// value={ socialIconLineHeight }
							min={ 20 }
							max={ 40 }
							//onChange={ ( value ) => setAttributes( { socialIconLineHeight: value } ) }
							value={ ( state.selected !== -1 ) ? items[ state.selected ].socialIconLineHeight : '' }
							onChange={ ( value ) => setAttributes( {
								items: this.faqsUpdate( state.selected, 'socialIconLineHeight', value ),
							} ) }
						/>
						<TextControl
							label="FaceBook Link"
							// value={ facebookLink }
							// onChange={ ( value ) => setAttributes( { facebookLink: value } ) }
							value={ ( state.selected !== -1 ) ? items[ state.selected ].facebookLink : '' }
							onChange={ ( value ) => setAttributes( {
								items: this.faqsUpdate( state.selected, 'facebookLink', value ),
							} ) }
						/>

						<TextControl
							label="Twitter Link"
							// value={ twitterLink }
							// onChange={ ( value ) => setAttributes( { twitterLink: value } ) }
							value={ ( state.selected !== -1 ) ? items[ state.selected ].twitterLink : '' }
							onChange={ ( value ) => setAttributes( {
								items: this.faqsUpdate( state.selected, 'twitterLink', value ),
							} ) }
						/>

						<TextControl
							label="Google Plus Link"
							// value={ googleplusLink }
							// onChange={ ( value ) => setAttributes( { googleplusLink: value } ) }
							value={ ( state.selected !== -1 ) ? items[ state.selected ].googleplusLink : '' }
							onChange={ ( value ) => setAttributes( {
								items: this.faqsUpdate( state.selected, 'googleplusLink', value ),
							} ) }
						/>

						<PanelColorSettings
							title={ __( 'Icon Color' ) }
							initialOpen={ false }
							colorSettings={ [
								{
									// value: socialIconColor,
									// onChange: value => setAttributes( { socialIconColor: value } ),
									label: __( 'Icon Color' ),
									// value: '',
									value: ( state.selected !== -1 ) ? items[ state.selected ].socialIconColor : '',
									onChange: value => setAttributes( {
										items: this.faqsUpdate( state.selected, 'socialIconColor', value ),
									} ),
								},
								{
									// value: socialIconBackgroundColor,
									// onChange: value => setAttributes( { socialIconBackgroundColor: value } ),
									label: __( 'Icon Background Color' ),
									value: ( state.selected !== -1 ) ? items[ state.selected ].socialIconBackgroundColor : '',									
									onChange: value => setAttributes( {
										items: this.faqsUpdate( state.selected, 'socialIconBackgroundColor', value ),
									} ),
								},
								{
									// value: socialIconBorderColor,
									// onChange: value => setAttributes( { socialIconBorderColor: value } ),
									label: __( 'Icon Border Color' ),
									value: ( state.selected !== -1 ) ? items[ state.selected ].socialIconBorderColor : '',									
									onChange: value => setAttributes( {
										items: this.faqsUpdate( state.selected, 'socialIconBorderColor', value ),
									} ),
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
							// checked={ hoverEffect }
							// onChange={ value => setAttributes( { hoverEffect: value } ) }
						/>

						<RangeControl
							label={ __( 'Hover Background Opacity' ) }
							// value={ hoverBackgroundOpacity }
							min={ 0 }
							max={ 1 }
							step={ .1 }
							// onChange={ ( value ) => setAttributes( { hoverBackgroundOpacity: value } ) }
						/>

					</PanelBody>

				</InspectorControls>
			</div>
		);
	}
}
