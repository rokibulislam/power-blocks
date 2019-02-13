const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { AlignmentToolbar, BlockControls } = wp.editor;
const { Toolbar, Button } = wp.components;
import Inspector from './inspector';
import PbButton from './button';
import SingleButton from './singlebutton';
export default class EditPbButton extends Component {
	state = {
		selected: -1,
	}
	clickHandler = ( index ) => {
		console.log('setindex',index);
		this.setState( ( state, props ) => ( {
			selected: index,
		} ) )
	}

	addItems = async () => {
        this.props.setAttributes({
            items: [
                ...this.props.attributes.items,
                {
					index: this.props.attributes.items.length,
					buttonText: 'NEW Button',
					buttonUrl: '',
					borderRadius: '0',
					buttonSize: '',
					buttonBackground: '#000',
					buttonHoverBackground: '',
					borderColor: '#000',
					hoverColor: '#dd0',
					buttonTextColor: '#fff',
					buttonTarget: 'false',
					buttonAlignment: 'left',
					buttonSize: ".75em"            
                }
            ]
        })
	}

	removeItem = async ( itemindex ) => {
		console.log("remove index",itemindex);
        const newitems = this.props.attributes.items.filter(item => item.index != itemindex)
        .map(t => {
            if (t.index > itemindex) {
                t.index -= 1;
            }

            return t;
		});
		await this.setState( ( state, props ) => ( {
			selected: -1,
		} ) )

        this.props.setAttributes({
            items: newitems
        });
	}
	
	render() {
		const {
			attributes: {
				items,
				design,
			},
			setAttributes,
			isSelected,
			className
		} = this.props;
		return (
			<Fragment>
				<BlockControls key="controls">
					<AlignmentToolbar
						value={ '' }
						onChange={ ( value ) => setAttributes( { '': value } ) }
					/>
					<Toolbar>
						<Button
							className={ 'button button-primary power-add-item-wrapper' }
							onClick= { () => this.addItems() }
						> 
							Add item
						</Button>
					</Toolbar>
				</BlockControls>
				<Inspector { ...{ setAttributes, ...this.props } } state={ this.state } />
				{ items.sort( ( a, b ) => a.index - b.index ).map( ( item, index ) => {
						return (
							<SingleButton key={ index } { ...{ setAttributes, ...this.props } }
                            items={ items } item={ item }
                                removeItem={ this.removeItem }
                                clickHandler={ this.clickHandler }
								index={ index }
								// state={ this.state } 
                            />
						)
					} )
                }
				{/* <PbButton { ...this.props } key=" " state={ this.state }
				removeItem={ this.removeItem } 
				clickHandler={ this.clickHandler }></PbButton> */}
			</Fragment>
		);
	}
}