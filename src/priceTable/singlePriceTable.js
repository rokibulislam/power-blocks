import classnames from 'classnames';
const { Button, Toolbar, IconButton, Dashicon } = wp.components;
const { RichText, MediaUpload } = wp.editor;
const { __ } = wp.i18n;
const ALLOWED_MEDIA_TYPES = [ 'image' ];
const { Component, Fragment } = wp.element;

export default class SinglePriceTable extends Component {

	render() {

		const {
            attributes,
            setAttributes,
            isSelected,
            className
        } = this.props;

        const {
        	backgroundColor,
			titleColor,
			titleFontSize,
			featuresColor,
			featuresFontSize,
			priceColor,
			priceFontSize,
			priceBackgroundColor,
			buttonColor,
			buttonBackgroundColor,
			buttonColorHover,
			buttonBackgroundColorHover,
			buttonUrl,
			imageUrl,
			imageID,
			header,
			features,
			price,
			buttonText,
        } = attributes;

		return (
			<Fragment>
				<div
					className={ classnames(
						className,
					) }
				>
					<div className={ classnames( 'pb-pricetableitem-background' ) } style={{ backgroundColor: backgroundColor }} >
						<RichText
							tagName="h2"
							placeholder={ __( 'Add Header', 'power-blocks' ) }
							value={ header }
							className={ classnames(
								className,
								'pb-pricetable-title'
							) }
							style= {{
			                    color: titleColor,
			                    fontSize: ( titleFontSize ) ? `${ titleFontSize }px` : undefined,

			                }}
							onChange={ ( value ) => {
								 setAttributes( {  header: value });
							} }
						/>

						<RichText
							tagName="ul"
							placeholder={ __( 'Add Features', 'power-blocks' ) }
							value={ features }
							className={ classnames(
								className,
								'pb-pricetable-feature'
							) }
							style={{
			                    color: featuresColor,
			                    fontSize: ( featuresFontSize ) ? `${ featuresFontSize }px` : undefined,

			                }}
							onChange={ ( value ) => {
								 setAttributes( {  features: value });
							} }
						/>

						<RichText
							tagName="p"
							placeholder={ __( 'Add Price', 'power-blocks' ) }
							value={ price }
							className={ classnames(
								className,
								'pb-pricetable-price'
							) }
							style={{
			                    backgroundColor: priceBackgroundColor,
			                    color: priceColor,
			                    fontSize: ( priceFontSize ) ? `${ priceFontSize }px` : undefined,

		                	}}
							onChange={ ( value ) => {
								 setAttributes( {  price: value });
							} }
						/>
	            	</div>
	            </div>
	        </Fragment>
		);
	}
}
