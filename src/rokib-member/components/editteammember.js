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
import gutenTeamAttribute from './attributes';

const ALLOWED_MEDIA_TYPES = [ 'image' ];

export default class editTeamMember extends Component {
	state = {
		selected: -1,
		newItems: [],
	}

	addItems = async () => {
		console.log( 'start', this.props.attributes.items );

		await this.props.setAttributes( {
			// items: [...this.props.attributes.items, gutenTeamAttribute ]
			items: [...this.props.attributes.items, {defaultAttributes} ]
			// items: [...this.props.attributes.items,defaultAttributes ]
		} );
		console.log( 'End', this.props.attributes.items );

	}
	removeItem = async ( itemindex ) => {
		let findItems = this.props.attributes.items.filter( ( item , index ) => index !== itemindex );
		await this.setState( ( state, props ) => ( {
			selected: -1,
		} ) )
		await this.props.setAttributes( {
			items: findItems,
		} );
		console.log( 'remove', this.props.attributes.items );

	}

	clickHandler = ( index ) => {
		this.setState( ( state, props ) => ( {
			selected: index
		} ) )
	}

	// faqsUpdate( itemindex, key, newValue ) {
	// 	const self = this;
	// 	// const items = self.props.attributes.items;
	// 	// return items.map( function( item, currIndex ) {
	// 	// 	if ( index === currIndex ) {
	// 	// 		item[ key ] = newValue;
	// 	// 	}
	// 	// 	return item;
	// 	// } );
	// }
	faqsUpdate = async ( itemindex, key, newValue ) => {

		let findItems = this.props.attributes.items.map( ( item , index ) => { 
			if ( index === itemindex) {
				item[key] = newValue;
			}
			return item;
		} );
		await this.props.setAttributes( {
			items: findItems,
		} );

		console.log(this.props.attributes.items);
	}

	// onChangememberName = ( value ) => {

	// 	let newObject = Object.assign({}, item, {
	// 		memberName: value
	// 	});

	// 	let findItems = this.props.attributes.items.filter( ( item , index ) => index !== itemindex );

			
	// 	setAttributes({
	// 		items: [
	// 			...items.filter(
	// 			newitem => newitem.index != index
	// 			),
	// 			newObject
	// 		]
	// 	});
	// }

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
		

