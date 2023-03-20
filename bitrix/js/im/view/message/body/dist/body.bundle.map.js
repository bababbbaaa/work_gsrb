{"version":3,"sources":["body.bundle.js"],"names":["exports","im_view_element_media","im_view_element_attach","im_view_element_keyboard","im_view_element_chatteaser","ui_vue_components_reaction","ui_vue","ui_vue_vuex","im_model","im_const","im_lib_utils","main_core","_createForOfIteratorHelper","o","allowArrayLike","it","Symbol","iterator","Array","isArray","_unsupportedIterableToArray","length","i","F","s","n","done","value","e","_e","f","TypeError","normalCompletion","didErr","err","call","step","next","_e2","minLen","_arrayLikeToArray","Object","prototype","toString","slice","constructor","name","from","test","arr","len","arr2","ownKeys","object","enumerableOnly","keys","getOwnPropertySymbols","symbols","filter","sym","getOwnPropertyDescriptor","enumerable","push","apply","_objectSpread","target","arguments","source","forEach","key","babelHelpers","defineProperty","getOwnPropertyDescriptors","defineProperties","BX","window","_ContentType","freeze","default","progress","image","audio","video","richLink","BitrixVue","component","props","userId","dialogId","chatId","messageType","MessageType","self","message","type","MessagesModel","create","getElementState","enableReactions","showName","showAvatar","referenceContentBodyClassName","referenceContentNameClassName","created","this","dateFormatFunction","cacheFormatDate","methods","clickByUserName","event","$emit","clickByUploadCancel","clickByChatTeaser","clickByKeyboardButton","setReaction","openReactionList","formatDate","date","id","toJSON","dateFormat","Utils","getFormatType","Messenger","Const","DateFormat","$Bitrix","Loc","getMessages","_getDateFormat","format","_this","Main","Date","_getMessage","phrase","getMessage","isDesktop","platform","isBitrixDesktop","getDesktopVersion","isMobile","isBitrixMobile","computed","ContentType","contentType","filesData","onlyImage","onlyVideo","onlyAudio","inProgress","_iterator","_step","file","formattedDate","messageText","_this2","isDeleted","textConverted","messageParams","params","replacement","replace","whole","text","userName","user","$store","getters","htmlspecialchars","index","LINK_ACTIVE","includes","messageAttach","ATTACH","messageReactions","REACTION","isEdited","IS_EDITED","IS_DELETED","chatColor","dialog","DialogType","color","authorId","_this3","files","FILE_ID","fileId","commit","data","keyboardButtons","result","KEYBOARD","chatTeaser","CHAT_ID","CHAT_LAST_DATE","CHAT_MESSAGE","messageCounter","messageLastDate","languageId","application","common","NAME","Text","decode","firstName","userColor","extranet","Vuex","mapState","state","template","Model","Lib"],"mappings":"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","file":"body.bundle.map.js"}