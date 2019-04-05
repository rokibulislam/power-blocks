// Import CSS
import './style.scss';
import './editor.scss';
// External Dependencies.
import classnames from 'classnames/dedupe';
import { settings as pricetableItemSettings } from './item';
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
		result.push( [ 'power-blocks/pricetable-item', { itemNumber: k } ] );
	}
	return result;
};


class PriceTableBlock extends Component {

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
			insertpricetableItem,
			className
		} = this.props;

		const {
			itemsCount
		} = attributes;


		return (
			<Fragment>
				<div className={ classnames(
						className,
						'power-blocks-pricetable'
					)
				 }
				>
				<InnerBlocks
					 template={ getTabsTemplate( itemsCount ) }
					 allowedBlocks={ [ 'power-blocks/pricetable-item' ] }
				/>
				</div>
				  { isSelectedBlockInRoot ? (
					<div className="power-blocks-pricetable-add-item">
						<IconButton
							icon={ 'insert' }
							onClick={ () => {
								insertpricetableItem();
							} }
						>
							{ __( 'Add pricetable Item' ) }
						</IconButton>
					</div>
				) : '' }
			</Fragment>
		);
	}
}

registerBlockType( 'power-blocks/pricetable', {
	title: __( 'Price Table', 'power-blocks' ),
	description: __( 'Disaply a small but important chunk of information to call attention.', 'power-blocks' ),
	icon: 'format-status',
	category: 'power-blocks',
	keywords: [
		__( 'Price Table', 'power-blocks' ),
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
				insertpricetableItem() {
					insertBlock( createBlock( 'power-blocks/pricetable-item', pricetableItemSettings ), undefined, clientId );
				},
			};
		} ),
	] )( PriceTableBlock ),

	save: function( props ) {
		const {
			itemsCount,
		} = props.attributes;

		let className = classnames(
			'power-blocks-pricetable',
			`power-blocks-pricetable-${ itemsCount }`,
			'power-blocks-pricetable-row'
		);

		className = applyFilters( 'power.blocks.className', className, {
			...{
				name,
			},
			...props,
		} );

		return (
			<div className={ className }>
				<InnerBlocks.Content />
			</div>
		);
	},
} );

