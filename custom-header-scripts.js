(function () {
  // 1. List every page ID this block should apply to.
  //    Find the ID in the page URL, e.g. .../aid/6915892/...
  var targetIds = [
    '6996290',
    '4477510',
    '4478695',
    '4477831',
    '7012501',
    '4477899',
  ];

  // 2. Check if the current URL contains any of those IDs.
  var matches = targetIds.some(function (id) {
    return document.location.href.indexOf(id) > -1;
  });

  if (!matches) return;

  // 3. Add your CSS here.
  var style = document.createElement('style');
  style.innerHTML = `
        .cco_templateless_page #chabad_main_content {
            background: url('https://chabadqueenanne.com/media/images/1330/tcCv13308772.png') !important;
            background-size: cover !important;
            background-position: bottom !important;
        }
        .footer, .footer a {
            background-color: #c54d19 !important;
            color: white !important;
        }
        .chabad_header {
            background: url('https://chabadqueenanne.com/media/images/1330/Qojh13308783.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
            background-color: #c54d19;
        }
        .cco_templateless_page .chabad_header, .chabad_header {
            background-blend-mode: normal !important;
        }
        .chabad_header div {
            visibility: hidden;
        }
        div.chabad_left_column {
            background: transparent;
        }
        .large_banner, .sPromo-wrap {
            border: 2px solid #c54d19;
        }
        .large_banner .bannerCta button {
            background: #c54d19;
            border: 3px solid #c54d19;
        }
        .large_banner .big {
            color: #c54d19;
            font-weight: bold;
        }
        .large_banner .wrapper-message {
            margin-block: 1.5em !important;
        }
        .sPromo-wrap .caption {
            color: black !important;
        }
        .sPromo-wrap img {
            border: 0px !important;
        }
        .custom_message .message {
            color: black !important;
        }
        .custom_message .title {
            color: #c54d19 !important;
        }
        .custom_message .read-more_link a {
            color: #c54d19 !important;
            border: 3px solid #c54d19 !important;
        }
        .custom_message .read-more_link a:hover {
            background: #c54d19 !important;
            color: white !important;
        }
        .prepResource-title, .co_calendar_head div, .features_title {
            font-size: 25pt !important;
            color: #c54d19 !important;
        }
        .prep-title, .feature_caption a {
            color: #c54d19 !important;
        }
        .zmanim .zman-1, .zmanim .zman-2 {
            border-radius: 10px !important;
            background: #c54d19 !important;
            margin: 5px 0px !important;
        }
        #co_calendar div.co_calendar_body .item.item.first,
        #co_calendar div.co_calendar_body .item:nth-child(3),
        #co_calendar div.co_calendar_body .item:nth-child(6),
        #co_calendar div.co_calendar_body .item:nth-child(8) {
            background: #c54d19;
        }
        #co_calendar div.co_calendar_body .item:nth-child(2),
        #co_calendar div.co_calendar_body .item:nth-child(4),
        #co_calendar div.co_calendar_body .item:nth-child(5),
        #co_calendar div.co_calendar_body .item:nth-child(7) {
            background: #c54d19;
        }
        .footer, .footer a {
            background: #c54d19;
            color: white !important;
        }
        .cco_templateless_template a,
        .div#chabad_head .chabad_navigator_bar,
        #menu .item,
        #navigation,
        #menu a {
            background: #c54d19 !important;
        }
        #menu a {
            color: white !important;
            border: 0px !important;
        }
        .selected a {
            text-decoration: underline !important;
        }
        #menu .item {
            color: transparent !important;
        }
        .titleIcon img {
            width: 125px !important;
            display: none !important;
        }
        .co_calendar_head:before,
        .pesach-resources .titleIcon {
            display: none !important;
        }
        div#chabad_body_content {
            background: transparent !important;
        }
        .co_calendar_text {
            background-color: transparent !important;
        }

        /* Icons */
        .content-area-parent > .custom_message .title:before {
            content: '';
            background: url('https://chabadqueenanne.com/media/images/1330/DqRO13308856.png');
            display: block;
            width: 75px;
            height: 75px;
            background-size: contain;
            filter: contrast(94%);
            margin: 0 auto;
        }
        .content-area-parent > .custom_message.appeal .title:before {
            display: none;
        }
        #co_calendar:before {
            content: '';
            background: url('https://chabadqueenanne.com/media/images/1330/oEdP13308868.png');
            display: block;
            width: 75px;
            height: 75px;
            background-size: contain;
            filter: contrast(94%);
            margin: 0 auto;
        }
        .latest_features .features_title.titleIcon:before {
            content: '';
            background: url('https://chabadqueenanne.com/media/images/1330/pokp13308869.png');
            display: block;
            width: 75px;
            height: 75px;
            background-size: contain;
            filter: contrast(94%);
            margin: 0 auto;
        }

        @media all and (max-width: 500px) {
            .chabad_header {
                height: 200px !important;
            }
            .headerTitle {
                display: none;
            }
            .body.section_root .bh {
                right: 25px !important;
                color: white !important;
            }
        }
  `;
  document.head.appendChild(style);

  // 4. (Optional) Add any JS behavior here — DOM edits, removals, etc.
  //    Wrap DOM-dependent code so it waits for the page if needed:
  function run() {
    // e.g. document.querySelector('.some-element')?.remove();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();

(function () {
  // 1. List every page ID this block should apply to.
  //    Find the ID in the page URL, e.g. .../aid/6915892/...
  var targetIds = [
    '6999362',
    '6191113',
	'7002791',
	'7002850',
  ];

  // 2. Check if the current URL contains any of those IDs.
  var matches = targetIds.some(function (id) {
    return document.location.href.indexOf(id) > -1;
  });

  if (!matches) return;

  // 3. Add your CSS here.
  var style = document.createElement('style');
  style.innerHTML = `
        .cco_templateless_page #chabad_main_content {
            background: url('https://chabadqueenanne.com/media/images/1330/tcCv13308772.png') !important;
            background-size: cover !important;
            background-position: bottom !important;
        }
        .footer, .footer a {
            background-color: #28578b !important;
            color: white !important;
        }

        /* Hide the template's default generated header image */
        .chabad_header img.header-bg-img {
            display: none !important;
        }

        /* Apply your custom header background */
        #chabad_head .chabad_header {
            background-image: url('https://www.chabadqueenanne.com/media/images/1382/Ovxs13825476.png') !important;
			background-repeat: no-repeat !important;
			background-size: cover !important;
			background-position: 46% center !important;
			background-color: #ede3d4 !important;
			height: clamp(360px, 32vw, 525px) !important;
		}
        .cco_templateless_page .chabad_header, .chabad_header {
            background-blend-mode: normal !important;
        }
        .chabad_header div {
            visibility: hidden;
        }
        div.chabad_left_column {
            background: transparent;
        }
        .large_banner, .sPromo-wrap {
            border: 2px solid #28578b;
        }
        .large_banner .bannerCta button {
            background: #28578b;
            border: 3px solid #28578b;
        }
        .large_banner .big {
            color: #28578b;
            font-weight: bold;
        }
        .large_banner .wrapper-message {
            margin-block: 1.5em !important;
        }
        .sPromo-wrap .caption {
            color: black !important;
        }
        .sPromo-wrap img {
            border: 0px !important;
        }
        .custom_message .message {
            color: black !important;
        }
        .custom_message .title {
            color: #28578b !important;
        }
        .custom_message .read-more_link a {
            color: #28578b !important;
            border: 3px solid #28578b !important;
        }
        .custom_message .read-more_link a:hover {
            background: #28578b !important;
            color: white !important;
        }
        .prepResource-title, .co_calendar_head div, .features_title {
            font-size: 25pt !important;
            color: #28578b !important;
        }
        .prep-title, .feature_caption a {
            color: #28578b !important;
        }
        .zmanim .zman-1, .zmanim .zman-2 {
            border-radius: 10px !important;
            background: #28578b !important;
            margin: 5px 0px !important;
        }
        #co_calendar div.co_calendar_body .item.item.first,
        #co_calendar div.co_calendar_body .item:nth-child(3),
        #co_calendar div.co_calendar_body .item:nth-child(6),
        #co_calendar div.co_calendar_body .item:nth-child(8) {
            background: #28578b;
        }
        #co_calendar div.co_calendar_body .item:nth-child(2),
        #co_calendar div.co_calendar_body .item:nth-child(4),
        #co_calendar div.co_calendar_body .item:nth-child(5),
        #co_calendar div.co_calendar_body .item:nth-child(7) {
            background: #28578b;
        }
        .footer, .footer a {
            background: #28578b;
            color: white !important;
        }
        .cco_templateless_template a,
        .div#chabad_head .chabad_navigator_bar,
        #menu .item,
        #navigation,
        #menu a {
            background: #28578b !important;
        }
        #menu a {
            color: white !important;
            border: 0px !important;
        }
        .selected a {
            text-decoration: underline !important;
        }
        #menu .item {
            color: transparent !important;
        }
        .titleIcon img {
            width: 125px !important;
            display: none !important;
        }
        .co_calendar_head:before,
        .pesach-resources .titleIcon {
            display: none !important;
        }
        div#chabad_body_content {
            background: transparent !important;
        }
        .co_calendar_text {
            background-color: transparent !important;
        }

        /* Icons */
        .content-area-parent > .custom_message .title:before {
            content: '';
            background: url('https://chabadqueenanne.com/media/images/1331/esQg13310306.png');
            display: block;
            width: 75px;
            height: 75px;
            background-size: contain;
            filter: contrast(94%);
            margin: 0 auto;
        }
        .content-area-parent > .custom_message.appeal .title:before {
            display: none;
        }
        #co_calendar:before {
            content: '';
            background: url('https://chabadqueenanne.com/media/images/1331/Vkhp13310307.png');
            display: block;
            width: 75px;
            height: 75px;
            background-size: contain;
            filter: contrast(94%);
            margin: 0 auto;
        }
        .latest_features .features_title.titleIcon:before {
            content: '';
            background: url('https://chabadqueenanne.com/media/images/1331/Xouo13310308.png');
            display: block;
            width: 75px;
            height: 75px;
            background-size: contain;
            filter: contrast(94%);
            margin: 0 auto;
        }

        @media all and (max-width: 500px) {
            .chabad_header {
                height: 200px !important;
            }
            .headerTitle {
                display: none;
            }
            .body.section_root .bh {
                right: 25px !important;
                color: white !important;
            }
        }
  `;
  document.head.appendChild(style);

  // 4. (Optional) Add any JS behavior here — DOM edits, removals, etc.
  //    Wrap DOM-dependent code so it waits for the page if needed:
  function run() {
    // e.g. document.querySelector('.some-element')?.remove();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();

(function () {

    const targetIds = ['7282302', '7285790', '7288004'];
    const currentUrl = window.location.href;

    const shouldApplyStyle = targetIds.some(id => currentUrl.includes(id));

    if (!shouldApplyStyle) return;

    // FIX: previously wrapped in a `document.addEventListener('DOMContentLoaded', ...)`
    // callback that could register AFTER the DOMContentLoaded event had already fired
    // (common when this script is injected after page load), so the style was never
    // applied. Style-tag injection into <head> doesn't need to wait for the DOM to be
    // "ready" anyway, so the listener has been removed entirely.
    const style = document.createElement('style');

    style.textContent = `
    /* Seder RSVP */
    #ContentBody {
        background: #F5F5DC;
        padding: 40px;
        border-radius: 15px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        max-width: 900px;
        margin: 20px auto;
    }
    `;

    document.head.appendChild(style);

})();



if (document.location.href.indexOf('7282299') > -1) {

const style = document.createElement('style');
style.innerHTML = `

/* FIRST ICON */
.content-area-parent > .custom_message .title:before {
    content:'';
    background:url('https://chabadqueenanne.com/media/images/1361/enkL13616825.png');
    display:block;
    width:75px;
    height:75px;
    background-size:contain;
    margin:0 auto;
}

/* HIDE ICON FOR APPEAL MESSAGES */
.content-area-parent > .custom_message.appeal .title:before {
    display:none;
}

/* CALENDAR ICON */
.content-area-parent > .zmanim .prepResource-title:before {
    content:'';
    background:url('https://chabadqueenanne.com/media/images/1361/TDOB13616808.png');
    display:block;
    width:75px;
    height:75px;
    background-size:contain;
    margin:0 auto;
}

/* LATEST FEATURES ICON */
.latest_features .features_title.titleIcon:before {
    content:'';
    background:url('https://chabadqueenanne.com/media/images/1361/LXIc13616800.png');
    display:block;
    width:75px;
    height:75px;
    background-size:contain;
    margin:0 auto;
}

`;
document.head.appendChild(style);

}

(function() {
    // 1. Define the list of IDs
    const targetIds = ['7282299', '7282300', '7282301', '7282302','7285790', '7288004'];
    
    // 2. Check if the URL contains any of those IDs
    const matchesId = targetIds.some(id => document.location.href.indexOf(id) > -1);

    if (matchesId) {
        const style = document.createElement('style');
        style.innerHTML = `

        /* MAIN BACKGROUND */
        .cco_templateless_page #chabad_main_content {
            background:url('https://chabadqueenanne.com/media/images/1361/vFow13616793.png') !important;
            background-size:cover !important;
            background-position:bottom !important;
        }

        #chabad_header, .chabad_header, #chabad_head, .chabad_header_bg, .chabad_header_image {
            background: url('https://chabadqueenanne.com/media/images/1361/pCiU13616851.png') no-repeat center center !important;
            background-size: 100% 100% !important;
        }

        .cco_templateless_page .chabad_header, .chabad_header {
            background-blend-mode: normal !important;
        }

        .chabad_header div { visibility:hidden; }
        div.chabad_left_column { background:transparent; }

        /* BANNERS */
        .large_banner, .sPromo-wrap { border:2px solid #e7be54; }
        .large_banner .bannerCta button { background:#e7be54; border:3px solid #e7be54; color: #000; }
        .large_banner .big { color:#000000; font-weight:bold; }
        .large_banner .wrapper-message { margin-block:1.5em !important; }

        .sPromo-wrap .caption { color:#cab994 !important; background:white; font-weight:bold; }
        .sPromo-wrap img { border:0px !important; }

        /* CUSTOM MESSAGE */
        .custom_message .message { color:white !important; }
        .custom_message .title { color:#f4e0a4 !important; }
        .custom_message .read-more_link a { 
            color:white !important; 
            border:3px solid #e7be54 !important; 
        }
        .custom_message .read-more_link a:hover { background:#e7be54 !important; color:black !important; }

        /* TITLES */
        .prepResource-title, .co_calendar_head div, .features_title { 
            font-size:25pt !important; 
            color:#f4e0a4 !important; 
        }
        .prep-title, .feature_caption a { color:white !important; }

        .article-header__title  {
            color: #f4df9c !important;
        }

        /* ZMANIM */
        .zman-1, .zman-2 {
            background: #bea86e !important;
            border-radius: 10px !important;
            margin: 5px 0 !important;
            padding: 10px;
        }
        .zman-1 *, .zman-2 * { color: #000000 !important; }
        .zman-icon { display: none !important; }

        /* CALENDAR BODY - Combined selectors for efficiency */
        #co_calendar div.co_calendar_body .item {
            background:#f4e0a4 !important;
        }

        /* FOOTER */
        .footer, .footer a { background:#bea86e; color:black!important; }

        /* MENU */
        .cco_templateless_template a, #chabad_head .chabad_navigator_bar, #menu .item, #navigation, #menu a {
            background:#e7be54 !important;
        }
        #menu a { color:black !important; border:0px !important; }
        .selected a { text-decoration:underline !important; }
        #menu .item { color:transparent !important; }

        /* UI CLEANUP */
        .titleIcon img, .co_calendar_head:before, .pesach-resources .titleIcon { 
            display:none !important; 
        }
        div#chabad_body_content { background:transparent !important; }

        /* MOBILE */
        @media all and (max-width:500px) {
            .chabad_header { height:200px !important; }
            .headerTitle { display:none; }
            .body.section_root .bh { right:25px !important; color:white !important; }
        }

        /* CALENDAR TEXT */
        .co_calendar_gradient .co_date, .co_calendar_gradient .co_title_calendar, .co_calendar_gradient .co_text_calendar, .co_calendar_gradient a {
            color: black !important;
        }
        `;
        document.head.appendChild(style);
    }
})();
