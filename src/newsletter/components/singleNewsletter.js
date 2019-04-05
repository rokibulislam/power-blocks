const { __ } = wp.i18n;
const { compose } = wp.compose;
const { Placeholder, Button, Spinner, TextControl, SelectControl } = wp.components;
const { Fragment, Component } = wp.element;
import classnames from 'classnames';
export default class SingleNewsletter extends Component {

	constructor( props ) {
		super( ...arguments );
		this.renderForm=this.renderForm.bind(this);
	}

	renderForm() {
	// renderForm = () => {
		console.log(this.props.apiKey);
		// this.props.onUpdateApiKey( this.props.apiKey );
	}

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
				pinned
			},
			setAttributes,
			isSelected,
			className,
			state,
			onUpdateApiKey,
			updateList
		} = this.props;

		return (
			<Fragment>
				{pinned}
				{ ! pinned ? <Placeholder
					label={  __( 'Mailchimp Api Key' + pinned ) }
					instructions={ ! state.isSavedKey ? __( 'Enter your MailChimp API key' ) : __( 'Select Mailchimp List' ) } >
					{ ( ! state.isSavedKey  ) ?
					<TextControl
						className="components-placeholder__input"
						value={ apiKey }
						onChange={ ( value ) => {
							 setAttributes( { apiKey: value } )
							onUpdateApiKey(value);
						} }
						placeholder={ __( 'Enter your MailChimp API key' ) }
					/>
					:
						<SelectControl className="pb-mailchimp-lists"
							label={ 'List' }
							value={ mailchimp_list }
							options={ state.mc_list_options }
							onChange={ (value) => {
								setAttributes({
									mailchimp_list: value
								});
								updateList( value );
							} }
						/>
					}
					
					{/* <Button
						isLarge
						type="button"
						onClick={ () => this.renderForm() }
					>
						{ __( 'Apply' ) }
					</Button> */}
				</Placeholder>
				:
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
								placeholder={ __( 'Enter Your Name' + pinned ) }
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
					}
				</Fragment>
		);
	}
}
