const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { AlignmentToolbar, BlockControls } = wp.editor;
import Inspector from './inspector';
import Newsletter from './newsletter'
import SingleNewsletter from './SingleNewsletter';
export default class EditNewsletter extends Component {
	constructor( props ) {
		super( ...arguments );
		this.state = {
			hasError:  false,
			isLoading: true,
			isSavedKey: false,
			isSaving: false,
			keySaved: false,
			mc_list_options:[]
		}
		this.onUpdateApiKey = this.onUpdateApiKey.bind(this);
		this.updateList = this.updateList.bind(this);
		this.onMount= this.onMount.bind(this);
	}
	onUpdateApiKey(key){
	// onUpdateApiKey = (key) => {
		this.setState( { isSaving: true } );
		let mc_lists =[];
		fetch( ajaxurl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body:"action=pb_mailchimp_block_save_key&api_key="+key
		}).then( ( response ) => {
			return response.json();
		}).then( ( json ) => {
			console.log(json);
			if ( json.success ) {
				console.log('haha');
				console.log(pb_mailchimp_block.api_key);
				console.log('haha');
				console.log(key);
				this.props.setAttributes({
					apiKey: key
				});
				this.setState({ isSavedKey: true, isLoading: false, isSaving: false, keySaved: true });
				let data = JSON.parse(json.data);
				if( data.lists.length == 0) {
					mc_lists.push( { value:-1,label: __( 'No Lists Found - Check API Key' ) } );
					this.setState( ( state, props ) => ( {
						mc_list_options: mc_lists,
					} ) );
					this.props.setAttributes({
						mailchimp_list: mc_lists
					});
				} else {
					
					for (var key in data.lists) {
						if (data.lists.hasOwnProperty(key)) {
							mc_lists.push({value: data.lists[key].id, label: data.lists[key].name});
						}
					}
					this.setState( ( state, props ) => ( {
						mc_list_options: mc_lists,
					} ) )
					
					this.props.setAttributes({
						mailchimp_list: mc_lists
					});
				}
			} else {
				this.props.setAttributes({
					'pinned': false 
				});
				mc_lists.push( { value:-1, label: __( 'No Lists Found or Invalid API key') } );
				this.setState( ( state, props ) => ( {
					mc_list_options: mc_lists,
					isSavedKey: false
				} ) );
				this.props.setAttributes({
					apiKey: '',

				})
				this.props.setAttributes({
					mailchimp_list: mc_lists
				});
			}

		});

	}
	updateList( list ) {
	// updateList = (list) => {
        fetch(ajaxurl, {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body:"action=pb_mailchimp_block_save_list&list="+list
		});
		this.props.setAttributes({ pinned: true });		
	}
	onMount() {
	// onMount = () => {
		if( pb_mailchimp_block.api_key ) {
			this.setState({ isSavedKey: true, isLoading: false, isSaving: false, keySaved: true });
			let mc_lists =[];
			let data = pb_mailchimp_block.mailchimp_lists;
			for (var key in data) {
				if (data.hasOwnProperty(key)) {
					mc_lists.push({value: data[key].id, label: data[key].name});
				}
			}
			this.setState( { mc_list_options: mc_lists });
			if ( pb_mailchimp_block.mailchimp_list ) {
				this.props.setAttributes({ pinned: true });
			}
			this.props.setAttributes({
				apiKey : pb_mailchimp_block.api_key,
				mailchimp_list: pb_mailchimp_block.mailchimp_list
			});
		}
	}

	render() {
		const {
			attributes: {

			},
			setAttributes,
			isSelected,
			className
		} = this.props;
		return (
			<Fragment>
				<BlockControls key="controls">
					<AlignmentToolbar
						value={ '' }
						onChange={ ( value ) => setAttributes( { 'newsletteralignment': value } ) }
					/>
				</BlockControls>
				<Inspector { ...{ setAttributes, ...this.props } } state={ this.state }
					onUpdateApiKey={ this.onUpdateApiKey }
					updateList= { this.updateList }
					onMount = { this.onMount }
				/>
				<SingleNewsletter { ...this.props } key="" state={ this.state }
					onUpdateApiKey={ this.onUpdateApiKey }
					updateList= { this.updateList }
				></SingleNewsletter>
			</Fragment>
		);
	}
}
