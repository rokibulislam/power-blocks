/**
 * Inspector Controls
 */

// Setup the block
const { __ } = wp.i18n;
const { Component } = wp.element;

// Import block components
const {
	InspectorControls,
	PanelColorSettings,
} = wp.editor;
// Import Inspector components
const {
	RangeControl,
} = wp.components;
/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
	// Constructor
	constructor( props ) {
		super( ...arguments );
	}
	//render
	render()  {	
		const { 
			isSelected, 
			setAttributes, 
			attributes,
		} = this.props;	
		const {
			progress,
			progressColor,
			backgroundColor,
			tooltipBackgroundColor,
			tooltipColor,
		} = attributes;

		const PowerProgress = {
			colors: [
				{ color: '#F9583B', name: 'GPB Color' },
				{ color: '#e84393', name: 'Prunus Avium' },
				{ color: '#d63031', name: 'Chi-gong' },
				{ color: '#fd79a8', name: 'Pico-8' },
				{ color: '#00cec9', name: 'Robin\'s Egg Blue' },
				{ color: '#e17055', name: 'Orange Ville' },
				{ color: '#fdcb6e', name: 'Bright Yarrow' },
				{ color: '#55efc4', name: 'Light Greenish Blue' },
				{ color: '#00b894', name: 'Mint Leaf' },
				{ color: '#6c5ce7', name: 'Exodus Fruit' },
				{ color: '#ffeaa7', name: 'Sour Lemon' },
				{ color: '#fab1a0', name: 'First Date' },
				{ color: '#74b9ff', name: 'Green Darnet Tail' },
				{ color: '#a29bfe', name: 'Sky Moment' },
				{ color: '#2d3436', name: 'Dracula Orchid' },
				{ color: '#dfe6e9', name: 'City Lights' },
				{ color: '#636e72', name: 'American River' },
			],
		};

		return (
			<div>					
				<InspectorControls key = {'inspector'} > 
					<hr/>
					<RangeControl
						label = { __( 'Progress' ) }
						value = { parseInt( progress.slice(0, -1) ) }
						step = { 1 }
						min = { 0 }
						max = { 100 }
						onChange = { ( newValue ) => setAttributes( { progress: newValue + "%" } ) }
					/>

					<PanelColorSettings 
						title = { __( 'Background Color' ) } 
						initialOpen = { false } 
						colorValue = { backgroundColor }
						colorSettings={ [ {
							value: backgroundColor,
							colors: PowerProgress.colors,
							label: __( 'Background Color' ),
							onChange: ( newColor ) => setAttributes( { backgroundColor: newColor } ),
						} ] } >
					</PanelColorSettings>

					<PanelColorSettings 
						title = { __( 'Progress Color' ) } 
						initialOpen = { false } 
						colorValue = { progressColor } 
						colorSettings={ [ {
							value: progressColor,
							colors: PowerProgress.colors,
							label: __( 'Progress Color' ),
							onChange: ( newColor ) => setAttributes( { progressColor: newColor } ),
						} ] } >

					</PanelColorSettings>

					<PanelColorSettings 
						title = { __( 'Tooltip Background Color' ) } 
						initialOpen = { false } 
						colorValue = { tooltipBackgroundColor }
						colorSettings={ [ {
							value: tooltipBackgroundColor,
							colors: PowerProgress.colors,
							label: __( 'Tooltip Background Color' ),
							onChange: ( newColor ) => setAttributes( { tooltipBackgroundColor: newColor } ),
						} ] } >
					</PanelColorSettings>

					<PanelColorSettings 
						title = { __( 'Tooltip Color' ) } 
						initialOpen ={ false } 
						colorValue = { tooltipColor }
						colorSettings={ [ {
							value: tooltipColor,
							colors: PowerProgress.colors,
							label: __( 'Tooltip Color' ),
							onChange: ( newColor ) => setAttributes( { tooltipColor: newColor } ),
						} ] } >

					</PanelColorSettings>
				</InspectorControls>

			</div>
		);
	}
}
