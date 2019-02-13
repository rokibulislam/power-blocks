const defaultAttributes = {
	memberName: 'Mahbubur Rahman',
	memberNameColor: '#fff',
	memberNameFontSize: 24,
	memberDesignation: 'Software Engineer',
	memberDesignationColor: '#fff',
	memberDesignationFontSize: 15,
	memberDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text',
	memberDescriptionColor: '#fff',
	memberDescriptionFontSize: 15,
	memberAlignment: 'left',
	memberBackgroundColor: '#2574A9',
	memberboxshadow: 0,
	memberBorderRadius: 0,
	memberMargin: 0,
	memberPadding: 0,
	memberImageStyle: 'round',
	socialIconWidth: 32,
	socialIconHeight: 32,
	socialIconLineHeight: 32,
	socialIconShow: true,
	socialColor: false,
	socialIconColor: '#fff',
	socialIconBackgroundColor: '#d34836',
	socialIconBorderColor: '',
	hoverEffect: true,
	hoverBackgroundColor: '',
	hoverBackgroundOpacity: '',
	facebookLink: '',
	twitterLink: '',
	googleplusLink: '',
	memberImgURL: '',
	memberImgID: '',
};

const gutenTeamAttribute = {
	memberName: {
		type: 'string',
		selector: '.pb-team-member-name',
		default: 'Mahbubur Rahman',
	},
	memberNameColor: {
		type: 'string',
		default: '#fff',
	},
	memberNameFontSize: {
		type: 'number',
		default: 24,
	},
	memberDesignation: {
		type: 'string',
		selector: '.pb-team-member-designation',
		default: 'Software Engineer',
	},
	memberDesignationColor: {
		type: 'string',
		default: '#fff',
	},
	memberDesignationFontSize: {
		type: 'number',
		default: 15,
	},
	memberDescription: {
		type: 'string',
		selector: '.pb-team-member-description',
		default: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text',
	},
	memberDescriptionFontSize: {
		type: 'number',
		default: 15,
	},
	memberDescriptionColor: {
		type: 'string',
		default: '#fff',
	},
	memberAlignment: {
		type: 'string',
		default: 'left',
	},
	memberBackgroundColor: {
		type: 'string',
		default: '#2574A9',
	},
	memberboxshadow: {
		type: 'number',
		default: 0,
	},
	memberBorderRadius: {
		type: 'number',
		default: 0,
	},
	memberMargin: {
		type: 'number',
		default: 0,
	},
	memberPadding: {
		type: 'number',
		default: 0,
	},
	memberImageStyle: {
		type: 'string',
		default: 'round',
	},

	socialIconWidth: {
		type: 'number',
		default: 32,
	},

	socialIconHeight: {
		type: 'number',
		default: 32,
	},

	socialIconLineHeight: {
		type: 'string',
		default: 32,
	},

	socialIconShow: {
		type: 'boolean',
		default: true,
	},
	socialColor: {
		type: 'boolean',
		default: false,
	},
	socialIconColor: {
		type: 'string',
		default: '#fff',
	},
	socialIconBackgroundColor: {
		type: 'string',
		default: '#d34836',
	},
	socialIconBorderColor: {
		type: 'string',
		default: '',
	},

	hoverEffect: {
		type: 'boolean',
		default: true,
	},

	hoverBackgroundColor: {
		type: 'string',
		default: '',
	},

	hoverBackgroundOpacity: {
		type: 'number',
		default: '.1',
	},
	facebookLink: {
		type: 'string',
		default: '',
	},

	twitterLink: {
		type: 'string',
		default: '',
	},
	googleplusLink: {
		type: 'string',
		default: '',
	},
};

export default defaultAttributes;
// export default gutenTeamAttribute;

// memberName,
// memberNameColor,
// memberNameFontSize,
// memberDescription,
// memberDescriptionColor,
// memberDescriptionFontSize,
// memberDesignation,
// memberDesignationColor,
// memberDesignationFontSize,
// memberAlignment,
// memberBackgroundColor,
// memberboxshadow,
// memberBorderRadius,
// memberMargin,
// memberPadding,
// memberImgID,
// memberImgURL,
// memberImageStyle,
// socialIconWidth,
// socialIconHeight,
// socialIconLineHeight,
// socialIconShow,
// socialColor,
// socialIconColor,
// socialIconBackgroundColor,
// socialIconBorderColor,
// hoverEffect,
// hoverBackgroundColor,
// hoverBackgroundOpacity,
// facebookLink,
// twitterLink,
// googleplusLink,