// External Dependencies.
import classnames from 'classnames/dedupe';
const { applyFilters } = wp.hooks;
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;
const { registerBlockType } = wp.blocks;
const { InspectorControls, PanelColorSettings, AlignmentToolbar, BlockControls,
		InnerBlocks,RichText, MediaUpload , MediaPlaceholder
	} = wp.editor;
const { Button, Toolbar, IconButton, Dashicon,PanelBody , RangeControl, ToggleControl,TextControl,SelectControl,Popover  } = wp.components;
const ALLOWED_MEDIA_TYPES = [ 'image' ];
import './style.scss';
import './editor.scss';

import ImagePicker from './ImagePicker';

class TeamItemBlock extends Component {
	constructor() {
        super( ...arguments );
        // this.findParentTeam = this.findParentTeam.bind( this );
        this.state = {
            confirmed: -1,
		};

		this.findParentTeam = this.findParentTeam.bind(this);
		this.onRemove = this.onRemove.bind(this);
	}
	findParentTeam() {
    // findParentTeam = ( rootBlock ) => {
        const {
            block,
        } = this.props;

        let result = false;

        if ( rootBlock.innerBlocks && rootBlock.innerBlocks.length ) {
            rootBlock.innerBlocks.forEach( ( item ) => {
                if ( ! result && item.clientId === block.clientId ) {
                    result = rootBlock;
                } else if ( ! result ) {
                    result = this.findParentTeam( item );
                }
            } );
        }

        return result;
	}

	onRemove() {
    // onRemove= () => {
        const parentTeam = this.findParentTeam( this.props.rootBlock );
        if ( parentTeam && parentTeam.clientId ) {
            this.props.removeBlock( this.props.clientId );

            if ( parentTeam.innerBlocks.length <= 1 ) {
                this.props.removeBlock( parentTeam.clientId );
            }
        }
    }

