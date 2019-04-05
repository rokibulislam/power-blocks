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
const {
	Button, Toolbar, IconButton, Dashicon,PanelBody , RangeControl,
	ToggleControl,TextControl,SelectControl,Popover
} = wp.components;
const ALLOWED_MEDIA_TYPES = [ 'image' ];
import './style.scss';
import './editor.scss';

import Inspector from './inspector';
import SingleTestimonial from './singleTestimonial';
import Testimonial from './testimonial';

class TeastimonailItemBlock extends Component {
	constructor() {
        super( ...arguments );
        this.state = {
            confirmed: -1,
        };
        this.findParentTeastimonail = this.findParentTeastimonail.bind(this);
        this.onRemove = this.onRemove.bind(this);
    }
    findParentTeastimonail( rootBlock ) {
    // findParentTeastimonail = ( rootBlock ) => {
        const {
            block,
        } = this.props;

        let result = false;

        if ( rootBlock.innerBlocks && rootBlock.innerBlocks.length ) {
            rootBlock.innerBlocks.forEach( ( item ) => {
                if ( ! result && item.clientId === block.clientId ) {
                    result = rootBlock;
                } else if ( ! result ) {
                    result = this.findParentTeastimonail( item );
                }
            } );
        }

        return result;
    }
    onRemove() {
    // onRemove= () => {
        const parentTeastimonail = this.findParentTeastimonail( this.props.rootBlock );
        if ( parentTeastimonail && parentTeastimonail.clientId ) {
            this.props.removeBlock( this.props.clientId );

            if ( parentTeastimonail.innerBlocks.length <= 1 ) {
                this.props.removeBlock( parentTeastimonail.clientId );
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
            	<SingleTestimonial { ...{ setAttributes, ...this.props } } />
            </Fragment>
        );
    }
}

export const name = "power-blocks/testimonial-item";
// registerBlockType( 'power-blocks/testimonial-item', {
export const settings = {
    title: __( 'Item' ),
    parent: [ 'power-blocks/testimonial' ],
    description: __( 'A single item within a testimonial block.' ),
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

    	testimonialName: {
			type: 'string',
			selector: 'h3.pb-testimonial-content',
		},

		testimonialNameColor: {
			type: 'string',
			default: '#32373c',
		},

		testimonialNameFontSize: {
			type: 'number',
			default: 18,
		},

		testimonialTitle: {
			type: 'string',
			selector: 'h2.pb-testimonial-title',
		},

		testimonialTitleColor: {
			type: 'string',
			default: '#32373c',
		},

		testimonialTitleFontSize: {
			type: 'number',
			default: 18,
		},

		testimonialContent: {
			type: 'string',
			selector: 'p.pb-testimonial-text',
		},

		testimonialContentColor: {
			type: 'string',
			default: '#32373c',
		},

		testimonialContentFontSize: {
			type: 'number',
			default: 18,
		},

		testimonialAlignment: {
			type: 'string',
		},
		image: {
		  type: 'string',
		  source: 'attribute',
		  selector: 'img',
		  attribute: 'src',
		},
		testimonialBackgroundColor: {
			type: 'string',
			default: '#f2f2f2',
		},

		testimonialImageStyle: {
			type: 'string',
		},

		testimonialPadding: {
			type: 'number',
			default: 0,
		},

		testimonialMargin: {
			type: 'number',
			default: 0,
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
    ] )( TeastimonailItemBlock ),

    save: Testimonial,

   //  function( props ) {

   //      const {
   //          attributes: {
		 //        testimonialName,
		 //    	testimonialNameColor,
		 //    	testimonialNameFontSize,
		 //    	testimonialTitle,
		 //    	testimonialTitleColor,
		 //    	testimonialTitleFontSize,
		 //    	testimonialContent,
		 //    	testimonialContentColor,
		 //    	testimonialContentFontSize,
		 //    	testimonialAlignment,
		 //    	testimonialImgURL,
		 //    	testimonialImgID,
		 //    	testimonialBackgroundColor,
		 //    	testimonialImageStyle,
		 //    	testimonialPadding,
		 //    	testimonialMargin
   //          },
   //          className
   //      } = props;

   //      return (

   //          <div
	  //           className={ classnames(
			// 		className,
			// 	) }
			// 	data-type="power-blocks/testimonial-item"
			// >
			// 	Testimonial Frontend
			// </div>
   //      );
   //  },
};
