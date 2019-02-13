/**
 * TeamMember Wrapper
 */
import classnames from 'classnames';
// Internationalization
const { __ } = wp.i18n;

// Extend component
const { Component, Fragment } = wp.element;

// Register editor components
const { RichText, AlignmentToolbar, BlockControls, MediaUpload } = wp.editor;
// Register components
const { Button, Toolbar, ColorPicker, TextControl, Dashicon, IconButton } = wp.components;

import Inspector from './inspector';
import TeamMember from './teammember';
import SingleTeam from './singleTeam';
import defaultAttributes from './attributes';
const ALLOWED_MEDIA_TYPES = [ 'image' ];

export default class editTeamMember extends Component {

	state = {
		selected: 0,
		newItems: [defaultAttributes],
		attributes: [
			defaultAttributes,
		],
	}

	addItems = async () => {
		console.log('Start: ', this.state.newItems )
		await this.setState( ( state, props ) => ( {
			newItems: [...state.newItems, defaultAttributes ],
			attributes: [...state.attributes, defaultAttributes ],
		} ) )
		console.log( 'End', this.state.newItems );
		this.props.setAttributes( {
			items: this.state.newItems,
		} );
	}

	removeItem = async ( itemindex ) => {
		console.log( 'Remove item : ' , itemindex );
		let findItems = this.state.newItems.filter( ( item , index ) => index !== itemindex );
		console.log( findItems );
		await this.setState( ( state, props ) => ( {
			newItems: findItems,
		} ) )
		this.props.setAttributes( {
			items: this.state.newItems,
		} );
	}

	clickHandler = ( index ) => {
		console.log('HH: ' , index)
		this.setState( ( state, props ) => ( {
			selected: index
		} ) )
	}

	attributesHandler = async ( index, key, newValue ) => {
		const self =this;
		console.log('HH: ' , parseInt(index));
	//	this.state.newItems[index].memberName = newValue;
		// console.log()
		// this.setState( ( state, props ) => ( {
		// 	// attributes[index].Key : newValue
		// } ) )
		// this.props.setAttributes( {
		// 	items[ index ].memberName =newValue;
		// } );
		// console.log('before', this.props.attributes.items );
		// this.props.attributes.items[parseInt(index)].memberName= newValue;
		// console.log( 'after',this.props.attributes.items );

	}

	faqsUpdate = async ( itemindex, key, newValue ) => {
		console.log( itemindex );
		console.log( newValue );
		console.log( key );
		const self = this;
		let updateItems = self.props.attributes.items;
		console.log('update items',updateItems);
		let aitems=updateItems.map( function( item, currIndex ) {
			if ( currIndex == itemindex ) {
				item[ key ] = newValue;
				return item;
			} else{
				return item; 
			}
		} );
		console.log('starting change ',aitems);
		self.props.setAttributes( {
			items: aitems,
		} );
		console.log('end changing', self.props.attributes.items);

	}

