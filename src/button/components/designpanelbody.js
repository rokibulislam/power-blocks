/**
 * A Panel for selecting designs
 */

// import { DesignControl } from './designcontrol';
import { PanelBody } from '@wordpress/components';

function DesignPanelBody( props ) {
	return (
		<PanelBody
			title={ <span>{ '' }</span> }
			className="ugb-design-panel-body"
			{ ...props }
		>
            hahaha
		</PanelBody>
	)
}

export default DesignPanelBody;
