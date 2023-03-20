{"version":3,"sources":["script.js"],"names":["exports","main_core","_templateObject","_templateObject2","_templateObject3","_templateObject4","_templateObject5","_templateObject6","_templateObject7","CalendarEvent","options","arguments","length","undefined","babelHelpers","classCallCheck","this","eventId","hasDecision","isPositiveDecision","hash","downnoloadLink","downloadLink","decisionButtonsBlock","document","querySelector","titleBlock","eventWrapper","listBoxWrapper","decisionBlockWrapper","decisionBlock","buttonsContainer","init","createClass","key","value","initWrappersForButtons","initHandler","primaryButtonWrapper","children","secondButtonWrapper","initChangeDecisionButton","Dom","append","changeDecisionButton","initDownloadButton","downloadButton","initAcceptButton","initDeclineButton","acceptDecisionButton","declineDecisionButton","initListBoxHandlers","_this","getChangeDecisionButton","addEventListener","changeStateWithoutDecision","_this2","getAcceptDecisionButton","changeStateWithDecision","_this3","getDeclineDecisionButton","decision","_this4","remove","showChangeDecisionButton","showAcceptDecisionBlock","showDownloadButton","showDeclineDecisionBlock","BX","ajax","runComponentAction","mode","data","then","response","attendeesList","rebuildUserList","Tag","render","taggedTemplateLiteral","Loc","getMessage","innerText","removeClass","addClass","showAcceptDecisionButton","showDeclineDecisionButton","initAttendeesListBoxHandlers","initAttachmentsListBoxHandlers","attendeesListButton","contentBox","Type","isDomNode","contentHeight","scrollHeight","style","height","maxHeight","display","attachmentBtn","attachmentContentBox","getDownloadButton","util","htmlspecialchars","getDecisionBlock","_this5","isArray","userListContainer","map","attendee","getAdditionalClassForAttendeesList","oldAttendeesContainer","oldAttendeesListButton","wrapper","parentElement","status","Reflection","namespace","window"],"mappings":"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","file":"script.map.js"}