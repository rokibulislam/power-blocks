import classnames from 'classnames/dedupe';

const { Component } = wp.element;

const {
	BaseControl,
} = wp.components;



export default class ImagePicker extends Component {
	render() {
		const {
			value,
			options,
			onChange,
			label,
		} = this.props;

		return (
			<BaseControl
				label={ label }
				className="pb-component-image-picker"
			>
				{ options.map( ( option ) => {
					return (
						<button
							key={ `image-pircker-${ option.value }` }
							onClick={ () => {
								onChange( option.value );
							} }
							className={ classnames( 
								'pb-component-image-picker-item', 
								value === option.value ? 'pb-component-image-picker-item-active' : '',
								`${ option.id }`
							) }
						>
							{ option.image && typeof option.image === 'string' ? (
								<img src={ option.image } alt={ option.label || option.value } />
							) : '' }
							{ option.image && typeof option.image !== 'string' ? (
								option.image
							) : '' }
							{ option.label ? (
								<span>{ option.label }</span>
							) : '' }
						</button>
					);
				} ) }
			</BaseControl>
		);
	}
}
