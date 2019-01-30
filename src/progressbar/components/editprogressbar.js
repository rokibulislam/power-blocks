/**
 * Progressbar Wrapper
 */

// Setup the blockx
const { Component } = wp.element;
import Progressbar from './progressbar';
import Inspector from './inspector';
export default class EditProgressbar extends Component { 
	render() {		
		return [
			<div>
				<Inspector { ...this.props } > </Inspector>
				<Progressbar { ...this.props } > </Progressbar>
			</div>
		];
	}
}
