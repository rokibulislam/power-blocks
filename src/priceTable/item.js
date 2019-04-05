// External Dependencies.
import classnames from 'classnames/dedupe';
const { applyFilters } = wp.hooks;
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { BlockControls,InnerBlocks,RichText, MediaUpload , MediaPlaceholder } = wp.editor;
const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;
const { registerBlockType } = wp.blocks;
const { InspectorControls, PanelColorSettings } = wp.editor;
const { Button, Toolbar, IconButton, Dashicon,PanelBody , RangeControl, ToggleControl,TextControl,SelectControl,Popover  } = wp.components;
const ALLOWED_MEDIA_TYPES = [ 'image' ];

import './style.scss';
import './editor.scss';

import Inspector from './inspector';
import SinglePriceTable from './SinglePriceTable';
import PriceTable from './priceTable';

class PriceTableItemBlock extends Component {

	constructor() {
        super( ...arguments );
        this.state = {
            confirmed: -1,
		};
		this.findParentPriceTable = this.findParentPriceTable.bind(this);
		this.onRemove = this.onRemove.bind(this);
    }

	findParentPriceTable( rootBlock ) {
    // findParentPriceTable = ( rootBlock ) => {
        const {
            block,
        } = this.props;

        let result = false;

        if ( rootBlock.innerBlocks && rootBlock.innerBlocks.length ) {
            rootBlock.innerBlocks.forEach( ( item ) => {
                if ( ! result && clientId === block.clientId ) {
                    result = rootBlock;
                } else if ( ! result ) {
                    result = this.findParentTeam( item );
                }
            } );
        }

        return result;
    }
	onRemove() {
    // onRemove= () => {

        const parentPriceTable = this.findParentPriceTable( this.props.rootBlock );

        if ( parentPriceTable && parentPriceTable.clientId ) {
            this.props.removeBlock( this.props.clientId );

            if ( parentPriceTable.innerBlocks.length <= 1 ) {
                this.props.removeBlock( parentPriceTable.clientId );
            }
        }

    }

    render() {
        const {
            attributes,
            setAttributes,
            isSelected,
            isSelectedBlockInRoot,
            className
        } = this.props;

        return (
            <Fragment>
            	<Inspector { ...{ setAttributes, ...this.props } } />
            	<SinglePriceTable { ...{ setAttributes, ...this.props } } />
            </Fragment>
        );
    }
}

export const name = "power-blocks/pricetable-item";
// registerBlockType( 'power-blocks/team-item', {
export const settings = {
    title: __( 'Item' ),
    parent: [ 'power-blocks/team' ],
    description: __( 'A single item within a team block.' ),
    category: 'power-blocks',
    supports: {
        html: false,
        className: false,
        anchor: true,
        align: [ 'wide', 'full' ],
        inserter: false,
        reusable: false,
    },
    attributes: {
    	backgroundColor: {
			type: 'string',
			default: '',
		},
		header: {
			type:'string',
			selector: 'h2.pb-pricetable-header'
		},
		titleColor: {
			type: 'string',
			default: '',
		},
		titleFontSize: {
			type: 'string',
			default: '',
		},
		features: {
			type: 'string',
			selector: 'ul.pb-pricetable-feature'
		},
		featuresColor: {
			type: 'string',
			default: '',
		},
		featuresFontSize: {
			type: 'number',
			default: 18,
		},
		price: {
			type: 'string',
			selector: 'p.pb-pricetable-price',
			default: '$199',
		},
		priceColor: {
			type: 'string',
			default: '',
		},
		priceBackgroundColor: {
			type: 'string',
			default: '',
		},
		priceFontSize: {
			type: 'number',
			default: 18,
		},
		buttonText: {
			type: 'string',
			default: 'Free Trial',
		},
		buttonColor: {
			type: 'string',
			default: '',
		},
		buttonBackgroundColor: {
			type: 'string',
			default: '',
		},
		buttonColorHover: {
			type: 'string',
			default: '',
		},
		buttonBackgroundColorHover: {
			type: 'string',
			default: '',
		},
		buttonUrl: {
			type: 'string',
			default: '',
		},
		imageUrl: {
			type: 'string',
			default: '',
		},
		imageID: {
			type: 'string',
			default: '',
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
    ] )( PriceTableItemBlock ),

    save: function(props) {

    	const {
            attributes,
            setAttributes,
            isSelected,
            className
        } = props;

        const {
        	backgroundColor,
			titleColor,
			titleFontSize,
			featuresColor,
			featuresFontSize,
			priceColor,
			priceFontSize,
			priceBackgroundColor,
			buttonColor,
			buttonBackgroundColor,
			buttonColorHover,
			buttonBackgroundColorHover,
			buttonUrl,
			imageUrl,
			imageID,
			header,
			features,
			price,
			buttonText,
        } = attributes;

    	return (
    			<div className={ classnames( className ) } style={{ backgroundColor: backgroundColor }} >

				{ header && (

					<RichText.Content
						tagName="h2"
						value={ header }
						className={ classnames(
							className,
							'pb-pricetable-title'
						) }
						style= {{
		                    color: titleColor,
		                    fontSize: ( titleFontSize ) ? `${ titleFontSize }px` : undefined,

		                }}
					/>

				) }

				{ features && (

					<RichText.Content
						tagName="ul"
						value={ features }
						className={ classnames(
							className,
							'pb-pricetable-feature'
						) }
						style={{
		                    color: featuresColor,
		                    fontSize: ( featuresFontSize ) ? `${ featuresFontSize }px` : undefined,
		                }}
					/>

				) }

				{ price && (

					<RichText.Content
						tagName="p"
						value={ price }
						className={ classnames(
							className,
							'pb-pricetable-price'
						) }
						style={{
		                    backgroundColor: priceBackgroundColor,
		                    color: priceColor,
		                    fontSize: ( priceFontSize ) ? `${ priceFontSize }px` : undefined,
	                	}}
					/>

				) }
            </div>
    	);
    },
};
