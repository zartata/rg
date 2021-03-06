riot.tag('rg-alert', '<div each="{ opts.alerts }" class="alert { type }"> <a class="close" aria-label="Close" onclick="{ parent.remove }"> <span aria-hidden="true">&times;</span> </a> <div class="body"> { msg } </div> </div>', 'rg-alert { font-size: 0.9em; position: relative; top: 0; right: 0; left: 0; width: 100%; } rg-alert .alert { position: relative; margin-bottom: 15px; } rg-alert .body { padding: 15px 35px 15px 15px; } rg-alert .close { position: absolute; top: 50%; right: 20px; line-height: 12px; margin-top: -6px; font-size: 18px; border: 0; background-color: transparent; color: rgba(0, 0, 0, 0.5); cursor: pointer; outline: none; } rg-alert .danger { color: #8f1d2e; background-color: #ffced8; } rg-alert .information { color: #31708f; background-color: #d9edf7; } rg-alert .success { color: #2d8f40; background-color: #ccf7d4; } rg-alert .warning { color: #c06329; background-color: #f7dfd0; }', function (opts) {
		var _this = this;
		_this.remove = function (e) {
			var index = opts.alerts.indexOf(e.item);
			opts.alerts.splice(index, 1);
			if (e.item.onclose) {
				e.item.onclose(e);
			}
		};
	
});
riot.tag('rg-bubble', '<div class="context"> <div class="bubble { visible: visible }"> { text } </div> <div class="content" onmouseover="{ showBubble }" onmouseout="{ hideBubble }" onclick="{ toggleBubble }"> <yield></yield> </div> </div>', 'rg-bubble .context,rg-bubble .content { display: inline-block; position: relative; } rg-bubble .bubble { position: absolute; display: block; top: -27px; left: 50%; -webkit-transform: translate3d(-50%, 0, 0); transform: translate3d(-50%, 0, 0); padding: 5px 10px; background-color: rgba(0, 0, 0, 0.8); color: white; text-align: center; font-size: 12px; line-height: 1; white-space: nowrap; opacity: 0; transition: opacity 0.1s, top 0.1s; } rg-bubble .visible { top: -30px; opacity: 1; } rg-bubble .bubble:after { content: \'\'; position: absolute; display: block; bottom: -10px; left: 50%; -webkit-transform: translate3d(-50%, 0, 0); transform: translate3d(-50%, 0, 0); width: 0; height: 0; border: 5px solid rgba(0, 0, 0, 0); border-top-color: rgba(0, 0, 0, 0.9); }', function (opts) {

	var _this = this;
	_this.text = opts.text;
		_this.visible = false;
	_this.showBubble = function () {
		clearTimeout(_this.timer);
		_this.visible = true;
	};
	_this.hideBubble = function () {
		_this.timer = setTimeout(function () {
			_this.visible = false;
			_this.update();
		}, 1000);
	};
	_this.toggleBubble = function () {
		_this.visible = !_this.visible;
	};


});
riot.tag('rg-ga', '', function(opts) {
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
				(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		ga('create', opts.property, 'auto');
		ga('send', 'pageview');

	
});riot.tag('rg-loading', '<div class="overlay"></div> <div class="loading"> <div> <yield></yield> </div> <div> <svg width="80px" height="80px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-default"> <rect x="0" y="0" width="80" height="80" fill="none" class="bk"></rect> <rect x="48.5" y="47" width="3" height="6" rx="0" ry="0" fill="#ffffff" transform="rotate(0 50 50) translate(0 -10)"><animate attributeName="opacity" from="1" to="0" dur="0.5s" begin="0s" repeatCount="indefinite"></animate></rect> <rect x="48.5" y="47" width="3" height="6" rx="0" ry="0" fill="#ffffff" transform="rotate(45 50 50) translate(0 -10)"><animate attributeName="opacity" from="1" to="0" dur="0.5s" begin="0.0625s" repeatCount="indefinite"></animate></rect> <rect x="48.5" y="47" width="3" height="6" rx="0" ry="0" fill="#ffffff" transform="rotate(90 50 50) translate(0 -10)"><animate attributeName="opacity" from="1" to="0" dur="0.5s" begin="0.125s" repeatCount="indefinite"></animate></rect> <rect x="48.5" y="47" width="3" height="6" rx="0" ry="0" fill="#ffffff" transform="rotate(135 50 50) translate(0 -10)"><animate attributeName="opacity" from="1" to="0" dur="0.5s" begin="0.1875s" repeatCount="indefinite"></animate></rect> <rect x="48.5" y="47" width="3" height="6" rx="0" ry="0" fill="#ffffff" transform="rotate(180 50 50) translate(0 -10)"><animate attributeName="opacity" from="1" to="0" dur="0.5s" begin="0.25s" repeatCount="indefinite"></animate></rect> <rect x="48.5" y="47" width="3" height="6" rx="0" ry="0" fill="#ffffff" transform="rotate(225 50 50) translate(0 -10)"><animate attributeName="opacity" from="1" to="0" dur="0.5s" begin="0.3125s" repeatCount="indefinite"></animate></rect> <rect x="48.5" y="47" width="3" height="6" rx="0" ry="0" fill="#ffffff" transform="rotate(270 50 50) translate(0 -10)"><animate attributeName="opacity" from="1" to="0" dur="0.5s" begin="0.375s" repeatCount="indefinite"></animate></rect> <rect x="48.5" y="47" width="3" height="6" rx="0" ry="0" fill="#ffffff" transform="rotate(315 50 50) translate(0 -10)"><animate attributeName="opacity" from="1" to="0" dur="0.5s" begin="0.4375s" repeatCount="indefinite"></animate></rect> </svg> </div> </div>', 'rg-loading .overlay { position: absolute; width: 100%; height: 100%; top: 0; right: 0; bottom: 0; left: 0; background-color: rgba(0, 0, 0, 0.8); z-index: 200; } rg-loading .loading { position: absolute; width: 95%; max-width: 420px; top: 50%; left: 50%; -webkit-transform: translate3d(-50%, -50%, 0); -moz-transform: translate3d(-50%, -50%, 0); -ms-transform: translate3d(-50%, -50%, 0); -o-transform: translate3d(-50%, -50%, 0); transform: translate3d(-50%, -50%, 0); background-color: transparent; color: #fff; text-align: center; z-index: 201; }', function(opts) {


});
riot.tag('rg-markdown', '<div class="markdown"></div>', function(opts) {
		var _this = this;
		var reader = new commonmark.Parser();
		var writer = new commonmark.HtmlRenderer();

		var parsed = reader.parse(opts.content);
		_this.root.innerHTML = writer.render(parsed);
	
});
riot.tag('rg-modal', '<div class="overlay" if="{ opts.modal.visible }" onclick="{ close }"></div> <div class="modal" if="{ opts.modal.visible }"> <header class="header"> <button type="button" class="close" aria-label="Close" onclick="{ close }"> <span aria-hidden="true">&times;</span> </button> <h3 class="heading">{ opts.modal.heading }</h3> </header> <div class="body"> <yield></yield> </div> <footer class="footer"> <button class="button" each="{ opts.modal.buttons }" type="button" onclick="{ action }" riot-style="{ style }"> { text } </button> </footer> </div>', 'rg-modal .overlay { position: fixed; width: 100%; height: 100%; top: 0; right: 0; bottom: 0; left: 0; background-color: rgba(0, 0, 0, 0.5); z-index: 100; } rg-modal .modal { position: fixed; width: 95%; max-width: 420px; top: 50%; left: 50%; -webkit-transform: translate3d(-50%, -75%, 0); -moz-transform: translate3d(-50%, -75%, 0); -ms-transform: translate3d(-50%, -75%, 0); -o-transform: translate3d(-50%, -75%, 0); transform: translate3d(-50%, -75%, 0); background-color: white; color: #252519; z-index: 101; } rg-modal .header { position: relative; text-align: center; } rg-modal .heading { padding: 20px 20px 0 20px; margin: 0; font-size: 18px; } rg-modal .close { position: absolute; top: 5px; right: 5px; padding: 0; height: 20px; width: 20px; line-height: 20px; font-size: 20px; border: 0; background-color: transparent; color: #ef424d; cursor: pointer; outline: none; } rg-modal .body { padding: 20px; } rg-modal .footer { padding: 0 20px 20px 20px; } rg-modal .footer .button { padding: 10px; margin: 0 5px 0 0; border: none; text-transform: uppercase; cursor: pointer; outline: none; background-color: white; }', function (opts) {
	var _this = this;
	_this.close = function (e) {
		opts.modal.visible = false;
		if (opts.modal.onclose) {
			opts.modal.onclose(e);
		}
	};
	
});
riot.tag('rg-sidemenu', '<div class="overlay { expanded: opts.sidemenu.expanded }" onclick="{ close }"></div> <div class="sidemenu { expanded: opts.sidemenu.expanded }"> <h4 class="header">{ opts.sidemenu.header }</h4> <ul class="items"> <li class="item" each="{ opts.sidemenu.items }" onclick="{ action }"> { text } </li> </ul> <div class="body"> <yield></yield> </div> </div>', 'rg-sidemenu .overlay { position: fixed; top: 0; left: -100%; right: 0; bottom: 0; width: 100%; height: 100%; background-color: transparent; cursor: pointer; -webkit-transition: background-color 0.8s ease; -moz-transition: background-color 0.8s ease; -ms-transition: background-color 0.8s ease; -o-transition: background-color 0.8s ease; transition: background-color 0.8s ease; z-index: 50; } rg-sidemenu .overlay.expanded { left: 0; background-color: rgba(0, 0, 0, 0.5); } rg-sidemenu .sidemenu { position: fixed; top: 0; left: 0; height: 100%; width: 260px; overflow-y: auto; overflow-x: hidden; background-color: black; color: white; -webkit-transform: translate3d(-100%, 0, 0); -moz-transform: translate3d(-100%, 0, 0); -ms-transform: translate3d(-100%, 0, 0); -o-transform: translate3d(-100%, 0, 0); transform: translate3d(-100%, 0, 0); -webkit-transition: -webkit-transform 0.5s ease; -moz-transition: -moz-transform 0.5s ease; -ms-transition: -ms-transform 0.5s ease; -o-transition: -o-transform 0.5s ease; transition: transform 0.5s ease; z-index: 51; } rg-sidemenu .sidemenu.expanded { -webkit-transform: translate3d(0, 0, 0); -moz-transform: translate3d(0, 0, 0); -ms-transform: translate3d(0, 0, 0); -o-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); } rg-sidemenu .header { padding: 1.2rem; margin: 0; text-align: center; color: white; } rg-sidemenu .items { padding: 0; margin: 0; list-style: none; } rg-sidemenu .item { padding: 1rem 0.5rem; box-sizing: border-box; border-top: 1px solid #1a1a1a; color: white; } rg-sidemenu .item:last-child { border-bottom: 1px solid #1a1a1a; } rg-sidemenu .item:hover { cursor: pointer; background-color: #111; }', function(opts) {
		var _this = this;
		_this.close = function () {
			opts.sidemenu.expanded = false;
		};
	
});
riot.tag('rg-tab', '<div show="{ active }" class="tab"> <yield></yield> </div>', '.tab { padding: 10px; }', function (opts) {
	var _this = this;
	_this.active = opts.active;
	_this.disabled = opts.disabled;
	
});

riot.tag('rg-tabs', '<div class="tabs"> <div class="headers"> <div each="{ tabs }" class="header { active: active, disabled: disabled }" onclick="{ parent.activate }"> <h4 class="heading">{ opts.heading }</h4> </div> </div> <yield></yield> </div>', 'rg-tabs .tabs { background-color: white; } rg-tabs .headers { display: -webkit-flex; display: -ms-flexbox; display: flex; } rg-tabs .header { -webkit-flex: 1; -ms-flex: 1; flex: 1; box-sizing: border-box; text-align: center; cursor: pointer; box-shadow: 0 -1px 0 0 #404040 inset; } rg-tabs .heading { padding: 10px; margin: 0; } rg-tabs .header.active { background-color: #404040; } rg-tabs .header.active .heading { color: white; } rg-tabs .header.disabled .heading { color: #888; }', function (opts) {
	var _this = this;
	_this.onopen = opts.onopen;
	_this.tabs = _this.tags['rg-tab'];

	_this.tabs.forEach(function (tab, i) {
		tab.index = i;
		});

	_this.on('mount', function () {
		var activeTab = false;
		_this.tabs.forEach(function (tab) {
			if (activeTab) {
				tab.active = false;
			}
			if (tab.active) {
				activeTab = true;
			}
		});
		});

	_this.activate = function (tab) {
		tab = tab.item;
		if (!tab.disabled) {
			deselectTabs();
			if (_this.onopen) {
				_this.onopen(tab);
			}
			tab.active = true;
			_this.update();
			}
	};

	function deselectTabs() {
		_this.tabs.forEach(function (tab) {
			tab.active = false;
		});
	}
	
});
riot.tag('rg-toast', '<div class="toasts { opts.position }" if="{ opts.toasts.length > 0 }"> <div class="toast" each="{ opts.toasts }" onclick="{ parent.toastClicked }"> { text } </div> </div>', 'rg-toast .toasts { position: fixed; width: 250px; max-height: 100%; overflow-y: auto; background-color: transparent; z-index: 101; } rg-toast .toasts.topleft { top: 0; left: 0; } rg-toast .toasts.topright { top: 0; right: 0; } rg-toast .toasts.bottomleft { bottom: 0; left: 0; } rg-toast .toasts.bottomright { bottom: 0; right: 0; } rg-toast .toast { padding: 20px; margin: 20px; background-color: rgba(0, 0, 0, 0.8); color: white; font-size: 13px; cursor: pointer; }', function(opts) {

		var _this = this;

		_this.on('update', function () {
			opts.toasts.forEach(function (toast, i) {
				if (!toast.startTimer) {
					toast.startTimer = function () {
						window.setTimeout(function () {
							opts.toasts.splice(opts.toasts.indexOf(toast), 1);
							_this.update();
						}, 6000);
					};
					toast.startTimer();
				}
			});
		});

		if (!opts.position) {
			opts.position = 'topright';
		}

		_this.toastClicked = function (e) {
			if (e.item.onclick) {
				e.item.onclick(e);
			}
			opts.toasts.splice(opts.toasts.indexOf(e.item), 1);
		};

	
});
riot.tag('rg-toggle', '<div class="wrapper"> <label class="toggle"> <input type="checkbox" __checked="{ opts.toggle.checked }" onclick="{ toggle }"> <div class="track"> <div class="handle"></div> </div> </label> </div>', 'rg-toggle .wrapper { width: 60px; height: 20px; margin: 0 auto; display: block; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; } rg-toggle .toggle { position: absolute; cursor: pointer; } rg-toggle input[type=checkbox] { display: none; } rg-toggle .track { position: absolute; top: 0; bottom: 0; left: 0; right: 0; width: 60px; height: 20px; padding: 2px; background-color: #b6c0c7; -webkit-transition: background-color 0.1s linear; transition: background-color 0.1s linear; box-sizing: border-box; } rg-toggle input[type=checkbox]:checked + .track { background-color: #2db2c8; } rg-toggle .handle { position: relative; left: 0; width: 50%; height: 100%; background-color: white; -webkit-transition: transform 0.1s linear; transition: transform 0.1s linear; } rg-toggle input[type=checkbox]:checked + .track .handle { -webkit-transform: translate3d(100%, 0, 0); transform: translate3d(100%, 0, 0); }', function(opts) {

		var _this = this;
		opts.toggle = opts.toggle ? opts.toggle : {};

		_this.toggle = function (e) {
			opts.toggle.checked = !opts.toggle.checked;
			if (opts.toggle.ontoggle) {
				opts.toggle.ontoggle(e);
			}
		};

	
});
