var folders = document.querySelectorAll(".windows-folder-lists .windows-folder-list");
var updatefoldernum = document.querySelector(".folder-number-count");
if(folders.length > 1) {
    updatefoldernum.innerHTML = folders.length+' items';
} else {
    updatefoldernum.innerHTML = folders.length+' item';
}
window.addEventListener("load", function () {
	const loader = document.querySelector(".loaderx");
	loader.className += " hidden"; // class "loader hidden"
});
var winheight = document.querySelector('.windows-header');
var mainwindows = document.querySelector('.main-windows');
var winbody = document.querySelector('.windows-body');
var winheight_and_mainwin = mainwindows.offsetHeight - winheight.offsetHeight;
winbody.style.height = winheight_and_mainwin+'px';
var windowsdesktop = document.querySelector('.windows10-desktop-area').offsetHeight
var taskbar = document.querySelector('.windows10-taskbar').offsetHeight
var notificationbar = document.querySelector('.windows10-notification-panel')
var notification_height = windowsdesktop - taskbar;
notificationbar.style.height = notification_height+'px';
// sIGN IN
$(document).on('click', '.windows_login .login_user .login_user_step1 button', function() {
	$(".windows_login").addClass('active_st1');
});
$(document).on('click', '.ins_process1 button', function() {
	$(".windows_install").addClass('ins_d1');
});
$(document).on('click', '.ins_process2 button', function() {
	$(".windows_install").addClass('ins_d2');
	$(".windows_install").removeClass('ins_d1');
});
$(document).on('click', '.ins_process3 button', function() {
	$(".windows_install").addClass('ins_d3');
	$(".windows_install").removeClass('ins_d1');
	$(".windows_install").removeClass('ins_d2');
});
$(document).on('click', '.ins_process4 button', function() {
	$(".windows_install").addClass('ins_d4');
	$(".windows_install").removeClass('ins_d1');
	$(".windows_install").removeClass('ins_d2');
	$(".windows_install").removeClass('ins_d3');
});
$(document).on('click', '.ins_process5 button', function() {
	$(".windows_install").removeClass('ins_d4');
	$(".windows_install").removeClass('ins_d1');
	$(".windows_install").removeClass('ins_d2');
	$(".windows_install").removeClass('ins_d3');
	$(".windows_install").addClass('ins_d5');

});
// Taskbar Apps **********************************
// File explorer
$(document).on('click', '.taskbar-icon-folder-explore,.start_menu_explorer_button,.explorer_search_icon', function() {
	$("body").addClass('file-explore-active');
	$(".main-windows").toggleClass('active');
	$(".taskbar-icon-folder-explore").toggleClass('active');
});
$(document).on('dblclick', '.file-explorer_desktop', function() {
	$("body").addClass('file-explore-active');
	$(".main-windows").addClass('active');
	$(".taskbar-icon-folder-explore").addClass('active');
});
$(document).on('click', '.main-windows .windows-minimize-btn', function() {
	$(".main-windows").removeClass('active');
	$(".taskbar-icon-folder-explore").removeClass('active')
});
$(document).on('click', '.main-windows .windows-maximize-btn', function() {
	$(".main-windows").addClass('maximized');
});
$(document).on('click', '.main-windows .windows-close-btn', function() {
	$("body").removeClass('file-explore-active');
	$(".main-windows").removeClass('active');
	$(".taskbar-icon-folder-explore").removeClass('active')
});
// SNIPPING TOOL
$(document).on('click', '.taskbar_icon_snipping_tool,.start_menu_snipping-tool,.stool_search_icon', function() {
	$("body").addClass('snipping_tool-active');
	$(".snipping_tool").toggleClass('active');
	$(".taskbar_icon_snipping_tool").toggleClass('active');
});
$(document).on('dblclick', '.snipping_tool-desktop-icon', function() {
	$("body").addClass('snipping_tool-active');
	$(".snipping_tool").addClass('active');
	$(".taskbar_icon_snipping_tool").addClass('active');
});
$(document).on('click', '.snipping_tool .window10_bing_topbar .minimize_button', function() {
	$(".snipping_tool").removeClass('active');
	$(".taskbar_icon_snipping_tool").removeClass('active')
});
$(document).on('click', '.snipping_tool .window10_bing_topbar .close_button', function() {
	$("body").removeClass('snipping_tool-active');
	$(".snipping_tool").removeClass('active');
	$(".taskbar_icon_snipping_tool").removeClass('active')
});
// Info
$(document).on('click', '.info_button,.about_desktop-icons', function() {
	$("body").addClass('info-active');
	$(".windows_22_about").toggleClass('active');
	$(".info_button").toggleClass('active');
});
$(document).on('click', '.windows_22_about button', function() {
	$("body").removeClass('info-active');
	$(".windows_22_about").removeClass('active');
	$(".info_button").removeClass('active')
});
// Taskbar settings
$(document).on('click', '.taskbar-icon-taskbar,.settings_start_menu,.settings_search_icon', function() {
	$("body").addClass('taskbar_settings-active');
	$(".taskbar_settings").toggleClass('active');
	$(".taskbar-icon-taskbar").toggleClass('active');
});
$(document).on('dblclick', '.settings_desktop_icon', function() {
	$("body").addClass('taskbar_settings-active');
	$(".taskbar_settings").addClass('active');
	$(".taskbar-icon-taskbar").addClass('active');
});
$(document).on('click', '.taskbar_settings-topbar_right', function() {
	$(".taskbar_settings").removeClass('active');
	$(".taskbar-icon-taskbar").removeClass('active')
	$("body").removeClass('taskbar_settings-active');
});
// Taskbar templete
$(document).on('click', '.taskbar_setting_temp_center', function() {
	$("body").addClass('taskbar_setting_center');
	$("body").removeClass('taskbar_setting_half_center');
	$("body").removeClass('taskbar_setting_black_normal');
	$("body").removeClass('start_menu_black_theme');
});
$(document).on('click', '.taskbar_setting_temp_normal', function() {
	$("body").removeClass('taskbar_setting_half_center');
	$("body").removeClass('taskbar_setting_center');
	$("body").removeClass('taskbar_setting_black_normal');
	$("body").removeClass('start_menu_black_theme');
});
$(document).on('click', '.taskbar_setting_temp_half_center', function() {
	$("body").addClass('taskbar_setting_half_center');
	$("body").removeClass('taskbar_setting_center');
	$("body").removeClass('taskbar_setting_black_normal');
	$("body").removeClass('start_menu_black_theme');
});
$(document).on('click', '.taskbar_setting_temp_black_normal', function() {
	$("body").addClass('taskbar_setting_black_normal');
	$("body").removeClass('taskbar_setting_half_center');
	$("body").removeClass('taskbar_setting_center');
});
$(document).on('click', '.taskbar_setting_temp_half_black', function() {
	$("body").addClass('taskbar_setting_black_normal');
	$("body").addClass('taskbar_setting_half_center');
	$("body").removeClass('taskbar_setting_center');
});
$(document).on('click', '.taskbar_setting_temp_full_black', function() {
	$("body").addClass('taskbar_setting_center');
	$("body").addClass('taskbar_setting_black_normal');
	$("body").removeClass('taskbar_setting_half_center');
});
// Notification Panel
$(document).on('click','#cmenu', function() {
	$('.windows10-notification-panel').removeClass('active');
})
$(document).on('click', '.taskbar-notification', function() {
	$('.windows10-notification-panel').toggleClass('active');
	$(this).toggleClass('active');
})
// Quick setting change color on click
$(document).on('click', '.quick-item-div .quick-item', function() {
	$(".quick-item-div").addClass('quick-item_blue');
});
// Chrome browser
var url_input = $("#url_input");
$(document).on('click', '.submit-browser-url', function(e) {
	e.preventDefault();
	var input_submit_url = url_input.val();
	document.getElementById('url_output').src = input_submit_url
});
$(document).on('click', '.go-to-home', function() {
	url_input.val('https://')
	document.getElementById('url_output').src = 'https://www.google.com/webhp?igu=1';
});
$(document).on('click', '.taskbar-icon-chrome,.start_menu_chrome,.chrome_search_icon', function() {
	$("body").addClass('chrome-browser-active');
	$(".chrome-browser-area").toggleClass('active');
	$(".taskbar-icon-chrome").addClass('active');
});
$(document).on('dblclick', '.chrome_desktop-icon', function() {
	$("body").addClass('chrome-browser-active');
	$(".chrome-browser-area").toggleClass('active');
	$(".taskbar-icon-chrome").addClass('active');
});
$(document).on('click', '.chrome-browser-area .windows-minimize-btn', function() {
	$(".chrome-browser-area").removeClass('active');
	$(".taskbar-icon-chrome").removeClass('active')
});
$(document).on('click', '.chrome-browser-area .windows-close-btn', function() {
	$("body").removeClass('chrome-browser-active');
	$(".chrome-browser-area").removeClass('active');
	$(".taskbar-icon-chrome").removeClass('active')
});
// Windows10 Start Bar
$('body').on('click', function() {
	$(".start-menu").removeClass('active');
});
$(document).on('click', '.taskbar-window-icon', function() {
	$(".start-menu").addClass('active');
});
$('body').on('click', function() {
	$(".taskbar-search").removeClass('active');
});
$(document).on('click', '.taskbar-search-icon', function() {
	$(".taskbar-search").addClass('active');
});
$('body').on('click', function() {
	$("#widget-section").removeClass('active');
});
$(document).on('click', '.taskbar-widget-icon', function() {
	$("#widget-section").addClass('active');
});
// Shut down windows
$('body').on('click', function() {
	$("#spegni-section").removeClass('active');
});
$(document).on('click', '.start_bottom-svg-div', function(){
	alert('Click Ok or press Enter to Shut down Windows 11. \n Then click any-where to Login. \n Thank you (Abdul-Rehman).');
	$("#spegni-section").addClass('active');
});
// Dragable
window.onload = function() {
    initDragElement();
    initResizeElement();
	chromeinitDragElement();
};
function chromeinitDragElement() {
	var pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
	var popups = document.getElementsByClassName("chrome-browser-area");
	var elmnt = null;
	var currentZIndex = 100; //TODO reset z index when a threshold is passed

	for (var i = 0; i < popups.length; i++) {
		var popup = popups[i];
		var header = getHeader(popup);

		popup.onmousedown = function() {
		this.style.zIndex = "" + ++currentZIndex;
		};

		if (header) {
		header.parentPopup = popup;
		header.onmousedown = dragMouseDown;
		}
	}

	function dragMouseDown(e) {
		elmnt = this.parentPopup;
		elmnt.style.zIndex = "" + ++currentZIndex;

		e = e || window.event;
		// get the mouse cursor position at startup:
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = closeDragElement;
		// call a function whenever the cursor moves:
		document.onmousemove = elementDrag;
	}

	function elementDrag(e) {
		if (!elmnt) {
		return;
		}

		e = e || window.event;
		// calculate the new cursor position:
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		// set the element's new position:
		elmnt.style.top = elmnt.offsetTop - pos2 + "px";
		elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
	}

	function closeDragElement() {
		/* stop moving when mouse button is released:*/
		document.onmouseup = null;
		document.onmousemove = null;
	}

	function getHeader(element) {
		var headerItems = element.getElementsByClassName("chrome-browser-drag");

		if (headerItems.length === 1) {
		return headerItems[0];
		}

		return null;
	}
}


