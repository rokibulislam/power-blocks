const { Component } = wp.element;
import Tooltip from './tooltip';

export default class EditTooltip extends Component {

	render() {
		const {

		} = this.props;
		
		return (
			<div>
				<Tooltip { ...this.props }> </Tooltip>
			</div>
		);
	}
}
