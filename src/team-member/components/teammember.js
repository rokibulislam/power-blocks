/**
 * TeamMember Wrapper
 */

// Setup the block
import classnames from 'classnames';
const { Component } = wp.element;

/**
 * Create a TeamMember wrapper Component
 */
export default class TeamMember extends Component {

	render() {
		const {
			attributes: {
				memberName,
				memberNameFontSize,
				memberNameColor,
				memberDesignation,
				memberDesignationColor,
				memberDesignationFontSize,
				memberDescription,
				memberDescriptionColor,
				memberDescriptionFontSize,
				memberAlignment,
				memberBackgroundColor,
				memberImageStyle,
				memberBorderRadius,
				memberMargin,
				memberPadding,
			}
		} = this.props;

		return (
			<div className={ classnames(
				this.props.className,
				'pb-container'
			) }>
				<div className={ classnames(
					this.props.className,
					'pb-row',
					'pb-gutter-20'
				) }>
					<div className={ classnames(
						this.props.className,
						'pb-col-md-12'
					) }>
						<div className={ classnames(
							this.props.className,
							'pb-team-member',
							'pb-team-member-background'
						) } style={ {
							color: memberNameColor,
							backgroundColor: memberBackgroundColor,
							borderRadius: memberBorderRadius,
							marginLeft: memberMargin,
							marginRight: memberMargin,
							paddingLeft: memberPadding,
							paddingRight: memberPadding,
						} }
						>
							{ this.props.children }
						</div>
					</div>
				</div>
			</div>
		);
	}

}