// File explorer dragable

  function initDragElement() {
    var pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
    var popups = document.getElementsByClassName("main-windows");
    var elmnt = null;
    var currentZIndex = 100; //TODO reset z index when a threshold is passed
  
    for (var i = 0; i < popups.length; i++) {
      var popup = popups[i];
      var header = getHeader(popup);
  
      popup.onmousedown = function() {
        this.style.zIndex = "" + ++currentZIndex;
      };
  
      if (header) {
        header.parentPopup = popup;
        header.onmousedown = dragMouseDown;
      }
    }
  
    function dragMouseDown(e) {
      elmnt = this.parentPopup;
      elmnt.style.zIndex = "" + ++currentZIndex;
  
      e = e || window.event;
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
	  console.log(pos3 + ' ' + pos4);
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      if (!elmnt) {
        return;
      }
  
      e = e || window.event;
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
	  console.log(pos3 + ' ' + pos4);
      // set the element's new position:
      elmnt.style.top = elmnt.offsetTop - pos2 + "px";
      elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    }
  
    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
  
    function getHeader(element) {
      var headerItems = element.getElementsByClassName("drag-window");
  
      if (headerItems.length === 1) {
        return headerItems[0];
      }
  
      return null;
    }
  }
// Resizer
  function initResizeElement() {
    var popups = document.getElementsByClassName("main-windows");
    var element = null;
    var startX, startY, startWidth, startHeight;
  
    for (var i = 0; i < popups.length; i++) {
      var p = popups[i];
  
      var right = document.createElement("div");
      right.className = "resizer-right";
      p.appendChild(right);
      right.addEventListener("mousedown", initDrag, false);
      right.parentPopup = p;
  
      var bottom = document.createElement("div");
      bottom.className = "resizer-bottom";
      p.appendChild(bottom);
      bottom.addEventListener("mousedown", initDrag, false);
      bottom.parentPopup = p;
  
      var both = document.createElement("div");
      both.className = "resizer-both";
      p.appendChild(both);
      both.addEventListener("mousedown", initDrag, false);
      both.parentPopup = p;
    }
  
    function initDrag(e) {
      element = this.parentPopup;
  
      startX = e.clientX;
      startY = e.clientY;
      startWidth = parseInt(
        document.defaultView.getComputedStyle(element).width,
        10
      );
      startHeight = parseInt(
        document.defaultView.getComputedStyle(element).height,
        10
      );
      document.documentElement.addEventListener("mousemove", doDrag, false);
      document.documentElement.addEventListener("mouseup", stopDrag, false);
    }
  
    function doDrag(e) {
      element.style.width = startWidth + e.clientX - startX + "px";
      element.style.height = startHeight + e.clientY - startY + "px";
    }
  
    function stopDrag() {
      document.documentElement.removeEventListener("mousemove", doDrag, false);
      document.documentElement.removeEventListener("mouseup", stopDrag, false);
    }
  }
  



