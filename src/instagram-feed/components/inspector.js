const { __ } = wp.i18n;
const { Component } = wp.element;
const { PanelColorSettings,InspectorControls } = wp.editor;
const { PanelBody, PanelRow, RangeControl, ToggleControl,TextControl } = wp.components;
export default class Inspector extends Component {
	render() {
		const {
			attributes: {
				token,
				numberCols,
				numberImages,
				hasEqualImages,
				thumbs,
				gridGap,
				showProfile,
				profile,
				backgroundColor,
			},
			className,
			setAttributes,
		} = this.props;

		return (
			<InspectorControls>
				<PanelBody title={__('Layout Options')}>
						<RangeControl
							value={numberCols}
						//	onChange={onChangeCols}
							min={1}
							max={6}
							step={1}
							allowReset="true"
							label={__('Number of Columns')}
						/>
				</PanelBody>
				<PanelBody title={ __( 'Step 1: Access Tokens' ) }>
						<TextControl
							label={ __( 'Instagram Access Token' ) }
							// value={ token }
							//onChange={ this.onChangeToken }
						/>
				</PanelBody>
					
				<PanelBody title={ __( 'Step 2: Layout Options' ) }>
					<RangeControl
						value={ numberCols }
					//	onChange={ numberCols => setAttributes( { numberCols } ) }
						min={ 1 }
						max={ 6 }
						step={ 1 }
						label={ __( 'Columns' ) }
					/>

					<RangeControl
						value={ numberImages }
					//	onChange={ this.onChangeImages }
						min={ 1 }
						max={ 20 }
						step={ 1 }
						allowReset="true"
						label={ __( 'Images' ) }
					/>

					<RangeControl
						value={ gridGap }
						//onChange={ gridGap => setAttributes( { gridGap } ) }
						min={ 0 }
						max={ 20 }
						step={ 1 }
						label={ __( 'Image spacing (px)' ) }
					/>

					<ToggleControl
						label={ __( 'Show profile?' ) }
						checked={ showProfile }
						help={ __(
							'Show your profile details such as your biography and profile photo.'
						) }
					//	onChange={ this.onChangeShowProfile }
					/>

					<ToggleControl
						label={ __( 'Show equal sized images?' ) }
						checked={ hasEqualImages }
						help={ __( 'Use square thumbnails for each image?' ) }
					//	onChange={ hasEqualImages => setAttributes( { hasEqualImages } ) }
					/>

					<PanelColorSettings
						title={ __( 'Image Background' ) }
						colorSettings={ [
							{
								value: backgroundColor,
								// onChange: colorValue =>
								// 	setAttributes( { backgroundColor: colorValue } ),
								label: __( 'Background Color' ),
							},
						] }
					/>
				</PanelBody>
			</InspectorControls>
		);
	}
}
