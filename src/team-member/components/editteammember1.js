// Extend component
const { Component, Fragment } = wp.element;
// Register editor components
const { AlignmentToolbar, BlockControls } = wp.editor;
// Register components
const { Button, Toolbar } = wp.components;
import Inspector from './inspector';
import SingleTeam from './singleTeam';
// import defaultAttributes from './attributes';
import gutenTeamAttribute from './attributes';
export default class editTeamMember extends Component {
	state = {
		selected: 0,
	}

	clickHandler = ( index ) => {
		// console.log('HH: ' , index)
		this.setState( ( state, props ) => ( {
			selected: index
		} ) )
	}

	faqsUpdate( index, key, newValue ) {
		const self = this;
		const items = self.props.attributes.items;
		return items.map( function( item, currIndex ) {
			if ( index === currIndex ) {
				item[ key ] = newValue;
			}
			return item;
		} );
	}

	//Render
	render() {
		const {
			attributes: {
				items,
				design,
			},
			setAttributes,
		} = this.props;
		return (
			<Fragment>
				<BlockControls key="controls">
					<AlignmentToolbar
						// value={ memberAlignment }
						value={ '' }
						onChange={ ( value ) => setAttributes(
							{
								// memberAlignment: value
								//this.faqsUpdate( state.selected, 'memberAlignment', value ),
							} ) }
					/>
					<Toolbar>
						<Button className={ 'button button-primary power-add-item-wrapper' } onClick={ ( ) => {
							return setAttributes( {
								items: items.concat( [ { } ] ) 
								// items: items.concat( defaultAttributes ),
							} );
						} } >
								Add Team Member
						</Button>
					</Toolbar>

				</BlockControls>
				<Inspector { ...{ setAttributes, ...this.props } } state={ this.state } />
				<div>
					{ items.sort( ( a, b ) => a.index - b.index ).map( ( item, index ) => {
						return (
							<SingleTeam key={ index } { ...{ setAttributes, ...this.props } }
								items={ items } item={ item }
								clickHandler={ this.clickHandler }
								faqsUpdate={ this.faqsUpdate }
								index={ index }
								state={ this.state } />
						)
					} )
					}
				</div>
			</Fragment>
		);
	}
}
