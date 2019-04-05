
const { Fragment, Component } = wp.element;
const { Button, Dashicon } = wp.components;
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
			<Fragment>
					<Inspector { ...this.props } />
					<ImageComparison { ...this.props } >
						<MediaUpload
							onSelect={ handleSelectBeforeImage }
							type="image"
							value={ BeforeImageId }
							render={ ( { open } ) => (
								<Button onClick={ open }>
									{ 
										! BeforeImageUrl  ? <Dashicon icon="format-image" /> : 
										<img src={ BeforeImageUrl } alt="" className="pb-team-member-image" /> 
									}
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
									{ 
										! AfterImageUrl  ? <Dashicon icon="format-image" /> : 
										<img src={ AfterImageUrl } alt="" className="pb-team-member-image" /> 
									}
								</Button>
							) }
						>

						</MediaUpload>
					</ImageComparison>
				</Fragment>
		);
	}
}
