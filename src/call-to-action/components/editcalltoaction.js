/**
 * CallToAction Wrapper
 */

// Components
const { __ } = wp.i18n;

// Setup the block
const { Component } = wp.element;

// Register editor components
const {
	AlignmentToolbar,
	URLInput,
	BlockControls,
	BlockAlignmentToolbar,
	RichText,
} = wp.editor;

// Register components
const {
	IconButton,
	Dashicon,
} = wp.components;

import classnames from 'classnames';
import Inspector from './inspector';
import CallToAction from './calltoaction';

export default class EditCallToAction extends Component {
	render() {
		// Setup the attributes
		const {
			attributes: {
				buttonText,
				buttonUrl,
				buttonAlignment,
				buttonBackgroundColor,
				buttonTextColor,
				buttonSize,
				buttonShape,
				buttonTarget,
				ctaTitle,
				ctaText,
				ctaTitleFontSize,
				titleFontSize,
				ctaTextFontSize,
				ctaWidth,
				ctaBackgroundColor,
				ctaTextColor,
				imgURL,
				imgID,
				imgAlt,
				dimRatio,
			},
			attributes,
			isSelected,
			editable,
			className,
			setAttributes
		} = this.props;

		return [
			// Show the alignment toolbar on focus
			<BlockControls key="controls">
				<BlockAlignmentToolbar
					value={ ctaWidth }
					onChange={ ctaWidth => setAttributes( { ctaWidth } ) }
					controls={ [ 'center', 'wide', 'full' ] }
				/>
				<AlignmentToolbar
					value={ buttonAlignment }
					onChange={ ( value ) => {
						setAttributes( { buttonAlignment: value } );
					} }
				/>
			</BlockControls>,
			// Show the block controls on focus
			<Inspector { ...{ setAttributes, ...this.props } } key="inspector" />,
			// Show the button markup in the editor
			<CallToAction { ...this.props } key=" " >
				{ imgURL && !! imgURL.length && (
					<div className="power-cta-image-wrap">
						<img
							className={ classnames(
								'power-cta-image',
								dimRatioToClass( dimRatio ),
								{
									'has-background-dim': dimRatio !== 0,
								}
							) }
							src={ imgURL }
							alt={ imgAlt }
						/>
					</div>
				) }
				<div className="power-cta-content">
					<RichText
						tagName="h2"
						placeholder={ __( 'Call-To-Action Title', 'atomic-blocks' ) }
						keepPlaceholderOnFocus
						value={ ctaTitle }
						className={ classnames(
							'power-cta-title',
							// 'power-font-size-' + titleFontSize,
						) }
						style={ {
							color: ctaTextColor,
							fontSize: titleFontSize + 'px !important;',
						} }
						onChange={ ( value ) => setAttributes( { ctaTitle: value } ) }
					/>
					<RichText
						tagName="div"
						multiline="p"
						placeholder={ __( 'Call To Action Text', 'atomic-blocks' ) }
						keepPlaceholderOnFocus
						value={ ctaText }
						style={ {
							color: ctaTextColor,
							fontSize: ctaTextFontSize + 'px !important;',
						} }
						className={ classnames(
							'power-cta-text',
							// 'power-font-size-' + ctaTextFontSize,
						) }
						onChange={ ( value ) => setAttributes( { ctaText: value } ) }
					/>
				</div>
				<div className="power-cta-button">
					<RichText
						tagName="span"
						placeholder={ __( 'Button text...', 'power-blocks' ) }
						value={ buttonText }
						formattingControls={ [] }
						style={ {
							color: buttonTextColor,
							backgroundColor: buttonBackgroundColor,
						} }
						className={ classnames(
							'power-button',
							buttonShape,
							buttonSize,
						) }
						onChange={ ( value ) => setAttributes( { buttonText: value } ) }
					/>
					{ isSelected && (
						<form
							key="form-link"
							className={ `blocks-button__inline-link power-button-${ buttonAlignment }` }
							onSubmit={ event => event.preventDefault() }
							style={ {
								textAlign: buttonAlignment,
							} }
						>
							<Dashicon icon={ 'admin-links' } />
							<URLInput
								className="button-url"
								value={ buttonUrl }
								onChange={ ( value ) => setAttributes( { buttonUrl: value } ) }
							/>
							<IconButton
								icon="editor-break"
								label={ __( 'Apply', 'power-blocks' ) }
								type="submit"
							/>
						</form>
					) }
				</div>
			</CallToAction>,
		];
	}
}

function dimRatioToClass( ratio ) {
	return ( ratio === 0 || ratio === 50 ) ?
		null :
		'has-background-dim-' + ( 10 * Math.round( ratio / 10 ) );
}
