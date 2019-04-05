// Import CSS
import './style.scss';
import './editor.scss';
// External Dependencies.
import classnames from 'classnames/dedupe';
import { settings as teamItemSettings } from './item';
const { applyFilters } = wp.hooks;
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { PanelBody,ToggleControl,IconButton,RangeControl } = wp.components;
const { InspectorControls,InnerBlocks } = wp.editor;
const { createBlock } = wp.blocks;
const { compose } = wp.compose;
const { withSelect,withDispatch } = wp.data;
const { registerBlockType } = wp.blocks;
const { RichText, PanelColorSettings,AlignmentToolbar,BlockControls,BlockAlignmentToolbar } = wp.editor;
import ImagePicker from './ImagePicker';
const getTabsTemplate = ( itemsCount ) => {
    const result = [];
    for ( let k = 1; k <= itemsCount; k++ ) {
        result.push( [ 'power-blocks/team-item', { itemNumber: k } ] );
    }
    return result;
};


class teamBlock extends Component {

	constructor() {
        super( ...arguments );
        this.maybeUpdateItemsCount = this.maybeUpdateItemsCount.bind( this );
    }

    componentDidMount() {
        this.maybeUpdateItemsCount();
        
    }

    componentWillUnmount() {
        console.log("component will unmount");
        console.log(this.props.attributes.itemcol);
    }

    componentDidUpdate() {
        this.maybeUpdateItemsCount();
    }

    maybeUpdateItemsCount() {
        const {
            itemsCount,
            itemcol,
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
            insertteamItem,
            className
        } = this.props;

        const {
            collapseOne,
            itemsCount,
            itemcol,
            pbteamwidth,
        } = attributes;


        return (
            <Fragment>
            	<InspectorControls>
                    <PanelBody>
		            	<RangeControl
							label={ __( 'Members', 'editor-blocks' ) }
							value={ itemsCount }
							onChange={ ( value ) => setAttributes( { itemsCount: value } ) }
							min={ 1 }
							max={ 100 }
						/>

                        <ImagePicker
                            label={ __( 'Template View' ) }
                            value={ itemcol }
                            options={ [
                                {
                                    value: '2',
                                    label: __( '2 Columns' ),
                                    image: power_block_admin.plugin + './dist/images/mailchimp-left.svg',
				                    id: 'team_basic'

                                },
                                {
                                    value: '3',
                                    label: __( '3 columns' ),
                                    image: power_block_admin.plugin + './dist/images/mailchimp-center.svg',
				                    id: 'team_advance',

                                },
                                {
                                    value: '4',
                                    label: __( '4 Columns' ),
                                    image: power_block_admin.plugin + './dist/images/mailchimp-advance.svg',
                                },
                            ] }
                            onChange={ ( value ) => setAttributes( { itemcol: value } ) }
				        />
					</PanelBody>
				</InspectorControls>

                <div className={ classnames(
			            className,
                        'power-blocks-team',
                        `is-col-${itemcol}`,
			        )
				 }
				>
					<InnerBlocks
	                     template={ getTabsTemplate( itemsCount ) }
	                     allowedBlocks={ [ 'power-blocks/team-item' ] }
	                />
                </div>
                  { isSelectedBlockInRoot ? (
                    <div className="power-blocks-team-add-item">
                        <IconButton
                            icon={ 'insert' }
                            onClick={ () => {
                                insertteamItem();
                            } }
                        >
                            { __( 'Add team Item' ) }
                        </IconButton>
                    </div>
                ) : '' }
            </Fragment>
        );
	}
}

registerBlockType( 'power-blocks/team', {
	title: __( 'team', 'power-blocks' ),
	description: __( 'Disaply a small but important chunk of information to call attention.', 'power-blocks' ),
	icon: 'format-status',
	category: 'power-blocks',
	keywords: [
		__( 'team', 'power-blocks' ),
	],
	attributes: {
		itemsCount: {
            type: 'number',
            default: 2,
        },
        itemcol: {
            type: 'string',
            default: '2',
        },
        collapseOne: {
            type: 'boolean',
            default: false,
        },
        pbteamwidth : {
            type: 'string',
        }
    },
    // supports: {
	// 	align: [ 'wide', 'full' ],
	// },

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
                insertteamItem() {
                    insertBlock( createBlock( 'power-blocks/team-item', teamItemSettings ), undefined, clientId );
                },
            };
        } ),
    ] )( teamBlock ),

	save: function( props ) {
		const {
            itemsCount,
            itemcol,
            collapseOne,
        } = props.attributes;

        let className = classnames(
            'power-blocks-team',
            `power-blocks-team-${ itemsCount }`,
            'power-blocks-team-row',
            `is-col-${itemcol}`,
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

