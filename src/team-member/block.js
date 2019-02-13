import classnames from 'classnames';
import TeamMember from './components/teammember';
import editTeamMember from './components/editteammember';
// import defaultAttributes from './components/attributes';
import gutenTeamAttribute from './components/attributes';
//  Import CSS.
import './styles/style.scss';
import './styles/editor.scss';
const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
// Register editor components
// const { RichText } = wp.editor;
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

		items: {
			type: 'array',
			default: [
				{
					memberName: 'Mahbubur Rahman',
					memberNameColor: '#fff',
					memberNameFontSize: 24,
					memberDesignation: 'Software Engineer',
					memberDesignationColor: '#fff',
					memberDesignationFontSize: 15,
					memberDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text',
					memberDescriptionColor: '#fff',
					memberDescriptionFontSize: 15,
					// memberAlignment: 'left',
					memberBackgroundColor: '#2574A9',
					memberboxshadow: 0,
					memberBorderRadius: 0,
					memberMargin: 0,
					memberPadding: 0,
					memberImageStyle: 'round',
					socialIconWidth: 32,
					socialIconHeight: 32,
					socialIconLineHeight: 32,
					socialIconShow: true,
					socialColor: false,
					socialIconColor: '#fff',
					socialIconBackgroundColor: '#d34836',
					socialIconBorderColor: '',
					hoverEffect: true,
					hoverBackgroundColor: '',
					hoverBackgroundOpacity: '',
					facebookLink: '',
					twitterLink: '',
					googleplusLink: '',
					memberImgURL: '',
					memberImgID: '',
				},
			],
		},
		// design: {
		// 	type: 'string',
		// 	default: 'basic',
		// },
		// memberAlignment: {
		// 	type: 'string',
		// 	default: 'left',
		// },
		// items: {
		// 	source: 'query',
		// 	default: [],
		// 	selector: '',
		// 	query: gutenTeamAttribute,
		// },
	},

	styles: [],

	edit: editTeamMember,
	// edit: function(props) {
	// 	return (
	// 		<div>
	// 			hello team backend
	// 		</div>
	// 	)
	// },
	// save: function(props) {
	// 	return (
	// 		<div>
	// 			hello team frontend
	// 		</div>
	// 	)
	// },
	save: function( props ) {
		// Setup the attributes
		const {
			attributes: {
				items,
				design,
			},
			setAttributes,
		} = props;
		return (
			<div>
				{
					items.sort( ( a, b ) => a.index - b.index ).map( ( item, index ) => {
						return (
							<TeamMember key={ index } { ...{ setAttributes, ...props } } item={ item }/>
						)
					} )
				}
			</div>
		);
	},
} );
