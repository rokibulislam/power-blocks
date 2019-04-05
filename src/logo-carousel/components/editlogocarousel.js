const { Component } = wp.element;
const { MediaUpload } = wp.editor;
export default class EditLogoCarousel extends Component {
	render() {
		const { logos } = this.props.attributes;
		const logoList = logos
		.sort((a, b) => a.index - b.index)
		.map(logo => {
		  return (
			<div className="gts-logo-block">
			  <p>
				<span>
				  Insert Logo Showcase {Number(logo.index) + 1} Here:
				</span>
				<span
				  className="remove-logo"
				  onClick={() => {
					const newlogos = logos
					  .filter(item => item.index != logo.index)
					  .map(t => {
						if (t.index > logo.index) {
						  t.index -= 1;
						}
  
						return t;
					  });
  
					this.props.setAttributes({
					  logos: newlogos
					});
				  }}
				>
				  <i className="fa fa-times" />
				</span>
			  </p>
			  <blockquote className="wp-block-quote">
				{/* <label>Content:</label> */}
				<div className="row">
				  <div className="gts__picture col-3">
					<MediaUpload
					  onSelect={media => {
						const image = media.sizes.medium
						  ? media.sizes.medium.url
						  : media.url;
						const newObject = Object.assign({}, logo, {
						  image: image
						});
						this.props.setAttributes({
						  logos: [
							...logos.filter(
							  item => item.index != logo.index
							),
							newObject
						  ]
						});
					  }}
					  type="image"
					  value={ logo.image }
					  render={({ open }) =>
						!!logo.image ? (
						  <div>
								{this.props.isSelected && (
								  <div className="gts__picture__actions">
									<a
									  href="#"
									  className="removebtn"
									  onClick={() => {
										const newObject = Object.assign(
										  {},
										  logo,
										  {
											image: null
										  }
										);
										this.props.setAttributes({
										  logos: [
											...logos.filter(
											  item => item.index != logo.index
											),
											newObject
										  ]
										});
									  }}
									>
									  × Remove
									</a>
								  </div>
								)}
  
								<div
								  className="gts__picture__image"
								  style={{
									backgroundImage: `url(${logo.image})`
								  }}
								  onClick={open}
								/>
							  </div>
						) : (
						  <a
							href="#"
							className="gts__picture__image"
							onClick={open}
						  >
							Select Image
						  </a>
						)
					  }
					/>
				  </div>
				</div>
			  </blockquote>
			</div>
		  );
		});
		return (
			<div className={ this.props.className }>
				{ logoList }
				<button
					className="add-more-logo"
					onClick={ content =>
						this.props.setAttributes( {
							logos: [
								...this.props.attributes.logos,
								{
									index: this.props.attributes.logos.length,
									content: '',
									member: '',
									possition: '',
									buttonUrl: '',
								},
							],
						} )
					}
				>
					+
				</button>
			</div>
		);
	}
}
