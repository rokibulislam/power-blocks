const { Component, Fragment } = wp.element;
const { BlockControls } = wp.editor;
import Inspector from './inspector';
export default class editCountup extends Component {
	render() {
		const {
			attributes: {

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
			</Fragment>
		);
	}
}
