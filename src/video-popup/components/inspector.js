const {__} = wp.i18n;
const { Component,Fragment } = wp.element;
const { InspectorControls,PanelColorSettings } = wp.editor
const { PanelBody,RangeControl,ToggleControl,SelectControl,BaseControl,Dashicon} = wp.components;
export default class Inspector extends Component {
	//Render
	render() {
        const { 
			attributes:{ 
				previewImage,
				previewImageID, 
				videoWidth, 
				videoHeight, 
				videoUrl, 
				overlayColor, 
				playButtonSize, 
				playButtonColor, 
				playIcons, 
				overlayColorOpacity, 
				isOverlayOpacity, 
				playButtonBgColor,
				playButtonWidth, 
				playButtonHeight, 
				playButtonLineHeight,
				playButtonBorderColor
			}, 
			attributes, 
			className , 
			setAttributes, 
			isSelected 
		} = this.props;

		const opacityOptions = [
            { label: __('0.1'), value: 0.1 },
            { label: __('0.2'), value: 0.2 },
            { label: __('0.3'), value: 0.3 },
            { label: __('0.4'), value: 0.4 },
            { label: __('0.5'), value: 0.5 },
            { label: __('0.6'), value: 0.6 },
            { label: __('0.7'), value: 0.7 },
            { label: __('0.8'), value: 0.8 },
            { label: __('0.9'), value: 0.9 },
            { label: __('1'), value: 1 },
		];
		const playIconsOptions = [
            { label: __('Controls Play'), value: 'controls-play'  },
            { label: __('Video Alt 1'), value: 'video-alt3'  },
            { label: __('Video Alt 2'), value: 'video-alt2'  },
            { label: __('Video Alt 3'), value: 'video-alt'  },
            { label: __('Format Video'), value: 'format-video'  },
        ];

		return (
			<Fragment>
               <InspectorControls>
                   <PanelBody title={__('Video Settings')}>
                       <RangeControl
                           label = { __('Video Width' ) }
                           value = { videoWidth}
                           min = { 100 }
                           max = { 1000 }
                           onChange = { ( value ) => setAttributes({ videoWidth: value }) }
                       />
                       <RangeControl
                           label = { __('Video Height' ) }
                           value = { videoHeight }
                           min = { 100 }
                           max = { 1000 }
                           onChange = { ( value ) => setAttributes({ videoHeight: value }) }
                       />
                       <ToggleControl
                           label = { __('Show/Hide Overlay Opacity') }
                           checked = { !!isOverlayOpacity }
                           onChange = { value => setAttributes( { isOverlayOpacity: value } ) }
                       />
                       {!!isOverlayOpacity &&
                       <SelectControl
                           label={__('Opacity')}
                           options={opacityOptions}
                           value={overlayColorOpacity}
                           onChange={(newValue) => {
                               setAttributes({overlayColorOpacity: newValue})
                           }}
                       />
                       }
                   </PanelBody>
                   <PanelBody title={__('Play Button Settings')} >
                       <BaseControl label={ __( 'Icons' ) }>
                           <div className="nb-icon-items-wrapper">
                               {
                                   playIconsOptions.map( ( item, index ) => (
                                       <div className="nb-icon-item">
                                            <span onClick={ ( ) => setAttributes({ playIcons:  item.value }) }>
                                            <Dashicon icon={item.value}/>
                                            </span>
                                       </div>
                                   ))
                               }
                           </div>
                       </BaseControl>
                  
                       <RangeControl
                           label = { __('Button Size' ) }
                           value = { playButtonSize}
                           min = { 20 }
                           max = { 200 }
                           onChange = { ( value ) => setAttributes({ playButtonSize: value }) }
                       />

                       <PanelColorSettings
                           title={ __( 'Button Color' ) }
                           initialOpen={ false }
                           colorSettings={[
                               {
                                   value: playButtonColor,
                                   onChange: value => setAttributes( { playButtonColor: value } ),
                                   label: __("Button Color")
							   },
							   {
								value: playButtonBgColor,
								onChange: value => setAttributes( { playButtonBgColor: value } ),
								label: __("Button Background Color")
							   },
							   {
								value: playButtonBorderColor,
								onChange: value => setAttributes( { playButtonBorderColor: value } ),
								label: __("Button Outer Border Color")
							   },
							   {
								value: overlayColor,
								onChange: value => setAttributes( { overlayColor: value } ),
								label: __("Overlay Color")
							   }
                           ]}
                       />
                       <RangeControl
                           label={__('Button Width')}
                           value={playButtonWidth}
                           min={20}
                           max={200}
                           onChange={(value) => setAttributes({playButtonWidth: value})}
                       />
        
                       <RangeControl
                           label={__('Button Height')}
                           value={playButtonHeight}
                           min={20}
                           max={200}
                           onChange={(value) => setAttributes({playButtonHeight: value})}
                       />
                 
                       <RangeControl
                           label={__('Button Line Height')}
                           value={playButtonLineHeight}
                           min={20}
                           max={200}
                           onChange={(value) => setAttributes({playButtonLineHeight: value})}
                       />
                   </PanelBody>
               </InspectorControls>
			</Fragment>
		);
	}
}
