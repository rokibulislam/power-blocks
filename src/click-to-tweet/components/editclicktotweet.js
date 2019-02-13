const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { AlignmentToolbar, BlockControls } = wp.editor;
const { Toolbar } = wp.components;
import Inspector from './inspector';
import Controls from './controls';
const { compose } = wp.compose;
const { RichText } = wp.editor;
import classnames from 'classnames';
const { withSelect } = wp.data;

/**
 * Block constants
 */
const applyWithSelect = withSelect( ( select ) => {
	const { getPermalink } = select( 'core/editor' );

	return {
		postLink: getPermalink(),
	};
} );

class EditClickToTweet extends Component {

	constructor() {
		super( ...arguments );
	}

	componentWillReceiveProps( { postLink } ) {
		if ( postLink ) {
			this.props.setAttributes( {
				url: postLink
			} );
		}
	}
	
	render() {
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
			editable,
			isSelected,
			className,
			setAttributes
		} = this.props;

		return (
			<Fragment>
				{ isSelected && (
					<Controls
						{ ...this.props }
					/>
				) }
				{ isSelected && (
					<Inspector
						{ ...this.props }
					/>
				) } 

			    <blockquote className={ className } style={ { textAlign: textAlign } }>
					<RichText
						tagName="p"
						multiline="false"
						placeholder={ __( 'Add a quote to tweet...' ) }
						value={ content }
						onChange={ ( value ) => setAttributes( { content: value } ) }
						style={ {
							color: textColor,
							fontSize: ( fontSize ) ? `${ fontSize }px` : undefined,
						} }
						keepPlaceholderOnFocus
					/>
					<RichText
						tagName="span"
						multiline="false"
						placeholder={ __( 'Add button...' ) }
						value={ 'Tweet' }
						style={ {
							backgroundColor: buttonColor,
						} }
						keepPlaceholderOnFocus
					/>
				</blockquote>
			</Fragment>
		)
	}
}

export default compose( [
	applyWithSelect
] )( EditClickToTweet );