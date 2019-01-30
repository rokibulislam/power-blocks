/**
 * TeamMember Wrapper
 */
import classnames from 'classnames';

// Internationalization
const { __ } = wp.i18n;

// Extend component
const { Component, Fragment } = wp.element;

// Register editor components
const { RichText, AlignmentToolbar, BlockControls, MediaUpload } = wp.editor;
// Register components
const { Button, Toolbar, ColorPicker, TextControl, Dashicon, IconButton } = wp.components;

import Inspector from './inspector';
import TeamMember from './teammember';

const ALLOWED_MEDIA_TYPES = [ 'image' ];

export default class editTeamMember extends Component {
	//Render
	render() {
		const {
			attributes: {
				memberName,
				memberNameColor,
				memberNameFontSize,
				memberDescription,
				memberDescriptionColor,
				memberDescriptionFontSize,
				memberDesignation,
				memberDesignationColor,
				memberDesignationFontSize,
				memberAlignment,
				memberBackgroundColor,
				memberboxshadow,
				memberBorderRadius,
				memberMargin,
				memberPadding,
				memberImgID,
				memberImgURL,
				memberImageStyle,
				socialIconWidth,
				socialIconHeight,
				socialIconLineHeight,
				socialIconShow,
				socialColor,
				socialIconColor,
				socialIconBackgroundColor,
				socialIconBorderColor,
				hoverEffect,
				hoverBackgroundColor,
				hoverBackgroundOpacity,
				facebookLink,
				twitterLink,
				googleplusLink,
			},
			attributes,
			isSelected,
			editable,
			className,
			setAttributes
		} = this.props;

		const fbStyle = ( socialColor ) ? {
			color: '#fff',
			backgroundColor: '#4267b2',
			width: socialIconWidth,
			height: socialIconWidth,
		} : {
			borderColor: socialIconBorderColor,
			color: socialIconColor,
			backgroundColor: socialIconBackgroundColor,
			width: socialIconWidth,
			height: socialIconWidth,
		};

		const twitterStyle = ( socialColor ) ? {
			color: '#fff',
			backgroundColor: '#1da1f2',
			width: socialIconWidth,
			height: socialIconWidth,
		} : {
			borderColor: socialIconBorderColor,
			color: socialIconColor,
			backgroundColor: socialIconBackgroundColor,
			width: socialIconWidth,
			height: socialIconWidth,
		};

		const googleStyle = ( socialColor ) ? {
			color: '#fff',
			backgroundColor: '#d34836',
			width: socialIconWidth,
			height: socialIconWidth,
		} : {
			borderColor: socialIconBorderColor,
			color: socialIconColor,
			backgroundColor: socialIconBackgroundColor,
			width: socialIconWidth,
			height: socialIconWidth,
		};

		return (
			<Fragment>
				<BlockControls key="controls">
					<AlignmentToolbar
						value={ memberAlignment }
						onChange={ ( value ) => setAttributes( { memberAlignment: value } ) }
					/>
				</BlockControls>
				<Inspector { ...{ setAttributes, ...this.props } } />
				<TeamMember { ...this.props }>

					<div
						className={ classnames(
							this.props.className,
							'pb-team-image-container',
							'pb-is-hoverable',
							'pb-is-image-' + memberImageStyle
						) }>
						{ memberImgID && isSelected &&
						<div className={ classnames(
							this.props.className,
							'pb-team-image-hover',
						) }>
							<Toolbar>
								<MediaUpload
									onSelect={ ( img ) => {
										setAttributes( {
											memberImgURL: img.url,
											memberImgID: img.id,
										} );
									} }
									type="image"
									value={ memberImgID }
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
									onClick={ ( ) => setAttributes( { memberImgURL: '', memberImgID: '' } ) }
								/>
							</Toolbar>
						</div>
						}
						<MediaUpload
							buttonProps={ {
								className: 'change-image',
							} }
							onSelect={ ( img ) => setAttributes(
								{
									memberImgID: img.id,
									memberImgURL: img.url,							
								}
							) }
							allowed={ ALLOWED_MEDIA_TYPES }
							type="image"
							value={ memberImgID }
							className={ 'pb-team-member-image' }
							render={ ( { open } ) => (
								<Button onClick={ open }>
									{ !memberImgID && !memberImgURL ? <Dashicon icon="format-image" /> : <img src={ memberImgURL } alt="" className="pb-team-member-image" /> }										
								</Button>
							) }
						>
						</MediaUpload>
					</div>
					<div className="pb-team-info pb-text-center">
						<RichText
							className={ classnames(
								this.props.className,
								'pb-team-member-name'
							) }
							tagName="h2"
							placeholder={ __( 'Member Name', 'power-blocks' ) }
							value={ memberName }
							style={ {
								color: memberNameColor,
								fontSize: ( memberNameFontSize ) ? `${memberNameFontSize}px` : undefined,
								textAlign: memberAlignment,
							} }
							onChange={ ( value ) => setAttributes( { memberName: value } ) }
						/>

						<RichText
							className={ classnames(
								this.props.className,
								'pb-team-member-designation'
							) }
							tagName="p"
							placeholder={ __( 'Member Designation', 'power-blocks' ) }
							value={ memberDesignation }
							style={ {
								color: memberDesignationColor,
								fontSize: ( memberDesignationFontSize ) ? `${memberDesignationFontSize}px` : undefined,
								textAlign: memberAlignment,
							} }
							onChange={ ( value ) => setAttributes( { memberDesignation: value } ) }
						/>

						<RichText
							tagName="p"
							placeholder={ __( 'Add member desciption...', 'power-blocks' ) }
							value={ memberDescription }
							className={ classnames(
								this.props.className,
								'pb-team-member-description'
							) }
							style={ {
								textAlign: memberAlignment,
								color: memberDescriptionColor,
								fontSize: ( memberDescriptionFontSize ) ? `${memberDescriptionFontSize}px` : undefined,

							} }
							onChange={ ( value ) => setAttributes( { memberDescription: value } ) }	
						/>

						{ ( socialIconShow ) ? 
							<div className="pb-team-social">
								<ul>
									<li> <Button style={ fbStyle }> <Dashicon icon="facebook-alt" />
									</Button> </li>
									<li> <Button style={ twitterStyle }> <Dashicon icon="twitter" /> </Button> </li>
									<li> <Button style={ googleStyle }> <Dashicon icon="googleplus" /> </Button> </li>
								</ul>
							</div> : ''
						}
					</div>
				</TeamMember>
			</Fragment>
		);
	}
}