    render() {
        const {
            attributes,
            setAttributes,
            isSelected,
            isSelectedBlockInRoot,
        } = this.props;

        let {
            className = '',
        } = this.props;

        const {
            heading,
            active,
	        memberName,
	        memberNameColor,
	        memberNameFontSize,
	        memberDesignation,
	        memberDesignationColor,
			memberDesignationFontSize,
			memberDescription,
			memberDescriptionFontSize,
			memberDescriptionColor,
			memberBackgroundColor,
			img,
			memberboxshadow,
			memberBorderRadius,
			memberMargin,
			memberPadding,
			memberImageStyle,
			socialIconWidth,
			socialIconHeight,
			socialIconLineHeight,
			socialIconShow,
			socialIconColor,
			socialColor,
			socialIconBackgroundColor,
			socialIconBorderColor,
			hoverEffect,
			hoverBackgroundColor,
			hoverBackgroundOpacity,
			facebookLink,
			twitterLink,
			googleplusLink,
			designpanel,
			memberAlignment
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

        className = classnames(
            className,
            'power-blocks-team-item',
            active ? 'power-blocks-team-item-active' : ''
        );

        className = applyFilters( 'power-blocks.editor.className', className, this.props );

        const commonStyle = {
			borderColor: ( socialIconBorderColor ) ? socialIconBorderColor : undefined,
			color: ( socialIconColor ) ? socialIconColor: undefined,
			backgroundColor: ( socialIconBackgroundColor ) ? socialIconBackgroundColor: undefined,
			width: ( socialIconWidth ) ? socialIconWidth : undefined,
			height: ( socialIconWidth) ? socialIconWidth : undefined,
		};
		const fbStyle = ( socialColor ) ? {
			color: '#fff', backgroundColor: '#4267b2',
			width: ( socialIconWidth ) ? socialIconWidth : undefined,
			height: ( socialIconWidth) ? socialIconWidth : undefined,
		} : commonStyle;
		const twitterStyle = ( socialColor ) ? {
			color: '#fff', backgroundColor: '#1da1f2',
			width: ( socialIconWidth ) ? socialIconWidth : undefined,
			height: ( socialIconWidth) ? socialIconWidth : undefined,
		} : commonStyle;
		const googleStyle = ( socialColor ) ? {
			color: '#fff', backgroundColor: '#d34836',
			width: ( socialIconWidth ) ? socialIconWidth : undefined,
			height: ( socialIconWidth) ? socialIconWidth : undefined,
		} : commonStyle;


        return (
            <Fragment>
				<BlockControls key="controls">
					<AlignmentToolbar
						value={ memberAlignment }
						onChange={ ( value ) => setAttributes( { memberAlignment: value } ) }
					/>
				</BlockControls>
                 <InspectorControls>
                    <PanelBody>
	                        <PanelColorSettings
								title={ __( 'Color Settings' ) }
								initialOpen={ false }
								colorSettings={
									[
										{
											value: memberBackgroundColor,
											onChange: value => setAttributes( {
												memberBackgroundColor: value
											} ),
											label: __( 'Member Background Color' ),
											colors: Colors,

										},

										{
											// value: memberNameColor,
											onChange: value => setAttributes( {
												memberNameColor: value
											} ),
											label: __( 'MemberName Color' ),
											colors: Colors,
										},
										{
											value: memberDescriptionColor,
											onChange: value => setAttributes( {
												memberDescriptionColor: value
											} ),
											label: __( 'Description Color' ),
											colors: Colors,
										},
										{
											value: memberDesignationColor,
											onChange: value => setAttributes( {
												memberDesignationColor: value
											} ),
											label: __( 'Member Designation Color' ),
											colors: Colors,
										},
									]
								}
							>
							</PanelColorSettings>
                    	</PanelBody>

                   	<PanelBody
						title={ __( 'Member Settings' ) }
						initialOpen={ false }
					>
						<RangeControl
                            label={ __( 'Member Box Shdaow' ) }
                            value={ memberboxshadow  }
							onChange={ ( value ) => setAttributes( {
								memberboxshadow: value,
							} ) }
							min={ 1 }
							max={ 10 }
							step={ 1 }
						/>

						<RangeControl
                            label={ __( 'Member Border Radius' ) }
                            value={ memberBorderRadius }
							onChange={ ( value ) => setAttributes( {
								memberBorderRadius: value,
							} ) }
							min={ 1 }
							max={ 50 }
							step={ 1 }
						/>

						<RangeControl
                            label={ __( 'Member Margin' ) }
                            value={ memberMargin }
							onChange={ ( value ) => setAttributes( {
								memberMargin: value,
							} ) }
							min={ 1 }
							max={ 30 }
							step={ 1 }
						/>

						<RangeControl
                            label={ __( 'Member Padding' ) }
                            value={ memberPadding }
							onChange={ ( value ) => setAttributes( {
                                memberPadding: value,
							} ) }
							min={ 1 }
							max={ 30 }
							step={ 1 }
						/>

						<SelectControl
							label={ __( 'Image  Style' ) }
							description={ __( '' ) }
							options={ [
								{ label: 'Circle', value: 'circle' },
								{ label: 'Round', value: 'round' },
							] }
							value={ memberImageStyle }
							onChange={ ( value ) => setAttributes( {
                                memberImageStyle: value,
							} ) }
						/>
					</PanelBody>


		                <PanelBody
		                    title={ __( 'Font Size Settings' ) }
		                    initialOpen={ false }
		                >

		                    <RangeControl
		                        label={ __( 'MemberName Font Size' ) }
		                        value={ memberNameFontSize }
		                        onChange= { ( value ) => {
		                            setAttributes( {
		                                memberNameFontSize: value,
		                            } )
		                        } }
		                        min={ 18 }
		                        max={ 36 }
		                        step={ 1 }
		                    />
		                    <RangeControl
		                        label={ __( 'Member Designation Font Size' ) }
		                        value={ memberDesignationFontSize }
		                        onChange={ ( value ) => {
		                            setAttributes( {
		                                memberDesignationFontSize:value
		                            } )
		                        } }
		                        min={ 14 }
		                        max={ 24 }
		                        step={ 1 }
		                    />

		                    <RangeControl
		                        label={ __( 'Description Font Size' ) }
		                        value={ memberDescriptionFontSize }
		                        onChange={ ( value ) => {
		                            setAttributes( {
		                            	memberDescriptionFontSize: value
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
		                        checked={ socialIconShow }
		                        onChange={ ( value ) => {
		                            setAttributes( {
		                                socialIconShow: value
		                            } )
		                        } }
		                    />

						<ToggleControl
							label={ __( 'Use Social Color' ) }
							checked= { socialColor }
							onChange={ ( value ) => {
                                setAttributes( {
								    socialColor: value
                                } )
                            } }
						/>
						<RangeControl
							label={ __( 'Icon Box Width' ) }
							min={ 20 }
							max={ 40 }
							value={ socialIconWidth }
							onChange={ ( value ) => {
                                setAttributes( {
								    socialIconWidth: value
                                } )
                            } }
						/>

						<TextControl
                            label="FaceBook Link"
                            value={ facebookLink }
							onChange={ ( value ) => setAttributes( {
								facebookLink: value,
							} ) }
						/>

						<TextControl
                            label="Twitter Link"
                            value={ twitterLink }
							onChange={ ( value ) => setAttributes( {
								twitterLink: value,
							} ) }
						/>

						<TextControl
                            label="Google Plus Link"
                            value={ googleplusLink }
							onChange={ ( value ) => setAttributes( {
								googleplusLink: value,
							} ) }
						/>

						<PanelColorSettings
							title={ __( 'Icon Color' ) }
							initialOpen={ false }
							colorSettings={ [
								{
                                    label: __( 'Icon Color' ),
                                    value: socialIconColor,
                                    onChange: ( value ) => {
                                        setAttributes( {
                                            socialIconColor:value,
                                        } )
                                    },
								},
								{   label: __( 'Icon Background Color' ),
                                    value: socialIconBackgroundColor,
                                    onChange: ( value ) => {
                                        setAttributes( {
                                            socialIconBackgroundColor: value,
                                        } )
                                    },

								},
							] }
						/>
					</PanelBody>

                	</InspectorControls>

				<div
					className={ classnames(
						className,
					) }
				>
					<div
						className={ classnames(
							'pb-team-member',
							'pb-team-member-background'
						) }
						style={ {
							backgroundColor: ( memberBackgroundColor ) ? memberBackgroundColor: undefined,
							borderRadius: ( memberBorderRadius ) ? memberBorderRadius: undefined,
							margin: ( memberMargin ) ? memberMargin: undefined,
							// padding:( memberPadding ) ? memberPadding: undefined,
						}}
					>

						<div className={ classnames(
							// className,
							'pb-team-image-container',
							'pb-is-hoverable',
							'pb-is-image-'+ memberImageStyle
						) }>

		                    {
								img && isSelected &&
								<div className={ classnames(
									// className,
									'pb-team-image-hover',
								) }>
									<Toolbar>
										<MediaUpload
											onSelect={ ( media ) => {
												const image = media.sizes.medium
												? media.sizes.medium.url
												: media.url;
												setAttributes({
													img:image,
												});
											} }
											type="image"
											value={ img }
											className={ 'pb-team-member-image' }
											render={ ( { open } ) => (
												<IconButton
													label={ __( 'Edit Image' ) }
													icon="edit"
													onClick={ open }
												/>
											) }
										/>
										<IconButton
											label={ __( 'Remove Image' ) }
											icon="trash"
											onClick={ ( ) => {
												setAttributes({
													img:null
												});
											} }
										/>
									</Toolbar>
								</div>
							}

	                    	<MediaUpload
								buttonProps={ {
									className: 'change-image',
								} }
								onSelect={ ( media ) => {
									const image = media.sizes.medium_large
									? media.sizes.medium_large.url
									: media.url;
									setAttributes({
										img:image,
									});
								} }
								allowed={ ALLOWED_MEDIA_TYPES }
								type="image"
								value={ img }
								className={ 'pb-team-member-image' }
								style={{

								}}
								render={ ( { open } ) => (
									<Button onClick={ open }>
										{ ! img  ?  <Dashicon icon="format-image" />:
										<img src={ img } alt="" className="pb-team-member-image" /> }
									</Button>
								) }
							>

							</MediaUpload>
						</div>

						<div className="pb-team-info" style={{
							padding:( memberPadding ) ? memberPadding: undefined,
						}}>
	                        <RichText
	                            tagName="h2"
	                            className="pb-team-member-name"
	                            placeholder={ __( 'Member Name' ) }
	                            value={ memberName }
	                            style={ {
									color: ( memberNameColor ) ? memberNameColor: undefined,
									fontSize: ( memberNameFontSize ) ? `${ memberNameFontSize }px` : undefined,
									textAlign: ( memberAlignment ) ? memberAlignment: undefined,
								} }
	                            onChange={ ( value ) => {
	                                setAttributes( { memberName: value } );
	                            } }
	                            // formattingControls={ [ 'bold', 'italic', 'strikethrough' ] }
	                            // isSelected={ isSelected }
	                            keepPlaceholderOnFocus
	                        />

	                        <RichText
								className={ classnames(
									// className,
									'pb-team-member-designation'
								) }
								tagName="p"
								placeholder={ __( 'Member Designation', 'power-blocks' ) }
								value={ memberDesignation }
								style={ {
									color: ( memberDesignationColor ) ? memberDesignationColor : undefined,
									fontSize: ( memberDesignationFontSize ) ? `${ memberDesignationFontSize }px` : undefined,
									textAlign: ( memberAlignment ) ? memberAlignment: undefined,
								} }
								onChange={ ( value ) => {
									 setAttributes( {  memberDesignation: value });
								} }
							/>

							<RichText
								tagName="p"
								placeholder={ __( 'Add member desciption...', 'power-blocks' ) }
								value={ memberDescription }
								className={ classnames(
									// className,
									'pb-team-member-description'
								) }
								style={ {
									color: ( memberDescriptionColor ) ? memberDescriptionColor : undefined,
									fontSize: ( memberDescriptionFontSize ) ? `${ memberDescriptionFontSize }px` : undefined,
									textAlign: ( memberAlignment ) ? memberAlignment: undefined,
								} }
								onChange={ ( value ) => {
									 setAttributes( {  memberDescription: value });
								} }
							/>

							{ (socialIconShow ) ?
								<div className="pb-team-social" style={{
									textAlign: ( memberAlignment ) ? memberAlignment: undefined,
								}}>
									<ul>
										{ ( facebookLink ) ?
											<li>
												<a href={ ( facebookLink ) ? facebookLink: undefined } style={ fbStyle }>
													<Dashicon icon="facebook-alt" />
												</a>
											</li> : ''
										}
										{ (twitterLink) ?
											<li>
												<a  href={ ( twitterLink ) ? facebookLink: undefined } style={ twitterStyle }>
													<Dashicon icon="twitter" />
												</a>
											</li> : ''
										}
										{ (googleplusLink) ?
											<li>
												<a href={ ( googleplusLink ) ? facebookLink: undefined }  style={ googleStyle }>
												<Dashicon icon="googleplus" />
												</a>
											</li> : ''
										}
									</ul>
								</div> : ''
							}
	                    </div>

				        <Button
			                className="pb-component-remove-button"
			                onClick={ () => {
			                    if ( this.state.confirmed === -1 ) {
			                        this.setState( {
			                            confirmed: 0,
			                        } );
			                    }
			                } }
			            >
			                { this.state.confirmed === 0 ? (
			                    <Popover
			                        className="pb-component-remove-button-confirm"
			                        onClose={ () => {
			                            this.setState( {
			                                confirmed: -1,
			                            } );
			                        } }
			                        onClickOutside={ () => {
			                            this.setState( {
			                                confirmed: -1,
			                            } );
			                        } }
			                    >
			                        { __( 'Remove block?' ) }
			                        <Button
			                            className="pb-component-remove-button-confirm-yep"
			                            onClick={ this.onRemove }
			                        >
			                            { __( 'Remove' ) }
			                        </Button>
			                        <Button
			                            className="pb-component-remove-button-confirm-nope"
			                            onClick={ () => {
			                                this.setState( {
			                                    confirmed: -1,
			                                } );
			                            } }
			                        >
			                            { __( 'Cancel' ) }
			                        </Button>
			                    </Popover>
			                ) : '' }
			                remove
			            </Button>
					</div>
                </div>
            </Fragment>
        );
    }
}

export const name = "power-blocks/team-item";
// registerBlockType( 'power-blocks/team-item', {
export const settings = {
    title: __( 'Item' ),
    parent: [ 'power-blocks/team' ],
    description: __( 'A single item within a team block.' ),
    category: 'power-blocks',
    supports: {
        html: false,
        className: false,
        anchor: true,
        align: [ 'wide', 'full' ],
        inserter: false,
        reusable: false,
    },
    attributes: {
        heading: {
            type: 'array',
            source: 'children',
            selector: '.power-blocks-team-item-label',
            default: 'Team',
        },
        active: {
            type: 'boolean',
            default: false,
        },
        itemNumber: {
            type: 'number',
        },
        memberName: {
			type: 'string',
			selector: '.pb-team-member-name',
			default: 'Mahbubur Rahman',
		},
		memberNameColor: {
			type: 'string',
			default: '#000',
		},
		memberNameFontSize: {
			type: 'number',
			default: 24,
		},
		memberDesignation: {
			type: 'string',
			selector: '.pb-team-member-designation',
			default: 'Software Engineer',
		},
		memberDesignationColor: {
			type: 'string',
			default: '#575D64',
		},
		memberDesignationFontSize: {
			type: 'number',
			default: 15,
		},

		memberDescription: {
			type: 'string',
			selector: '.pb-team-member-description',
			default: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text',
		},
		memberDescriptionFontSize: {
			type: 'number',
			default: 15,
		},
		memberDescriptionColor: {
			type: 'string',
			default: '#575D64',
		},
		memberBackgroundColor: {
			type: 'string',
			// default: '#2574A9',
			default: '#f9f9f9',
		},
		img: {
		  type: 'string',
		  source: 'attribute',
		  selector: 'img',
		  attribute: 'src',
		},

		memberboxshadow: {
			type: 'number',
			default: 0,
		},
		memberBorderRadius: {
			type: 'number',
			default: 0,
		},
		memberMargin: {
			type: 'number',
			default: 0,
		},
		memberPadding: {
			type: 'number',
			default: 0,
		},
		memberImageStyle: {
			type: 'string',
			default: 'round',
		},

		socialIconWidth: {
			type: 'number',
			default: 32,
		},

		socialIconHeight: {
			type: 'number',
			default: 32,
		},

		socialIconLineHeight: {
			type: 'string',
			default: 32,
		},

		socialIconShow: {
			type: 'boolean',
			default: true,
		},
		socialColor: {
			type: 'boolean',
			default: false,
		},
		socialIconColor: {
			type: 'string',
			default: '#fff',
		},
		socialIconBackgroundColor: {
			type: 'string',
			default: '#d34836',
		},
		socialIconBorderColor: {
			type: 'string',
			default: '',
		},

		hoverEffect: {
			type: 'boolean',
			default: true,
		},

		hoverBackgroundColor: {
			type: 'string',
			default: '',
		},

		hoverBackgroundOpacity: {
			type: 'number',
			default: '.1',
		},
		facebookLink: {
			type: 'string',
			default: '',
		},

		twitterLink: {
			type: 'string',
			default: '',
		},
		googleplusLink: {
			type: 'string',
			default: '',
		},

		memberAlignment: {
			type: 'string',
			default: 'left',
		}
    },

    edit: compose( [
        withSelect( ( select, ownProps ) => {
            const {
                getBlockHierarchyRootClientId,
                getBlock,
                isBlockSelected,
                hasSelectedInnerBlock,
            } = select( 'core/editor' );

            const { clientId } = ownProps;

            return {
                block: getBlock( clientId ),
                isSelectedBlockInRoot: isBlockSelected( clientId ) || hasSelectedInnerBlock( clientId, true ),
                rootBlock: clientId ? getBlock( getBlockHierarchyRootClientId( clientId ) ) : null,
            };
        } ),
        withDispatch( ( dispatch ) => {
            const {
                updateBlockAttributes,
                removeBlock,
            } = dispatch( 'core/editor' );

            return {
                updateBlockAttributes,
                removeBlock,
            };
        } ),
    ] )( TeamItemBlock ),

    save: function( props ) {
        const {
            itemNumber,
            heading,
            active,
	        memberName,
	        memberNameColor,
	        memberNameFontSize,
	        memberDesignation,
	        memberDesignationColor,
			memberDesignationFontSize,
			memberDescription,
			memberDescriptionFontSize,
			memberDescriptionColor,
			memberBackgroundColor,
			img,
			memberboxshadow,
			memberBorderRadius,
			memberMargin,
			memberPadding,
			memberImageStyle,
			socialIconWidth,
			socialIconHeight,
			socialIconLineHeight,
			socialIconShow,
			socialIconColor,
			socialColor,
			socialIconBackgroundColor,
			socialIconBorderColor,
			hoverEffect,
			hoverBackgroundColor,
			hoverBackgroundOpacity,
			facebookLink,
			twitterLink,
			googleplusLink,
			memberAlignment
        } = props.attributes;

        let className = classnames(
            'power-blocks-team-item',
            active ? 'power-blocks-team-item-active' : ''
        );

        className = applyFilters( 'power-blocks.blocks.className', className, {
            ...{
                name: 'power-blocks/team-item',
            },
            ...props,
        } );

        const commonStyle = {
            borderColor: ( socialIconBorderColor ) ? socialIconBorderColor : undefined,
            color: ( socialIconColor ) ? socialIconColor: undefined,
			backgroundColor: ( socialIconBackgroundColor ) ? socialIconBackgroundColor: undefined,
			width: ( socialIconWidth ) ? socialIconWidth : undefined,
			height: ( socialIconWidth) ? socialIconWidth : undefined,
		};
		const fbStyle = ( socialColor ) ? {
            color: '#fff', backgroundColor: '#4267b2',
            width: ( socialIconWidth ) ? socialIconWidth : undefined,
			height: ( socialIconWidth) ? socialIconWidth : undefined,
		} : commonStyle;
		const twitterStyle = ( socialColor ) ? {
            color: '#fff', backgroundColor: '#1da1f2',
            width: ( socialIconWidth ) ? socialIconWidth : undefined,
			height: ( socialIconWidth) ? socialIconWidth : undefined,
		} : commonStyle;
		const googleStyle = ( socialColor ) ? {
            color: '#fff', backgroundColor: '#d34836',
            width: ( socialIconWidth ) ? socialIconWidth : undefined,
			height: ( socialIconWidth) ? socialIconWidth : undefined,
		} : commonStyle;

        return (

		<div
			className={ classnames(
				className,
			) }
			data-type="power-blocks/team-item"
		>
			<div
				className={ classnames(
					'pb-team-member',
					'pb-team-member-background'
				) }
				style={ {
					backgroundColor: ( memberBackgroundColor ) ? memberBackgroundColor: undefined,
					borderRadius: ( memberBorderRadius ) ? memberBorderRadius: undefined,
					margin: ( memberMargin ) ? memberMargin: undefined,
					// padding:( memberPadding ) ? memberPadding: undefined,
				} }
			>

				<div>
                	{ img && (

						<div className={ classnames(
							'pb-team-image-container',
							'pb-is-hoverable',
							'pb-is-image-' + memberImageStyle
						) }>
							<img src={ img } alt="" className="pb-team-member-image" />

						</div>
					)}

					<div className="pb-team-info"
						style={{
							padding:( memberPadding ) ? memberPadding: undefined,
						}}
					>
						{ memberName && (
							<RichText.Content
								className={ classnames(
									// className,
									'pb-team-member-name'
								) }
								style={ {
									color: ( memberNameColor ) ? memberNameColor: undefined,
									fontSize: ( memberNameFontSize ) ? `${ memberNameFontSize }px` : undefined,
									textAlign: ( memberAlignment ) ? memberAlignment: undefined,
								} }
								tagName="h2"
								value={ memberName }
							/>
						)}
						{ memberDesignation && (
							<RichText.Content
								tagName="p"
								className={ classnames(
									// className,
									'pb-team-member-description'
								) }
								style={ {
									color: ( memberDesignationColor ) ? memberDesignationColor : undefined,
									fontSize: ( memberDesignationFontSize ) ? `${ memberDesignationFontSize }px` : undefined,
									textAlign: ( memberAlignment ) ? memberAlignment : undefined,
								} }
								value={ memberDesignation }
							/>
						)}

						{ memberDescription && (

						<RichText.Content
							tagName="p"
							className={ classnames(
								// className,
								'pb-team-member-designation'
							) }
							style={ {
								color: ( memberDescriptionColor ) ? memberDescriptionColor: undefined,
								fontSize: ( memberDescriptionFontSize ) ? `${ memberDescriptionFontSize }px` : undefined,
								textAlign: ( memberAlignment ) ? memberAlignment : undefined,
								} }
							value={ memberDescription }
						/>
						) }

						{ ( socialIconShow ) ?
								<div className="pb-team-social">
									<ul>
										{ (facebookLink) ?
											<li>
												<a href={ ( facebookLink ) ? facebookLink: undefined } style={ fbStyle }>
													<Dashicon icon="facebook-alt" />
												</a>
											</li> : ''
										}
										{ (twitterLink) ?
											<li>
												<a  href={ ( twitterLink ) ? facebookLink: undefined } style={ twitterStyle }>
													<Dashicon icon="twitter" />
												</a>
											</li> : ''
										}
										{ (twitterLink) ?
											<li>
												<a href={ ( googleplusLink ) ? facebookLink: undefined }  style={ googleStyle }>
												<Dashicon icon="googleplus" />
												</a>
											</li> : ''
										}
									</ul>
								</div> : ''
						}

					</div>
				</div>
			</div>
		</div>
        );
    },
};