//  Current Date Time
var datefield = document.querySelector(".tody-date")
var timefield = document.querySelector(".tody-time")
var startbar_dayname = document.querySelector(".date-day-name");
var startbar_day = document.querySelector(".date-day");
const dayNames = [
	"Saturday", "Sunday", "Monday", "Tuesday", "Wednersday", "Tursday", "Friday"
];
var today = new Date();
startbar_dayname.innerHTML = dayNames[today.getDate()];
startbar_day.innerHTML = today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dd = String(today.getDate()).padStart(2, '');
var mm = String(today.getMonth() + 1).padStart(2, ''); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
datefield.innerHTML = today;


function getDateTime() {
	var now     = new Date();
	var hour    = now.getHours();
	var minute  = now.getMinutes();
	var ampm = hour >= 12 ? 'pm' : 'am';
	hour = hour % 12;
	hour = hour ? hour : 12; // the hour '0' should be '12'
	if(hour.toString().length == 1) {
		 hour = ''+hour;
	}
	if(minute.toString().length == 1) {
		 minute = '0'+minute;
	} 
	var dateTime = hour+':'+minute+' ' + ampm;   
	 return dateTime;
}
// example usage: realtime clock
setInterval(function(){
	currentTime = getDateTime();
	timefield.innerHTML = currentTime;
}, 1000);

