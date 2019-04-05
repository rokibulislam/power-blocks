import classnames from 'classnames';
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { RichText, BlockControls } = wp.editor;
import Inspector from './inspector';
export default class editCountup extends Component {
	render() {
		const {
			attributes: {
				title,
				content,
				description,
				titleFontSize,
				titleColor,
				contentFontSize,
				contentColor,
				descriptionFontSize,
				descriptionColor
			},
			attributes,
			isSelected,
			editable,
			className,
			setAttributes
		} = this.props;

		return (
			<Fragment>
				<BlockControls key="controls">

				</BlockControls>
				<Inspector { ...{ setAttributes, ...this.props } } />
				<RichText
					className={ classnames(
						className,
						'pb-title'
					) }
					tagName="h2"
					value={ title}
					placeholder={ __( '', 'power-blocks' ) }
					style={ {
						color: ( titleColor ) ? titleColor : undefined,
						fontSize: ( titleFontSize ) ? `${ titleFontSize }px` : undefined,
					} }
					onChange={ ( value ) => { 
						setAttributes( {
							title: value
						} );
					} }
				/>
				<RichText
					className={ classnames(
						className,
						'pb-content'
					) }
					tagName="p"
					value={ content}
					placeholder={ __( '', 'power-blocks' ) }
					style={ {
						color: ( contentColor ) ? contentColor : undefined,
						fontSize: ( contentFontSize ) ? `${ contentFontSize }px` : undefined,
					} }
					onChange={ ( value ) => { 
						setAttributes( {
							content: value
						} );
					} }
				/>
			</Fragment>
		);
	}
}
