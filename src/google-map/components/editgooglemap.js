const { Component } = wp.element;
const {  PanelBody, SelectControl, RangeControl, TextControl, Button } = wp.components;
const { __ } = wp.i18n;
import Googlemap from './googlemap';
import Inspector from './inspector';
export default class EditGooglemap extends Component {
	render() {
		const {
			attributes: {
				location,
				type,
				zoom,
				height,
			},
			attributes,
			isSelected,
			className,
			setAttributes
		} = this.props;

		return (
			<Inspector { ...{ setAttributes, ...this.props } } />
		)
	}
}
