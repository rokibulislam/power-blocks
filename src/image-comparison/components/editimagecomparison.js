/**
 * TwitterFeed Wrapper
 */

// Setup the block
const { Fragment, Component } = wp.element;
const { Button } = wp.components;
const { MediaUpload } = wp.editor;
import Inspector from './inspector';
import ImageComparison from './imagecomparison';
export default class EditImageComparison extends Component {
	render() {
		const {
			attributes: {
				BeforeImageUrl,
				BeforeImageId,
				BeforeImageAlt,
				BeforeImageFilter,
				BeforeImageFilterPerc,
				AfterImageUrl,
				AfterImageAlt,
				AfterImageId,
			},
			isSelected, 
			className, 
			setAttributes 
		} = this.props;

		const handleSelectBeforeImage = img => {
			setAttributes( {
				BeforeImageUrl: img.url,
				BeforeImageAlt: img.alt,
				BeforeImageId: img.id,
			} );
		};

		const handleSelectAfterImage = img => {
			setAttributes( {
				AfterImageUrl: img.url,
				AfterImageAlt: img.alt,
				AfterImageId: img.id,
			} );
		};

		return (
			<div>
				<Fragment>
					<Inspector { ...this.props } />
					<ImageComparison { ...this.props } >
						ImageComparison Admin
						<MediaUpload
							onSelect={ handleSelectBeforeImage }
							type="image"
							value={ BeforeImageId }
							render={ ( { open } ) => (
								<Button onClick={ open }>
									{ <img
										className="power-compare-avatar"
										src={ BeforeImageUrl }
										alt="avatar"
									/> }
								</Button>
							) }
						>
						</MediaUpload>
						<MediaUpload
							onSelect={ handleSelectAfterImage }
							type="image"
							value={ AfterImageId }
							render={ ( { open } ) => (
								<Button onClick={ open }>
									{ <img
										className="power-compare-avatar"
										src={ AfterImageUrl }
										alt="avatar"
									/> }
								</Button>
							) }
						>

						</MediaUpload>
					</ImageComparison>
				</Fragment>
			</div>
		);
	}
}
