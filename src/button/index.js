import classnames from 'classnames/dedupe';
import { settings as buttonItemSettings } from './item';
const { applyFilters } = wp.hooks;
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { PanelBody,BaseControl,Button,ButtonGroup,IconButton,Tooltip } = wp.components;
const { InspectorControls,InnerBlocks,BlockControls,BlockAlignmentToolbar } = wp.editor;
const { createBlock } = wp.blocks;
const { compose } = wp.compose;
const { withSelect,withDispatch } = wp.data;
const { registerBlockType } = wp.blocks;
const { RichText, PanelColorSettings } = wp.editor;
import ImagePicker from '../common-components/ImagePicker';
import './style.scss';
import './editor.scss';

const getTabsTemplate = ( itemsCount ) => {
    const result = [];
    for ( let k = 1; k <= itemsCount; k++ ) {
        result.push( [ 'power-blocks/button-item', { itemNumber: k } ] );
    }
    return result;
};


class buttonBlock extends Component {

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
            insertbuttonItem,
        } = this.props;

        let { className = '' } = this.props;

         const {
            align,
            gap,
            itemsCount
        } = attributes;

        className = classnames(
            'pb-button-wrapper',
            gap ? `pb-button-wrapper-gap-${ gap }` : false,
            align && align !== 'none' ? `pb-button-wrapper-align-${ align }` : false,
            className
        );

        className = applyFilters( 'power-blocks.editor.className', className, this.props );

        return (

            <Fragment>

            	<BlockControls>
                    <BlockAlignmentToolbar
                        value={ align }
                        onChange={ ( value ) => setAttributes( { align: value } ) }
                        controls={ [ 'left', 'center', 'right' ] }
                    />
                </BlockControls>

                <InspectorControls>
                    <PanelBody>

                        <ImagePicker
                            label={ __( 'Template View' ) }
                            options={ [
                                {
                                    value: '1',
                                    label: __( '' ),
                                    image: power_block_admin.plugin + './dist/images/clicktotweet-left.svg',
                                    id: 'team_basic'

                                },
                                {
                                    value: '2',
                                    label: __( '2 Columns' ),
                                    image: power_block_admin.plugin + './dist/images/clicktotweet-center.svg',
                                    id: 'team_basic'

                                },
                                {
                                    value: '3',
                                    label: __( '3 columns' ),
                                    image: power_block_admin.plugin + './dist/images/clicktotweet-right.svg',
                                    id: 'team_advance',

                                },
                                {
                                    value: '4',
                                    label: __( '4 Columns' ),
                                    image: power_block_admin.plugin + './dist/images/clicktotweet-advance.svg',
                                },
                            ] }
                            onChange={ ( value ) => setAttributes( { '': value } ) }
                        />
                    </PanelBody>
                </InspectorControls>

                <div className={ 'pb-button' }>
					<InnerBlocks
                         template={ getTabsTemplate( itemsCount ) }
                         allowedBlocks={ [ 'power-blocks/button-item' ] }
                    />
                </div>
                  { isSelectedBlockInRoot ? (
                    <div className="pb-button-add-item">
                    	<Tooltip text={ __( 'Add Button' ) }>
	                        <IconButton
	                            icon={ 'insert' }
	                            onClick={ () => {
	                                insertbuttonItem();
	                            } }
	                        >
	                            { __( 'Add button Item' ) }
	                        </IconButton>
	                    </Tooltip>
                    </div>
                ) : '' }
            </Fragment>
        );
	}
}

registerBlockType( 'power-blocks/button', {
	title: __( 'button', 'power-blocks' ),
	description: __( 'Disaply a small but important chunk of information to call attention.', 'power-blocks' ),
	icon: 'format-status',
	category: 'power-blocks',
	keywords: [
		__( 'button', 'power-blocks' ),
	],
	attributes: {
		itemsCount: {
            type: 'number',
            default: 1,
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
                insertbuttonItem() {
                    insertBlock( createBlock( 'power-blocks/button-item', buttonItemSettings ), undefined, clientId );
                },
            };
        } ),
    ] )( buttonBlock ),

	save: function( props ) {
        let className = classnames(
            'pb-button-wrapper',
        );
        return (
            <div className={ className }>
                <InnerBlocks.Content />
            </div>
        );
	},
} );

