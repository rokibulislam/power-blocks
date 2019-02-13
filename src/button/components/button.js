const { Component } = wp.element;
import classnames from 'classnames';
export default class PBButton extends Component { 
	render() {
		const {
			attributes: {
				items,
			},
			setAttributes,
			state,
			clickHandler,
			isSelected,
			removeItem,
		} = this.props;
		
		const rows = items.map( ( item, index ) => {
			return (
				<a
				href={item.buttonUrl} 
				key={ index } className={ classnames(
						this.props.className,
						'pb-button'
					) }
					style={ {
						color: item.buttonTextColor,
						backgroundColor: item.buttonBackground,
						borderRadius: item.borderRadius,
					} }
				>  
					<span> { item.buttonText } </span>
				</a>
			)
		} );
		return (
			<div>
				{ rows }
			</div>
		);
	}
}
