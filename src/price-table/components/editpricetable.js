import PriceTable from './pricetable';
import Inspector from './inspector';
/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { BlockControls, AlignmentToolbar } = wp.editor;
// const { RichText, UrlInput,BlockControls,AlignmentToolbar } = wp.blocks;
// const { Dashicon, IconButton, withState } = wp.components;

export default class EditPriceTable extends Component {
	// Render
	render() {
		const {
			isSelected,
			setAttributes,
			attributes,
		} = this.props;
		const {
			ID,
			items,
			backgroundColor,
			titleColor,
			featuresColor,
			priceColor,
			buttonColor,
			buttonBGColor,
			buttonColorHover,
		} = attributes;

		const rows = items.map( ( item, index ) => {
			return (
				<div key={ 'power-item-' + index }>
					<h2> { item.header } </h2>
					<ul> { item.features } </ul>
					<p> { item.price } </p>
					<a href={ item.buttonUrl }>  Free Trial </a>
				</div>
			);
		} );

		return (
			<Fragment>
				<BlockControls key="controls">
					<AlignmentToolbar
						value={ '' }
						onChange={ ( value ) => setAttributes( { '': value } ) }
					/>
				</BlockControls>
				<Inspector { ...{ setAttributes, ...this.props } } />
				<div> { rows } </div>

				<div className={ 'power-add-item-wrapper' }>
					<button
						className={ 'button button-primary' }
						onClick={ ( event ) => {
							return setAttributes( { items: items.concat( [ {
								imageUrl: '',
								imageID: 0,
								header: 'ENTERPRISE',
								features: `
										<li>Custom Domains</li> 
										<li>5 Users</li>
										<li>10 Projects</li>
								`,
								price: '$199',
								buttonName: 'Free Trial',
								buttonUrl: 'http://delabon.com/',
								backgroundColor: '',
								titleColor: '',
								titleFontSize: '',
								featuresColor: '',
								priceColor: '',
								priceBackgroundColor: '',
								priceFontSize: '',
								buttonColor: '',
								buttonBackgroundColor: '',
								buttonColorHover: '',
								buttonBackgroundColorHover: '',
							} ] ) } );
						} }
					>
						{ __( 'Add Item' ) }
					</button>
				</div>
			</Fragment>
		);
	}
}
