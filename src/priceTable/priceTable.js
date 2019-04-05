const { Component, Fragment } = wp.element;
import classnames from 'classnames';
const { RichText } = wp.editor;
const { Dashicon } = wp.components;
export default class PriceTable extends Component {
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
        } = this.props.attributes;

		return (
			<Fragment>
				<div
					className={ classnames(
						className,
					) }
				>
					<div className={ classnames( 'pb-pricetableitem-background' ) } style={{ backgroundColor: backgroundColor }} >


						{ header && (

							<RichText.Content
								tagName="h2"
								value={ header }
								className={ classnames(
									className,
									'pb-pricetable-title'
								) }
								style= {{
				                    color: titleColor,
				                    fontSize: ( titleFontSize ) ? `${ titleFontSize }px` : undefined,

				                }}
							/>

						) }

						{ features && (

							<RichText.Content
								tagName="ul"
								value={ features }
								className={ classnames(
									className,
									'pb-pricetable-feature'
								) }
								style={{
				                    color: featuresColor,
				                    fontSize: ( featuresFontSize ) ? `${ featuresFontSize }px` : undefined,
				                }}
							/>

						) }

						{ price && (

							<RichText.Content
								tagName="p"
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
							/>

						) }

					</div>
            	</div>
            </Fragment>
		);
	}
}
