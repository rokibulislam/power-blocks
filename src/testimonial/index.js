import './style.scss';
import './editor.scss';
import classnames from 'classnames/dedupe';
import { settings as testimonialItemSettings } from './item';
const { applyFilters } = wp.hooks;
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { PanelBody,ToggleControl,IconButton,RangeControl } = wp.components;
const { InspectorControls,InnerBlocks } = wp.editor;
const { createBlock } = wp.blocks;
const { compose } = wp.compose;
const { withSelect,withDispatch } = wp.data;
const { registerBlockType } = wp.blocks;
const { RichText, PanelColorSettings } = wp.editor;

const getTabsTemplate = ( itemsCount ) => {
	const result = [];
	for ( let k = 1; k <= itemsCount; k++ ) {
		result.push( [ 'power-blocks/testimonial-item', { itemNumber: k } ] );
	}
	return result;
};


class testimonialBlock extends Component {

	constructor() {
		super( ...arguments );
		this.maybeUpdateItemsCount = this.maybeUpdateItemsCount.bind( this );
	}

	componentDidMount() {
		this.maybeUpdateItemsCount();
	}
	componentDidUpdate() {
		this.maybeUpdateItemsCount();
	}

	maybeUpdateItemsCount() {
		const {
			itemsCount,
		} = this.props.attributes;

		const {
			block,
			setAttributes,
		} = this.props;

		if ( itemsCount !== block.innerBlocks.length ) {
			setAttributes( {
				itemsCount: block.innerBlocks.length,
			} );
		}
	}

	render() {

		const {
			attributes,
			setAttributes,
			isSelectedBlockInRoot,
			inserttestimonialItem,
			className
		} = this.props;

		const {
			collapseOne,
			itemsCount
		} = attributes;


		return (
			<Fragment>
				<div
					className={
						classnames(
							className,
							'power-blocks-testimonial'
						)
				 	}
				>
					<InnerBlocks
						 template={ getTabsTemplate( itemsCount ) }
						 allowedBlocks={ [ 'power-blocks/testimonial-item' ] }
					/>
				</div>
				  { isSelectedBlockInRoot ? (
					<div className="power-blocks-testimonial-add-item">
						<IconButton
							icon={ 'insert' }
							onClick={ () => {
								inserttestimonialItem();
							} }
						>
							{ __( 'Add testimonial Item' ) }
						</IconButton>
					</div>
				) : '' }
			</Fragment>
		);
	}
}

registerBlockType( 'power-blocks/testimonial', {
	title: __( 'testimonial', 'power-blocks' ),
	description: __( 'Disaply a small but important chunk of information to call attention.', 'power-blocks' ),
	icon: 'format-status',
	category: 'power-blocks',
	keywords: [
		__( 'testimonial', 'power-blocks' ),
	],
	attributes: {
		itemsCount: {
			type: 'number',
			default: 2,
		},
	},

	edit: compose( [
		withSelect( ( select, ownProps ) => {
			const {
				getBlock,
				isBlockSelected,
				hasSelectedInnerBlock,
			} = select( 'core/editor' );

			const { clientId } = ownProps;

			return {
				block: getBlock( clientId ),
				isSelectedBlockInRoot: isBlockSelected( clientId ) || hasSelectedInnerBlock( clientId, true ),
			};
		} ),
		withDispatch( ( dispatch, ownProps ) => {
			const {
				insertBlock,
			} = dispatch( 'core/editor' );

			const { clientId } = ownProps;

			return {
				inserttestimonialItem() {
					insertBlock( createBlock( 'power-blocks/testimonial-item', testimonialItemSettings ), undefined, clientId );
				},
			};
		} ),
	] )( testimonialBlock ),

	save: function( props ) {

		const {
			attributes: {
				itemsCount
			},
			className
		} = props;

		return (
			<div
				className={ classnames(
					className,
					'power-blocks-testimonial',
					`power-blocks-testimonial-${ itemsCount }`,
					'power-blocks-testimonial-row'
				) }
			>
				<InnerBlocks.Content />
			</div>
		);
	},
} );

