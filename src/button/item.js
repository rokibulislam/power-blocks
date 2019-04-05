// External Dependencies.
import classnames from 'classnames/dedupe';
const { applyFilters } = wp.hooks;
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { BlockControls,InnerBlocks,RichText, MediaUpload,URLInput  } = wp.editor;
const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;
const { registerBlockType } = wp.blocks;
const { InspectorControls, PanelColorSettings } = wp.editor;
const { Button, Toolbar, IconButton, Dashicon,PanelBody , RangeControl, ToggleControl,TextControl,SelectControl  } = wp.components;
const ALLOWED_MEDIA_TYPES = [ 'image' ];

class ButtonItemBlock extends Component {
    render() {
        const {
            attributes,
            setAttributes,
            isSelected,
            isSelectedBlockInRoot,
            className
        } = this.props;

        const {
            text,
            icon,
            iconPosition,
            url,
            target,
            rel,
            size,
            color,
            textColor,
            btnborderRadius,
            borderWeight,
            borderColor,
            focusOutlineWeight,
            focusOutlineColor,
            hoverColor,
            hoverTextColor,
            hoverBorderColor,
        } = attributes;

        const Colors = [
			{ color: '#F78DA7', name: 'GPB Color' },
			{ color: '#CF2E2E', name: 'Prunus Avium' },
			{ color: '#FF6903', name: 'Chi-gong' },
			{ color: '#FCB902', name: 'Pico-8' },
			{ color: '#7BDCB5', name: 'Robin\'s Egg Blue' },
			{ color: '#FE4A5A', name: 'Orange Ville' },
			{ color: '#24C030', name: 'Bright Yarrow' },
			{ color: '#4BBDFF', name: 'Light Greenish Blue' },
			{ color: '#9013FE', name: 'Mint Leaf' },
			{ color: '#4C84FF', name: 'Exodus Fruit' },
			{ color: '#BD10E0', name: 'Sour Lemon' },
			{ color: '#F0F0F0', name: 'First Date' },
			{ color: '#000000', name: 'Green Darnet Tail' },
		];

        return (
            <Fragment>
            	<InspectorControls>
                    <PanelBody>
                    	<RangeControl
                            label={ __( 'Corner Radius' ) }
                            value={ btnborderRadius }
                            min="0"
                            max="50"
                            onChange={ ( value ) => setAttributes( { btnborderRadius: value } ) }
                        />
                    </PanelBody>

                    <PanelColorSettings
							initialOpen={ false }
							title={ __( 'Color Settings' ) }
							colorSettings={ [
								{
									label: __( 'Background Color' ),
									value: color,
									onChange: value => setAttributes( {
										color: value,
									} ),
									colors: Colors,
								},
								{
									label: __( 'Border Color' ),
									value: borderColor,
									onChange: value => setAttributes( {
										borderColor: value
									} ),
									colors: Colors,
								},

								{
									label: __( 'Hover Background Color' ),
									value: hoverColor,
									onChange: value => setAttributes( {
										hoverColor: value
									} ),
									colors: Colors,
								},

								{
									label: __( 'Hover Text Color' ),
									value:  hoverTextColor,
									onChange: value => setAttributes( {
										hoverTextColor: value,
									} ),
									colors: Colors,
								},

								{
									label: __( 'Text Color' ),
									value: textColor,
									onChange: value => setAttributes( {
										textColor:value
									} ),
									colors: Colors,
								},
							] }
						/>
                </InspectorControls>
                <div
                	className={ 'pb-button-wrapper' }
                    style={ {
						backgroundColor: color,
						borderRadius: btnborderRadius,
		                '&:hover, &:focus': {
		                    backgroundColor: hoverColor,
		                    color: hoverTextColor,
		                },
					} }
                >
                    <RichText
                        tagName="span"
                        placeholder={ __( 'Add text…' ) }
                        value={ text }
                        onChange={ ( value ) => setAttributes( { text: value } ) }
                        formattingControls={ [ 'bold', 'italic', 'strikethrough' ] }
                        isSelected={ isSelected }
                        keepPlaceholderOnFocus
                        style={ {
							color: textColor,
                        }}
                        className="pb-button-text"
                    />
                </div>
                { isSelected ? (
                    <URLInput
                        // url={ url }
                        // target={ target }
                        // rel={ rel }
                        value = { url }
                        onChange={ ( value ) => {
                            setAttributes( { url: value  } );
                        } }
                        autoFocus={ false }
                        className="pb-component-url-input-float"
                    />
                ) : '' }
            </Fragment>
        );
    }
}

export const name = "power-blocks/button-item";
export const settings = {
    title: __( 'Item' ),
    parent: [ 'power-blocks/button' ],
    description: __( 'A single item within a button block.' ),
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
    	url: {
            type: 'string',
            source: 'attribute',
            selector: 'a.pb-button',
            attribute: 'href',
        },
        target: {
            type: 'string',
            source: 'attribute',
            selector: 'a.pb-button',
            attribute: 'target',
        },
        rel: {
            type: 'string',
            source: 'attribute',
            selector: 'a.pb-button',
            attribute: 'rel',
        },
        text: {
            type: 'array',
            source: 'children',
            selector: '.pb-button-text',
            default: '',
        },
        icon: {
            type: 'string',
            default: '',
        },
        iconPosition: {
            type: 'string',
            default: 'left',
        },
        size: {
            type: 'string',
            default: 'md',
        },
        color: {
            type: 'string',
            default: '#0366d6',
        },
        textColor: {
            type: 'string',
            default: '#ffffff',
        },

        btnborderRadius: {
            type: 'number',
            default: 2,
        },
        borderWeight: {
            type: 'number',
            default: 0,
        },
        borderColor: {
            type: 'string',
            default: '#00669b',
        },

        focusOutlineWeight: {
            type: 'number',
            default: 0,
        },

        hoverColor: {
            type: 'string',
        },
        hoverTextColor: {
            type: 'string',
        },
        hoverBorderColor: {
            type: 'string',
        },

        focusOutlineColor: {
            type: 'string',
            default: 'rgba(3, 102, 214, 0.5)',
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
    ] )( ButtonItemBlock ),

    save: function( props ) {

        const {
        	attributes: {
	        	text,
	            icon,
	            iconPosition,
	            url,
	            target,
	            rel,
	            size,
	            color,
	            textColor,
	            btnborderRadius,
	            borderWeight,
	            borderColor,
	            focusOutlineWeight,
	            focusOutlineColor,
	            hoverColor,
	            hoverTextColor,
	            hoverBorderColor,
	        },
	        className
        } = props;

        const result = [
            <RichText.Content tagName="span" className="pb-button-text" value={ text }
            style={ { color: textColor }}/>,
        ];

        return url ? (
        		<div
			        className={ classnames(
						className,
						'pb-button-wrapper'
					) }
                    style={ {
						backgroundColor: color,
						borderRadius: btnborderRadius,
						color: textColor,
					} }
                >
		            <a
		            	href={ url }
		            	className="pb-button"
		            	style={ {
							color: textColor,
                        }}
                        target={ target || false }
                        rel={ rel || false }
                    >
		                { result }
		            </a>
		        </div>
        ) : (
        	<div
        		className={ classnames(
						className,
						'pb-button-wrapper'
				) }

               	style={ {
						backgroundColor: color,
						borderRadius: btnborderRadius,
						color: textColor,
				} }
			>
                { result }
            </div>
        );
    },
};
