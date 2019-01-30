const { Component, Fragment } = wp.element;
const { AlignmentToolbar, BlockControls } = wp.editor;
import Inspector from './inspector';
import Button from './button';
export default class EditButton extends Component {
	render() {
		const {
			attributes: {
				buttonText,
				buttonUrl,
				borderRadius,
				buttonSize,
				buttonBackground,
				borderColor,
				hoverColor,
				buttonTextColor,
				buttonTarget,
				buttonAlignment
			},
			setAttributes,
			isSelected,
			className
		} = this.props;
		return (
			<Fragment>
				<BlockControls key="controls">
					<AlignmentToolbar
						value={ '' }
						onChange={ ( value ) => setAttributes( { '': value } ) }
					/>
				</BlockControls>
				<Inspector { ...{ setAttributes, ...this.props } } />
				<Button { ...this.props } key=" " ></Button>
			</Fragment>
		);
	}
}