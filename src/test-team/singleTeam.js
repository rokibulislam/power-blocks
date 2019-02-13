import classnames from 'classnames';
const { Button, Toolbar, IconButton, Dashicon } = wp.components;
const { RichText, MediaUpload } = wp.editor;
const { __ } = wp.i18n;
const ALLOWED_MEDIA_TYPES = [ 'image' ];
const { Component } = wp.element;
// const SingleTeam = ( props ) => {
export default class SingleTeam extends Component {
	render() {
		const { 
			setAttributes,
			teams,
			team,
			key,
			className,
			isSelected,
			clickHandler,
			removeItem,
			index
		} = this.props;
		const commonStyle = {
			borderColor: ( team.socialIconBorderColor ) ? team.socialIconBorderColor : undefined, 
			color: ( team.socialIconColor ) ? team.socialColor: undefined,
			backgroundColor: ( team.socialIconBackgroundColor ) ? team.socialIconBackgroundColor: undefined,
			width: ( team.socialIconWidth ) ? team.socialIconWidth : undefined,
			height: ( team.socialIconWidth) ? team.socialIconWidth : undefined,
		};
		const fbStyle = ( team.socialColor ) ? {
			color: '#fff', backgroundColor: '#4267b2', 
			width: ( team.socialIconWidth ) ? team.socialIconWidth : undefined,
			height: ( team.socialIconWidth) ? team.socialIconWidth : undefined,
		} : commonStyle;
		const twitterStyle = ( team.socialColor ) ? {
			color: '#fff', backgroundColor: '#1da1f2',
			width: ( team.socialIconWidth ) ? team.socialIconWidth : undefined,
			height: ( team.socialIconWidth) ? team.socialIconWidth : undefined,
		} : commonStyle;
		const googleStyle = ( team.socialColor ) ? {
			color: '#fff', backgroundColor: '#d34836',
			width: ( team.socialIconWidth ) ? team.socialIconWidth : undefined,
			height: ( team.socialIconWidth) ? team.socialIconWidth : undefined,
		} : commonStyle;
	return (
				<div key={ key }
					className={ classnames(
						className,
						'pb-team-member',
						'pb-team-member-background'
					) } style={ {
						backgroundColor: ( team.memberBackgroundColor ) ? team.memberBackgroundColor: undefined,
						borderRadius: ( team.memberBorderRadius ) ? team.memberBorderRadius: undefined,
						margin: ( team.memberMargin ) ? team.memberMargin: undefined,
						padding:( team.memberPadding ) ? team.memberPadding: undefined,
					}}
				>
					<div className={ classnames(
						className,
						'pb-team-image-container',
						'pb-is-hoverable',
						'pb-is-image-' 
						//item.memberImageStyle
					) }>
						{
							team.image && isSelected &&
							<div className={ classnames(
								className,
								'pb-team-image-hover',
							) }>
								<Toolbar>
									<MediaUpload
										onSelect={ ( media ) => {
											const image = media.sizes.medium
											? media.sizes.medium.url
											: media.url;
											const newObject = Object.assign({}, team, {
												image: image
											});
											setAttributes({
												teams: [
												...teams.filter(
													item => item.index != team.index
												),
												newObject
												]
											});

										} }
										type="image"
										value={ team.image }
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
											const newObject = Object.assign(
												{},
												team,
												{
												image: null
												}
											);
											setAttributes({
												teams: [
													...teams.filter(
													item => item.index != team.index
													),
													newObject
												]
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
								const image = media.sizes.medium
								? media.sizes.medium.url
								: media.url;
								const newObject = Object.assign({}, team, {
									image: image
								});
								setAttributes({
									teams: [
									...teams.filter(
										item => item.index != team.index
									),
									newObject
									]
								});
							} }
							allowed={ ALLOWED_MEDIA_TYPES }
							type="image"
							value={ team.image }
							className={ 'pb-team-member-image' }
							render={ ( { open } ) => (
								<Button onClick={ open }>
									{ ! team.image  ? <Dashicon icon="format-image" /> : 
									<img src={ team.image } alt="" className="pb-team-member-image" /> }
								</Button>
							) }
						>
						</MediaUpload>
					</div>
					<div className="pb-team-info">
						<RichText
							className={ classnames(
								className,
								'pb-team-member-name'
							) }
							tagName="span"
							value={ team.memberName }
							style={ {
								color: ( team.memberNameColor ) ? team.memberNameColor: undefined,
								fontSize: ( team.memberNameFontSize ) ? `${ team.memberNameFontSize }px` : undefined,
								textAlign: ( team.memberAlignment ) ? team.memberAlignment: undefined,
							} }
							placeholder={ __( 'Member Name', 'power-blocks' ) }
							onChange={ ( value ) => { 
								const newObject = Object.assign({}, team, {
									memberName: value
								});
								setAttributes({
									teams: [
										...teams.filter(
											item => item.index != team.index
										),
										newObject
									]
								});
							} }
						/>
						<RichText
							className={ classnames(
								className,
								'pb-team-member-designation'
							) }
							tagName="p"
							placeholder={ __( 'Member Designation', 'power-blocks' ) }
							value={ team.memberDesignation }
							style={ {
								color: ( team.memberDesignationColor ) ? team.memberDesignationColor : undefined,
								fontSize: ( team.memberDesignationFontSize ) ? `${ team.memberDesignationFontSize }px` : undefined,
								textAlign: ( team.memberAlignment ) ? team.memberAlignment : undefined,
							} }
							onChange={ ( value ) => { 
								const newObject = Object.assign({}, team, {
									memberDesignation: value
								});
								setAttributes({
									teams: [
										...teams.filter(
											item => item.index != team.index
										),
										newObject
									]
								});
							} }
						/>
						<RichText
							tagName="p"
							placeholder={ __( 'Add member desciption...', 'power-blocks' ) }
							value={ team.memberDescription }
							className={ classnames(
								className,
								'pb-team-member-description'
							) }
							style={ {
								color: ( team.memberDesignationColor ) ? team.memberDesignationColor : undefined,
								fontSize: ( team.memberDesignationFontSize ) ? `${ team.memberDesignationFontSize }px` : undefined,
								textAlign: ( team.memberAlignment ) ? team.memberAlignment : undefined,
							} }
							onChange={ ( value ) => { 
								const newObject = Object.assign({}, team, {
									memberDescription: value
								});
								setAttributes({
									teams: [
										...teams.filter(
											item => item.index != team.index
										),
										newObject
									]
								});
							} }
						/>

						{ ( team.socialIconShow ) ?
							<div className="pb-team-social">
								<ul>
									{ (team.facebookLink) ? 
										<li> 
											<a href={ ( team.facebookLink ) ? team.facebookLink: undefined } style={ fbStyle }> 
												<Dashicon icon="facebook-alt" />
											</a> 
										</li> : ''
									}
									{ (team.twitterLink) ?
										<li> 
											<a  href={ ( team.twitterLink ) ? team.facebookLink: undefined } style={ twitterStyle }> 
												<Dashicon icon="twitter" /> 
											</a> 
										</li> : ''
									}
									{ (team.twitterLink) ?
										<li> 
											<a href={ ( team.googleplusLink ) ? team.facebookLink: undefined }  style={ googleStyle }> 
											<Dashicon icon="googleplus" /> 
											</a> 
										</li> : ''
									}
								</ul>
							</div> : ''
						}
						<buton className="remove" 
							onClick={ () => removeItem( index )}					
						>
							Remove
						</buton>
						<br/>
						<buton className="remove" 
							onClick={ ( ) => {
								clickHandler( index );
							} }					
						>
							select
						</buton>
						
					</div>
				</div>
		)
	}
}