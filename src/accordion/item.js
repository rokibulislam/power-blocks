// External Dependencies.
import classnames from 'classnames/dedupe';

// Internal Dependencies.
// import getIcon from '../_utils/get-icon';
// import RemoveButton from '../_components/remove-button';
// import deprecatedArray from './deprecated';

const {
	applyFilters,
} = wp.hooks;
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const {
	Toolbar,
} = wp.components;

const {
	BlockControls,
	InnerBlocks,
	RichText,
} = wp.editor;

const {
	compose,
} = wp.compose;
const {
	withSelect,
	withDispatch,
} = wp.data;

class AccordionItemBlock extends Component {
	constructor() {
		super( ...arguments );

		this.findParentAccordion = this.findParentAccordion.bind( this );
	}

	findParentAccordion( rootBlock ) {
		const {
			block,
		} = this.props;

		let result = false;

		if ( rootBlock.innerBlocks && rootBlock.innerBlocks.length ) {
			rootBlock.innerBlocks.forEach( ( item ) => {
				if ( ! result && item.clientId === block.clientId ) {
					result = rootBlock;
				} else if ( ! result ) {
					result = this.findParentAccordion( item );
				}
			} );
		}

		return result;
	}

	render() {
		const {
			attributes,
			setAttributes,
			isSelected,
			isSelectedBlockInRoot,
		} = this.props;

		let {
			className = '',
		} = this.props;

		const {
			heading,
			active,
		} = attributes;

		className = classnames(
			className,
			'pb-accordion-item',
			active ? 'pb-accordion-item-active' : ''
		);

		className = applyFilters( 'pb.editor.className', className, this.props );

		return (
			<Fragment>
				<BlockControls>
					<Toolbar controls={ [
						{
							// icon: getIcon( 'icon-collapse', true ),
							title: __( 'Collapse' ),
							onClick: () => setAttributes( { active: ! active } ),
							isActive: active,
						},
					] } />
				</BlockControls>
				<div className={ className }>
					<div className="pb-accordion-item-heading">
						<RichText
							tagName="div"
							className="pb-accordion-item-label"
							placeholder={ __( 'Item label…' ) }
							value={ heading }
							onChange={ ( value ) => {
								setAttributes( { heading: value } );
							} }
							formattingControls={ [ 'bold', 'italic', 'strikethrough' ] }
							isSelected={ isSelected }
							keepPlaceholderOnFocus
						/>
						<button
							className="pb-accordion-item-collapse"
							onClick={ () => setAttributes( { active: ! active } ) }
						>
							<span className="fas fa-angle-right" />
						</button>
					</div>
					<div className="pb-accordion-item-content"><InnerBlocks templateLock={ false } /></div>
				</div>
			</Fragment>
		);
	}
}

export const name = 'pb/accordion-item';

export const settings = {
	title: __( 'Item' ),
	parent: [ 'pb/accordion' ],
	description: __( 'A single item within a accordion block.' ),
	// icon: getIcon( 'block-accordion' ),
	category: 'power-blocks',
	pb: {
		supports: {
			styles: true,
			spacings: true,
			display: true,
			scrollReveal: true,
		},
	},
	supports: {
		html: false,
		className: false,
		anchor: true,
		align: [ 'wide', 'full' ],
		inserter: false,
		reusable: false,
	},
	attributes: {
		heading: {
			type: 'array',
			source: 'children',
			selector: '.pb-accordion-item-label',
			default: 'Accordion Item',
		},
		active: {
			type: 'boolean',
			default: false,
		},
		itemNumber: {
			type: 'number',
		},
	},

	edit: compose( [
		withSelect( ( select, ownProps ) => {
			const {
				getBlockHierarchyRootClientId,
				getBlock,
				isBlockSelected,
				hasSelectedInnerBlock,
			} = select( 'core/editor' );

			const { clientId } = ownProps;

			return {
				block: getBlock( clientId ),
				isSelectedBlockInRoot: isBlockSelected( clientId ) || hasSelectedInnerBlock( clientId, true ),
				rootBlock: clientId ? getBlock( getBlockHierarchyRootClientId( clientId ) ) : null,
			};
		} ),
		withDispatch( ( dispatch ) => {
			const {
				updateBlockAttributes,
				removeBlock,
			} = dispatch( 'core/editor' );

			return {
				updateBlockAttributes,
				removeBlock,
			};
		} ),
	] )( AccordionItemBlock ),

	save: function( props ) {

		const {
			heading,
			active,
			itemNumber,
		} = props.attributes;

		let className = classnames(
			'pb-accordion-item',
			active ? 'pb-accordion-item-active' : ''
		);

		return (
			<div className={ className }>
				<a href={ `#accordion-${ itemNumber }` } className="pb-accordion-item-heading">
					<RichText.Content
						className="pb-accordion-item-label"
						tagName="span"
						value={ heading }
					/>
					<span className="pb-accordion-item-collapse">
						<span className="fas fa-angle-right" />
					</span>
				</a>
				<div className="pb-accordion-item-content"><InnerBlocks.Content /></div>
			</div>
		);
	},
};