	//Render
	render() {	
		const {
			attributes: {
				items,
				design,
				memberAlignment,
			},
			attributes,
			isSelected,
			editable,
			className,
			setAttributes,
		} = this.props;

		// const rows = items.map( ( item, index ) => {

		// 	const commonStyle = {
		// 		borderColor: item.socialIconBorderColor, color: item.socialIconColor,
		// 		backgroundColor: item.socialIconBackgroundColor,
		// 		width: item.socialIconWidth,
		// 		height: item.socialIconWidth,
		// 	};

		// 	const fbStyle = ( item.socialColor ) ? { 
		// 		color: '#fff', backgroundColor: '#4267b2', width: item.socialIconWidth, height: item.socialIconWidth,
		// 	} : commonStyle;
		// 	const twitterStyle = ( item.socialColor ) ? {
		// 		color: '#fff',
		// 		backgroundColor: '#1da1f2',
		// 		width: item.socialIconWidth,
		// 		height: item.socialIconWidth,
		// 	} : commonStyle;
		// 	const googleStyle = ( item.socialColor ) ? {
		// 		color: '#fff',
		// 		backgroundColor: '#d34836',
		// 		width: item.socialIconWidth,
		// 		height: item.socialIconWidth,
		// 	} : commonStyle;

		// 	return (
		// 		<div key={ index }
		// 			className={ classnames(
		// 				this.props.className,
		// 				'pb-team-member',
		// 				'pb-team-member-background'
		// 			) } style={ {
		// 				color: item.memberNameColor,
		// 				backgroundColor: item.memberBackgroundColor,
		// 				borderRadius: item.memberBorderRadius,
		// 				marginLeft: item.memberMargin,
		// 				marginRight: item.memberMargin,
		// 				paddingLeft: item.memberPadding,
		// 				paddingRight: item.memberPadding,
        //             } }
        //             onClick={ () => {  this.clickHandler( index ) } }
        //         >
		// 			<div
		// 				className={ classnames(
		// 					this.props.className,
		// 					'pb-team-image-container',
		// 					'pb-is-hoverable',
		// 					'pb-is-image-' + item.memberImageStyle
		// 				) }>
		// 				{ item.memberImgID && isSelected &&
		// 				<div className={ classnames(
		// 					this.props.className,
		// 					'pb-team-image-hover',
		// 				) }>
		// 					<Toolbar>
		// 						<MediaUpload
		// 							onSelect={ ( img ) => {
		// 								setAttributes( {
		// 									// memberImgURL: img.url,
		// 									// memberImgID: img.id,
		// 									item: this.faqsUpdate( this.state.selected, 'memberImgURL', img.url, ),
		// 									item: this.faqsUpdate( this.state.selected, 'memberImgID', img.id ),
		// 								} );
		// 							// 	item: this.faqsUpdate( this.state.selected, 'memberImgURL', img.url ),
		// 							// 	// item: this.faqsUpdate( this.state.selected, 'memberImgID', img.id ),
		// 							} }
		// 							type="image"
		// 							value={ item.memberImgID }
		// 							className={ 'pb-team-member-image' }
		// 							render={ ( { open } ) => (
		// 								<IconButton
		// 									label={ __( 'Edit Image' ) }
		// 									icon="edit"
		// 									onClick={ open }
		// 								/>
		// 							) }
		// 						/>
		// 						<IconButton
		// 							label={ __( 'Remove Image' ) }
		// 							icon="trash"
		// 							onClick={ ( ) => setAttributes( {
		// 								item: this.faqsUpdate( this.state.selected, 'memberImgURL', '' ),
		// 								item: this.faqsUpdate( this.state.selected, 'memberImgID', '' ),
		// 							} ) }
		// 						/>
		// 					</Toolbar>
		// 				</div>
		// 				}
		// 				<MediaUpload
		// 					buttonProps={ {
		// 						className: 'change-image',
		// 					} }
		// 					onSelect={ ( img ) =>
		// 						setAttributes( {
		// 							// memberImgID: img.id,
		// 							// memberImgURL: img.url,	
		// 							item: this.faqsUpdate( this.state.selected, 'memberImgURL', img.url, ),
		// 							item: this.faqsUpdate( this.state.selected, 'memberImgID', img.id ),					
		// 						} )
		// 					}
		// 					allowed={ ALLOWED_MEDIA_TYPES }
		// 					type="image"
		// 					value={ item.memberImgURL }
		// 					className={ 'pb-team-member-image' }
		// 					render={ ( { open } ) => (
		// 						<Button onClick={ open }>
		// 							{  !item.memberImgURL && !item.memberImgID ? <Dashicon icon="format-image" /> : <img src={ item.memberImgURL } alt="" className="pb-team-member-image" /> }										
		// 						</Button>
		// 					) }
		// 				>
		// 				</MediaUpload>
		// 			</div>
		// 			<div className="pb-team-info">
		// 				<RichText
		// 					className={ classnames(
		// 						this.props.className,
		// 						'pb_button'
		// 					) }
		// 					tagName="span"
		// 					value={ item.memberName }
		// 					style={ {
		// 						color: item.memberNameColor,
		// 						fontSize: ( item.memberNameFontSize ) ? `${ item.memberNameFontSize }px` : undefined,
		// 						textAlign: item.memberAlignment,
		// 					} }
		// 					placeholder={ __( 'Member Name', 'power-blocks' ) }
		// 					onChange={ ( value ) => { 
		// 						setAttributes( {
		// 							item: this.faqsUpdate( this.state.selected, 'memberName', value ),
		// 						} )
		// 					} }
		// 				/>
		// 				<RichText
		// 					className={ classnames(
		// 						this.props.className,
		// 						'pb-team-member-designation'
		// 					) }
		// 					tagName="p"
		// 					placeholder={ __( 'Member Designation', 'power-blocks' ) }
		// 					value={ item.memberDesignation }
		// 					style={ {
		// 						color: item.memberDesignationColor,
		// 						fontSize: ( item.memberDesignationFontSize ) ? `${ item.memberDesignationFontSize }px` : undefined,
		// 						textAlign: item.memberAlignment,
		// 					} }
		// 					// onChange={ ( value ) => setAttributes( { memberDesignation: value } ) }
		// 					onChange={ ( value ) => setAttributes( {
		// 						item: this.faqsUpdate( this.state.selected, 'memberDesignation', value ),
		// 					} ) }
		// 				/>

		// 				<RichText
		// 					tagName="p"
		// 					placeholder={ __( 'Add member desciption...', 'power-blocks' ) }
		// 					value={ item.memberDescription }
		// 					className={ classnames(
		// 						this.props.className,
		// 						'pb-team-member-description'
		// 					) }
		// 					style={ {
		// 						textAlign: item.memberAlignment,
		// 						color: item.memberDescriptionColor,
		// 						fontSize: ( item.memberDescriptionFontSize ) ? `${ item.memberDescriptionFontSize }px` : undefined,

		// 					} }
		// 					// onChange={ ( value ) => setAttributes( { memberDescription: value } ) }	
		// 					onChange={ ( value ) => setAttributes( {
		// 						item: this.faqsUpdate( this.state.selected, 'memberDescription', value ),
		// 					} ) }
		// 				/>
		// 				{ ( item.socialIconShow ) ?
		// 					<div className="pb-team-social">
		// 						<ul>
		// 							<li> <Button style={ fbStyle }> <Dashicon icon="facebook-alt" />
		// 							</Button> </li>
		// 							<li> <Button style={ twitterStyle }> <Dashicon icon="twitter" /> </Button> </li>
		// 							<li> <Button style={ googleStyle }> <Dashicon icon="googleplus" /> </Button> </li>
		// 						</ul>
		// 					</div> : ''
		// 				}
		// 				<buton className="remove-testimonial" 
		// 					onClick={ () => this.removeItem( index ) }					
		// 					// onClick={ (  ) => {
		// 					// 	// console.log( items );
		// 					// 	let newitems = items.filter( a => a !== item );
		// 					// 	//console.log(newitems);
		// 					// 	// this.state = {
		// 					// 	// 	selected: undefined,
		// 					// 	// };
		// 					// 	this.clickHandler('');
		// 					// 	//console.log( this.state.selected );

		// 					// 	this.props.setAttributes( {
		// 					// 		items: newitems
		// 					// 	} );
		// 					// 	console.log('remove');
		// 					// 	console.log(items);
		// 					// } } 
		// 				>
		// 					Remove
		// 				</buton>
		// 			</div>
		// 		</div>
		// 	)
		// } );

		return (
			<Fragment>
				<BlockControls key="controls">
					<AlignmentToolbar
						value={ memberAlignment }
						// onChange={ onChangeMemberAlignment }
						onChange={ ( value ) => setAttributes( {
							memberAlignment: value,
						//	faqsUpdate( this.state.selected, 'memberAlignment', value ),
						} ) }
					/>
					<Toolbar>
						<Button className={ 'button button-primary power-add-item-wrapper' } onClick={ () => this.addItems() }>
								Add Team Member 222
						</Button>
					</Toolbar>

				</BlockControls>
								
				<Inspector { ...{ setAttributes, ...this.props } } state={ this.state }   />
				<div>
					{ items.sort( ( a, b ) => a.index - b.index ).map( ( item, index ) => {
						return (
							<SingleTeam key={ index } { ...{ setAttributes, ...this.props } }
								items={ items } item={ item }
								clickHandler={ this.clickHandler }
								attributesHandler={ this.attributesHandler }
								removeItem={ this.removeItem }
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
