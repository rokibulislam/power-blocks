/**
 * TwitterFeed Wrapper
 */
/**
 * Internal dependencies
 */
// import Inspector from './inspector';
import PostGrid from './postgrid';
import Inspector from './inspector';
/**
 * WordPress dependencies
 */
const { Component } = wp.element;
// const { RichText, UrlInput,BlockControls,AlignmentToolbar } = wp.blocks;
// const { Dashicon, IconButton, withState } = wp.components;

export default class EditPostGrid extends Component {
	render() {
		return (
			<div>
				PostGrid Admin	
			</div>
		);
	}
}
