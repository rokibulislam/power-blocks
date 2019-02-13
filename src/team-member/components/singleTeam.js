import classnames from 'classnames';
const { Button, Toolbar, IconButton, Dashicon } = wp.components;
const { RichText, MediaUpload } = wp.editor;
const { __ } = wp.i18n;
const ALLOWED_MEDIA_TYPES = [ 'image' ];
const SingleTeam = ( props ) => {
	const commonStyle = {
		borderColor: props.item.socialIconBorderColor, color: props.item.socialIconColor,
		backgroundColor: props.item.socialIconBackgroundColor,
		width: props.item.socialIconWidth,
		height: props.item.socialIconWidth,
	};
	const fbStyle = ( props.item.socialColor ) ? {
		color: '#fff', backgroundColor: '#4267b2', width: props.item.socialIconWidth, height: props.item.socialIconWidth,
	} : commonStyle;
	const twitterStyle = ( props.item.socialColor ) ? {
		color: '#fff', backgroundColor: '#1da1f2', width: props.item.socialIconWidth, height: props.item.socialIconWidth,
	} : commonStyle;
	const googleStyle = ( props.item.socialColor ) ? {
		color: '#fff', backgroundColor: '#d34836', width: props.item.socialIconWidth, height: props.item.socialIconWidth,
	} : commonStyle;
	// console.log(props.item);

	const handleInputChange = event => {
		console.log(event.target);
	}

	return (
		<div key={ props.key }
			className={ classnames(
				props.className,
				'pb-team-member',
				'pb-team-member-background'
			) } style={ {
				color: props.item.memberNameColor,
				backgroundColor: props.item.memberBackgroundColor,
				borderRadius: props.item.memberBorderRadius,
				marginLeft: props.item.memberMargin,
				marginRight: props.item.memberMargin,
				paddingLeft: props.item.memberPadding,
				paddingRight: props.item.memberPadding,
			} }
			onClick={ ( ) => {
				props.clickHandler( props.index );
			} }
		>
			<div className={ classnames(
				props.className,
				'pb-team-image-container',
				'pb-is-hoverable',
				'pb-is-image-' + props.item.memberImageStyle
			) }>
				{
					props.item.memberImgID && props.isSelected &&
					<div className={ classnames(
						props.className,
						'pb-team-image-hover',
					) }>
						<Toolbar>
							<MediaUpload
								onSelect={ ( media ) => {
									props.setAttributes( {
										// memberImgURL: img.url,
										// memberImgID: img.id,
										item: props.faqsUpdate( props.state.selected, props.memberImgURL, media.url, ),
										item: props.faqsUpdate( props.state.selected, props.memberImgID, media.id ),
									} );
								// 	item: this.faqsUpdate( this.state.selected, 'memberImgURL', img.url ),
								// 	// item: this.faqsUpdate( this.state.selected, 'memberImgID', img.id ),
								} }
								type="image"
								value={ props.item.memberImgID }
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
								onClick={ ( ) => props.setAttributes( {
									//item: this.faqsUpdate( this.state.selected, 'memberImgURL', '' ),
									//item: this.faqsUpdate( this.state.selected, 'memberImgID', '' ),
								} ) }
							/>
						</Toolbar>
					</div>
				}
				<MediaUpload
					buttonProps={ {
						className: 'change-image',
					} }
					onSelect={ ( media ) =>
						props.setAttributes( {
							// memberImgID: img.id,
							// memberImgURL: img.url,	
							// item: props.faqsUpdate( props.state.selected, props.memberImgID, media.id ),
							// item: this.faqsUpdate( props.state.selected, props.memberImgID, media.id ),
							//item: this.faqsUpdate( this.state.selected, 'memberImgID', img.id ),					
						} )
					}
					allowed={ ALLOWED_MEDIA_TYPES }
					type="image"
					value={ props.item.memberImgURL }
					className={ 'pb-team-member-image' }
					render={ ( { open } ) => (
						<Button onClick={ open }>
							{ ! props.item.memberImgURL && ! props.item.memberImgID ? <Dashicon icon="format-image" /> : <img src={ props.item.memberImgURL } alt="" className="pb-team-member-image" /> }

						</Button>
					) }
				>
				</MediaUpload>
			</div>
			<div className="pb-team-info">
				<RichText
					className={ classnames(
						props.className,
						'pb_button'
					) }
					tagName="span"
					value={ props.item.memberName }
					// value={ props.state.attributes[ props.index ].memberName }
					style={ {
						color: props.item.memberNameColor,
						fontSize: ( props.item.memberNameFontSize ) ? `${ props.item.memberNameFontSize }px` : undefined,
						textAlign: props.item.memberAlignment,
					} }
					placeholder={ __( 'Member Name', 'power-blocks' ) }
					onChange={ ( value ) => {
						// // console.log("before start",this.props.attributes.items);
						// const newObject = Object.assign({}, props.item, {
						// 	memberName: value
						// 	});
						
						// // this.setState( ( state, props ) => ( {
						// // 	selected: -1,
						// // } ) )
						// console.log('filter',props.items.filter(
						// 		( titem , itemindex ) => itemindex !== props.index 
						// ));
						// props.setAttributes({
						// 	items: [
						// 		...props.items.filter(
						// 			// titem => titem.index != item.index
						// 			( titem , itemindex ) => itemindex !== props.index 
						// 		),
						// 		newObject
						// 	]
						// });
						// console.log("after end",this.props.attributes.items);

						// props.attributesHandler(props.index,'memberName',value)

						// props.items[props.index].memberName = value
						// props.state.attributes[ props.index ].memberName =  value;
						// props.setAttributes( {
						// 	//item: this.faqsUpdate(this.state.selected, 'memberName', value),
						// 	item: props.faqsUpdate( props.state.selected, props.memberName, value ),
						// } )
					} }
				/>
				<RichText
					className={ classnames(
						props.className,
						'pb-team-member-designation'
					) }
					tagName="p"
					placeholder={ __( 'Member Designation', 'power-blocks' ) }
					value={ props.item.memberDesignation }
					style={ {
						color: props.item.memberDesignationColor,
						fontSize: ( props.item.memberDesignationFontSize ) ? `${ props.item.memberDesignationFontSize }px` : undefined,
						textAlign: props.item.memberAlignment,
					} }
					onChange={handleInputChange}
					// onChange={ ( value ) => setAttributes( { memberDesignation: value } ) }
					// onChange={ ( value ) => props.setAttributes( {
					// 	item: props.faqsUpdate( props.state.selected, 'memberDesignation', value ),
					// } ) }
					// onChange={ ( value ) => props.faqsUpdate( props.state.selected, 'memberDesignation', value ) }
					
				/>
				<RichText
					tagName="p"
					placeholder={ __( 'Add member desciption...', 'power-blocks' ) }
					value={ props.item.memberDescription }
					className={ classnames(
						props.className,
						'pb-team-member-description'
					) }
					style={ {
						textAlign: props.item.memberAlignment,
						color: props.item.memberDescriptionColor,
						fontSize: ( props.item.memberDescriptionFontSize ) ? `${ props.item.memberDescriptionFontSize }px` : undefined,

					} }
					// onChange={ ( value ) => setAttributes( { memberDescription: value } ) }	
					onChange={ ( value,index ) => props.setAttributes( {
						// item: props.faqsUpdate( props.state.selected, props.memberDescription, value ),
						items
					} ) }
				/>
				{ ( props.item.socialIconShow ) ?
					<div className="pb-team-social">
						<ul>
							<li> <Button style={ fbStyle }> <Dashicon icon="facebook-alt" />
							</Button> </li>
							<li> <Button style={ twitterStyle }> <Dashicon icon="twitter" /> </Button> </li>
							<li> <Button style={ googleStyle }> <Dashicon icon="googleplus" /> </Button> </li>
						</ul>
					</div> : ''
				}

				<buton className="remove-testimonial" 
					onClick={ () => props.removeItem( props.index )}					
				>
					Remove
				</buton>
			</div>
		</div>
	)
}

export default SingleTeam;