// Browser Right Click Menu
var menu;

var cmen = [
	{
		"icon": "<img src='../icons/view.png'>",
		"text": "View",
		"sub": [
			
			{
				"text": "<li class='context_menu2-li large_desktop-icons'>Large icons</li>"
			},
			{
				"text": "<li class='context_menu2-li medium_desktop-icons'>Medium icons</li>"
			},
			{
				"text": "<li class='context_menu2-li small_desktop-icons'>Small icons</li>"
			},
		]
	},
	{
		"icon": "<img src='../icons/sort.png'>",
		"text": "Sort by",
		"sub": [
			{
				"text": "Name"
			},
			{
				"text": "Item type"
			},
			{
				"text": "Date modified"
			}
		]
	},
	{
		"icon": "<img src='../icons/refresh.png'>",
		"text": "<li class='context_menu2-li refresh_desktop-icons'>Refresh</li>",
	},
	{
		"type": ContextMenu.DIVIDER
	},
	{
		"text": "Next desktop background",
	},
	{
		"text": "Undo Delete",
	},
	{
		"icon": "<img src='../icons/new.png'>",
		"text": "New item",
		"sub": [
			{
				"text": "Folder",
			},
			{
				"text": "Shortcut",
			},
			{
				"type": ContextMenu.DIVIDER
			},
			{
				"text": "Text Document",
			},
		]
	},
	{
		"type": ContextMenu.DIVIDER
	},
	{
		"icon": "<img src='../icons/display.png'>",
		"text": "<li class='context_menu2-li settings1_desktop-icons'>Display settings</li>",
	},
	{
		"icon": "<img src='../icons/personalize.png'>",
		"text": "<li class='context_menu2-li settings2_desktop-icons'>Personalize</li>",
	},
	{
		"type": ContextMenu.DIVIDER
	},
	{
		"icon": "<img src='../icons/terminal.png'>",
		"text": "<li class='context_menu2-li terminal_desktop-icons'>Open in Windows Terminal</li>",
	},
	{
		"icon": "<img src='../icons/info.png'>",
		"text": "<li class='context_menu2-li about_desktop-icons'>About Windows</li>",
	},
	{
		"type": ContextMenu.DIVIDER
	},
	{
		"icon": "<img src='../icons/more.png'>",
		"text": "Show more options",
	},
];
window.addEventListener("load", function(){
	menu = new ContextMenu(cmen);

	document.getElementById('cmenu').addEventListener("contextmenu", function(e){
		menu.display(e);
	});
});
// Taskbar Right-click menu
var taskbarRMenu;

