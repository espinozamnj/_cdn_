(function() {
  // v: 8
  /*
  {
    'site': '',
    'class': '',
    'css': {
      'ins': \/*css*\/``
    }
  },
  */
  window.custom_css_vm_bank_js = [
    {
      'site': '/clarovideo.com/peru/watch/.*',
      'class': 'css-s-clarovideo',
      'css': /*css*/`
body {
  min-height: 100vh !important;
}
.player-controls-overlay-container {
  padding: 16px 20px 0px;
}
.Player {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.Player video {
  object-fit: contain;
  height: 100vh;
  margin: auto;
}
div#app {
  height: 100vh;
}
.player-controls-metadata-vod-serie p {
  width: auto;
}
.player-controls-metadata-vod-serie {
  padding: 0;
  display: none;
}
button.player-controls-round-button {
  width: 44px;
  height: 44px;
}
.player-controls-buttons-container > div:first-child > div,
.player-controls-options-container > div,
.player-controls-volume-container > div:last-child {
  width: 72px !important;
  height: inherit !important;
}
.player-controls-options-container button + span {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
}
.player-controls-volume-slider-container {
  top: -160% !important;
  padding: 7px !important;
  left: -60% !important;
}
.player-controls-buttons-container {
  padding-bottom: 16px;
}
span.player-controls-exit-button {
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  width: fit-content;
  gap: 16px;
}
span.player-controls-exit-button img {
  height: 1em;
  transform: translateY(-0.1em);
}
      `
    },
    {
      'site': '/http[s]?://www.usat.edu.pe/anuncios/index.php(.+)?',
      'class': 'css-s-usat-news',
      'css': /*css*/`
*::-webkit-scrollbar {
  width: 10px;
}
*::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.18);
  background-clip: padding-box;
  border: 2px solid rgba(0,0,0,0);
}
*::-webkit-scrollbar-thumb:hover {
  background-color: rgba(0, 0, 0, 0.22);
  border: 0px solid rgba(0,0,0,0);
}
*::-webkit-scrollbar-thumb:active {
  background-color: rgba(0, 0, 0, 0.29);
}
`
    },
    {
      'site': '/http[s]?://intranet.usat.edu.pe/campusestudiante/Default.aspx',
      'class': 'css-s-usat-login',
      'css': /*css*/`
h1.heading img {
  width: auto !important;
}
div#centeripod {
  max-width: 460px;
  min-width: 400px !important;
  border-radius: 8px;
  width: 100% !important;
}
div#loginalumni_tab input {
  padding-left: 16px;
}
a#lnkbtnIngresar1 {
  padding: 12px;
  border-radius: 4px;
  margin-top: 8px;
}
ul.nav.nav-tabs.piluku-tabs {
  display: none;
}
center {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
body,
html {
  background: #f3f3f3;
}
a#aclave {
  margin-top: 10px;
}
div > h1.heading:last-child img {
  height: 16px !important;
}
form#frmLogin {
  display: flex;
  height: 100vh;
}
@media screen and (min-height: 780px) {
  form#frmLogin {
    padding-bottom: 120px;
  }
}
    
`
    },
    {
      'site': '/http[s]?://intranet.usat.edu.pe/campusestudiante/Main.aspx[#]?',
      'class': 'css-s-usat-campus',
      'css': /*css*/`
div#divleft.left-bar::-webkit-scrollbar,
*::-webkit-scrollbar {
  width: 10px;
}
div#divleft.left-bar::-webkit-scrollbar-thumb,
*::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.18);
  background-clip: padding-box;
  border: 2px solid rgba(0, 0, 0, 0);
}
div#divleft.left-bar::-webkit-scrollbar-thumb:hover,
*::-webkit-scrollbar-thumb:hover {
  background-color: rgba(0, 0, 0, 0.22);
  border: 0px solid rgba(0, 0, 0, 0);
}
div#divleft.left-bar::-webkit-scrollbar-thumb:active,
*::-webkit-scrollbar-thumb:active {
  background-color: rgba(0, 0, 0, 0.29);
}
body {
  --alto: calc(100vh - 70px);
}
#divContent .row.grid.col-md-12 {
  overflow: auto;
  height: calc(var(--alto) - 1px);
}
.wrapper {
  min-height: var(--alto);
}
#divContent .row.grid.col-md-12 .col-md-4,
#divContent .row.grid.col-md-12 .col-md-8 {
  height: calc(var(--alto) - 8px);
  overflow: auto;
}
object#anuncio {
  height: calc(var(--alto) - 120px) !important;
  overflow: auto !important;
}
div#div_anuncio_bd {
  height: calc(var(--alto) - 81px);
  overflow-y: auto;
  overflow-x: hidden;
}
.panel.panel-piluku {
  margin: 0;
}
div#divleft {
  overflow-y: auto !important;
  z-index: 555;
  display: flex;
  flex-direction: column;
  overflow-x: hidden !important;
}
.nicescroll-rails.nicescroll-rails-vr {
  display: none !important;
}
.left-bar .menu-parent,
.side-bar .menu-parent {
  margin-top: 0px;
  padding-top: 0px;
}
div#divleft > * {
  position: relative !important;
}
div#divLeftbar {
  overflow-y: scroll;
  flex-grow: 1;
  overflow-x: hidden;
}
#divContent .row.grid.col-md-12 {
  transform: translateX(16px);
  padding: 0;
  float: none;
}
#divContent .row.grid.col-md-12 > * {
  padding: 10px 0px 0px 10px;
}
#divContent .col-md-8 .panel-heading .panel-title a {
  padding: 7px 12px;
  background-color: #ffffff;
  border-radius: 20px;
  font-size: 1.1em;
  margin-right: 12px;
  color: white;
  cursor: pointer;
  border: 2px solid #e33439;
  color: #e33439;
}
#divContent .col-md-8 .panel-heading .panel-title a:hover {
  color: white;
  background-color: #e33439;
}
#div_anuncio_bd iframe {
  width: 134%;
  height: calc(var(--alto) * 1.08);
  border: 2px solid #aaaaaa;
  margin-bottom: 12px;
  transform: scale(0.75);
  transform-origin: top left;
}
#div_anuncio_bd iframe:not(.first) {
  transform: scale(0.75) translateY(-33%);
}
`
    },
    {
      'site': '/.us/wc/\\d{11}/join.+',
      'class': 'css-s-zoom-meet',
      'css': /*css*/`
.sharee-container__indicator {
  opacity: 0;
}
.sharee-container__indicator:hover {
  opacity: 0.9;
}
.sharee-container__indicator * * {
  background-color: transparent !important;
  text-shadow: 0px 0px 3px #000000c2;
  color: white;
}
.sharee-container__indicator .btn-group {
  background: #00000069 !important;
}
footer#wc-footer {
  opacity: 1;
  background-color: transparent !important;
}
.footer #foot-bar > *:not(*:first-child) {
  opacity: 0;
}
.footer:hover #foot-bar > *:not(*:first-child) {
  opacity: 1;
}
footer.footer#wc-footer {
  -webkit-backdrop-filter: none !important;
  backdrop-filter: none !important;
  background-image: linear-gradient(0deg, #000000d4, #00000029) !important;
}
.footer #foot-bar > *:first-child .footer-button-base__button {
  max-width: 200px !important;
  width: auto;
}
.footer #foot-bar > *:first-child .footer-button-base__button svg {
  filter: drop-shadow(2px 4px 6px black);
}
.sharee-container__canvas-outline {
  border: none !important;
}
`
    },
    {
      'site': '/zoom.us/j/\\d{11}\\?pwd=.+',
      'class': 'css-s-zoom-join',
      'css': /*css*/`
div#zoom-ui-frame {
  padding: 0;
}
`
    },
    {
      'site': '/facebook.com/plantilladesitio',
      'class': 'css-s-fbtemplate',
      'css': /*css*/`
.x8gbvx8.xdppsyt.x1n2xptk.x78zum5.x1q0g3np.x1qughib.xz9dl7a.xn6708d.xsag5q8.xpkgp8e,
.x10wlt62.x6ikm8r.x9jhf4c.x30kzoy.x13lgxp2.x168nmei,
.x1cy8zhl.x78zum5.x1q0g3np.xod5an3.x1pi30zi.x1swvt13.xz9dl7a {
  display: none;
}
.x1ja2u2z.xh8yej3.x1n2onr6.x1yztbdb {
  margin-bottom: 2px;
}
.x9f619.x1ja2u2z.x1xzczws.x7wzq59 {
  opacity: 0;
}
.x9f619.x1ja2u2z.x1xzczws.x7wzq59:hover {
  opacity: 1;
}
`
    },
    {
      'site': '/docs.google.com/document/d/.{8,}/edit',
      'prevent': true,
      'class': 'css-s-docs',
      'css': /*css*/`
div#docs-chrome {
  position: fixed;
  top: 10px;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 5em;
  z-index: 5555;
  box-shadow: 0px -4px 8px 1px #00000073;
  transition: all 0.3s;
  transform: translateY(-100%);
  opacity: 0;
}
div#docs-chrome:hover {
  top: 0;
  transform: none;
  opacity: 1;
}
`
    },
    {
      'site': '/docs.google.com/presentation/d/.{8,}/edit.*',
      'prevent': true,
      'class': 'css-s-slides',
      'css': /*css*/`
.docs-titlebar-buttons.docs-titlebar-occluding {
  transform: translateX(calc(100% - 20px));
  transition: all 0.3s;
  transition-timing-function: cubic-bezier(0, 0.31, 0.74, 0.98);
}
.docs-titlebar-buttons.docs-titlebar-occluding:hover {
  transform: translateX(0);
}
`
    },
    {
      'site': '/.+google.com/maps/.*',
      'prevent': true,
      'class': 'css-s-slides',
      'css': /*css*/`
div#assistive-chips,
div#omnibox-container,
.app-viewcard-strip.ZiieLd,
.scene-footer-container.Hk4XGb,
.onegoogle,
div#watermark {
  opacity: 0;
}
`
    },
    {
      'site': '/_j.em/off/movie*',
      'class': 'css-s-movie',
      'css': /*css*/`
body .app {
  grid-template-rows: 1fr;
}
header {
  transform: translateY(-100%);
  top: 6px;
  opacity: 0;
  transition: all 0.3s;
  position: fixed;
  left: 0;
  width: 100%;
  right: 0;
}
header:hover {
  transform: none;
  opacity: 1;
  top: 0px;
}
`
    },
    {
      'site': 'files.000webhost.com',
      'class': 'css-s-filewebhost',
      'css': /*css*/`
.top-action > *:nth-child(2) {
  display:none;
}
.breadcrumb.ng-scope {
  width:0px;
  display:none
}
`
    },
    {
      'site': '/.+codepen.io/(.+)?pen(.+)?',
      'class': 'css-s-codepen',
      'css': /*css*/`
.page-wrap {
  height: calc(100vh - 0px) !important;
}
header#main-header {
  position: fixed;
  top: 8px;
  left: 0;
  right: 0;
  z-index: 88;
  opacity: 0;
  transform: translateY(-100%);
  transition: all 0.3s;
}
header#main-header:hover {
  top: 0px;
  transform: translateY(0px);
  opacity: 1;
}
h2.box-title {
  font-size: 14px;
  padding: 4px 8px;
}
.powers {
  padding-right: 2px;
}
.layout-side div#resizer {
  width: 8px;
  background: #1d1e22;
}
.layout-top div#resizer {
  height: 8px;
  background: #1d1e22;
}
div#resizer:hover {
  background: #060606;
}
footer#react-pen-footer {
  position: fixed;
  left: 0;
  z-index: 88;
  right: 0;
  bottom: 8px;
  transform: translateY(100%);
  opacity: 0;
  transition: all 0.3s;
}
footer#react-pen-footer:hover {
  transform: translateY(0px);
  opacity: 1;
  bottom: 0px;
}
.CodeMirror-simplescroll-vertical div {
  opacity: 0.2;
}
.CodeMirror-simplescroll-vertical div:active {
  opacity: 0.8;
}
`
    },
    {
      'site': '/.+intranet.usat.edu.pe/aulavirtual.+',
      'class': 'css-s-usat-moodle',
      'css': /*css*/`
.card.dashboard-card {
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid #bebebe;
  width: 100%;
  margin-bottom: 1rem;
}
.card.dashboard-card.disabled-course {
  display: none;
}
.card.dashboard-card > a {
  display: none;
}
.card .card-body .text-muted {
  display: none !important;
}
@media screen and (max-width: 800px) {
  .card-deck.dashboard-card-deck .dashboard-card {
    width: 100%
  }
}
@media screen and (min-width: 800px) and (max-width: 1400px) {
  .card-deck.dashboard-card-deck .dashboard-card {
    width: calc(50% - (0.5rem * 2));
  }
}
@media screen and (min-width: 1400px) {
  .card-deck.dashboard-card-deck .dashboard-card {
    width: calc(33% - (0.5rem * 2));
  }
}
[data-region=favourite-icon] {
  display: none;
}
.dashboard-card .card-body a .multiline {
  font-weight: normal;
  font-family: 'Open Sans';
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  display: block;
}
.dashboard-card-deck {
  padding-top: 10px;
}
.card.dashboard-card .card-body a.coursename {
  margin: 0px !important;
  width: 100%;
  text-align: left;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  display: block;
}
.block-myoverview.block-cards .dashboard-card-deck .ml-auto.dropdown {
  top: 0;
  background-color: rgba(255, 255, 255, .6);
}
.card.dashboard-card {
  box-shadow: none;
  border: 2px solid #ebebeb;
}
.card.dashboard-card:hover {
  border:  2px solid #686868;
  box-shadow: none;
}
[data-region="recentlyaccessedcourses-view-content"] .card.dashboard-card {
  width: auto;
}
iframe#contentframe {
  height: 80vh !important;
}
`
    },
    {
      'site': '/google.com(.pe)?/search',
      'class': 'css-s-google',
      'css': /*css*/`
#tads {
  display: none;
}
@media (prefers-color-scheme: light) {
  :root {
    --gg-bg: #f7f7f7;
  }
}
@media (prefers-color-scheme: dark) {
  :root {
    --gg-bg: #1c1c1d;
  }
}
.minidiv .sfbg {
  background: var(--gg-bg) !important;
}
div#pTwnEc {
  background: var(--gg-bg) !important;
}
div#sfcnt {
  background: var(--gg-bg) !important;
}
.sfbg {
  background: var(--gg-bg) !important;
}
*:not(.minidiv) > .sfbg {
  transform: translateY(-6px);
}
.dFMRD:not(:hover) a.hm60ue,
.dFMRD:not(:hover) div.mWagE.fDqwl {
  opacity: 0;
}    
`
    },
    {
      'site': '/scholar.google.com/.+\?',
      'class': 'css-s-scholar',
      'css': /*css*/`
#gs_top #gs_bdy_sb {
  padding-right: 40px;
  padding-left: 20px;
  width: 200px !important;
}
#gs_hdr {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0px;
  right: 0px;
  box-shadow: 0px -6px 12px 0px rgba(0, 0, 0, 0.3);
  height: 60px;
}
#gs_ab {
  margin-top: 60px;
}
#gs_top #gs_bdy_sb .gs_bdy_sb_sec {
  margin-left: 0px;
  margin-right: 0px;
}
[cssuri=https\\: \\/ \\/ scholar\\.google\\.com]div#gs_hdr_hp_lgow {
  margin-top: 84px;
}
[cssuri=https\\: \\/ \\/ scholar\\.google\\.com]form#gs_hdr_frm {
  box-shadow: 0px 0px 1px 1px #0000001f;
}

[cssuri=https\\: \\/ \\/ scholar\\.google\\.com]div#gs_bdy {
  transform: translateY(100px);
}
#gs_top * {
  font-family: system-ui;
}
#gs_ftr_sp {
  height: 0px;
}
.gs_ri .gs_fl {
  margin-top: 12px;
  margin-bottom: 12px;
}
.gs_ri .gs_fl a {
  padding: 3px 10px;
  border-radius: 4px;
  background: rgb(238, 238, 238);
}
#gs_bdy_ccl {
  background: white;
  padding: 10px 18px !important;
}
form#gs_hdr_frm {
  border-radius: 20px;
  overflow: hidden;
}
form#gs_hdr_frm:hover {
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
}
form#gs_hdr_frm * {
  border: none;
}
#gs_bdy_sb {
  background: rgb(241, 241, 241);
}
input.gs_in_ac {
  padding-left: 18px;
  padding-top: 0px;
  padding-bottom: 0px;
}
.gs_r.gs_scl {
  margin-bottom: 8px;
  border: 1px solid rgba(235, 235, 235, 0);
  padding: 8px 16px;
  border-radius: 6px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.02);
  transition: 0.15s;
}
#gs_hdr_srch {
  padding-top: 10px;
}
.gs_r.gs_scl:hover {
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(235, 235, 235, 1);
}
#gs_hdr_tsb {
  width: 52px;
}
input.gs_in_ac:hover,
input.gs_in_ac:focus {
  box-shadow: none;
  border: none;
}
#gs_bdy_sb ul .gs_bdy_sb_sel a {
  color: rgb(50, 131, 238) !important;
  font-weight: bold;
  white-space: nowrap;
}
#gs_bdy_sb ul .gs_bdy_sb_sel a:hover {
  color: rgb(17, 80, 164) !important;
  text-decoration: underline;
}
div#gs_hdr_frm_ac {
  display: none !important;
}
#gs_res_ccl_bot #gs_n center {
  margin-bottom: 60px;
}
`
    },
    {
      'site': 'trello.com',
      'class': 'css-c-trello',
      'css': /*css*/`
div#board::-webkit-scrollbar-thumb {
  border-radius: 8px;
}
div#board::-webkit-scrollbar {
  height: 8px;
}
a#permission-level,
.js-board-header-btn-org-wrapper + span {
  display: none;
}
#board.collapsed-workspace-nav::-webkit-scrollbar-button {
  width: 14px;
}
.js-fill-card-detail-desc
  .u-gutter
  .editable
  .markeddown
  a:not(.atlaskit-smart-link) {
  color: #429feb;
  text-decoration: none;
  position: relative;
}
.js-fill-card-detail-desc
  .u-gutter
  .editable
  .markeddown
  a:not(.atlaskit-smart-link)::before {
  content: "";
  position: absolute;
  bottom: -1px;
  left: -3px;
  right: -3px;
  height: 3px;
  width: auto;
  background: #a6c6e0;
  opacity: 0.6;
  z-index: -1;
  transition: 0.1s;
  transition-timing-function: ease-in-out;
}
.js-fill-card-detail-desc
  .u-gutter
  .editable
  a:not(.atlaskit-smart-link):hover::before {
  height: 100%;
}
`
    },
    {
      'site': 'udemy.com',
      'class': 'css-c-udemy',
      'css': /*css*/`
body {
  overflow-y: overlay;
  overflow-x: overlay;
}
body::-webkit-scrollbar {
  width: 8px !important;
}
body::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.1);
  border: none !important;
}
[class*="app--no-sidebar"] [class*="app--header"] {
  position: absolute;
  opacity: 0;
  transform: translateY(calc(-100% + 10px));
  transition: all 0.3s;
  z-index: 8888;
  top: 0;
  left: 0;
  right: 0;
}
[class*="app--no-sidebar"] [class*="app--header"]:hover {
  opacity: 1;
  transform: none;
}
[class*="app--no-sidebar"] [class*="app--body-container"] {
  height: 100vh;
}
[class*="app--no-sidebar"] [class*="curriculum-item-view--no-sidebar"] {
  min-height: 100%;
  max-height: 100%;
  height: 100%;
}
[class*="curriculum-item-view--mobile-header-bar"] {
  display: none;
}
`
    },
    {
      'site': 'teams.microsoft.com',
      'class': 'css-c-teams',
      'css': /*css*/`
* * * {
  cursor: default;
}
calling-stage .ts-calling-participant-stream .video-stream-container video {
  top: 0 !important;
  left: 0 !important;
  transform: translate(0px, 0px);
}
right-pane-header {
  z-index: 5;
}
right-pane-header > *:first-child {
  height: 4.6rem;
  margin: 0;
  background: #42435e;
  color: white;
  box-shadow: 0px -1px 6px 0px rgba(0, 0, 0, 0.3);
}
right-pane-header .icons-default-fill {
  fill: white;
}
.ts-new-message-footer.new-message-common.rich-style-enabled {
  margin: 0px 12px !important;
  background: white;
  border-radius: 6px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.3);
}
div#ts-bottom-compose-identifier {
  background: #d4d5d7;
  padding-top: 9px;
}
.ts-calling-unified-bar.ts-calling-unified-bar-selector {
  border-radius: 14px;
}
.ts-message-content.flex-fill {
  background: #ededed;
}
.item-wrap.ts-message-list-item {
  background: #ededed !important;
}
.chat-style .self .message-actions-container,
.chat-style .self .message-body {
  background: #c6c7ed !important;
}
calling-chat.flex-fill.ts-right-rail.thread-right-rail.calling-panel {
  border: none;
}
`
    },
    {
      'site': '/.*sharepoint.com/personal/.*',
      'class': 'css-c-onedrive',
      'css': /*css*/`
.OneUp-commandBar {
  position: absolute;
  top: 0;
  transform: translateY(calc(-100% + 6px));
  opacity: 0;
  transition: all 0.2s;
}
.OneUp-content {
  top: 0 !important;
}
.OneUp-commandBar:hover {
  transform: none;
  opacity: 1;
}
video.vjs-tech {
  outline: none !important;
}
`
    },
    {
      'site': 'senati.blackboard.com',
      'class': 'css-c-blackboard',
      'css': /*css*/`
#main-content-inner,
#side-menu,
.panel-wrap {
  overflow-y: overlay !important;
}
#main-content-inner::-webkit-scrollbar,
#side-menu::-webkit-scrollbar,
.panel-wrap::-webkit-scrollbar {
  width: 10px;
}
#main-content-inner::-webkit-scrollbar-thumb,
#side-menu::-webkit-scrollbar-thumb,
.panel-wrap::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.18);
  background-clip: padding-box;
  border: 3px solid rgba(0, 0, 0, 0);
}
#main-content-inner::-webkit-scrollbar-thumb:hover,
#side-menu::-webkit-scrollbar-thumb:hover,
.panel-wrap::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.28);
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0);
}
aside#side-menu::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.18);
  background-clip: padding-box;
  border: 3px solid rgba(0, 0, 0, 0);
}
aside#side-menu::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.28);
}
.element-card.course-element-card {
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 1.2rem;
}
.course-org-list {
  grid-column-gap: 1.1rem !important;
}
[ng-switch-when="messages"] .base-navigation-button-badge {
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: end;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  white-space: pre;
  max-width: 1.7rem;
}
.panel-wrap.panel-wrap-flex.has-bb-panel-header.assessment-attempt-panel.has-footer {
  margin-bottom: 0;
}
footer.submit-footer.panel-footer {
  background-image: linear-gradient(360deg, #0000009c, #0000002e);
  border: none;
  background-color: transparent;
}
footer.submit-footer.panel-footer .last-saved-status-message {
  color: white;
  text-shadow: 0px 0px 10px black;
}
`
    },
    {
      'site': '/zoom.us/rec/play/',
      'class': 'css-c-zoom-record',
      'css': /*css*/`
[CSSURI*="rec/play/"] .player-view {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh !important;
  width: 100vw !important;
  border-radius: 0px !important;
  background: black;
  z-index: 8;
}
.is-keyboard-event .video-js .vjs-tech:focus {
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}
`
    },
    {
      'site': 'tiktok.com',
      'class': 'css-c-tiktok',
      'css': /*css*/`
html *::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-clip: padding-box;
  border: 2px solid transparent;
}
html *::-webkit-scrollbar {
  width: 12px;
}
html[data-theme="dark"] {
  --tt-hover-commts: #00000030;
  --tt-commt-one-bg: #0000009e;
  --tt-commt-two-bg: #00000080;
}
html[data-theme="light"] {
  --tt-hover-commts: #ffffff30;
  --tt-commt-one-bg: #ffffff9e;
  --tt-commt-two-bg: #ffffff80;
}
[class*="DivCardAvatar"],
[class*="DivCardFooter"] {
  position: absolute;
  top: 0;
  background: transparent;
  height: 1rem;
  max-height: 1rem;
  padding: 1rem;
}
.hidden
  [class*="DivBrowserModeContainer"]
  > [class*="DivContentContainer"]::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: auto;
  bottom: 6px;
  height: 6px;
  border-radius: 8px;
  background-color: var(--tt-hover-commts);
  width: 100%;
  max-width: 82px;
  margin: 0 auto;
}
.hidden [class*="DivBrowserModeContainer"] > [class*="DivContentContainer"] {
  position: absolute;
  top: 0;
  bottom: 0;
  height: calc(100vh - 38px);
  background: transparent;
  width: calc(100% - 26px);
  padding-top: 2px;
  border-radius: 0px 0px 16px 16px;
  overflow: hidden;
  margin: 13px;
  margin-top: 0px;
  transition: all 0.4s;
  transform: translateY(calc(-100% + 20px));
  z-index: 12;
  border-style: solid;
  border-width: 0px;
  border-color: #c5c5c5;
}
.hidden
  [class*="DivBrowserModeContainer"]
  > [class*="DivContentContainer"]
  > div {
  opacity: 0;
  transition: all 0.5s;
}
.hidden
  [class*="DivBrowserModeContainer"]
  > [class*="DivContentContainer"]:hover
  > div {
  opacity: 1;
}
.hidden [class*="DivVideoContainer"] {
  padding: 0;
}
.hidden
  [class*="DivBrowserModeContainer"]
  > [class*="DivContentContainer"]:hover {
  backdrop-filter: blur(35px) brightness(1.18) saturate(1.15);
  transform: translateY(0);
  background-color: var(--tt-commt-one-bg);
  border-width: 0px 2px 2px 2px;
}
.hidden
  [class*="DivBrowserModeContainer"]
  > [class*="DivContentContainer"]
  > *:nth-child(1),
.hidden
  [class*="DivBrowserModeContainer"]
  > [class*="DivContentContainer"]
  > *:nth-child(2) {
  background-color: var(--tt-commt-two-bg);
  margin-bottom: 0;
}
.hidden
  [class*="DivBrowserModeContainer"]
  > [class*="DivContentContainer"]
  > [class*="DivMainContent"] {
  box-shadow: 0px 6px 8px -2px rgb(0 0 0 / 20%);
}
.hidden [data-e2e="browse-music"] {
  margin-bottom: 0 !important;
}
.hidden [class*="DivCommentListContainer"] {
  padding: 17px !important;
  background: transparent !important;
}
.hidden [class*="DivInfoContainer"] {
  padding-top: 0;
  padding-bottom: 0 !important;
  flex: 0 0 75px;
}
.hidden [class*="DivVoiceControlContainer"] {
  display: block;
  position: absolute;
  top: 20px;
  opacity: 0.05;
  transtion: all 0.2s;
}
.hidden [class*="DivVoiceControlContainer"]:hover {
  opacity: 0.8;
}
.hidden [class*="DivBottomCommentContainer"],
.hidden [data-e2e="browse-logo"],
.hidden [class*="DivCopyLink"],
.hidden [data-e2e="browse-report"],
.hidden [class*="DivVideoControlContainer"],
.hidden [class*="DivVideoControlBottom"] {
  display: none;
}
`
    },
    {
      'site': 'www.facebook.com',
      'class': 'css-c-facebook',
      'css': /*css*/`
.x9f619.x1ja2u2z.xnp8db0.x112wk31.xnjgh8c.xxc7z9f.x1t2pt76.x1u2d2a2.x6ikm8r.x10wlt62.x7wzq59.xxzkxad.x1daaz14 {
  display: none;
}
`
    },
    {
      'site': '/duolingo.com/stories/.*',
      'class': 'css-c-duolingo',
      'css': /*css*/`
._11VOS {
  background-color: #ffffff33;
  backdrop-filter: blur(6px);
  min-height: 80px !important;
  height: 80px !important;
  max-height: 80px !important;
}
._2QKoe {
  background-color: #ffffff7d;
  margin: 0;
  width: 100%;
  max-width: 100%;
  padding-top: 14px;
  padding-bottom: 14px;
  backdrop-filter: blur(48px);
  box-shadow: 0px 1px 6px 0px #00000023;
}
._1MNhU {
  height: 100%;
  min-height: 100%;
  padding-bottom: 6px;
}
._3gjcv,
.WzuSM {
  width: 100% !important;
  max-width: 100% !important;
  min-width: 100% !important;
}
._3W86r._3YKTw {
  min-width: 100%;
}
`
    },
    {
      'site': '/messenger.com/t/*',
      'class': 'css-c-messenger',
      'css': /*css*/`
html#facebook {
  overflow: hidden !important;
}
.eg9m0zos {
  overflow-y: overlay;
}
.eg9m0zos::-webkit-scrollbar {
  background: transparent;
  width: 14px;
  border-left: 1px solid transparent;
  backface-visibility: hidden;
}
.eg9m0zos:hover::-webkit-scrollbar {
  border-left: 1px solid #dbdbdb12;
}
.eg9m0zos::-webkit-scrollbar-thumb {
  background: #2d306f35;
  border-radius: 23px;
  border: 3px solid transparent;
  background-clip: padding-box;
  visibility: hidden;
}
.eg9m0zos:hover::-webkit-scrollbar-thumb {
  visibility: visible;
}
.eg9m0zos {
  background: #ff000000;
}
.buofh1pr.j83agx80.cbu4d94t.d2edcug0.l9j0dhe7.tgvbjcpo.du4w35lb > *:last-child {
  box-shadow: 0px 3px 6px 2px #00000094;
  z-index: 1;
}
[role="navigation"] {
  transition: all 0.6s;
  position: fixed;
  top: 0;
  left: 12px;
  bottom: 0;
  box-shadow: 2px 0px 5px -1px rgb(0 0 0 / 30%);
  opacity: 0;
  transform: translateX(-100%);
  overflow: visible;
}
.j83agx80.d1544ag0 {
  transform: scale(1);
  transform-origin: left top;
  z-index: 888888;
}
[role="navigation"]:hover {
  transform: translateX(-20px);
  opacity: 1;
}
[role="main"] .t6p9ggj4.tkr6xdv7 {
  position: absolute;
  width: 100%;
  opacity: 0;
  transition: all 0.4s;
  background: white;
}
[role="main"] .t6p9ggj4.tkr6xdv7:hover {
  opacity: 1;
}
[role="main"] .t6p9ggj4.tkr6xdv7 > *:first-child {
  :0.8 ;
  padding: 10px;
}
.j83agx80.aovydwv3.pybr56ya.f10w8fjw {
  padding: 6px;
  background: #ebebeb;
}
[role="main"] .buofh1pr .emzo65vh.hpfvmrgz {
  background: white;
}
.buofh1pr.j83agx80.flx89l3n.dpja2al7 {
  transform: none !important;
}
.j83agx80.aovydwv3 .l9j0dhe7.buofh1pr.ni8dbmo4 > *:nth-child(1),
.j83agx80.aovydwv3 .l9j0dhe7.buofh1pr.ni8dbmo4 > *:nth-child(2),
.j83agx80.aovydwv3 .l9j0dhe7.buofh1pr.ni8dbmo4 > *:nth-child(3) {
  display: none;
}

.j83agx80.aovydwv3.pybr56ya.f10w8fjw .l9j0dhe7.buofh1pr.ni8dbmo4.stjgntxs {
  border-radius: 80px;
  box-shadow: 0px 2px 4px 0px #00000066;
}    
`
    },
    {
      'site': '/(//.+\\.youtube-nocookie\\.com)|(//.+\\.youtube\\.com)',
      'class': 'css-c-youtube',
      'css': /*css*/`
a[role="tablist"][title*="amo"] {
  display: none !important;
}
yt-img-shadow.style-scope.ytd-thumbnail.no-transition {
  border-radius: 12px !important;
  overflow: hidden;
}
ytd-rich-item-renderer.style-scope.ytd-rich-grid-row {
  padding: 8px;
  border-radius: 9px;
  padding-bottom: 18px;
  margin-bottom: 12px !important;
  box-shadow: 0px 2px 8px -2px #0000008a;
}
ytd-thumbnail.ytd-rich-grid-media:before {
  opacity: 0 !important;
}
yt-img-shadow.style-scope.ytd-thumbnail.no-transition {
  border-radius: 8px !important;
  overflow: hidden;
}
ytd-thumbnail.ytd-rich-grid-media:before {
  opacity: 0 !important;
}
tp-yt-app-drawer#guide {
  box-shadow: 1px 0px 10px -6px #000000c7;
}
div#start {
  z-index: 100080;
}
ytd-playlist-header-renderer.style-scope.ytd-browse {
  margin-top: 50px;
}
div#alerts {
  margin-top: 58px;
}
html:not([CSSURI*="watch"]) div#masthead-container {
  z-index: 20000;
  box-shadow: 0px 0px 7px 0px #00000096;
}
ytd-browse.style-scope.ytd-page-manager {
  z-index: 1;
  /* background: #f8f7f7;*/
}
#container.ytd-searchbox {
  border-radius: 20px 0 0 20px !important;
  padding-left: 20px;
}
.ryd-tooltip {
  display: none;
}
[CSSURI*="watch"] #search {
  color: white !important;
}
button#search-icon-legacy {
  border-radius: 0 20px 20px 0 !important;
  border-width: 2px;
}
[CSSURI*="watch"] ytd-searchbox[has-focus] #container.ytd-searchbox {
  border-width: 2px 0px 2px 2px;
  border-color: white !important;
  border-style: solid;
}
[CSSURI*="watch"] ytd-searchbox[has-focus] #search-icon-legacy {
  border-color: white;
}
[CSSURI*="watch"] [has-focus] #search-icon-legacy.ytd-searchbox {
  border-width: 2px;
}
[CSSURI*="watch"] [has-focus] #search-icon-legacy.ytd-searchbox:hover {
  border-color: red;
}
[CSSURI*="watch"] [has-focus] div#container,
[CSSURI*="watch"] [has-focus] button#search-icon-legacy {
  background-color: #0000007b !important;
}
[CSSURI*="watch"] #masthead-container #container #center yt-icon svg path {
  fill: white;
  stroke: white;
  stroke-width: 1;
}
[CSSURI*="shorts"] ytd-page-manager#page-manager {
  margin-top: 56px !important;
}
body {
  overflow-y: overlay;
}
body::-webkit-scrollbar {
  width: 10px !important;
}
body::-webkit-scrollbar-thumb {
  background-color: #00000000 !important;
  border-radius: 0 !important;
  border: none !important;
}
body:hover::-webkit-scrollbar-thumb {
  background-color: #00000025 !important;
}
body::-webkit-scrollbar-thumb:hover {
  background-color: #00000045 !important;
}
body::-webkit-scrollbar-thumb:active {
  background-color: #00000065 !important;
}
[CSSURI*="watch"] #masthead[role="banner"] {
  opacity: 0 !important;
  transition: all 0.6s;
}
[CSSURI*="watch"] #masthead[role="banner"]:hover {
  opacity: 1 !important;
}
#page-manager {
  margin-top: 0 !important;
}
[theater-requested_] #player-theater-container {
  height: 100vh !important;
  max-height: 100vh !important;
  min-height: 100vh !important;
}
[theater-requested_] .ytp-gradient-bottom,
.ytp-big-mode .ytp-gradient-bottom {
  opacity: 0.4;
}
[theater-requested_] .ytp-chrome-bottom,
.ytp-big-mode .ytp-chrome-bottom {
  transition: all 0.25s cubic-bezier(0, 0, 0.2, 1) !important;
  opacity: 0.1 !important;
  transform: translateY(calc(100% + 10px - 50px)) !important;
  padding-top: 50px;
}
[theater-requested_] .ytp-chrome-bottom:hover,
.ytp-big-mode .ytp-chrome-bottom:hover {
  transform: none !important;
  opacity: 0.42 !important;
}
.ytp-chrome-top {
  opacity: 0;
}
.ytp-chrome-top:hover {
  opacity: 1;
}
[CSSURI*="embed"] .ytp-pause-overlay {
  transform: translateX(-100%);
  opacity: 0.3;
  transition: all 0.4s;
}
[CSSURI*="embed"] .ytp-pause-overlay:hover {
  transform: none;
  opacity: 1;
}
[CSSURI*="embed"] .--video-yt-controls {
  opacity: 1 !important;
}
.ytp-popup.ytp-contextmenu {
  background: rgba(0, 0, 0, 0.37);
  border-radius: 8px;
  backdrop-filter: blur(2px);
}
[CSSURI*="watch"] #masthead {
  background: #00000087 !important;
  backdrop-filter: blur(3px) saturate(1.35) brightness(1.35) !important;
}
.ytd-searchbox {
  background: rgb(0, 0, 0, 0.66) !important;
}
#masthead * {
  background-color: transparent !important;
}
[CSSURI*="watch"] .gstl_50.sbdd_a {
  border-radius: 8px;
  overflow: hidden;
  background: #0000008c;
  backdrop-filter: blur(4px);
  border: none !important;
}
[CSSURI*="watch"] .gstl_50.sbdd_a * {
  color: white;
  border: none !important;
}
[CSSURI*="watch"] ul.sbsb_b,
[CSSURI*="watch"] .sbsb_a,
[CSSURI*="watch"] .sbdd_b {
  background: transparent;
}
[CSSURI*="watch"] li.sbsb_d {
  background: #0000007d;
}
[CSSURI*="watch"] #movie_player [class*="ytp-ce-"] {
  opacity: 0.1;
}
#container.ytd-searchbox {
  box-shadow: none !important;
}
[CSSURI*="watch"] #movie_player [class*="ytp-ce-"]:hover,
#movie_player [class*="ytp-ce-"]:hover [class*="ytp-ce-"] {
  opacity: 0.98;
}
[CSSURI*="watch"] #movie_player [class*="ytp-ce-"] .ytp-ce-element-shadow {
  visibility: hidden;
}
[CSSURI*="watch"] #movie_player [class*="ytp-ce-covering"] {
  opacity: 0.6;
  transition: opacity 0.3s ease-in-out;
}
[CSSURI*="watch"] #movie_player > .ytp-ce-element {
  box-shadow: inset 0px 0px 8px 4px rgb(255 255 255 / 25%);
  border-color: transparent;
}
#menu-container #menu ytd-button-renderer:not([btn-contain-text^="guarda"]) {
  display: none;
}
`
    },
    {
      'site': 'web.whatsapp.com',
      'class': 'css-c-whatsapp',
      'css': /*css*/`
@media screen and (max-width: 800px) {
  ._2Ts6i._2xAQV {
    width: 100vw !important;
    max-width: 100vw;
  }
  ._2Ts6i._2xAQV #main {
    width: 100% !important;
    transform: none !important;
  }
  ._2Ts6i._3RGKj {
    position: fixed;
    left: 20px;
    top: 0;
    width: 100%;
    max-width: 700px;
    height: 100vh;
    bottom: 0;
    z-index: 500;
    opacity: 0;
    transition: all 0.4s;
    transform: translateX(-100%) !important;
    transition-timing-function: ease-in-out;
  }
  ._2Ts6i._3RGKj:hover {
    left: 0;
    transform: translateX(0px) !important;
    opacity: 1;
  }
  ._2QgSC {
    z-index: 501;
  }
  ._2Ts6i._1xFRo {
    box-shadow: 0px 0px 12px 0px #0000003e;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0 !important;
    height: 100vh;
    width: 100%;
    max-width: 800px;
  }
  .two ._2Ts6i._1xFRo {
    transform: translateX(100%) !important;
    opacity: 0;
  }
  .three ._2Ts6i._1xFRo {
    transform: translateX(0) !important;
    opacity: 1;
  }
}
._2Ts6i._3RGKj {
  box-shadow: -8px 0px 8px 8px #0000003e;
}
.app-wrapper-web ._1jJ70 {
  width: 100% !important;
  max-width: 100% !important;
  min-width: 100% !important;
}       
`
    },
    {
      'site': 'deezer.com',
      'class': 'css-c-deezer',
      'css': /*css*/`
.page-sidebar {
  position: fixed;
  top: 0;
  left: 8px;
  right: auto;
  overflow-x: scroll;
  bottom: 80px;
  background: #ffffff;
  border-right: 8px solid rgb(6, 6, 6);
  transform: translateX(-100%);
  transition: all 0.8s;
  z-index: 888888;
  opacity: 0.12;
  overflow-x: hidden;
}
.page-sidebar:hover {
  transform: translateX(0px);
  opacity: 1;
  left: 0;
  border-right: 0px solid transparent;
  box-shadow: -6px -18px 15px 5px rgb(0, 0, 0, 0.6);
}
.page-main {
  margin-left: 0;
  height: calc(100vh - 153px);
  width: 100%;
  min-width: 100%;
  max-width: 100%;
}
.page-wrapper {
  width: 100vw;
  min-width: 100%;
  max-width: 100%;
  padding-bottom: 80px;
}
.page-content .container {
  width: 50vw !important;
  min-width: 100% !important;
  max-width: 100% !important;
  margin: 0 !important;
  padding: 0;
}
.channel-headings {
  padding-top: 2rem;
  padding-bottom: 1rem;
}
.carousel-controls {
  right: 15px;
}
@media (max-width: 600px) {
  .player-track {
    position: absolute;
    background: white;
    box-shadow: 0px 0px 4px #0000007a;
    transform: translateX(-100%);
    height: 100%;
    width: 100%;
    padding: 15px 4px !important;
    left: 8px;
    z-index: 8;
    transition: all 0.4s;
  }
  .player-track:hover {
    transform: translateX(0);
    left: 0px;
  }
}
.picture.overlay-hidden.no-background img {
  height: 50px;
}
.page-player.player-track {
  padding: 0px 16px;
}
.page-content {
  width: 100vw;
  margin: 0px;
  overflow-y: auto;
  padding: 10px 18px;
  padding-right: 1px;
}
div#page_topbar {
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  left: 0;
}
.page-player .player-bottom {
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  border: 0;
  border-top: 0 !important;
  box-shadow: 0 4px 15px 4px #0000006e;
  padding: 0 10px;
}
.player-track {
  padding: 0 17px;
  min-width: 300px !important;
}
#popover-1 {
  top: 50% !important;
  z-index: 6;
}
button.svg-icon-group-btn {
  opacity: 1;
}
.player-bottom::-webkit-scrollbar {
  height: 2px;
}
.queuelist-cover {
  display: flex;
  width: 100% !important;
  margin: 0;
  height: 50px;
  margin-bottom: 15px;
  align-items: center;
  justify-content: center;
}
.player-container {
  width: 100%;
  max-width: 100vw;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  margin: 0 !important;
  padding: 0;
}
.queuelist-content {
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  left: 0;
}
.queuelist-cover-thumbnail {
  height: 100%;
}
.queuelist-cover > * {
  margin-right: 15px;
  margin-top: 0 !important;
}
.queuelist-content > * {
  padding-right: 49px;
}
.queuelist-upnext {
  width: 100%;
  padding-right: 49px;
}
.ads.ads-bottom {
  display: none !important;
}
`
    },
  ]
})()