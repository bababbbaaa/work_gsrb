{"version":3,"file":"calendar-util.map.js","names":["window","Util","calendar","config","additionalParams","this","userSettings","dayLength","type","userId","parseInt","ownerId","accessNames","handleAccessNames","DATE_FORMAT_BX","BX","message","DATETIME_FORMAT_BX","DATE_FORMAT","date","convertBitrixFormat","DATETIME_FORMAT","substr","length","TIME_FORMAT","util","trim","TIME_FORMAT_BX","isAmPmMode","TIME_FORMAT_SHORT_BX","replace","TIME_FORMAT_SHORT","KEY_CODES","backspace","enter","escape","space","delete","left","right","up","down","z","y","shift","ctrl","alt","cmd","cmdRight","pageUp","pageDown","prototype","getWeekDays","weekDays","getWeekStart","weekStart","getWeekEnd","MO","TU","WE","TH","FR","SA","SU","getWeekDayOffset","day","weekDayOffsetIndex","i","getWeekDayByInd","index","isHoliday","weekHolidays","week_holidays","hasOwnProperty","yearHolidays","year_holidays","yearWorkdays","year_workdays","getDay","monthDate","getDate","month","getMonth","isToday","curDate","Date","getFullYear","getWorkTime","userWorkTime","work_time_start","work_time_end","workTime","start","Math","floor","parseFloat","end","ceil","proxy","setWorkTime","min","max","userOptions","save","formatTime","h","m","skipMinutes","isDate","getMinutes","getHours","res","undefined","isNaN","toString","ampm","formatDate","timestamp","getTime","format","formatDateTime","formatDateUsable","showYear","parseTime","str","parseDate","trimSeconds","cnt","k","regMonths","bUTC","isNotEmptyString","expr","RegExp","aDate","match","aFormat","aDateArgs","aFormatArgs","aResult","array_search","getNumMonth","toUpperCase","d","setUTCDate","setUTCFullYear","setUTCMonth","setUTCHours","setDate","setFullYear","setMonth","setHours","bPM","findTargetNode","node","parentCont","prefix","viewsCont","attributes","name","findParent","n","j","getViewHeight","minHeight","height","GetWindowInnerSize","document","innerHeight","showWeekNumber","getUserOption","getWeekNumber","weekNumber","getScrollbarWidth","browser","IsMac","result","outer","mainCont","appendChild","create","props","className","widthNoScroll","offsetWidth","style","overflow","inner","widthWithScroll","cleanNode","getMessagePlural","messageId","number","Loc","defaultValue","setUserOption","value","getKeyCodes","getMousePos","e","event","x","pageX","pageY","clientX","clientY","documentElement","scrollLeft","body","clientLeft","scrollTop","clientTop","getDayCode","getTextColor","color","charAt","substring","r","g","b","light","getTimeValue","round","getTimeEx","getTimeByInt","intValue","hour","getTimeByFraction","val","useFloor","getWeekNumberInMonthByDate","origDate","getSimpleTimeList","push","label","adaptTimeValue","timeValue","timeList","diff","ind","abs","getMeetingRoomList","meetingRooms","mergeSocnetDestinationConfig","socnetDestination","USERS","code","getSocnetDestinationConfig","key","users","groups","EXTRANET_USER","DENY_TOALL","UA","id","DEPARTMENT","sonetgroups","SONETGROUPS","department","departmentRelation","DEPARTMENT_RELATION","LAST","SELECTED","getActionUrl","actionUrl","getTimezoneList","timezoneList","getDefaultColors","defaultColorsList","getFormSettings","formType","formSettings","saveFormSettings","settings","pinnedFields","randomInt","random","getAccessName","setAccessName","getSectionAccessTasks","sectionAccessTasks","getTypeAccessTasks","typeAccessTasks","getDefaultTypeAccessTask","taskId","accessTasks","getDefaultSectionAccessTask","getSuperposedTrackedUsers","trackingUsersList","sort","a","LAST_NAME","localeCompare","getSuperposedTrackedGroups","trackingGroupList","isUserCalendar","isCompanyCalendar","isGroupCalendar","userIsOwner","hexToRgb","hex","exec","hexToRgba","opacity","parseLocation","ar","split","mrid","mrevid","room_id","room_event_id","getTextLocation","location","ID","NAME","locationList","Calendar","Controls","Location","getLocationList","getTextReminder","in_array","getEditTaskPath","editTaskPath","getViewTaskPath","viewTaskPath","readOnlyMode","readOnly","sectionList","sectionController","getSectionListForEdit","getLoader","size","html","isFilterEnabled","getCounters","counters","getCalDavConnections","connections","isRichLocationEnabled","locationFeatureEnabled","isDarkColor","toLowerCase","getAvilableViews","avilableViews","getCustumViews","customViews","placementParams","gridPlacementList","isMeetingsEnabled","bSocNet","bIntranet","isAccessibilityEnabled","isPrivateEventsEnabled","useViewSlider","showEventDescriptionInSimplePopup","doBxContextFix","top","Object","keys","forEach","__BX","Access","SocNetLogDestination","restoreBxContextFix","BXEventCalendar","addCustomEvent"],"sources":["calendar-util.js"],"mappings":"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"}