import EditNewsletter from './components/editnewsletter';
import Newsletter from './components/newsletter';
import './styles/style.scss';
import './styles/editor.scss';
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
registerBlockType( 'power-blocks/newsletter', {
	title: __( 'Newsletter', 'power-blocks' ),
	description: __( ' ', 'power-blocks' ),
	icon: 'format-status',
	category: 'power-blocks',
	keywords: [
		__( 'Button', 'power-blocks' ),
	],
	attributes: {
		api_key: {
			type: 'string',
			default: '',
		},
		mc_list: {
			type: 'string',
			default: '',
		},
		email_field_label: {
			type: 'string',
			default: 'Your best email address',
		},
		name_field_label: {
			type: 'string',
			default: 'Your name',
		},
		submit_field_label: {
			type: 'string',
			default: 'Subscribe',
		},
		success_message: {
			type: 'string',
			default: 'Thank you for subscribing',
		},
		error_message: {
			type: 'string',
			default: 'Sorry, something is not right. Reload the page and try again.',
		},
		submit_message: {
			type: 'string',
			default: 'Please fill out all fields with proper values',
		},
		duplicate_message: {
			type: 'string',
			default: 'You have already subscribed to our list',
		},
		newsletterbackgroundColor: {
			type: 'string',
			default: '',
		},
		submitButtonBackgroundColor: {
			type: 'string',
			default: '',
		},
		submitButtonTextColor: {
			type: 'string',
			default: '',
		},
	},

	styles: [

	],

	edit: EditNewsletter,
	save: Newsletter,
} );
