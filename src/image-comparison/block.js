
// import ImageComparison from './components/imagecomparison';
import EditImageComparison from './components/editimagecomparison';
import './styles/style.scss';
import './styles/editor.scss';
const { Fragment, Component } = wp.element;
const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

registerBlockType( 'power-blocks/image-comparison', {
	title: __( 'Image Comparison', 'power-blocks' ),
	description: __( '.', 'power-blocks' ),
	icon: 'format-status',
	category: 'power-blocks',
	keywords: [
		__( 'Image Comparison', 'power-blocks' ),
	],
	attributes: {
		BeforeImageUrl: {
			type: "string",
			source: "attribute",
			attribute: "src",
			selector: ".pb_before_img_comparison"
		},
		BeforeImageId: {
			type: "number"
		},
		BeforeImageAlt: {
			type: "string",
			source: "attribute",
			attribute: "alt",
			selector: ".pb_before_img_comparison"
		},
		BeforeImageFilter: {
			type: "string"
		},
		BeforeImageFilterPerc: {
			type: "number",
			default: 100
		},
		AfterImageUrl: {
			type: "string",
			source: "attribute",
			attribute: "src",
			selector: ".pb_after_img_comparison"
		},
		AfterImageId: {
			type: "number"
		},
		AfterImageAlt: {
			type: "string",
			source: "attribute",
			attribute: "alt",
			selector: ".pb_after_img_comparison"
		}
	},
	styles: [

	],

	edit: EditImageComparison,

	save: function( props ) {
		const {
			attributes: {
				BeforeImageUrl,
				BeforeImageId,
				BeforeImageAlt,
				AfterImageUrl,
				AfterImageAlt,
				AfterImageId,
			},
			isSelected, 
			className, 
			setAttributes 
		} = props;
		return (
			// { BeforeImageUrl && AfterImageUrl && (
			<Fragment>
				<div className="pb_before_image">
						<img
							src={BeforeImageUrl}
							alt={BeforeImageAlt}
							className="pb_before_img_comparison"
						/>
				</div>
				<div className="pb_after_image">
					<img
						src={AfterImageUrl}
						// alt={AfterImageAlt}
						className="pb_after_img_comparison"
						style={{ width: "100%", objectFit: "cover" }}
					/>
				</div>
			</Fragment>
			// ) }
		);
	},
} );
