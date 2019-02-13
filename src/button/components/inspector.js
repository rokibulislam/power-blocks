const { __ } = wp.i18n;
const { Component } = wp.element;
// Import block components
const {
	InspectorControls,
	PanelColorSettings,
} = wp.editor;
const { TextControl, RadioControl } = wp.components;
import DesignPanelBody from './designpanelbody';
const { PanelBody, ToggleControl, SelectControl, RangeControl } = wp.components;

export default class Inspector extends Component {

	faqsUpdate( index, key, newValue ) {
		const self = this;
		const items = self.props.attributes.items;
		return items.map( function( item, currIndex ) {
			if ( index == currIndex ) {
				item[ key ] = newValue;
			}
			return item;
		} );
	}

	render() {
		const {
			attributes: {
				items,
				design,
			},
			setAttributes,
			state,
		} = this.props;

		// const onChangeHandler = value => setAttributes( { design: value } );

		// const options=[
		// 	{
		// 		image: 'https://picsum.photos/89', label: 'Basic', value: 'basic',
		// 	},
		// 	{
		// 		image: 'https://picsum.photos/89', label: 'Plain', value: 'plain',
		// 	},
		// ];

		// const fixedOptions = options.map( option => {
		// 	return {
		// 		label: <img src={ option.image } alt={ '' } />,
		// 		title: option.label,
		// 		value: option.value,
		// 	}
		// } );
		return (
			<div>
				<InspectorControls>

					{/* <DesignPanelBody
						options={ options }
					>
					</DesignPanelBody>

					<RadioControl
						// { ...props }
						className="ugb-design-control"
						selected={ design }
						options={ fixedOptions }
						// options={ [
						// 	{ label: 'basic', value: 'basic' },
						// ] }
						onChange={ onChangeHandler }
					/> */}

					<PanelBody>

						<TextControl
							label="Button Link"
							value={ ( state.selected !== -1 ) ? items[ state.selected ].buttonUrl : undefined }
							onChange={ ( value ) => setAttributes( {
								 items: this.faqsUpdate( state.selected, 'buttonUrl', value ),
							} ) }
						/>

					<SelectControl
						label="Button Size"
						value={ ( state.selected !== -1 ) ? items[ state.selected ].buttonSize : undefined }
						options={ [
							{ label: "Normal", value: "" },
							{ label: "Small", value: ".75em" },
							{ label: "Medium", value: "1.25em" },
							{ label: "Large", value: "1.5em" }
						] }
						onChange={ ( value ) => setAttributes( {
							items: this.faqsUpdate( state.selected, 'buttonSize', value ),
					    } ) }
					/>

						<ToggleControl
							label={ __( 'Open link in new window' ) }
							checked={ ( state.selected !== -1 ) ? items[ state.selected ].buttonTarget : undefined }
							onChange={ value => {
								setAttributes( {
									items: this.faqsUpdate( state.selected, 'buttonTarget', value ),
								} );
							} }
						/>

						<RangeControl
							label="Border Radius"
							value={ ( state.selected !== -1 ) ? items[ state.selected ].borderRadius : undefined }
							onChange={ value => setAttributes( {
								items: this.faqsUpdate( state.selected, 'borderRadius', value ),
							} ) }
							min={ 1 }
							max={ 50 }
							initialPosition={ 1 }
						/> 

						<PanelColorSettings
							initialOpen={ false }
							title={ __( 'Color Settings' ) }
							colorSettings={ [
								{
									label: __( 'Background Color' ),
									value: ( state.selected !== -1 ) ? items[ state.selected ].buttonBackground : undefined ,
									onChange: value => setAttributes( {
										items: this.faqsUpdate( state.selected, 'buttonBackground', value ),
									} ),
								},
								{
									label: __( 'Border Color' ),
									value: ( state.selected !== -1 ) ? items[ state.selected ].borderColor : undefined ,
									onChange: value => setAttributes( {
										items: this.faqsUpdate( state.selected, 'borderColor', value )
									} ),
								},
								{
									label: __( 'Hover Background Color' ),
									value: ( state.selected !== -1 ) ? items[ state.selected ].buttonHoverBackground : undefined ,
									onChange: value => setAttributes( {
										items: this.faqsUpdate( state.selected, 'buttonHoverBackground', value ),
									} ),
								},

								{
									label: __( 'Hover Color' ),
									value: ( state.selected !== -1 ) ? items[ state.selected ].hoverColor : undefined ,
									onChange: value => setAttributes( {
										items: this.faqsUpdate( state.selected, 'hoverColor', value ),
									} ),
								},

								{
									label: __( 'Text Color' ),
									value: ( state.selected !== -1 ) ? items[ state.selected ].buttonTextColor : undefined ,
									onChange: value => setAttributes( {
										items: this.faqsUpdate( state.selected, 'buttonTextColor', value ),
									} ),
								},
							] }
						/>
					</PanelBody>
				</InspectorControls>
			</div>
		);
	}
}
