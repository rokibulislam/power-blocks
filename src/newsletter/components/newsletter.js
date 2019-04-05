const { __ } = wp.i18n;
const { compose } = wp.compose;
const { Placeholder, Button, Spinner, TextControl, ResizableBox } = wp.components;
const { Fragment, Component } = wp.element;

import classnames from 'classnames';
export default class Newsletter extends Component {
	render() {
		const {
			attributes : {
				emailFieldLabel,
				nameFieldLabel,
				submitFieldLabel,
				successMessage,
				errorMessage,
				submitMessage,
				duplicateMessage,
				apiKey,
				submitButtonTextColor,
				submitButtonBackgroundColor,
				newsletterbackgroundColor,
				mailchimp_list,

			},
			setAttributes,
			isSelected,
			className,
			state
		} = this.props;

		return (

			<Fragment>
					<div
						className={ classnames(
							this.props.className
						) }
						style={ {
							backgroundColor: newsletterbackgroundColor,

						} }
					>
						<p id="newsletter_message"></p>

						<div>
							<input type="text" className="pb-mc-name" name="pb-mc-name" value=""
								placeholder={ __( 'Enter Your Name' ) }
							/>
						</div>

						<div>
							<input type="text" className="pb-mc-email" name="pb-mc-email"
							placeholder={ __( 'Enter Your Email' ) }
							value=""/>
							<input type="hidden" className="pb-mc-list" name="pb-mc-list" value={ mailchimp_list }
							placeholder=""/>
						</div>


						<div>
							<input type="submit" className="pb-mc-submit"
							style={ {
								color: submitButtonTextColor,
								backgroundColor: submitButtonBackgroundColor,
							} }
							name="pb-mc-submit" value={ ( submitFieldLabel ) ? submitFieldLabel : 'Subscribe' } />
						</div>

					</div>
			</Fragment>
		);
	}
}
