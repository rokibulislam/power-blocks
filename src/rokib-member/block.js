import classnames from 'classnames';
import TeamMember from './components/teammember';
import editTeamMember from './components/editteammember';
import defaultAttributes from './components/attributes';
import gutenTeamAttribute from './components/attributes';
import './styles/style.scss';
import './styles/editor.scss';
const { __ } = wp.i18n; 
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;
const { Button, Dashicon } = wp.components;

registerBlockType( 'power-blocks/team-member', {
	title: __( 'Team Member', 'power-blocks' ),
	description: __( '.', 'power-blocks' ),
	icon: 'format-status',
	category: 'power-blocks', 
	keywords: [
		__( 'Team Member', 'power-blocks' ),
	],
	attributes: {
		items: {
			type: 'array',
			default: []
				// { defaultAttributes }
		}
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
		// 	default: [
		// 		gutenTeamAttribute
		// 	],
		// 	selector: '',
		// 	query: gutenTeamAttribute,
		// },
	},

	styles: [],

	edit: editTeamMember,

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
