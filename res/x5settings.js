(function ( $, x5engine ) {
	var x = x5engine,
		s = x.settings,
		p = s.currentPath,
		b = x.boot;

	s.islocal = true;
	b.push(function () {
		x.setupDateTime();
		x.imAccess.showLogout();
		x.utils.autoHeight();
		x.cart.ui.updateWidget();
		x.imGrid.init();
	});
	b.push(function () {
		x.menu({
			target: '#imMnMn',
			showCurrent: false,
			verticalScroll: true,
			orientation: 'horizontal',
			menuHeight: 26,
			menuWidth: 150,
			submenuHeight: 26,
			submenuWidth: 160,
			opacity: 0.800,
			type: 'singleColumn',
			alignment: 'left',
			effect: 'fade'
		});
	});
	b.push(function () { x.utils.imPreloadImages([p + 'menu/index_h.png',p + 'menu/brievenspoor_h.png',p + 'menu/borstkankerlogboek_h.png',p + 'menu/sponsorloop-mama-cash_h.png',p + 'menu/contact_h.png',p + 'menu/alvleesklierberichten_h.png', p + 'res/imLoad.gif', p + 'res/imClose.png']); });

	// ShowBox
	$.extend(s.imShowBox, {
		'effect' : 'fade',
		'shadow' : '',
		'background' : '#000000',
		'borderWidth' : {
			'top': 1,
			'right': 1,
			'bottom': 1,
			'left': 1
		},
		'borderRadius' : '5px 5px 5px 5px',
		'borderColor' : '#000000 #000000 #000000 #000000',
		'textColor' : '#000000',
		'fontFamily' : 'Tahoma',
		'fontStyle' : 'normal',
		'fontWeight' : 'normal',
		'fontSize' : '9pt',
		'textAlignment' : 'left',
		'boxColor' : '#FFFFFF',
		'opacity' : 0.700,
		'radialBg' : true // Works only in Mozilla Firefox and Google Chrome
	});

	// PopUp
	$.extend(s.imPopUp, {
		'effect' : 'fade',
		'width' : 500,
		'shadow' : '',
		'background' : '#000000',
		'borderRadius' : 10,
		'textColor' : '#000000',
		'boxColor' : '#FFFFFF',
		'opacity' : 0.700
	});

	// Tip
	$.extend(s.imTip, {
		'borderRadius' : 0,
		'arrow' : true,
		'position' : 'bottom',
		'effect' : 'none',
		'showTail' : true
	});

	// Captcha
	var codes = s.imCaptcha.offlineCodes;
	codes[0] = { letter: 'E', path: 'captcha/imcpa_j27.gif'};
	codes[1] = { letter: 'X', path: 'captcha/imcpa_zcw.gif'};
	codes[2] = { letter: '7', path: 'captcha/imcpa_7g2.gif'};
	codes[3] = { letter: '6', path: 'captcha/imcpa_suv.gif'};
	codes[4] = { letter: 'W', path: 'captcha/imcpa_tsl.gif'};
	codes[5] = { letter: 'X', path: 'captcha/imcpa_4yf.gif'};
	codes[6] = { letter: 'A', path: 'captcha/imcpa_gzc.gif'};
	codes[7] = { letter: 'U', path: 'captcha/imcpa_7f7.gif'};
	codes[8] = { letter: 'L', path: 'captcha/imcpa_jzp.gif'};
	codes[9] = { letter: '3', path: 'captcha/imcpa_dj6.gif'};
	s.loaded = true;
})( _jq, x5engine );