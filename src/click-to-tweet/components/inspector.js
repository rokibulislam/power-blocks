const { __ } = wp.i18n;
const { Component } = wp.element;
import ImagePicker from '../../common-components/ImagePicker';
// Import block components
const {
	InspectorControls,
	PanelColorSettings,
} = wp.editor;

const { PanelBody, ToggleControl, SelectControl, RangeControl } = wp.components;

export default class Inspector extends Component {
	render() {
		const {
			attributes: {
				content,
				url,
				textAlign,
				buttonText,
				buttonColor,
				textColor,
				fontSize,
			},
			setAttributes,
		} = this.props;


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
			<div>
				<InspectorControls>
					<PanelBody >
						
						<ImagePicker
                            label={ __( 'Template View' ) }
                            options={ [
								{
                                    value: '1',
                                    label: __( '' ),
                                    image: power_block_admin.plugin + './dist/images/clicktotweet-left.svg',
				                    id: 'team_basic'

                                },
                                {
                                    value: '2',
                                    label: __( '2 Columns' ),
                                    image: power_block_admin.plugin + './dist/images/clicktotweet-center.svg',
				                    id: 'team_basic'

                                },
                                {
                                    value: '3',
                                    label: __( '3 columns' ),
                                    image: power_block_admin.plugin + './dist/images/clicktotweet-right.svg',
				                    id: 'team_advance',

                                },
                                {
                                    value: '4',
                                    label: __( '4 Columns' ),
                                    image: power_block_admin.plugin + './dist/images/clicktotweet-advance.svg',
								},
							] }
							onChange={ ( value ) => setAttributes( { '': value } ) }
				        />

						<RangeControl
							label="FontSize"
							value={ fontSize }
							onChange={ value => setAttributes( { fontSize: value } ) }
							min={ 14 }
							max={ 28 }
							initialPosition={ 1 }
						/>
						<PanelColorSettings
							initialOpen={ false }
							title={ __( 'Color Settings' ) }
							colorSettings={ [
								{
									label: __( 'Button Background Color' ),
									value: buttonColor,
									onChange: value => setAttributes( { buttonColor: value } ),
									colors: Colors,
								},

								{
									label: __( 'Text Color' ),
									value: textColor,
									onChange: value => setAttributes( { textColor: value } ),
									colors: Colors,
								},
							] }
						/>
					</PanelBody>
				</InspectorControls>
			</div>
		)
	}
}
