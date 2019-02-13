const defaultButtonAttributes = {
    buttonText: 'NEW Button',
    buttonUrl: '',
    borderRadius: 0,
    buttonSize: '',
    buttonBackground: '#000',
    borderColor:'#000',
    hoverColor: '#dd0',
    buttonTextColor: '#fff',
    buttonTarget: false,
    buttonAlignment: left,
};

const gutenButtonAttribute = {
    buttonText: {
        type: 'string',
        selector: '.pb_button',
        default: 'NEW Button',
    },
    buttonUrl: {
        type: 'string',
        default: '',
        source: 'attribute',
        selector: 'a',
        attribute: 'href',
    },
    borderRadius: {
        type: 'number',
        default: 0,
    },
    buttonSize: {
        type: 'number',
        default: 0,
    },
    buttonBackground: {
        type: 'string',
        default: '#000',
    },
    borderColor: {
        type: 'string',
        default: '#000',
    },
    hoverColor: {
        type: 'string',
        default: '#fff',
    },
    buttonTextColor: {
        type: 'string',
        default: '#fff',
    },
    buttonTarget: {
        type: 'boolean',
        default: false,
    },
    buttonAlignment: {
        type: 'string',
        default: 'center',
    },
};

export default defaultButtonAttributes;