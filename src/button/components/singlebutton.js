const { Component } = wp.element;
const { Button,IconButton } = wp.components;
const { __ } = wp.i18n;
const { RichText, URLInput } = wp.editor;
import classnames from 'classnames';
export default class SingleButton extends Component { 
	render() {
		const {
			key,
			item,
			items,
			removeItem,
			index,
			setAttributes,
			clickHandler,
			isSelected,
		} = this.props;
		return (
			<div key={ index } data-id={ index }  >

				<div onClick={ () => {  clickHandler( index ) } }
					className={ classnames(
						this.props.className,
						'pb-button'
					) }
					style={ {
						color: item.buttonTextColor,
						backgroundColor: item.buttonBackground,
						borderRadius: item.borderRadius,
					} }>
					<RichText
						tagName="span"
						value={ item.buttonText }
						placeholder={ __( '', 'power-blocks' ) }
						onChange={ ( value )  => {
								
							const newObject = Object.assign({}, item, {
								buttonText: value
							});
							
							setAttributes({
								items: [
									...item.filter(
										bitem => bitem.index != item.index
									),
									newObject
								]
							});
						} }
					/>
				</div>

				<buton className="remove" 
						onClick={ () => removeItem( index )}					
					>
						Remove
				</buton>
		
				{ isSelected && (
					<form
						key="form-link"
						className="pb_button_url_link"
						onSubmit={event => event.preventDefault()}
					>
						<span class="dashicons dashicons-admin-links linkIcon" />
						<URLInput
							className="button-url"
							value={ item.buttonUrl }
							onChange={ ( value )  => {
								console.log('change link');
								const newObject = Object.assign({}, item, {
									buttonUrl: value
								});
								
								setAttributes({
									items: [
										...this.props.items.filter(
											bitem => bitem.index != item.index
										),
										newObject
									]
								});
							} }
						/>
						<IconButton
							icon="editor-break"
							label={ __( "Apply" ) }
							type="submit"
							className="pb-apply-iconbutton"
						/>
					</form>
				) }

			</div>
		)
	}
}
