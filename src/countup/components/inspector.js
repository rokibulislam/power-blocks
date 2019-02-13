// Setup the block
const { Component } = wp.element;
const { InspectorControls, PanelColorSettings } = wp.editor;
const { RangeControl } = wp.components;
const { __ } = wp.i18n;
export default class Inspector extends Component {
	render() {
		const {
			attributes: {
				// columns,
				// backgroundColor,
				// backgroundImageID,
				// backgroundImageURL,
				// backgroundOpacity,
				// fixedBackground,
				// textColor,
				// countColor,
				// countSize,
				// contentWidth,
				// design = 'plain',
				// align,
				// borderRadius = 12,
				// shadow = 3,
				// countFont,
				// countFontWeight,
				backgroundColor,
				title,
				titleFontSize,
				titleColor,
				content,
				contentFontSize,
				contentColor,
				description,
				descriptionFontSize,
				descriptionColor,
			},
			setAttributes,
		} = this.props;
		const onChangeBackgroundColor = value => setAttributes( { backgroundColor: value } );
		const onChangeTitleColor = value => setAttributes( { titleColor: value } );
		const onChangeContentColor = value => setAttributes( { contentColor: value } );
		const onChangeDescriptionColor = value => setAttributes( { descriptionColor: value } );
		return (
			<InspectorControls>
				<PanelColorSettings
					title={ __( 'Color Settings' ) }
					initialOpen={ false }
					colorSettings={
						[
							{
								value: backgroundColor,
								onChange: onChangeBackgroundColor,
								label: __( 'CountUp Background Color' ),
							},
							{
								value: titleColor,
								onChange: onChangeTitleColor,
								label: __( 'Title  Color' ),
							},
							{
								value: contentColor,
								onChange: onChangeContentColor,
								label: __( 'Content  Color' ),
							},
							{
								value: descriptionColor,
								onChange: onChangeDescriptionColor,
								label: __( 'Description  Color' ),
							},
						]
					}
				>
				</PanelColorSettings>
				<RangeControl
					label={ __( 'Title Font Size' ) }
					value={ titleFontSize }
					onChange={ ( value ) => setAttributes( { titleFontSize: value } ) }
					min={ 0 }
					max={ 50 }
				/>
				<RangeControl
					label={ __( 'Content Font Size' ) }
					value={ contentFontSize }
					onChange={ ( value ) => setAttributes( { contentFontSize: value } ) }
					min={ 0 }
					max={ 50 }
				/>
				<RangeControl
					label={ __( 'Description Font Size' ) }
					value={ descriptionFontSize }
					onChange={ ( value ) => setAttributes( { descriptionFontSize: value } ) }
					min={ 0 }
					max={ 50 }
				/>
			</InspectorControls>
		);
	}
}
