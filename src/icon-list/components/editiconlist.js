/**
 * TwitterFeed Wrapper
 */

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { PanelBody, BaseControl, Dashicon, RangeControl } = wp.components;
const { InspectorControls, RichText, PanelColorSettings } = wp.editor;
import IconList from './iconlist';
export default class EditIconList extends Component {
	//Render
	render() {
		const listIcons = [
			{ label: __( 'Checkmark' ), value: 'yes', unicode: '\u005Cf147' },
			{ label: __( 'Plus' ), value: 'plus', unicode: '\u005Cf132' },
			{ label: __( 'Circle' ), value: 'marker', unicode: '\u005Cf159' },
			{ label: __( 'Star' ), value: 'star-filled', unicode: '\u005Cf155' },
			{ label: __( 'Arrow' ), value: 'arrow-right', unicode: '\u005Cf139' },
			{ label: __( 'Arrow Alt' ), value: 'arrow-right-alt', unicode: '\u005Cf344' },
			{ label: __( 'Arrow Alt 2' ), value: 'arrow-right-alt2', unicode: '\u005Cf345' },
			{ label: __( 'Pin' ), value: 'admin-post', unicode: '\u005Cf109' },
			{ label: __( 'Info' ), value: 'info', unicode: '\u005Cf348' },
		];

		const {
			attributes: {
				items,
				icon,
				iconColor,
				itemGap,
				textIndent,
				textColor,
				textSize,
				columns,
				iconBoxHeight, 
				iconBoxWidth,
				iconBoxBgColor,
				iconBoxBorderColor 
			},
			attributes,
			className,
			setAttributes,
		} = this.props;

		const itemStyle = {
			'--content': `'${icon}'`,
			'--icon-color': iconColor ? `${iconColor}` : undefined,
			'--text-color': textColor ? `${textColor}` : undefined,
			'--text-size': textSize ? `${textSize}px` : undefined,
			'--text-indent': textIndent ? `${textIndent}px` : undefined,
			'--item-line-height': itemGap ? `${itemGap}px` : undefined,
			'--columns': columns ? `${columns}` : undefined,
			'--icon-box-bg-color': iconBoxBgColor ? `${iconBoxBgColor}` : undefined,
			'--icon-box-border-color': iconBoxBorderColor ? `${iconBoxBorderColor}` : undefined,
			'--icon-box-height': iconBoxHeight ? `${iconBoxHeight}px` : undefined,
			'--icon-box-width': iconBoxWidth ? `${iconBoxWidth}px` : undefined,
		};

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={ __( 'Icon Settings' ) }>
						<BaseControl label={ __( 'List icon' ) }>
							<div className="nb-icon-items-wrapper">
								{
									listIcons.map( ( item, index ) => (
										<div className="power-icon-item" key={ index }>
											<Dashicon icon={ item.value } />
										</div>
									) )
								}
							</div>
						</BaseControl>

						<RangeControl
							label={ __( 'Icon Box Height' ) }
							value={ iconBoxHeight }
							min={ 20 }
							max={ 100 }
							onChange={ ( value ) => setAttributes( { iconBoxHeight: value } ) }
						/>

						<RangeControl
							label={ __( 'Icon Box Width' ) }
							value={ iconBoxWidth }
							min={ 20 }
							max={ 100 }
							onChange={ ( value ) => setAttributes( { iconBoxWidth: value } ) }
						/>

						<PanelColorSettings
							title={ __( 'Icon Box Border Color' ) }
							initialOpen={ false }
							colorSettings={ [
								{
									value: iconBoxBorderColor,
									onChange: value => setAttributes( { iconBoxBorderColor: value } ),
									label: __( 'Icon Box Border Color' ),
								},
							] }
						/>

						<PanelColorSettings
							title={ __( 'Icon Color' ) }
							initialOpen={ false }
							colorSettings={ [
								{
									value: iconColor,
									onChange: value => setAttributes( { iconColor: value } ),
									label: __( 'Icon Color' ),
								},
							] }
						/>

						<PanelColorSettings
							title={ __( 'Text Color' ) }
							initialOpen={ false }
							colorSettings={ [
								{
									value: textColor,
									onChange: value => setAttributes( { textColor: value } ),
									label: __( 'Text Color' ),
								},
							] }
						/>

						<RangeControl
							label={ __( 'Text Font Size' ) }
							value={ textSize }
							min={ 10 }
							max={ 100 }
							onChange={ ( value ) => setAttributes( { textSize: value } ) }
						/>

						<RangeControl
							label={ __( 'Text Indent' ) }
							value={ textIndent }
							min={ 10 }
							max={ 200 }
							onChange={ ( value ) => setAttributes( { textIndent: value } ) }
						/>

						<RangeControl
							label={ __( 'Item Line Height' ) }
							value={ itemGap }
							min={ 5 }
							max={ 100 }
							onChange={ ( value ) => setAttributes( { itemGap: value } ) }
						/>

					</PanelBody>
				</InspectorControls>
			</Fragment>
		);
	}
}
