import EditClickToTweet from './components/editclicktotweet';
import icon from './components/icon';
import './styles/style.scss';
import './styles/editor.scss';
const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { RichText } = wp.editor;
import classnames from 'classnames';

registerBlockType( 'power-blocks/clicktotweet', {
	title: __( 'Click To Tweet', 'power-blocks' ), // Block title.
	description: __( ' ', 'power-blocks' ),
	icon: { src: icon.twitter, foreground: '#0073aa'},
	category: 'power-blocks',
	keywords: [
		__( 'Click To Tweet', 'power-blocks' ),
	],
	attributes: {
		content: {
			type: 'string',
			source: 'html',
			selector: 'p',
			default: [],
		},
		url: {
			type: 'attribute',
		},
		textAlign: {
			type: 'string',
		},
		buttonText: {
			type: 'string',
			default: __( 'Tweet' ),
		},
		buttonColor: {
			type: 'string',
		},
		textColor: {
			type: 'string',
		},
		fontSize: {
			type: 'number',
			default: 14,
		},
		via: {
			type: 'string',
		},
	},

	styles: [

	],

	edit: EditClickToTweet,
	save: function( props ) {
		const {
			attributes: {
				content,
				url,
				textAlign,
				buttonText,
				buttonColor,
				textColor,
				fontSize,
				via,
			},
			setAttributes,
			className
		} = props;

		const viaUrl = via ? `&via=${via}` : '';

		const tweetUrl = `http://twitter.com/share?&text=${ encodeURIComponent( content ) }&url=${url}${viaUrl}`;
		return (
			! RichText.isEmpty( content ) && (
				<blockquote style={ { textAlign: textAlign } }>
					<RichText.Content
						tagName="p"
						// className={ textClasses }
						// style={ textStyles }
						className={ classnames(
							`${ className }__text`,
							'pb-twitter-text'
						) }
						style={ {
							color: textColor,
							fontSize: ( fontSize ) ? `${ fontSize }px` : undefined,
						} }
						value={ content }
					/>
					<RichText.Content
						tagName="a"
						// className={ buttonClasses }
						// style={ buttonStyles }
						value={ 'tweet' }
						href={ tweetUrl }
						target="_blank"
						className={ classnames(
							`${ className }__twitter-btn`,
							'pb-twitter-button'
						) }
						style={ {
							backgroundColor: buttonColor,
						} }
					/>
				</blockquote>
			)
		);
	},
} );
