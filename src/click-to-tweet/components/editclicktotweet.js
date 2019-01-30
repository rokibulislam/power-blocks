const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { AlignmentToolbar, BlockControls } = wp.editor;
const { Toolbar } = wp.components;
import Inspector from './inspector';
export default class EditClickToTweet extends Component {
	render() {
		const {
			attributes: {
				content,
				url,
				textAlign,
				buttonText,
				buttonColor,
				textColor,
				fontSize,
				via,
			},
			editable,
			className,
			setAttributes
		} = this.props;

		return (
			<Fragment>
				<BlockControls key="controls">
					<AlignmentToolbar
						value={ '' }
						onChange={ ( value ) => setAttributes( { '': value } ) }
					/>
					<Toolbar>
					<label
						aria-label={ __( 'Twitter Username' ) }
						className={ `${ className }__via-label` }
						htmlFor={ `${ className }__via` }
					>
					</label>
					<input
						aria-label={ __( 'Twitter Username' ) }
						className={ `${ className }__via` }
						id={ `${ className }__via` }
						onChange={ ( event ) => setAttributes( { via: event.target.value } ) }
						placeholder={ __( 'Username' ) }
						type="text"
						value={ via }
					/>
				</Toolbar>
				</BlockControls>
				<Inspector { ...{ setAttributes, ...this.props } } />
				<section>  Click To Tweet Admin </section>
			</Fragment>
		)
	}
}