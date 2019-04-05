const { Component } = wp.element;
const { __ } = wp.i18n;
const { InspectorControls } = wp.editor;
const { PanelBody, RangeControl, SelectControl } = wp.components;
export default class Inspector extends Component {
	render() {
		const {
			attributes: { BeforeImageFilter, BeforeImageFilterPerc },
			setAttributes,
		} = this.props;

		const imageFilters = [
			{ value: 'brightness', label: 'Brightness' },
			{ value: 'contrast', label: 'Contrast' },
			{ value: 'grayscale', label: 'GrayScale' },
			{ value: 'invert', label: 'Invert' },
			{ value: 'opacity', label: 'Opacity' },
			{ value: 'sepia', label: 'Sepia' },
			{ value: 'saturate', label: 'Saturate' },
		];

		return (
			<InspectorControls key="inspector">
				<PanelBody title="Image Filter" initialOpen={ true }>
					<SelectControl
						label={ __( 'Before Image Filter' ) }
						value={ BeforeImageFilter }
						options={ imageFilters.map( ( { value, label } ) => ( {
							value: value,
							label: label,
						} ) ) }
						onChange={ BeforeImageFilter =>
							setAttributes( {
								BeforeImageFilter,
							} )
						}
					/>
					<RangeControl
						label={ __( 'Before Image Filter Percentage' ) }
						min={ 1 }
						max={ 100 }
						step={ 1 }
						value={ BeforeImageFilterPerc }
						onChange={ BeforeImageFilterPerc =>
							setAttributes( { BeforeImageFilterPerc } )
						}
						initialPosition={ 0.01 }
					/>
				</PanelBody>
			</InspectorControls>
		);
	}
}
