/**
 * Accordion: blocks
 *
 * Registering a Accordion block with Gutenberg.
 * Accordion block, renders and saves the same content without any interactivity.
 */
import classnames from 'classnames';
import TeamMember from './components/teammember';
import editTeamMember from './components/editteammember';
//  Import CSS.
import './styles/style.scss';
import './styles/editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
// Register editor components
const { RichText } = wp.editor;
// Register components
const { Button, Dashicon } = wp.components;

registerBlockType( 'power-blocks/team-member', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Team Member', 'power-blocks' ), // Block title.
	description: __( '.', 'power-blocks' ),
	icon: 'format-status', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'power-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Team Member', 'power-blocks' ),
	],
	attributes: {

		memberName: {
			type: 'string',
			selector: '.pb-team-member-name',
		},
		memberNameColor: {
			type: 'string',
			default: '',
		},
		memberNameFontSize: {
			type: 'number',
			default: 18,
		},
		memberDesignation: {
			type: 'string',
			selector: '.pb-team-member-designation',
		},
		memberDesignationColor: {
			type: 'string',
			default: '',
		},
		memberDesignationFontSize: {
			type: 'number',
			default: 18,
		},
		memberDescription: {
			type: 'string',
			selector: '.pb-team-member-description',
		},
		memberDescriptionFontSize: {
			type: 'number',
			default: 18,
		},
		memberDescriptionColor: {
			type: 'string',
			default: '',
		},
		memberAlignment: {
			type: 'string',
			default: 'left',
		},
		memberBackgroundColor: {
			type: 'string',
			default: '',
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

	},

	styles: [],

	edit: editTeamMember,

	save: function( props ) {
		// Setup the attributes
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
			className,
		} = props;

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
			<TeamMember { ...props }>
				<div className={ classnames(
					'pb-team-image-container',
					'pb-is-hoverable',
					'pb-is-image-' + memberImageStyle
				) }>
					{ memberImgURL && (
						<img src={ memberImgURL } alt="" className="pb-team-member-image" />
					) }
				</div>

				<div className="pb-team-info pb-text-center">
					{ memberName && (
						<RichText.Content
							className={ classnames(
								className,
								'pb-team-member-name'
							) }
							style={ {
								color: memberNameColor,
								textAlign: memberAlignment,
							} }
							tagName="h2"
							value={ memberName }
						/>
					) }
					{ memberDesignation && (
						<RichText.Content
							tagName="p"
							className={ classnames(
								className,
								'pb-team-member-description'
							) }
							style={ {
								color: memberDesignationColor,
								fontSize: ( memberDesignationFontSize ) ? `${memberDesignationFontSize}px` : undefined,
								textAlign: memberAlignment,
							} }
							value={ memberDesignation }
						/>
					) }

					{ memberDescription && (
						<RichText.Content
							tagName="p"
							className={ classnames(
								className,
								'pb-team-member-designation'
							) }
							style={ {
								color: memberDescriptionColor,
								fontSize: ( memberDescriptionFontSize ) ? `${memberDescriptionFontSize}px` : undefined,
								textAlign: memberAlignment,
							} }
							value={ memberDescription }
						/>
					) }

					<div className="pb-team-social">
						<ul>
							<li> <a href={ facebookLink } style={ fbStyle }> <Dashicon icon="facebook-alt" />
							</a> </li>
							<li> <a href={ twitterLink } style={ twitterStyle }> <Dashicon icon="twitter" /> </a> </li>
							<li> <a href={ googleplusLink } style={ googleStyle }> <Dashicon icon="googleplus" /> </a> </li>
						</ul>
					</div>
				</div>
			</TeamMember>
		);
	},
} );
