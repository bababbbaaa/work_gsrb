{"version":3,"sources":["media.bundle.js"],"names":["exports","ui_progressbarjs_uploader","ui_vue_vuex","im_model","main_core_events","im_const","ui_vue_components_audioplayer","ui_designTokens","ui_vue_directives_lazyload","ui_icons","ui_vue_components_socialvideo","im_lib_utils","ui_vue","ownKeys","object","enumerableOnly","keys","Object","getOwnPropertySymbols","symbols","filter","sym","getOwnPropertyDescriptor","enumerable","push","apply","_objectSpread","target","i","arguments","length","source","forEach","key","babelHelpers","defineProperty","getOwnPropertyDescriptors","defineProperties","BitrixVue","component","mounted","this","createProgressbar","beforeDestroy","removeProgressbar","props","userId","default","messageType","MessageType","self","file","type","FilesModel","create","getElementState","methods","download","progress","BX","UI","Viewer","viewerAttrs","FileType","image","urlShow","Utils","platform","isBitrixMobile","BXMobileApp","Photo","show","photos","files","collection","application","dialog","chatId","map","url","replace","reverse","default_photo","window","open","video","app","openDocument","name","urlDownload","_this","uploader","blurElement","undefined","Uploader","container","$refs","direction","offsetHeight","vertical","horizontal","icon","cloud","cancel","sizes","circle","labels","loading","localize","completed","canceled","cancelTitle","megabyte","cancelCallback","event","EventEmitter","emit","EventType","clickOnUploadCancel","destroyCallback","start","size","offsetWidth","setProgressTitleVisibility","updateProgressbar","result","status","FileStatus","error","setProgress","setCancelDisable","setIcon","setProgressTitle","wait","setByteSent","destroy","computed","getFilteredPhrases","fileName","maxLength","endWordLength","secondPart","substring","extension","firstPart","trim","fileSize","position","Math","round","uploadProgress","Vuex","mapState","state","watch","template","Vue","cloneComponent","background","getImageSize","width","height","maxWidth","aspectRatio","styleFileSizes","backgroundSize","styleBoxSizes","parseInt","fileSource","urlPreview","isSafari","browser","styleVideoSizes","autoplay","options","autoplayVideo","ProgressBarJs","Messenger","Model","Event","Const","Lib"],"mappings":"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","file":"media.bundle.map.js"}