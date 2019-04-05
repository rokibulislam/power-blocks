/**
 * WordPress dependencies
 */
import classnames from 'classnames';
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { Toolbar } = wp.components;
const { AlignmentToolbar, BlockControls } = wp.editor;
class Controls extends Component {

	constructor( props ) {
		super( ...arguments );
	}

	render() {

		const {
			className,
			attributes,
			isSelected,
			setAttributes,
		} = this.props;

		const {
			textAlign,
			via,
		} = attributes;

		return (
			<Fragment>
				<BlockControls>
					<AlignmentToolbar
						value={ textAlign }
						onChange={ ( value ) => setAttributes( { textAlign: value } ) }
					/>
					<Toolbar>
						<div className={ `${ className }__via-wrapper` }>
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
						</div>
					</Toolbar>
				</BlockControls>
			</Fragment>
		);
	}
};

export default Controls;
