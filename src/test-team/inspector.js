const { __ } = wp.i18n;
const { Component } = wp.element;
const { PanelColorSettings, InspectorControls, RichText } = wp.editor;
const { PanelBody, RangeControl, ToggleControl, SelectControl, TextControl, RadioControl } = wp.components;
class Inspector extends Component {

	faqsUpdate( index, key, newValue ) {
		const self = this;
		const items = self.props.attributes.teams;
		return items.map( function( item, currIndex ) {
			if ( index === currIndex ) {
				item[ key ] = newValue;
			}
			return item;
		} );
    }
    
    render() {
        const {
            attributes:{
                testBackgroundColor
            },
            setAttributes,
            state
        } = this.props;
        return (
            <InspectorControls key="inspector">
                <PanelColorSettings
                    title={ __( 'Color Settings' ) }
                    initialOpen={ false }
                    colorSettings={
                        [
                            {
                                value: ( state.selected !== -1 ) ? this.props.teams[ state.selected ].memberBackgroundColor : '',
                                onChange: ( value ) => { 
                                    setAttributes( {
                                        teams: this.faqsUpdate( state.selected, 'memberBackgroundColor', value ),
                                    } )
                                },
                                label: __( 'Member Background Color' ),
                            },

                            {
                                value: ( state.selected !== -1 ) ? this.props.teams[ state.selected ].memberNameColor : '',
                                onChange: ( value ) => {
                                    setAttributes( {
                                        teams: this.faqsUpdate( state.selected, 'memberNameColor', value ),
                                    } )
                                },
                                label: __( 'MemberName Color' ),
                            },
                            {
                                value: ( state.selected !== -1 ) ? this.props.teams[ state.selected ].memberDescriptionColor : '',
                                onChange: (value) => {

                                    setAttributes( {
                                        teams: this.faqsUpdate( state.selected, 'memberDescriptionColor', value ),
                                    } )
                                },
                                label: __( 'Description Color' ),
                            },
                            {
                                value: ( state.selected !== -1 ) ? this.props.teams[ state.selected ].memberDesignationColor : '',
                                onChange: (value) => {
                                    setAttributes( {
                                        teams: this.faqsUpdate( state.selected, 'memberDesignationColor', value ),
                                    } )
                                },
                                label: __( 'Member Designation Color' ),
                            },
                        ]
                    }
                >
                </PanelColorSettings>
                <PanelBody
						title={ __( 'Member Settings' ) }
						initialOpen={ false }
					>
						<RangeControl
                            label={ __( 'Member Box Shdaow' ) }
                            value={ ( state.selected !== -1 ) ? this.props.teams[ state.selected ].memberboxshadow : '' }
							onChange={ ( value ) => setAttributes( {
								teams: this.faqsUpdate( state.selected, 'memberboxshadow', value ),
							} ) }
							min={ 1 }
							max={ 10 }
							step={ 1 }
						/>

						<RangeControl
                            label={ __( 'Member Border Radius' ) }
                            value={ ( state.selected !== -1 ) ? this.props.teams[ state.selected ].memberBorderRadius : '' }
							onChange={ ( value ) => setAttributes( {
								teams: this.faqsUpdate( state.selected, 'memberBorderRadius', value ),
							} ) }
							min={ 1 }
							max={ 50 }
							step={ 1 }
						/>

						<RangeControl
                            label={ __( 'Member Margin' ) }
                            value={ ( state.selected !== -1 ) ? this.props.teams[ state.selected ].memberMargin : '' }
							onChange={ ( value ) => setAttributes( {
								teams: this.faqsUpdate( state.selected, 'memberMargin', value ),
							} ) }
							min={ 1 }
							max={ 30 }
							step={ 1 }
						/>

						<RangeControl
                            label={ __( 'Member Padding' ) }
                            value={ ( state.selected !== -1 ) ? this.props.teams[ state.selected ].memberPadding : '' }
							onChange={ ( value ) => setAttributes( {
								teams: this.faqsUpdate( state.selected, 'memberPadding', value ),
							} ) }
							min={ 1 }
							max={ 30 }
							step={ 1 }
						/>

						{/* <SelectControl
							label={ __( 'Image  Style' ) }
							description={ __( '' ) }
							options={ [
								{ label: 'Circle', value: 'circle' },
								{ label: 'Round', value: 'round' },
							] }
							//value={ ( state.selected !== undefined ) ? items[ state.selected ].memberImageStyle : '' }
							onChange={ ( value ) => setAttributes( {
								items: this.faqsUpdate( state.selected, 'memberImageStyle', value ),
							} ) }
							// value={ memberImageStyle }
							// onChange={ ( value ) => this.props.setAttributes( { memberImageStyle: value } ) }
						/> */}
					</PanelBody>

                <PanelBody
                    title={ __( 'Font Size Settings' ) }
                    initialOpen={ false }
                >

                    <RangeControl
                        label={ __( 'MemberName Font Size' ) }
                        value={ ( state.selected !== -1 ) ? this.props.teams[ state.selected ].memberNameFontSize : '' }
                        onChange= { ( value ) => {
                            setAttributes( {
                                teams: this.faqsUpdate( state.selected, 'memberNameFontSize', value ),
                            } ) 
                        } }
                        min={ 18 }
                        max={ 36 }
                        step={ 1 }
                    />
                    <RangeControl
                        label={ __( 'Member Designation Font Size' ) }
                        value={ ( state.selected !== -1 ) ? this.props.teams[ state.selected ].memberDesignationFontSize : '' }
                        onChange={ ( value ) => {
                            setAttributes( {
                                teams: this.faqsUpdate( state.selected, 'memberDesignationFontSize', value ),
                            } ) 
                        } }
                        min={ 14 }
                        max={ 24 }
                        step={ 1 }
                    />

                    <RangeControl
                        label={ __( 'Description Font Size' ) }
                        value={ ( state.selected !== -1 ) ? this.props.teams[ state.selected ].memberDescriptionFontSize : '' }
                        onChange={ ( value ) => {
                            setAttributes( {
                                teams: this.faqsUpdate( state.selected, 'memberDescriptionFontSize', value ),
                            } ) 
                        } }
                        min={ 14 }
                        max={ 24 }
                        step={ 1 }
                    />
                </PanelBody>
                <PanelBody
                    title={ __( 'Social Settings' ) }
                    initialOpen={ false }
				>
                    <ToggleControl
                        label={ __( 'Show/Hide Social' ) }
                        checked={ ( state.selected !== -1 ) ? this.props.teams[ state.selected ].socialIconShow : false }
                        onChange={ ( value ) => {
                            setAttributes( {
                                teams: this.faqsUpdate( state.selected, 'socialIconShow', value ),
                            } ) 
                        } }
                    />

						<ToggleControl
							label={ __( 'Use Social Color' ) }
							checked= {  ( state.selected !== -1 ) ? this.props.teams[ state.selected ].socialColor : '' }
							onChange={ ( value ) => {
                                setAttributes( {
								    teams: this.faqsUpdate( state.selected, 'socialColor', value ),
                                } ) 
                            } }
						/>
						<RangeControl
							label={ __( 'Icon Box Width' ) }
							min={ 20 }
							max={ 40 }
							value={ ( state.selected !== -1 ) ? this.props.teams[ state.selected ].socialIconWidth : '' }
							onChange={ ( value ) => { 
                                setAttributes( {
								    teams: this.faqsUpdate( state.selected, 'socialIconWidth', value ),
                                } ) 
                            } }
						/>
                        
						<TextControl
                            label="FaceBook Link"
                            value={ ( state.selected !== -1 ) ? this.props.teams[ state.selected ].facebookLink : '' }
							onChange={ ( value ) => setAttributes( {
								items: this.faqsUpdate( state.selected, 'facebookLink', value ),
							} ) }
						/>

						<TextControl
                            label="Twitter Link"
                            value={ ( state.selected !== -1 ) ? this.props.teams[ state.selected ].twitterLink : '' }
							onChange={ ( value ) => setAttributes( {
								items: this.faqsUpdate( state.selected, 'twitterLink', value ),
							} ) }
						/>

						<TextControl
                            label="Google Plus Link"
                            value={ ( state.selected !== -1 ) ? this.props.teams[ state.selected ].googleplusLink : '' }
							onChange={ ( value ) => setAttributes( {
								items: this.faqsUpdate( state.selected, 'googleplusLink', value ),
							} ) }
						/>

						<PanelColorSettings
							title={ __( 'Icon Color' ) }
							initialOpen={ false }
							colorSettings={ [
								{
                                    label: __( 'Icon Color' ),
                                    value: ( state.selected !== -1 ) ? this.props.teams[ state.selected ].socialIconColor : '',
                                    onChange: ( value ) => { 
                                        setAttributes( {
                                            teams: this.faqsUpdate( state.selected, 'socialIconColor', value ),
                                        } )
                                    },
								},
								{   label: __( 'Icon Background Color' ),
                                    value: ( state.selected !== -1 ) ? this.props.teams[ state.selected ].socialIconBackgroundColor : '',
                                    onChange: ( value ) => { 
                                        setAttributes( {
                                            teams: this.faqsUpdate( state.selected, 'socialIconBackgroundColor', value ),
                                        } )
                                    },
                                    
								},
							] }
						/>
					</PanelBody>
            </InspectorControls>
        )
    }
}

export default Inspector;