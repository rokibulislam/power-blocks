// Import CSS
import './editor.scss';
import icon from './icon';
// External Dependencies.
import classnames from 'classnames/dedupe';

// Internal Dependencies.
// import getIcon from '../_utils/get-icon';
import { settings as accordionItemSettings } from './item';

const {
    applyFilters,
} = wp.hooks;
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const {
    PanelBody,
    ToggleControl,
    IconButton,
} = wp.components;

const {
    InspectorControls,
    InnerBlocks,
} = wp.editor;

const {
    createBlock,
} = wp.blocks;

const {
    compose,
} = wp.compose;
const {
    withSelect,
    withDispatch,
} = wp.data;

/**
 * Returns the layouts configuration for a given number of items.
 *
 * @param {number} attributes items attributes.
 *
 * @return {Object[]} Tabs layout configuration.
 */
const getTabsTemplate = ( attributes ) => {
    const {
        itemsCount,
        collapseOne
    } = attributes;
    const result = [];

    for ( let k = 1; k <= itemsCount; k++ ) {
        result.push( [ 'pb/accordion-item', { itemNumber: k } ] );
    }

    return result;
};

class AccordionBlock extends Component {
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

    /**
     * Update current items number.
     */
    maybeUpdateItemsCount() {
        const {
            itemsCount,
            collapseOne
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
            insertAccordionItem,
        } = this.props;

        let { className = '' } = this.props;

        const {
            collapseOne,
        } = attributes;

        className = classnames(
            className,
            'pb-accordion'
        );

        return (
            <Fragment>
                <InspectorControls>
                    <PanelBody>
                        <ToggleControl
                            label={ __( 'Collapse one item only' ) }
                            checked={ !! collapseOne }
                            onChange={ ( val ) => setAttributes( { collapseOne: val } ) }
                        />
                    </PanelBody>
                </InspectorControls>
                <div className={ className }>
                    <InnerBlocks
                        template={ getTabsTemplate( attributes ) }
                        allowedBlocks={ [ 'pb/accordion-item' ] }
                    />
                </div>
                { isSelectedBlockInRoot ? (
                    <div className="pb-accordion-add-item">
                        <IconButton
                            icon={ 'insert' }
                            onClick={ () => {
                                insertAccordionItem();
                            } }
                        >
                            { __( 'Add Accordion Item' ) }
                        </IconButton>
                    </div>
                ) : '' }
            </Fragment>
        );
    }
}

export const name = 'pb/accordion';

export const settings = {
    title: __( 'Accordion' ),
    description: __( 'Toggle the visibility of content across your project.' ),
    // icon: getIcon( 'block-accordion' ),
    icon: {src: icon.accordion,foreground: '#0073aa'},
    category: 'power-blocks',
    keywords: [
        __( 'accordion' ),
        __( 'collapsible' ),
        __( 'collapse' ),
    ],
    pb: {
        previewUrl: 'https://pb.io/blocks/accordion/',
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
    },
    attributes: {
        itemsCount: {
            type: 'number',
            default: 2,
        },
        collapseOne: {
            type: 'boolean',
            default: false,
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
                insertAccordionItem() {
                    insertBlock( createBlock( 'pb/accordion-item', accordionItemSettings ), undefined, clientId );
                },
            };
        } ),
    ] )( AccordionBlock ),

    save: function( props ) {
        const {
            itemsCount,
            collapseOne,
        } = props.attributes;

        let className = classnames(
            'pb-accordion',
            `pb-accordion-${ itemsCount }`,
            collapseOne ? 'pb-accordion-collapse-one' : ''
        );

        return (
            <div className={ className }>
                <InnerBlocks.Content />
            </div>
        );
    },
};
