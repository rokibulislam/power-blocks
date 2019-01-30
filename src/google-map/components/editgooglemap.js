const { InspectorControls } = wp.editor;
const { Component } = wp.element;
const { 
	PanelBody,
	SelectControl,
	RangeControl,
	TextControl,
	Button,
} = wp.components;
const { __ } = wp.i18n;
import Googlemap from './googlemap';
export default class EditGooglemap extends Component {
	render() {
		// Setup the attributes
		const {
			attributes: {
				location,
				type,
				zoom,
				height,
			},
			attributes,
			isSelected,
			className,
			setAttributes
		} = this.props;

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
		return [
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
			</InspectorControls>,
			<Googlemap { ...this.props } >
				Google MAP Admin
			</Googlemap>
		];
	}
}
