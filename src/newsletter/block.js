import EditNewsletter from './components/editnewsletter';
import Newsletter from './components/newsletter';
import './styles/style.scss';
import './styles/editor.scss';
import icons from './icons';
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
registerBlockType( 'power-blocks/newsletter', {
	title: __( 'Newsletter', 'power-blocks' ),
	description: __( ' ', 'power-blocks' ),
	// icon: 'format-status',
	// icon: icons.twitter,
	icon: { src: icons.twitter, foreground: '#0073aa', }, 
	category: 'power-blocks',
	keywords: [
		__( 'Button', 'power-blocks' ),
	],
	attributes: {
		api_key: {
			type: 'string',
			default: '',
		},
		mailchimp_list: {
			type: 'string',
			default: '',
		},
		emailFieldLabel: {
			type: 'string',
			default: '',
		},
		emailFieldPlaceholder: {
			type: 'string',
			default: '',
		},
		nameFieldLabel: {
			type: 'string',
			default: '',
		},
		nameFieldPlaceholder: {
			type: 'string',
			default: '',
		},
		submitFieldLabel: {
			type: 'string',
			default: '',
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
			default: '#0073aa',
		},
		submitButtonTextColor: {
			type: 'string',
			default: '#fff',
		},
		newsletteralignment: {
			type: 'string',
			default: '',
		},
		pinned: {
			type: 'boolean',
			default: false,
		},
		margin: {
			type: 'string',
			default: '',
		},
		padding: {
			type: 'string',
			default: '',
		},
		showlabel:{
			type: 'boolean',
			default: false,
		}
	},

	styles: [

	],

	edit: EditNewsletter,
	save: Newsletter,
} );
