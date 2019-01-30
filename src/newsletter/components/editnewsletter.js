const { Component, Fragment } = wp.element;
const { AlignmentToolbar, BlockControls } = wp.editor;
import Inspector from './inspector';
import Newsletter from './newsletter'
export default class EditNewsletter extends Component {
	render() {
		const {
			attributes: {
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
				<Newsletter { ...this.props } key=" " ></Newsletter>
			</Fragment>
		);
	}
}