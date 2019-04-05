const { __ } = wp.i18n;
const { Component } = wp.element;
const { InspectorControls, PanelColorSettings } = wp.editor;
const { PanelBody,RangeControl, SelectControl } = wp.components;


export default class Inspector extends Component {
	render() {

		const {
	        attributes,
	        setAttributes,
	        isSelected,
	        isSelectedBlockInRoot,
	    } = this.props;

	    const {

	    } = attributes;

	    const Colors = [
			{ color: '#F78DA7', name: 'GPB Color' },
			{ color: '#CF2E2E', name: 'Prunus Avium' },
			{ color: '#FF6903', name: 'Chi-gong' },
			{ color: '#FCB902', name: 'Pico-8' },
			{ color: '#7BDCB5', name: 'Robin\'s Egg Blue' },
			{ color: '#FE4A5A', name: 'Orange Ville' },
			{ color: '#24C030', name: 'Bright Yarrow' },
			{ color: '#4BBDFF', name: 'Light Greenish Blue' },
			{ color: '#9013FE', name: 'Mint Leaf' },
			{ color: '#4C84FF', name: 'Exodus Fruit' },
			{ color: '#BD10E0', name: 'Sour Lemon' },
			{ color: '#F0F0F0', name: 'First Date' },
			{ color: '#000000', name: 'Green Darnet Tail' },
		];

		return (
			<InspectorControls key="inspector">
				<PanelBody>
					<RangeControl
						label={ __( 'Accordian Title Font Size' ) }
						value={ accordionTitleFontSize }
						onChange={ ( value ) => setAttributes( { accordionTitleFontSize: value } ) }
						min={ 14 }
						max={ 24 }
						step={ 1 }
					/>

					<PanelColorSettings
						title={ __( 'Color Settings' ) }
						colorValue={ accordionTitleColor }
						initialOpen={ false }
						colorSettings={
							[
								{
									value: accordionTitleColor,
									colors: Colors,
									onChange: onChangeTitleColor,
									label: __( 'Accordian Title Color' ),
								},
								{
									value: accordionTitleBackgroundColor,
									colors: Colors,
									onChange: onChangeAccordianTitleBackgroundColor,
									label: __( 'Accordian Title BackgroundColor' ),
								}
							]
						}
					>
					</PanelColorSettings>

				</PanelBody>

			</InspectorControls>
		)
	}
}
