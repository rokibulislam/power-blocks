import classnames from 'classnames';
const { Button, Toolbar, IconButton, Dashicon } = wp.components;
const { RichText, MediaUpload } = wp.editor;
const { __ } = wp.i18n;
const ALLOWED_MEDIA_TYPES = [ 'image' ];
const { Component } = wp.element;
// const Singletestimonial = ( props ) => {
export default class Singletestimonial extends Component {

	render() {

		const {
            attributes,
            setAttributes,
            isSelected,
            isSelectedBlockInRoot,
            className
        } = this.props;

        const {
	       	testimonialName,
	    	testimonialNameColor,
	    	testimonialNameFontSize,
	    	testimonialTitle,
	    	testimonialTitleColor,
	    	testimonialTitleFontSize,
	    	testimonialContent,
	    	testimonialContentColor,
	    	testimonialContentFontSize,
	    	testimonialAlignment,
	    	testimonialImgURL,
	    	testimonialImgID,
	    	testimonialBackgroundColor,
	    	testimonialImageStyle,
	    	testimonialPadding,
	    	testimonialMargin,
	    	image,
        } = attributes;

		return (
		    <div
	            style={ {
	                backgroundColor: testimonialBackgroundColor,
	                margin: testimonialMargin,
	                padding: testimonialPadding,
	            } }
	            className={ classnames(
	            	className,
	                'pb--testimonial'
	            ) }
   			>

	            <RichText
	                tagName="p"
	                placeholder={ __( 'Add testimonial Content...', 'power-blocks' ) }
	                value={ testimonialContent }
	                formattingControls={ [ 'bold', 'italic', 'strikethrough', 'link' ] }
	                className={ classnames(
	                	className,
	                    'pb-testimonial-content'
	                ) }
	                style={ {
	                    textAlign: testimonialAlignment,
	                    color: testimonialContentColor,
	                    fontSize: ( testimonialContentFontSize ) ? `${ testimonialContentFontSize }px` : undefined,
	                } }
	                onChange={ ( value ) => {
	                	setAttributes( {
	                    	testimonialContent: value
	                    } );
	                } }
	            />


            	{ image && isSelected &&

	                <div className={ classnames(
	                    className,
	                    'pb-testimonial-image-hover',
	                ) }>
	                    <Toolbar>
	                        <MediaUpload
	                            onSelect={ ( media ) => {
	                                const image = media.sizes.medium
	                                ? media.sizes.medium.url
	                                : media.url;
	                                setAttributes({ image: image });
	                            } }
	                            type="image"
	                            value={ image }
	                            className={ 'pb-testimonial-member-image' }
	                            render={ ( { open } ) => (
	                                <IconButton
	                                    label={ __( 'Edit Image' ) }
	                                    icon="edit"
	                                    onClick={ open }
	                                />
	                            ) }
	                        />
	                        <IconButton
	                            label={ __( 'Remove Image' ) }
	                            icon="trash"
	                            onClick={ ( ) => {
	                                setAttributes({ image: null });
	                            } }
	                        />
	                    </Toolbar>
                	</div>
            	}

            	<div className="pb-testimonial-info">
               	 	<div className="pb-testimonial-avatar-wrap">
                    	<div className="pb-testimonial-image-wrap">
	                        <MediaUpload
	                            buttonProps={ {
	                                className: 'change-image',
	                            } }
	                            onSelect={ ( media ) => {
	                                const image = media.sizes.medium ? media.sizes.medium.url : media.url;
	                                setAttributes({ image: image });
	                            } }
	                            allowed={ ALLOWED_MEDIA_TYPES }
	                            type="image"
	                            value={ image }
	                            render={ ( { open } ) => (
	                                <Button onClick={ open }>
	                                    { ! image ? <Dashicon icon="format-image" /> :
	                                    <img
	                                        className="pb-testimonial-avatar"
	                                        src={ image }
	                                        alt="avatar"
	                                    /> }
	                                </Button>
	                            ) }
	                        >
	                        </MediaUpload>
                    </div>
                </div>

                <RichText
                    tagName="h3"
                    placeholder={ __( 'Add name', 'power-blocks' ) }
                    value={ testimonialName }
                    className="pb-testimonial-name"
                    style={ {
                        color: testimonialNameColor,
                        textAlign:testimonialAlignment,
                        fontSize: ( testimonialNameFontSize ) ? `${testimonialNameFontSize}px` : undefined,
                    } }
                    onChange={ ( value ) => {
                        setAttributes({ testimonialName: value  });
                    } }
                />

                <RichText
                    tagName="h2"
                    placeholder={ __( 'Add title', 'power-blocks' ) }
                    value={ testimonialTitle }
                    className="pb-testimonial-title"
                    style={ {
                        color: testimonialTitleColor,
                        textAlign: testimonialAlignment,
                        fontSize: ( testimonialTitleFontSize ) ? `${testimonialTitleFontSize}px` : undefined,
                    } }
                    onChange={ ( value ) => {
                    	setAttributes({ testimonialTitle: value });
                    } }
                />

            </div>
        </div>
		);
	}
}
