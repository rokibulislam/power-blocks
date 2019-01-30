/**
 * Inspector Controls
 */

// Setup the block
const { __ } = wp.i18n;
const { Component } = wp.element;

// Import block components
const { InspectorControls, PanelColorSettings } = wp.editor;

// Import Inspector components
const { PanelBody, RangeControl, ToggleControl } = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
	render() {
		// Setup the attributes
		const { 
			accordionTitle,
			accordionText,
			accordionFontSize,
			accordionOpen,
			accordionTitleFontSize,
			accordionTitleColor,
			accordionContentFontSize,
			accordionContentColor,
			accordionTitleBackgroundColor,
			accordionContentBackgroundColor,
		} = this.props.attributes;

		const { setAttributes } = this.props;

		const onChangeTitleColor = value => setAttributes( { accordionTitleColor: value } );
		const onChangeContentColor = value => setAttributes( { accordionContentColor: value } );
		const onChangeAccordianTitleBackgroundColor = value => setAttributes( { accordionTitleBackgroundColor: value } );
		const onChangeAccordianContentBackgroundColor = value => setAttributes( { accordionContentBackgroundColor: value } );
		return (
			<InspectorControls key="inspector">
				<PanelBody>
					<RangeControl
						label={ __( 'Font Size' ) }
						value={ accordionFontSize }
						onChange={ ( value ) => this.props.setAttributes( { accordionFontSize: value } ) }
						min={ 14 }
						max={ 24 }
						step={ 1 }
					/>

					<ToggleControl
						label={ __( 'Open by default' ) }
						checked={ accordionOpen }
						onChange={ () => this.props.setAttributes( { accordionOpen: ! accordionOpen } ) }
					/>
				</PanelBody>

				<PanelBody>
					<RangeControl
						label={ __( 'Accordian Title Font Size' ) }
						value={ accordionTitleFontSize }
						onChange={ ( value ) => this.props.setAttributes( { accordionTitleFontSize: value } ) }
						min={ 14 }
						max={ 24 }
						step={ 1 }
					/>
					<PanelColorSettings
						title={ __( 'Accordian Title Color' ) }
						colorValue={ accordionTitleColor }
						initialOpen={ false }
						colorSettings={ [ {
							value: accordionTitleColor,
							onChange: onChangeTitleColor,
							label: __( 'Accordian Title Color' ),
						} ] }
					>
					</PanelColorSettings>

					<PanelColorSettings
						title={ __( 'Accordian Title BackgroundColor' ) }
						colorValue={ accordionTitleBackgroundColor }
						initialOpen={ false }
						colorSettings={ [ {
							value: accordionTitleBackgroundColor,
							onChange: onChangeAccordianTitleBackgroundColor,
							label: __( 'Accordian Title BackgroundColor' ),
						} ] }
					>
					</PanelColorSettings>

				</PanelBody>

				<PanelBody>
					<RangeControl
						label={ __( 'Accordian Content Font Size' ) }
						value={ accordionContentFontSize }
						onChange={ ( value ) => this.props.setAttributes( { accordionContentFontSize: value } ) }
						min={ 14 }
						max={ 24 }
						step={ 1 }
					/>

					<PanelColorSettings
						title={ __( 'Accordian Content Color' ) }
						colorValue={ accordionContentColor }
						initialOpen={ false }
						colorSettings={ [ {
							value: accordionContentColor,
							onChange: onChangeContentColor,
							label: __( 'Accordian Content Color' ),
						} ] }
					>
					</PanelColorSettings>

					<PanelColorSettings
						title={ __( 'Accordian Content  BackgroundColor' ) }
						colorValue={ accordionContentBackgroundColor }
						initialOpen={ false }
						colorSettings={ [ {
							value: accordionContentBackgroundColor,
							onChange: onChangeAccordianContentBackgroundColor,
							label: __( 'Accordian Content BackgroundColor' ),
						} ] }
					>
					</PanelColorSettings>
				</PanelBody>

			</InspectorControls>
		);
	}
}
