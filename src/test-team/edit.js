import classnames from 'classnames';
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { PanelColorSettings, InspectorControls, RichText,PlainText,AlignmentToolbar, BlockControls, MediaUpload } = wp.editor;
const { PanelBody, RangeControl, ToggleControl, SelectControl, TextControl, RadioControl, 
        Button, Toolbar, ColorPicker, Dashicon, IconButton } = wp.components;
import SingleTeam from './singleTeam';
import Inspector from './inspector';
class Edit extends Component {
    state = {
		selected: -1,
    }
    clickHandler = ( index ) => {
		this.setState( ( state, props ) => ( {
			selected: index
		} ) )
	}
    addItems = async () => {
        this.props.setAttributes({
            teams: [
                ...this.props.attributes.teams,
                {
                    index: this.props.attributes.teams.length || 0,
                    memberName: "",
                    memberNameColor: "",
                    memberNameFontSize: "",
                    memberDesignation: "",
                    memberDesignationColor: "",
                    memberDesignationFontSize: "",
                    memberDescription: "",
                    memberDescriptionColor: "",
                    memberDescriptionFontSize: "",
                    memberAlignment: "",
                    memberBackgroundColor: "",
                    memberboxshadow: "",
                    memberBorderRadius: "",
                    memberMargin: "",
                    memberPadding: "",
                    memberImageStyle: "",
                    socialIconWidth: "",
                    socialIconHeight: "",
                    socialIconLineHeight: "",
                    socialIconShow: "",
                    socialColor: "",
                    socialIconColor: "",
                    socialIconBackgroundColor: "",
                    socialIconBorderColor: "",
                    hoverEffect: "",
                    hoverBackgroundColor: "",
                    hoverBackgroundOpacity: "",
                    facebookLink: "",
                    twitterLink: "",
                    googleplusLink: "",
                    memberImgURL: "",
                    memberImgID: "",                
                }
            ]
        })
    }
    
    removeItem = async ( itemindex ) => {
        const newteams = this.props.attributes.teams.filter(item => item.index != itemindex)
        .map(t => {
            if (t.index > itemindex) {
                t.index -= 1;
            }

            return t;
		});
		await this.setState( ( state, props ) => ( {
			selected: -1,
		} ) )

        this.props.setAttributes({
            teams: newteams
        });
	}
    
    render() {
        
        const { teams,testBackgroundColor} = this.props.attributes;
        const { setAttributes } = this.props;
		if (!this.props.attributes.id) {
			const id = `team${Math.floor(Math.random() * 100)}`;
			setAttributes({
				id
			});
		}
        console.log("edit teams", this.props.attributes);
		return (
            <div 
            // style= {{ backgroundColor:testBackgroundColor}}
            >
                <BlockControls key="controls">
                    <Toolbar>
                        <Button className={ 'button button-primary power-add-item-wrapper' } 
                            onClick= { () => this.addItems() }> Add Team Member 
                        </Button>
                    </Toolbar>
                </BlockControls>
                { teams.sort( ( a, b ) => a.index - b.index ).map( ( team, index ) => {
						return (
							<SingleTeam key={ index } { ...{ setAttributes, ...this.props } }
                            teams={ teams } team={ team }
                                removeItem={ this.removeItem }
                                clickHandler={ this.clickHandler }
								index={ index }
								// state={ this.state } 
                            />
						)
					} )
                }
                { (teams.length > 0) ? <Inspector { ...{ setAttributes, ...this.props } } teams={ teams }  state={this.state} /> : ''
				 }
            </div>
        )
    }
}
export default Edit;