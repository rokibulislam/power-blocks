import classnames from 'classnames';
const { Component } = wp.element;
const { RichText } = wp.editor;
const { Dashicon } = wp.components;
export default class TeamMember extends Component {
	render() {
		const {
            team,
            key,
			className,
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
			<div key={ key } className={ classnames(
				className,
				'pb-team-member',
				'pb-team-member-background'
			) } style={ {
				backgroundColor: ( team.memberBackgroundColor ) ? team.memberBackgroundColor: undefined,
				borderRadius: ( team.memberBorderRadius ) ? team.memberBorderRadius: undefined,
				margin: ( team.memberMargin ) ? team.memberMargin: undefined,
                padding:( team.memberPadding ) ? team.memberPadding: undefined,
			} }
			>
                { team.image && (
				
                    <div className={ classnames(
                        'pb-team-image-container',
                        'pb-is-hoverable'
                        // 'pb-is-image-' 
                        //team.memberImageStyle
                    ) }>
						<img src={ team.image } alt="" className="pb-team-member-image" />
                    
                    </div>
                )}
				<div className="pb-team-info">
                    { team.memberName && ( 
                        <RichText.Content
                            className={ classnames(
                                className,
                                'pb-team-member-name'
                            ) }
                            style={ {
                                color: ( team.memberNameColor ) ? team.memberNameColor: undefined,
                                fontSize: ( team.memberNameFontSize ) ? `${ team.memberNameFontSize }px` : undefined,
                                textAlign: ( team.memberAlignment ) ? team.memberAlignment: undefined,
                            } }
                            tagName="h2"
                            value={ team.memberName }
                        />
                    )}
                    { team.memberDesignation && ( 
                        <RichText.Content
                            tagName="p"
                            className={ classnames(
                                className,
                                'pb-team-member-description'
                            ) }
                            style={ {
                                color: ( team.memberDesignationColor ) ? team.memberDesignationColor : undefined,
                                fontSize: ( team.memberDesignationFontSize ) ? `${ team.memberDesignationFontSize }px` : undefined,
                                textAlign: ( team.memberAlignment ) ? team.memberAlignment : undefined,
                            } }
                            value={ team.memberDesignation }
                        />
                    )}
                    { team.memberDescription && ( 

                    <RichText.Content
                        tagName="p"
                        className={ classnames(
                            className,
                            'pb-team-member-designation'
                        ) }
                        style={ {
                            color: ( team.memberDescriptionColor ) ? team.memberDescriptionColor: undefined,
                            fontSize: ( team.memberDescriptionFontSize ) ? `${ team.memberDescriptionFontSize }px` : undefined,
                            textAlign: ( team.memberAlignment ) ? team.memberAlignment : undefined,
                            } }
                        value={ team.memberDescription }
                    />
                    ) }
                    
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
                    
				</div>
			</div>
		);
	}

}