		const rows = items.sort((a, b) => a.index - b.index).map( ( item, index ) => {

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
				color: '#fff',
				backgroundColor: '#1da1f2',
				width: item.socialIconWidth,
				height: item.socialIconWidth,
			} : commonStyle;
			const googleStyle = ( item.socialColor ) ? {
				color: '#fff',
				backgroundColor: '#d34836',
				width: item.socialIconWidth,
				height: item.socialIconWidth,
			} : commonStyle;

			const descriptionStyle = {
				textAlign: item.memberAlignment,
				color: item.memberDescriptionColor,
				fontSize: ( item.memberDescriptionFontSize ) ? `${ item.memberDescriptionFontSize }px` : undefined,
			}

			return (
				<div key={ index }
					className={ classnames(
						this.props.className,
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
                    onClick={ () => {  this.clickHandler( index ) } }
                >
					<div
						className={ classnames(
							this.props.className,
							'pb-team-image-container',
							'pb-is-hoverable',
							'pb-is-image-' + item.memberImageStyle
						) }>
						{ item.memberImgID && isSelected &&
						<div className={ classnames(
							this.props.className,
							'pb-team-image-hover',
						) }>
							<Toolbar>
								<MediaUpload
									onSelect={ ( img ) => {
										setAttributes( {
											// memberImgURL: img.url,
											// memberImgID: img.id,
											item: this.faqsUpdate( this.state.selected, 'memberImgURL', img.url, ),
											item: this.faqsUpdate( this.state.selected, 'memberImgID', img.id ),
										} );
									// 	item: this.faqsUpdate( this.state.selected, 'memberImgURL', img.url ),
									// 	// item: this.faqsUpdate( this.state.selected, 'memberImgID', img.id ),
									} }
									type="image"
									value={ item.memberImgID }
									className={ 'pb-team-member-image' }
									render={ ( { open } ) => (
										<IconButton
											label={ __( 'Edit Image' ) }
											icon="edit"
											onClick={ open }
										/>
									) }
								/>
								<IconButton
									label={ __( 'Remove Image' ) }
									icon="trash"
									onClick={ ( ) => setAttributes( {
										item: this.faqsUpdate( this.state.selected, 'memberImgURL', '' ),
										item: this.faqsUpdate( this.state.selected, 'memberImgID', '' ),
									} ) }
								/>
							</Toolbar>
						</div>
						}
						<MediaUpload
							buttonProps={ {
								className: 'change-image',
							} }
							onSelect={ ( img ) =>
								setAttributes( {
									// memberImgID: img.id,
									// memberImgURL: img.url,	
									item: this.faqsUpdate( this.state.selected, 'memberImgURL', img.url, ),
									item: this.faqsUpdate( this.state.selected, 'memberImgID', img.id ),					
								} )
							}
							allowed={ ALLOWED_MEDIA_TYPES }
							type="image"
							value={ item.memberImgURL }
							className={ 'pb-team-member-image' }
							render={ ( { open } ) => (
								<Button onClick={ open }>
									{  !item.memberImgURL && !item.memberImgID ? <Dashicon icon="format-image" /> : <img src={ item.memberImgURL } alt="" className="pb-team-member-image" /> }										
								</Button>
							) }
						>
						</MediaUpload>
					</div>
					<div className="pb-team-info">
						<RichText
							className={ classnames(
								this.props.className,
								'pb-team-member-name'
							) }
							tagName="h2"
							value={ item.memberName }
							style={ {
								color: item.memberNameColor,
								fontSize: ( item.memberNameFontSize ) ? `${ item.memberNameFontSize }px` : undefined,
								textAlign: item.memberAlignment,
							} }
							placeholder={ __( 'Member Name', 'power-blocks' ) }

							// onChange = { onChangememberName() }
							onChange={ ( value ) => { 
								// console.log("before state",this.props.attributes.items);
								// const newObject = Object.assign({}, item, {
								// 	memberName: value
								//   });
								
								// this.setState( ( state, props ) => ( {
								// 	selected: -1,
								// } ) )
								// console.log('filter',items.filter(
								// 		( titem , itemindex ) => itemindex !== index 
								// ));
								// setAttributes({
								// 	items: [
								// 		...items.filter(
								// 			// titem => titem.index != item.index
								// 			( titem , itemindex ) => itemindex !== index 
								// 		),
								// 		newObject
								// 	]
								// });
								setAttributes( {
									// item: this.faqsUpdate( this.state.selected, 'memberName', value ),
									item: this.faqsUpdate( index, 'memberName', value ),
								} )
								console.log("afterend",this.props.attributes.items);

							} }
						/>
						<RichText
							className={ classnames(
								this.props.className,
								'pb-team-member-designation'
							) }
							tagName="p"
							placeholder={ __( 'Member Designation', 'power-blocks' ) }
							value={ item.memberDesignation }
							style={ {
								color: item.memberDesignationColor,
								fontSize: ( item.memberDesignationFontSize ) ? `${ item.memberDesignationFontSize }px` : undefined,
								textAlign: item.memberAlignment,
							} }
							// onChange={ ( value ) => setAttributes( { memberDesignation: value } ) }
							onChange={ ( value ) => setAttributes( {
								item: this.faqsUpdate( this.state.selected, 'memberDesignation', value ),
							} ) }
						/>

						<RichText
							tagName="p"
							placeholder={ __( 'Add member desciption...', 'power-blocks' ) }
							value={ item.memberDescription }
							className={ classnames( this.props.className,'pb-team-member-description') }
							style={ descriptionStyle }	
							onChange={ ( value ) => setAttributes( {
								item: this.faqsUpdate( this.state.selected, 'memberDescription', value ),
							} ) }
						/>
						{ ( item.socialIconShow ) ?
							<div className="pb-team-social">
								<ul>
									<li> <Button style={ fbStyle }> <Dashicon icon="facebook-alt" />
									</Button> </li>
									<li> <Button style={ twitterStyle }> <Dashicon icon="twitter" /> </Button> </li>
									<li> <Button style={ googleStyle }> <Dashicon icon="googleplus" /> </Button> </li>
								</ul>
							</div> : ''
						}
						{/* <button className="remove-testimonial" 
							onClick={ () => this.removeItem( index ) }					
							// onClick={ (  ) => {
							// 	// console.log( items );
							// 	let newitems = items.filter( a => a !== item );
							// 	//console.log(newitems);
							// 	// this.state = {
							// 	// 	selected: undefined,
							// 	// };
							// 	this.clickHandler('');
							// 	//console.log( this.state.selected );

							// 	this.props.setAttributes( {
							// 		items: newitems
							// 	} );
							// 	console.log('remove');
							// 	console.log(items);
							// } } 
						>
							Remove
						</button> */}
					</div>
				</div>
			)
		} );

		return (
			<Fragment>
				<BlockControls key="controls">
					<AlignmentToolbar
						value={ memberAlignment }
						// onChange={ onChangeMemberAlignment }
						onChange={ ( value ) => setAttributes( {
							memberAlignment: value,
							// this.faqsUpdate( this.state.selected, 'memberAlignment', value ),
						} ) }
					/>
					<Toolbar>
						<Button className={ 'button button-primary power-add-item-wrapper' }
						onClick= { () => this.addItems() }
						// onClick={ ( ) => {
						// 	return setAttributes( {
						// 		// items: items.concat( [ { } ] ) 
						// 		items: items.concat( defaultAttributes ),
						// 	} );
						// } }
						
						>
								Add Team Member 
						</Button>

						<Button className={ 'button button-primary power-add-item-wrapper' }
						onClick= { () => this.addItems() }
						// onClick={ ( ) => {
						// 	return setAttributes( {
						// 		// items: items.concat( [ { } ] ) 
						// 		items: items.concat( defaultAttributes ),
						// 	} );
						// } }
						onClick={ () => this.removeItem( this.state.selected ) }
						
						>
								REMOVE Team Member 
						</Button>



					</Toolbar>

				</BlockControls>
				<Inspector { ...{ setAttributes, ...this.props } } state={ this.state }  />
				<div>
					<div className={ classnames(
						this.props.className,
					) } style={ { textAlign: memberAlignment } } > { rows } </div>
				</div>
			</Fragment>
		);
	}
}
