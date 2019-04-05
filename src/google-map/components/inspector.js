const { __ } = wp.i18n;
const { InspectorControls } = wp.editor;
const { Component } = wp.element;
const { PanelBody, SelectControl, RangeControl, TextControl, ToggleControl, Button } = wp.components;
export default class Inspector extends Component {
	
	constructor( props ) {
		super( ...arguments );
		this.state = {
			apiKey: '',
		};
		this.saveApiKey = this.saveApiKey.bind(this);
	}
	saveApiKey() {
	// saveApiKey = () => {

	}

	render() {
		const changeAPI = ( value ) => {

		};

		const changeLocation = ( value ) => {
			this.props.setAttributes( { location: value } );
		};

		const changeMapType = ( value ) => {
			this.props.setAttributes( { type: value } );
		};

		const changeZoom = ( value ) => {
			this.props.setAttributes( { zoom: value } );
		};

		const changeHeight = ( value ) => {
			this.props.setAttributes( { height: value } );
		};

		const { attributes,setAttributes } = this.props;

		const { 
			address,height,skin,pinned,controls,zoom,iconSize,
			mapTypeControl,zoomControl,streetViewControl,fullscreenControl,
		} = attributes;

		return (
			<div>
				<InspectorControls key="inspector" >
					<PanelBody
						title={ __( 'Map Settings' ) }
					>
						<SelectControl
							label={ __( 'Map Type' ) }
							value={ this.props.attributes.type }
							options={ [
								{ label: __( 'Road Map' ), value: 'roadmap' },
								{ label: __( 'Satellite View' ), value: 'satellite' },
							] }
							onChange={ changeMapType }
						/>

						<RangeControl
							label={ __( 'Map Zoom Level' ) }
							value={ this.props.attributes.zoom }
							onChange={ changeZoom }
							min={ 0 }
							max={ 21 }
						/>

						<TextControl
							label={ __( 'Map Height' ) }
							type="text"
							value={ this.props.attributes.height }
							onChange={ changeHeight }
						/>
						<TextControl
							type="text"
							placeholder={ __( 'Google Maps API Key' ) }
							className="components-placeholder__input"
							onChange={ changeAPI }
						/>

					</PanelBody>

					<PanelBody
						title={ __( 'Map Controls' ) }
						initialOpen={ false }
					>
						<ToggleControl
							label={ __( 'Map Type' ) }
							checked={ !! mapTypeControl }
							onChange={ () => setAttributes( { mapTypeControl: ! mapTypeControl } ) }
							help={ !! mapTypeControl ? __( 'Switching between standard and satellite map views is enabled.' ) : __( 'Toggle to enable switching between standard and satellite maps.' ) }
						/>
						<ToggleControl
							label={ __( 'Zoom Controls' ) }
							checked={ !! zoomControl }
							onChange={ () => setAttributes( { zoomControl: ! zoomControl } ) }
							help={ !! zoomControl ? __( 'Showing map zoom controls.' ) : __( 'Toggle to enable zooming in and out on the map with zoom controls.' ) }
						/>
						<ToggleControl
							label={ __( 'Street View' ) }
							checked={ !! streetViewControl }
							onChange={ () => setAttributes( { streetViewControl: ! streetViewControl } ) }
							help={ !! streetViewControl ? __( 'Showing the street view map control.' ) : __( 'Toggle to show the street view control at the bottom right.' ) }
						/>
						<ToggleControl
							label={ __( 'Fullscreen Toggle' ) }
							checked={ !! fullscreenControl }
							onChange={ () => setAttributes( { fullscreenControl: ! fullscreenControl } ) }
							help={ !! fullscreenControl ? __( 'Showing the fullscreen map control.' ) : __( 'Toggle to show the fullscreen map control.' ) }
						/>
					</PanelBody>

					<PanelBody title={ __( 'Google Maps API Key' ) } initialOpen={ false }>
						<p>{ __( 'Add your Google Maps API key. Updating this API key will set all your maps to use the new key.' ) }</p>
						{ ( this.state.apiKey === '' ) ?
							<p><span><a href={ ' ' } > { __( 'Retrieve your key' ) }</a> | <a href={ ' ' } >{ __( 'Need help?' ) } </a> </span> </p> : null }
						<TextControl
							value={ this.state.apiKey }
							onChange={ value => this.setState( { apiKey: value } ) }
							placeholder={ __( 'Enter Google API Key…' ) }
							className="components-block-coblocks-map-api-key__custom-input"
						/>
						<Button
							isPrimary
							onClick={ this.saveApiKey }
							disabled={ this.state.apiKey === '' }
						>
							{ __( 'Update' ) }
						</Button>
					</PanelBody>
				</InspectorControls>
			</div>
		)
	}
}