var taskbar_cmen = [
	{
		"text": "Toolbars",
		"sub": [
			{
				"text": "Address"
			},
			{
				"text": "Links"
			},
			{
				"text": "Desktop"
			},
			{
				"type": ContextMenu.DIVIDER
			},
			{
				"text": "New toolbar..."
			},
		]
	},
	{
		"type": ContextMenu.DIVIDER
	},
	{
		"text": "Search",
		"sub": [
			{
				"text": "Hidden"
			},
			{
				"text": "Show search icon",
			},
			{
				"text": "Show search box",
				"icon": "<i class='la la-check'></i>"
			},
		]
	},
	{
		"type": ContextMenu.DIVIDER
	},
	{
		"text": "Show Cartana button",
		"icon": "<i class='la la-check'></i>"
	},
	{
		"type": ContextMenu.DIVIDER
	},
	{
		"text": "Show the desktop",
	},
	{
		"type": ContextMenu.DIVIDER
	},
	{
		"text": "Taskbar settings",
		"icon": "<i class='la la-cog'></i>"
	},
];

window.addEventListener("load", function(){
	taskbarRMenu = new ContextMenu(taskbar_cmen);

	document.querySelector('#windows10-taskbar').addEventListener("contextmenu", function(e){
		taskbarRMenu.display(e);
	});
});

// Desktop icons right click
var taskbarRMen;

var desktop_icons_menu = [
	{
		"text": "<li class='context_menu2-li open_desktop-icons'>Open</li>",
	},
	{
		"type": ContextMenu.DIVIDER
	},
	{
		"text": "Open file location",
	},
	{
		"icon": "<img src='../icons/shield.png'>",
		"text": "Run as Administration",
	},
	{
		"type": ContextMenu.DIVIDER
	},
	{
		"text": "Unpin from start",
	},
	{
		"text": "Pin to taskbar",
	},
	{
		"text": "Delete shortcut",
	},
	{
		"text": "Delete",
	},
	{
		"text": "Rename",
	},
	{
		"text": "Properties",
	}
];

window.addEventListener("load", function(){
	taskbarRMen = new ContextMenu(desktop_icons_menu);

	document.querySelector('.desk_application').addEventListener("contextmenu", function(e){
		taskbarRMen.display(e);
	});
});

// Desktop context menu
$(document).on('click', '.large_desktop-icons', function() {
	$("body").addClass('large_desktop_icons');
	$("body").removeClass('small_desktop_icons');
});

$(document).on('click', '.medium_desktop-icons', function() {
	$("body").removeClass('small_desktop_icons');
	$("body").removeClass('large_desktop_icons');
});

$(document).on('click', '.small_desktop-icons', function() {
	$("body").addClass('small_desktop_icons');
	$("body").removeClass('large_desktop_icons');
});

$(document).on('mousedown', '.refresh_desktop-icons', function() {
	$("body").addClass('refresh_desktop_icons');
});

$(document).on('mouseup', '.refresh_desktop-icons', function() {
	$("body").removeClass('refresh_desktop_icons');
});

$('body').on('click', function() {
	$(".list_desk-app").removeClass('active');
});

$(document).on('click', '.open_desktop-icons', function() {
	$(".list_desk-app").addClass('active');
});