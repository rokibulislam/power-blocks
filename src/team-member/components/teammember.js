/**
 * TeamMember Wrapper
 */

// Setup the block
import classnames from 'classnames';
const { Component } = wp.element;
const { RichText } = wp.editor;
const { Dashicon } = wp.components;

/**
 * Create a TeamMember wrapper Component
 */
export default class TeamMember extends Component {
	render() {
		const {
			item,
			design,
			key,
			className,
		} = this.props;

		const commonStyle = {
			borderColor: item.socialIconBorderColor, color: item.socialIconColor,
			backgroundColor: item.socialIconBackgroundColor,
			width: item.socialIconWidth,
			height: item.socialIconWidth,
		};
		const fbStyle = ( item.socialColor ) ? {
			color: '#fff', backgroundColor: '#4267b2', width: item.socialIconWidth, height: item.socialIconWidth,
		} : commonStyle;
		const twitterStyle = ( item.socialColor ) ? {
			color: '#fff', backgroundColor: '#1da1f2', width: item.socialIconWidth, height: item.socialIconWidth,
		} : commonStyle;
		const googleStyle = ( item.socialColor ) ? {
			color: '#fff', backgroundColor: '#d34836', width: item.socialIconWidth, height: item.socialIconWidth,
		} : commonStyle;

		return (
			// <div className={ classnames(
			// 	this.props.className,
			// 	'pb-container'
			// ) }>
			// 	<div className={ classnames(
			// 		this.props.className,
			// 		'pb-row',
			// 		'pb-gutter-20'
			// 	) }>
			// 		<div className={ classnames(
			// 			this.props.className,
			// 			'pb-col-md-12'
			// 		) }>
			// 		</div>
			// 	</div>
			// </div>
			<div key={ key } className={ classnames(
				className,
				'pb-team-member',
				'pb-team-member-background'
			) } style={ {
				color: item.memberNameColor,
				backgroundColor: item.memberBackgroundColor,
				borderRadius: item.memberBorderRadius,
				marginLeft: item.memberMargin,
				marginRight: item.memberMargin,
				paddingLeft: item.memberPadding,
				paddingRight: item.memberPadding,
			} }
			>
				<div className={ classnames(
					'pb-team-image-container',
					'pb-is-hoverable',
					'pb-is-image-' + item.memberImageStyle
				) }>
					{ item.memberImgURL && (
						<img src={ item.memberImgURL } alt="" className="pb-team-member-image" />
					) }
				</div>
				<div className="pb-team-info pb-text-center">
					{ item.memberName && (
						<RichText.Content
							className={ classnames(
								className,
								'pb-team-member-name'
							) }
							style={ {
								color: item.memberNameColor,
								fontSize: ( item.memberNameFontSize ) ? `${ item.memberNameFontSize }px` : undefined,
								textAlign: item.memberAlignment,
							} }
							tagName="h2"
							value={ item.memberName }
						/>
					) }
					{ item.memberDesignation && (
						<RichText.Content
							tagName="p"
							className={ classnames(
								className,
								'pb-team-member-description'
							) }
							style={ {
								color: item.memberDesignationColor,
								fontSize: ( item.memberDesignationFontSize ) ? `${ item.memberDesignationFontSize }px` : undefined,
								textAlign: item.memberAlignment,
							} }
							value={ item.memberDesignation }
						/>
					) }

					{ item.memberDescription && (
						<RichText.Content
							tagName="p"
							className={ classnames(
								className,
								'pb-team-member-designation'
							) }
							style={ {
								color: item.memberDescriptionColor,
								fontSize: ( item.memberDescriptionFontSize ) ? `${ item.memberDescriptionFontSize }px` : undefined,
								textAlign: item.memberAlignment,
							} }
							value={ item.memberDescription }
						/>
					) }

					{ ( item.socialIconShow ) ?
						<div className="pb-team-social">
							<ul>
								<li> <a href={ item.facebookLink } style={ fbStyle }> <Dashicon icon="facebook-alt" />
								</a> </li>
								<li> <a href={ item.twitterLink } style={ twitterStyle }> <Dashicon icon="twitter" /> </a> </li>
								<li> <a href={ item.googleplusLink }style={ googleStyle }> <Dashicon icon="googleplus" /> </a> </li>
							</ul>
						</div> : ''
					}
				</div>
			</div>

		);
	}

}
