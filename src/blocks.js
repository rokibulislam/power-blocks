/**
 * Gutenberg Blocks
 *
 * All blocks related JavaScript files should be imported here.
 * You can create a new block folder in this dir and include code
 * for that block here as well.
 *
 * All blocks should be included here since this is the file that
 * Webpack is compiling as the input file.
 */

import './callout/block.js';
import './newsletter/block.js';
import './click-to-tweet/block.js';
import * as button from './button/index.js';
import * as buttonItem from './button/item.js';
import './team/index';
import * as teamItem from './team/item';
import './countup/block.js';
import './ad/block.js';
import * as accordion from './accordion/index.js';
import * as accordionItem from './accordion/item.js';
import './priceTable/index.js';
import * as priceTableItem from './priceTable/item.js';
import './progressbar/block.js';
import './call-to-action/block.js';
import './image-comparison/block.js';
import './tooltip/block.js';
import './twitter-feed/block.js';
import './video-popup/block.js';
import './logo-carousel/block.js';
import './testimonial/index.js';
import * as testimonialItem from './testimonial/item.js';
import './google-map/block.js';
// import './instagram-feed/block.js';


const {
    registerBlockType,
    updateCategory,
} = wp.blocks;

jQuery( () => {
    [    
        buttonItem,
        teamItem,
        // button,
        priceTableItem,
        accordion,
        accordionItem,
        testimonialItem
    ].forEach( ( { name, settings } ) => {
        registerBlockType( name, settings );
    } );
} );
