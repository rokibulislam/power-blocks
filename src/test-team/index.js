import classnames from 'classnames';
import "./styles/style.scss";
import "./styles/editor.scss";
const __ = wp.i18n.__;
const registerBlockType = wp.blocks.registerBlockType;
const { PanelColorSettings, InspectorControls, RichText,PlainText } = wp.editor;
const { PanelBody, RangeControl, ToggleControl, SelectControl, TextControl, RadioControl } = wp.components;
import Edit from './edit';
import TeamMember from './teamMember';
registerBlockType( 'power-blocks/team-member', {
	title: __( 'Team Member', 'power-blocks' ),
	description: __( '.', 'power-blocks' ),
	icon: 'format-status',
	category: 'power-blocks', 
	keywords: [
		__( 'Team Member', 'power-blocks' ),
	],
	attributes: {
		teams: {
			type: "array",
			default: [],
		},
		id: {
			type: "string",
			source: "attribute",
			selector: ".carousel.slide",
			attribute: "id"
		},
    },
	edit: Edit,
	save: function(props) {
		const { 
			attributes: {
				teams,
				testBackgroundColor
			},
			setAttributes 
		} = props;
		console.log(props.attributes);
		return (
			<div>
				{
					teams.sort( ( a, b ) => a.index - b.index ).map( ( team, index ) => {
						return (
							<TeamMember key={ index } { ...{ setAttributes, ...props } } team={ team }/>
						)
					} )
				}
			</div>
		)
	}
});
