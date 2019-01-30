/**
 * Progressbar Wrapper
 */

// Setup the block
const { Component } = wp.element;

/**
 * Create a Progressbar wrapper Component
 */

export default class Progressbar extends Component {
	// Render Component
	render() {
		const {
			progress,
			progressColor,
			backgroundColor,
			tooltipBackgroundColor,
			tooltipColor,
		} = this.props.attributes;
		return (
			<div>
				<div key={ 'progress-bar' } className={ 'power-progress-bar-wrapper' } >
					<div className={ 'power-progress-bar' } style={ { 'background-color': backgroundColor } } >
						<div className={ 'power-progress-bar-progress' } style={ { 'background-color': progressColor, 'width': progress } } >
							<div className={ 'power-progress-bar-tooltip' } style={ { 'background-color': tooltipBackgroundColor , 'color' : tooltipColor } } >{ progress }
								<span style={ { 'border-top-color': tooltipBackgroundColor } } ></span>
							</div>
						</div>  
					</div>
				</div>
			</div>
		);
	}
}
