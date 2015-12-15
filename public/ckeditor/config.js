/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	
	// %REMOVE_START%
	// The configuration options below are needed when running CKEditor from source files.

	config.plugins = 'dialogui,' +
 						'dialog,' +
 							 'a11yhelp,' +
	 'about,' +
	 'ajax,' +
	 'autocorrect,' +
	 'autoembed,' +
	 'autolink,' +
	 'base64image,' +
	 'basewidget,' +
	 'basicstyles,' +
	 'bidi,' +
	 'blockquote,' +
	 'button,' +
	 'cavacnote,' +
	 'ccmsacdc,' +
	 'ccmsconfighelper,' +
	 'chart,' +
	 'ckeditor-gwf-plugin,' +
	 'ckwebspeech,' +
	 'clipboard,' +
	 'closebtn,' +
	 'colorbutton,' +
	 'colordialog,' +
	 'confighelper,' +
	 'contextmenu,' +
	 'custimage,' +
	 'devtools,' +
	 'dialogadvtab,' +
	 //'div,' +
	 'docprops,' +
	 'dropdownmenumanager,' +
	 //'elementspath,' +
	 'embed,' +
	 'embedbase,' +
	 'embedsemantic,' +
	 'enterkey,' +
	 'entities,' +
	 'extraformattributes,' +
	 'fakeobjects,' +
	 'filebrowser,' +
	 'filetools,' +
	 'find,' +
	 'fixed,' +
	 //'flash,' +
	 'floating-tools,' +
	 'floatingspace,' +
	 'floatpanel,' +
	 'font,' +
	 'footnotes,' +
	 'format,' +
	 'forms,' +
	 'horizontalrule,' +
	 'htmlbuttons,' +
	 'htmlwriter,' +
	 'iframe,' +
	 'iframedialog,' +
	 'image,' +
	 'image2,' +
	 'imagebrowser,' +
	 'imageresize,' +
	 'imgbrowse,' +
	 'indent,' +
	 'indentblock,' +
	 'indentlist,' +
	 'inlinecancel,' +
	 'insertpre,' +
	 'justify,' +
	 'language,' +
	 'layoutmanager,' +
	 'lightbox,' +
	 'lineheight,' +
	 'lineutils,' +
	 'link,' +
	 'list,' +
	 'listblock,' +
	 'liststyle,' +
	 //'lite,' +
	 'magicline,' +
	 //'maximize,' +
	 'menu,' +
	 'menubutton,' +
	 'newpage,' +
	 'notification,' +
	 'notificationaggregator,' +
	 'oembed,' +
	 'page2images,' +
	 'pagebreak,' +
	 'panel,' +
	 'panelbutton,' +
	 'pastefromword,' +
	 'pastetext,' +
	 'performx,' +
	 'placeholder,' +
	 'popup,' +
	 'preview,' +
	 'print,' +
	 'qrc,' +
	 'quicktable,' +
	 'removeformat,' +
	 'resize,' +
	 'richcombo,' +
	 'save,' +
	 //'scayt,' +
	 'selectall,' +
	 'sharedspace,' +
	 'showblocks,' +
	 'showborders,' +
	 'simplebutton,' +
	 'slideshow,' +
	 'smiley,' +
	 'sourcearea,' +
	 'sourcedialog,' +
	 'specialchar,' +
	 'spoiler,' +
	 'strinsert,' +
	 'stylescombo,' +
	 'stylesheetparser,' +
	 'stylesheetparser-fixed,' +
	 'symbol,' +
	 'tab,' +
	 'table,' +
	 'tabletools,' +
	 'templates,' +
	 'textselection,' +
	 'textsignature,' +
	 'texttransform,' +
	 'toolbar,' +
	 //'tweetabletext,' +
	 'undo,' +
	 //'uploadcare,' +
	 'videosnapshot,' +
	 'widget,' +
	 'widgetbootstrap,' +
	 'widgetcommon,' +
	 'widgettemplatemenu,' +
	 'wsc,' +
	 'wysiwygarea,' +
	 'xml,' +
	 'zoom,' +
	 'tabbedimagebrowser';


	config.toolbarCanCollapse = true;
	config.skin = 'moono';
	// config.sharedSpaces = {
	//     top: 'navbargoldtoolbar',
	//     bottom: 'footertoolbar'
	// };
	config.allowedContent = true;
	config.line_height="0.5;0.75;1;1.1;1.2;1.3;1.4;1.5;1.6;1.7;1.8;1.9;2;2.1;2.2;2.3;2.4;2.5;3;3.5;4;4.5;5;";
	// %REMOVE_END%

	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
};
//CKEDITOR.disableAutoInline = true;
CKEDITOR.on( 'dialogDefinition', function( ev ) {
    // Take the dialog name and its definition from the event data.
    var dialogName = ev.data.name;
    var dialogDefinition = ev.data.definition;

    // Check if the definition is from the dialog window you are interested in (the "Link" dialog window).
    if ( dialogName == 'link' ) {
        // Get a reference to the "Link Info" tab.
        var infoTab = dialogDefinition.getContents( 'info' );

        // Set the default value for the URL field.
        var urlField = infoTab.get( 'url' );
        urlField[ 'default' ] = 'www.example.com';

        var protoField = infoTab.get('protocol');
        protoField['default'] = 'https://';

        var targetTab = dialogDefinition.getContents('target');
        var linkTarget = targetTab.get('linkTargetType');
        linkTarget['default'] = 'frame';
        var linkTargetName = targetTab.get('linkTargetName');
        linkTargetName['default'] = 'ibrief';



    }
});