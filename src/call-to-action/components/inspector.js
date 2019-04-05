const { __ } = wp.i18n;
const { Component } = wp.element;const {
	InspectorControls,
	PanelColorSettings,
	MediaUpload,
} = wp.editor;const {
	PanelBody,
	RangeControl,
	SelectControl,
	ToggleControl,
	IconButton,
} = wp.components;
export default class Inspector extends Component {
	render() {
		// Setup the attributes
		const {
			buttonBackgroundColor,
			buttonTextColor,
			buttonSize,
			buttonShape,
			buttonTarget,
			titleFontSize,
			ctaTextFontSize,
			ctaBackgroundColor,
			ctaTextColor,
			ctaTitleColor,
			dimRatio,
			imgURL,
			imgID,
			imgAlt,
			ctaPadding,
			ctaMargin,
		} = this.props.attributes;
		const { setAttributes } = this.props;

		// Button size values
		const buttonSizeOptions = [
			{ value: 'power-button-size-small', label: __( 'Small' ) },
			{ value: 'power-button-size-medium', label: __( 'Medium' ) },
			{ value: 'power-button-size-large', label: __( 'Large' ) },
			{ value: 'power-button-size-extralarge', label: __( 'Extra Large' ) },
		];

		// Button shape
		const buttonShapeOptions = [
			{ value: 'power-button-shape-square', label: __( 'Square' ) },
			{ value: 'power-button-shape-rounded', label: __( 'Rounded Square' ) },
			{ value: 'power-button-shape-circular', label: __( 'Circular' ) },
		];

		// Button colors
		const buttonColors = [
			{ color: '#392F43', name: 'black' },
			{ color: '#3373dc', name: 'royal blue' },
			{ color: '#2DBAA3', name: 'teal' },
			{ color: '#209cef', name: 'sky blue' },
			{ color: '#2BAD59', name: 'green' },
			{ color: '#ff3860', name: 'pink' },
			{ color: '#7941b6', name: 'purple' },
			{ color: '#F7812B', name: 'orange' },
		];

		// Change the image
		const onSelectImage = img => {
			setAttributes( {
				imgID: img.id,
				imgURL: img.url,
				imgAlt: img.alt,
			} );
		};

		// Clear the image
		const onRemoveImage = () => {
			setAttributes( {
				imgID: null,
				imgURL: null,
				imgAlt: null,
			} );
		};
		// Update color values
		const onChangeBackgroundColor = value => setAttributes( { ctaBackgroundColor: value } );
		const onChangeTextColor = value => setAttributes( { ctaTextColor: value } );
		const onChangeTitleColor = value => setAttributes( { ctaTitleColor: value } );
		const onChangeButtonColor = value => setAttributes( { buttonBackgroundColor: value } );
		const onChangeButtonTextColor = value => setAttributes( { buttonTextColor: value } );

		return (
			<InspectorControls key="inspector">
				<PanelColorSettings
					title={ __( 'Color Setting' ) }
					initialOpen={ false }
					colorSettings={
						[
							{
								value: buttonBackgroundColor,
								onChange: onChangeButtonColor,
								label: __( 'Button Color' ),
								colors: buttonColors,
							},
							{
								value: buttonTextColor,
								onChange: onChangeButtonTextColor,
								label: __( 'Button Text Color' ),
								colors: buttonColors,
							},

							{
								value: ctaBackgroundColor,
								onChange: onChangeBackgroundColor,
								label: __( 'Background Color' ),
								colors: buttonColors,
							},
							{
								value: ctaTextColor,
								onChange: onChangeTextColor,
								label: __( 'Text Color' ),
								colors: buttonColors,
							},
							{
								value: ctaTitleColor,
								onChange: onChangeTitleColor,
								label: __( 'Title Color' ),
								colors: buttonColors,
							},
						]
					}
				>

				</PanelColorSettings>

				<PanelBody
					title={ __( 'Call To Action Settings' ) }
					initialOpen={ false }
				>

					<RangeControl
						label={ __( 'Margin' ) }
						value={ ctaMargin }
						onChange={ ( value ) => this.props.setAttributes( { ctaMargin: value } ) }
						min={ 1 }
						max={ 30 }
						step={ 1 }
					/>

					<RangeControl
						label={ __( 'Member Padding' ) }
						value={ ctaPadding }
						onChange={ ( value ) => this.props.setAttributes( { ctaPadding: value } ) }
						min={ 1 }
						max={ 30 }
						step={ 1 }
					/>
				</PanelBody>
				<PanelBody title={ __( 'Text Options' ) } initialOpen={ true }>
					<RangeControl
						label={ __( 'Title Font Size' ) }
						value={ titleFontSize }
						onChange={ ( value ) => this.props.setAttributes( { titleFontSize: value } ) }
						min={ 24 }
						max={ 60 }
						step={ 2 }
					/>

					<RangeControl
						label={ __( 'Text Font Size' ) }
						value={ ctaTextFontSize }
						onChange={ ( value ) => this.props.setAttributes( { ctaTextFontSize: value } ) }
						min={ 14 }
						max={ 24 }
						step={ 2 }
					/>
				</PanelBody>

				<PanelBody title={ __( 'Background Options' ) } initialOpen={ false }>
					<p>{ __( 'Select a background image:' ) }</p>
					<MediaUpload
						onSelect={ onSelectImage }
						type="image"
						value={ imgID }
						render={ ( { open } ) => (
							<div>
								<IconButton
									className="ab-cta-inspector-media"
									label={ __( 'Edit image' ) }
									icon="format-image"
									onClick={ open }
								>
									{ __( 'Select Image' ) }
								</IconButton>

								{ imgURL && !! imgURL.length && (
									<IconButton
										className="ab-cta-inspector-media"
										label={ __( 'Remove Image' ) }
										icon="dismiss"
										onClick={ onRemoveImage }
									>
										{ __( 'Remove' ) }
									</IconButton>
								) }
							</div>
						) }
					>
					</MediaUpload>

					{ imgURL && !! imgURL.length && (
						<RangeControl
							label={ __( 'Image Opacity' ) }
							value={ dimRatio }
							onChange={ ( value ) => this.props.setAttributes( { dimRatio: value } ) }
							min={ 0 }
							max={ 100 }
							step={ 10 }
						/>
					) }

				</PanelBody>

				<PanelBody title={ __( 'Button Options' ) } initialOpen={ false }>
					<ToggleControl
						label={ __( 'Open link in new window' ) }
						checked={ buttonTarget }
						onChange={ () => this.props.setAttributes( { buttonTarget: ! buttonTarget } ) }
					/>

					<SelectControl
						label={ __( 'Button Size' ) }
						value={ buttonSize }
						options={ buttonSizeOptions.map( ( { value, label } ) => ( {
							value: value,
							label: label,
						} ) ) }
						onChange={ ( value ) => {
							this.props.setAttributes( {
								buttonSize: value,
							} );
						} }
					/>

					<SelectControl
						label={ __( 'Button Shape' ) }
						value={ buttonShape }
						options={ buttonShapeOptions.map( ( { value, label } ) => ( {
							value: value,
							label: label,
						} ) ) }
						onChange={ ( value ) => {
							this.props.setAttributes( {
								buttonShape: value,
							} );
						} }
					/>
				</PanelBody>
			</InspectorControls>
		);
	}
}
