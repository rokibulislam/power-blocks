/**
 * ToolTip Wrapper
 */

// Setup the block
const { Component } = wp.element;
import Tooltip from './tooltip';

export default class EditTooltip extends Component {

	render() {
		return (
			<div>
				<Tooltip { ...this.props }> </Tooltip>
			</div>
		);
	}
}
