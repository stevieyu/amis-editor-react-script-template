"use strict";(self.webpackChunkamis_editor_wc_cra=self.webpackChunkamis_editor_wc_cra||[]).push([[68],{30068:function(e,t,n){n.r(t),n.d(t,{getJavaScriptWorker:function(){return H},getTypeScriptWorker:function(){return W},setupJavaScript:function(){return R},setupTypeScript:function(){return E}});var r,i=n(24369),o=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function s(e){try{u(r.next(e))}catch(t){o(t)}}function a(e){try{u(r.throw(e))}catch(t){o(t)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}u((r=r.apply(e,t||[])).next())}))},s=function(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(a){o=[6,a],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},a=function(){function e(e,t){var n=this;this._modeId=e,this._defaults=t,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange((function(){return n._stopWorker()})),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange((function(){return n._updateExtraLibs()}))}return e.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},e.prototype.dispose=function(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()},e.prototype._updateExtraLibs=function(){return o(this,void 0,void 0,(function(){var e,t;return s(this,(function(n){switch(n.label){case 0:return this._worker?(e=++this._updateExtraLibsToken,[4,this._worker.getProxy()]):[2];case 1:return t=n.sent(),this._updateExtraLibsToken!==e?[2]:(t.updateExtraLibs(this._defaults.getExtraLibs()),[2])}}))}))},e.prototype._getClient=function(){var e=this;if(!this._client){this._worker=i.j6.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,keepIdleModels:!0,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs(),customWorkerPath:this._defaults.workerOptions.customWorkerPath,inlayHintsOptions:this._defaults.inlayHintsOptions}});var t=this._worker.getProxy();this._defaults.getEagerModelSync()&&(t=t.then((function(t){return e._worker?e._worker.withSyncedResources(i.j6.getModels().filter((function(t){return t.getLanguageId()===e._modeId})).map((function(e){return e.uri}))):t}))),this._client=t}return this._client},e.prototype.getLanguageServiceWorker=function(){for(var e,t=this,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return this._getClient().then((function(t){e=t})).then((function(e){if(t._worker)return t._worker.withSyncedResources(n)})).then((function(t){return e}))},e}(),u=n(67863),c={"lib.d.ts":!0,"lib.dom.d.ts":!0,"lib.dom.iterable.d.ts":!0,"lib.es2015.collection.d.ts":!0,"lib.es2015.core.d.ts":!0,"lib.es2015.d.ts":!0,"lib.es2015.generator.d.ts":!0,"lib.es2015.iterable.d.ts":!0,"lib.es2015.promise.d.ts":!0,"lib.es2015.proxy.d.ts":!0,"lib.es2015.reflect.d.ts":!0,"lib.es2015.symbol.d.ts":!0,"lib.es2015.symbol.wellknown.d.ts":!0,"lib.es2016.array.include.d.ts":!0,"lib.es2016.d.ts":!0,"lib.es2016.full.d.ts":!0,"lib.es2017.d.ts":!0,"lib.es2017.full.d.ts":!0,"lib.es2017.intl.d.ts":!0,"lib.es2017.object.d.ts":!0,"lib.es2017.sharedmemory.d.ts":!0,"lib.es2017.string.d.ts":!0,"lib.es2017.typedarrays.d.ts":!0,"lib.es2018.asyncgenerator.d.ts":!0,"lib.es2018.asynciterable.d.ts":!0,"lib.es2018.d.ts":!0,"lib.es2018.full.d.ts":!0,"lib.es2018.intl.d.ts":!0,"lib.es2018.promise.d.ts":!0,"lib.es2018.regexp.d.ts":!0,"lib.es2019.array.d.ts":!0,"lib.es2019.d.ts":!0,"lib.es2019.full.d.ts":!0,"lib.es2019.object.d.ts":!0,"lib.es2019.string.d.ts":!0,"lib.es2019.symbol.d.ts":!0,"lib.es2020.bigint.d.ts":!0,"lib.es2020.d.ts":!0,"lib.es2020.full.d.ts":!0,"lib.es2020.intl.d.ts":!0,"lib.es2020.promise.d.ts":!0,"lib.es2020.sharedmemory.d.ts":!0,"lib.es2020.string.d.ts":!0,"lib.es2020.symbol.wellknown.d.ts":!0,"lib.es2021.d.ts":!0,"lib.es2021.full.d.ts":!0,"lib.es2021.promise.d.ts":!0,"lib.es2021.string.d.ts":!0,"lib.es2021.weakref.d.ts":!0,"lib.es5.d.ts":!0,"lib.es6.d.ts":!0,"lib.esnext.d.ts":!0,"lib.esnext.full.d.ts":!0,"lib.esnext.intl.d.ts":!0,"lib.esnext.promise.d.ts":!0,"lib.esnext.string.d.ts":!0,"lib.esnext.weakref.d.ts":!0,"lib.scripthost.d.ts":!0,"lib.webworker.d.ts":!0,"lib.webworker.importscripts.d.ts":!0,"lib.webworker.iterable.d.ts":!0},l=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),d=function(){return d=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},d.apply(this,arguments)},f=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function s(e){try{u(r.next(e))}catch(t){o(t)}}function a(e){try{u(r.throw(e))}catch(t){o(t)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}u((r=r.apply(e,t||[])).next())}))},p=function(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(a){o=[6,a],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}};function g(e,t,n){if(void 0===n&&(n=0),"string"===typeof e)return e;if(void 0===e)return"";var r="";if(n){r+=t;for(var i=0;i<n;i++)r+="  "}if(r+=e.messageText,n++,e.next)for(var o=0,s=e.next;o<s.length;o++){r+=g(s[o],t,n)}return r}function h(e){return e?e.map((function(e){return e.text})).join(""):""}!function(e){e[e.None=0]="None",e[e.Block=1]="Block",e[e.Smart=2]="Smart"}(r||(r={}));var m,b=function(){function e(e){this._worker=e}return e.prototype._textSpanToRange=function(e,t){var n=e.getPositionAt(t.start),r=e.getPositionAt(t.start+t.length);return{startLineNumber:n.lineNumber,startColumn:n.column,endLineNumber:r.lineNumber,endColumn:r.column}},e}(),v=function(){function e(e){this._worker=e,this._libFiles={},this._hasFetchedLibFiles=!1,this._fetchLibFilesPromise=null}return e.prototype.isLibFile=function(e){return!!e&&(0===e.path.indexOf("/lib.")&&!!c[e.path.slice(1)])},e.prototype.getOrCreateModel=function(e){var t=i.Sf.parse(e),n=i.j6.getModel(t);if(n)return n;if(this.isLibFile(t)&&this._hasFetchedLibFiles)return i.j6.createModel(this._libFiles[t.path.slice(1)],"typescript",t);var r=u.TG.getExtraLibs()[e];return r?i.j6.createModel(r.content,"typescript",t):null},e.prototype._containsLibFile=function(e){for(var t=0,n=e;t<n.length;t++){var r=n[t];if(this.isLibFile(r))return!0}return!1},e.prototype.fetchLibFilesIfNecessary=function(e){return f(this,void 0,void 0,(function(){return p(this,(function(t){switch(t.label){case 0:return this._containsLibFile(e)?[4,this._fetchLibFiles()]:[2];case 1:return t.sent(),[2]}}))}))},e.prototype._fetchLibFiles=function(){var e=this;return this._fetchLibFilesPromise||(this._fetchLibFilesPromise=this._worker().then((function(e){return e.getLibFiles()})).then((function(t){e._hasFetchedLibFiles=!0,e._libFiles=t}))),this._fetchLibFilesPromise},e}();!function(e){e[e.Warning=0]="Warning",e[e.Error=1]="Error",e[e.Suggestion=2]="Suggestion",e[e.Message=3]="Message"}(m||(m={}));var y=function(e){function t(t,n,r,o){var s=e.call(this,o)||this;s._libFiles=t,s._defaults=n,s._selector=r,s._disposables=[],s._listener=Object.create(null);var a=function(e){if(e.getLanguageId()===r){var t,n=function(){s._defaults.getDiagnosticsOptions().onlyVisible?e.isAttachedToEditor()&&s._doValidate(e):s._doValidate(e)},o=e.onDidChangeContent((function(){clearTimeout(t),t=window.setTimeout(n,500)})),a=e.onDidChangeAttached((function(){s._defaults.getDiagnosticsOptions().onlyVisible&&(e.isAttachedToEditor()?n():i.j6.setModelMarkers(e,s._selector,[]))}));s._listener[e.uri.toString()]={dispose:function(){o.dispose(),a.dispose(),clearTimeout(t)}},n()}},u=function(e){i.j6.setModelMarkers(e,s._selector,[]);var t=e.uri.toString();s._listener[t]&&(s._listener[t].dispose(),delete s._listener[t])};s._disposables.push(i.j6.onDidCreateModel((function(e){return a(e)}))),s._disposables.push(i.j6.onWillDisposeModel(u)),s._disposables.push(i.j6.onDidChangeModelLanguage((function(e){u(e.model),a(e.model)}))),s._disposables.push({dispose:function(){for(var e=0,t=i.j6.getModels();e<t.length;e++){var n=t[e];u(n)}}});var c=function(){for(var e=0,t=i.j6.getModels();e<t.length;e++){var n=t[e];u(n),a(n)}};return s._disposables.push(s._defaults.onDidChange(c)),s._disposables.push(s._defaults.onDidExtraLibsChange(c)),i.j6.getModels().forEach((function(e){return a(e)})),s}return l(t,e),t.prototype.dispose=function(){this._disposables.forEach((function(e){return e&&e.dispose()})),this._disposables=[]},t.prototype._doValidate=function(e){return f(this,void 0,void 0,(function(){var t,n,r,o,s,a,u,c,l,d=this;return p(this,(function(f){switch(f.label){case 0:return[4,this._worker(e.uri)];case 1:return t=f.sent(),e.isDisposed()?[2]:(n=[],r=this._defaults.getDiagnosticsOptions(),o=r.noSyntaxValidation,s=r.noSemanticValidation,a=r.noSuggestionDiagnostics,o||n.push(t.getSyntacticDiagnostics(e.uri.toString())),s||n.push(t.getSemanticDiagnostics(e.uri.toString())),a||n.push(t.getSuggestionDiagnostics(e.uri.toString())),[4,Promise.all(n)]);case 2:return!(u=f.sent())||e.isDisposed()?[2]:(c=u.reduce((function(e,t){return t.concat(e)}),[]).filter((function(e){return-1===(d._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(e.code)})),l=c.map((function(e){return e.relatedInformation||[]})).reduce((function(e,t){return t.concat(e)}),[]).map((function(e){return e.file?i.Sf.parse(e.file.fileName):null})),[4,this._libFiles.fetchLibFilesIfNecessary(l)]);case 3:return f.sent(),e.isDisposed()?[2]:(i.j6.setModelMarkers(e,this._selector,c.map((function(t){return d._convertDiagnostics(e,t)}))),[2])}}))}))},t.prototype._convertDiagnostics=function(e,t){var n=t.start||0,r=t.length||1,o=e.getPositionAt(n),s=o.lineNumber,a=o.column,u=e.getPositionAt(n+r),c=u.lineNumber,l=u.column,d=[];return t.reportsUnnecessary&&d.push(i.eB.Unnecessary),t.reportsDeprecated&&d.push(i.eB.Deprecated),{severity:this._tsDiagnosticCategoryToMarkerSeverity(t.category),startLineNumber:s,startColumn:a,endLineNumber:c,endColumn:l,message:g(t.messageText,"\n"),code:t.code.toString(),tags:d,relatedInformation:this._convertRelatedInformation(e,t.relatedInformation)}},t.prototype._convertRelatedInformation=function(e,t){var n=this;if(!t)return[];var r=[];return t.forEach((function(t){var i=e;if(t.file&&(i=n._libFiles.getOrCreateModel(t.file.fileName)),i){var o=t.start||0,s=t.length||1,a=i.getPositionAt(o),u=a.lineNumber,c=a.column,l=i.getPositionAt(o+s),d=l.lineNumber,f=l.column;r.push({resource:i.uri,startLineNumber:u,startColumn:c,endLineNumber:d,endColumn:f,message:g(t.messageText,"\n")})}})),r},t.prototype._tsDiagnosticCategoryToMarkerSeverity=function(e){switch(e){case m.Error:return i.ZL.Error;case m.Message:return i.ZL.Info;case m.Warning:return i.ZL.Warning;case m.Suggestion:return i.ZL.Hint}return i.ZL.Info},t}(b),_=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),Object.defineProperty(t.prototype,"triggerCharacters",{get:function(){return["."]},enumerable:!1,configurable:!0}),t.prototype.provideCompletionItems=function(e,n,r,o){return f(this,void 0,void 0,(function(){var r,o,s,a,u,c,l;return p(this,(function(d){switch(d.label){case 0:return r=e.getWordUntilPosition(n),o=new i.e6(n.lineNumber,r.startColumn,n.lineNumber,r.endColumn),s=e.uri,a=e.getOffsetAt(n),[4,this._worker(s)];case 1:return u=d.sent(),e.isDisposed()?[2]:[4,u.getCompletionsAtPosition(s.toString(),a)];case 2:return!(c=d.sent())||e.isDisposed()?[2]:(l=c.entries.map((function(r){var u,c=o;if(r.replacementSpan){var l=e.getPositionAt(r.replacementSpan.start),d=e.getPositionAt(r.replacementSpan.start+r.replacementSpan.length);c=new i.e6(l.lineNumber,l.column,d.lineNumber,d.column)}var f=[];return-1!==(null===(u=r.kindModifiers)||void 0===u?void 0:u.indexOf("deprecated"))&&f.push(i.Mj.CompletionItemTag.Deprecated),{uri:s,position:n,offset:a,range:c,label:r.name,insertText:r.name,sortText:r.sortText,kind:t.convertKind(r.kind),tags:f}})),[2,{suggestions:l}])}}))}))},t.prototype.resolveCompletionItem=function(e,n){return f(this,void 0,void 0,(function(){var n,r,i,o,s;return p(this,(function(a){switch(a.label){case 0:return r=(n=e).uri,i=n.position,o=n.offset,[4,this._worker(r)];case 1:return[4,a.sent().getCompletionEntryDetails(r.toString(),o,n.label)];case 2:return(s=a.sent())?[2,{uri:r,position:i,label:s.name,kind:t.convertKind(s.kind),detail:h(s.displayParts),documentation:{value:t.createDocumentationString(s)}}]:[2,n]}}))}))},t.convertKind=function(e){switch(e){case D.primitiveType:case D.keyword:return i.Mj.CompletionItemKind.Keyword;case D.variable:case D.localVariable:return i.Mj.CompletionItemKind.Variable;case D.memberVariable:case D.memberGetAccessor:case D.memberSetAccessor:return i.Mj.CompletionItemKind.Field;case D.function:case D.memberFunction:case D.constructSignature:case D.callSignature:case D.indexSignature:return i.Mj.CompletionItemKind.Function;case D.enum:return i.Mj.CompletionItemKind.Enum;case D.module:return i.Mj.CompletionItemKind.Module;case D.class:return i.Mj.CompletionItemKind.Class;case D.interface:return i.Mj.CompletionItemKind.Interface;case D.warning:return i.Mj.CompletionItemKind.File}return i.Mj.CompletionItemKind.Property},t.createDocumentationString=function(e){var t=h(e.documentation);if(e.tags)for(var n=0,r=e.tags;n<r.length;n++){t+="\n\n"+w(r[n])}return t},t}(b);function w(e){var t="*@"+e.name+"*";if("param"===e.name&&e.text){var n=e.text,r=n[0],i=n.slice(1);t+="`"+r.text+"`",i.length>0&&(t+=" \u2014 "+i.map((function(e){return e.text})).join(" "))}else Array.isArray(e.text)?t+=" \u2014 "+e.text.map((function(e){return e.text})).join(" "):e.text&&(t+=" \u2014 "+e.text);return t}var S=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.signatureHelpTriggerCharacters=["(",","],t}return l(t,e),t._toSignatureHelpTriggerReason=function(e){switch(e.triggerKind){case i.Mj.SignatureHelpTriggerKind.TriggerCharacter:return e.triggerCharacter?e.isRetrigger?{kind:"retrigger",triggerCharacter:e.triggerCharacter}:{kind:"characterTyped",triggerCharacter:e.triggerCharacter}:{kind:"invoked"};case i.Mj.SignatureHelpTriggerKind.ContentChange:return e.isRetrigger?{kind:"retrigger"}:{kind:"invoked"};case i.Mj.SignatureHelpTriggerKind.Invoke:default:return{kind:"invoked"}}},t.prototype.provideSignatureHelp=function(e,n,r,i){return f(this,void 0,void 0,(function(){var r,o,s,a,u;return p(this,(function(c){switch(c.label){case 0:return r=e.uri,o=e.getOffsetAt(n),[4,this._worker(r)];case 1:return s=c.sent(),e.isDisposed()?[2]:[4,s.getSignatureHelpItems(r.toString(),o,{triggerReason:t._toSignatureHelpTriggerReason(i)})];case 2:return!(a=c.sent())||e.isDisposed()?[2]:(u={activeSignature:a.selectedItemIndex,activeParameter:a.argumentIndex,signatures:[]},a.items.forEach((function(e){var t={label:"",parameters:[]};t.documentation={value:h(e.documentation)},t.label+=h(e.prefixDisplayParts),e.parameters.forEach((function(n,r,i){var o=h(n.displayParts),s={label:o,documentation:{value:h(n.documentation)}};t.label+=o,t.parameters.push(s),r<i.length-1&&(t.label+=h(e.separatorDisplayParts))})),t.label+=h(e.suffixDisplayParts),u.signatures.push(t)})),[2,{value:u,dispose:function(){}}])}}))}))},t}(b),k=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.prototype.provideHover=function(e,t,n){return f(this,void 0,void 0,(function(){var n,r,i,o,s,a,u;return p(this,(function(c){switch(c.label){case 0:return n=e.uri,r=e.getOffsetAt(t),[4,this._worker(n)];case 1:return i=c.sent(),e.isDisposed()?[2]:[4,i.getQuickInfoAtPosition(n.toString(),r)];case 2:return!(o=c.sent())||e.isDisposed()?[2]:(s=h(o.documentation),a=o.tags?o.tags.map((function(e){return w(e)})).join("  \n\n"):"",u=h(o.displayParts),[2,{range:this._textSpanToRange(e,o.textSpan),contents:[{value:"```typescript\n"+u+"\n```\n"},{value:s+(a?"\n\n"+a:"")}]}])}}))}))},t}(b),x=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.prototype.provideDocumentHighlights=function(e,t,n){return f(this,void 0,void 0,(function(){var n,r,o,s,a=this;return p(this,(function(u){switch(u.label){case 0:return n=e.uri,r=e.getOffsetAt(t),[4,this._worker(n)];case 1:return o=u.sent(),e.isDisposed()?[2]:[4,o.getOccurrencesAtPosition(n.toString(),r)];case 2:return!(s=u.sent())||e.isDisposed()?[2]:[2,s.map((function(t){return{range:a._textSpanToRange(e,t.textSpan),kind:t.isWriteAccess?i.Mj.DocumentHighlightKind.Write:i.Mj.DocumentHighlightKind.Text}}))]}}))}))},t}(b),C=function(e){function t(t,n){var r=e.call(this,n)||this;return r._libFiles=t,r}return l(t,e),t.prototype.provideDefinition=function(e,t,n){return f(this,void 0,void 0,(function(){var n,r,o,s,a,u,c,l,d;return p(this,(function(f){switch(f.label){case 0:return n=e.uri,r=e.getOffsetAt(t),[4,this._worker(n)];case 1:return o=f.sent(),e.isDisposed()?[2]:[4,o.getDefinitionAtPosition(n.toString(),r)];case 2:return!(s=f.sent())||e.isDisposed()?[2]:[4,this._libFiles.fetchLibFilesIfNecessary(s.map((function(e){return i.Sf.parse(e.fileName)})))];case 3:if(f.sent(),e.isDisposed())return[2];for(a=[],u=0,c=s;u<c.length;u++)l=c[u],(d=this._libFiles.getOrCreateModel(l.fileName))&&a.push({uri:d.uri,range:this._textSpanToRange(d,l.textSpan)});return[2,a]}}))}))},t}(b),M=function(e){function t(t,n){var r=e.call(this,n)||this;return r._libFiles=t,r}return l(t,e),t.prototype.provideReferences=function(e,t,n,r){return f(this,void 0,void 0,(function(){var n,r,o,s,a,u,c,l,d;return p(this,(function(f){switch(f.label){case 0:return n=e.uri,r=e.getOffsetAt(t),[4,this._worker(n)];case 1:return o=f.sent(),e.isDisposed()?[2]:[4,o.getReferencesAtPosition(n.toString(),r)];case 2:return!(s=f.sent())||e.isDisposed()?[2]:[4,this._libFiles.fetchLibFilesIfNecessary(s.map((function(e){return i.Sf.parse(e.fileName)})))];case 3:if(f.sent(),e.isDisposed())return[2];for(a=[],u=0,c=s;u<c.length;u++)l=c[u],(d=this._libFiles.getOrCreateModel(l.fileName))&&a.push({uri:d.uri,range:this._textSpanToRange(d,l.textSpan)});return[2,a]}}))}))},t}(b),j=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.prototype.provideDocumentSymbols=function(e,t){return f(this,void 0,void 0,(function(){var t,n,r,o,s,a=this;return p(this,(function(u){switch(u.label){case 0:return t=e.uri,[4,this._worker(t)];case 1:return n=u.sent(),e.isDisposed()?[2]:[4,n.getNavigationBarItems(t.toString())];case 2:return!(r=u.sent())||e.isDisposed()?[2]:(o=function(t,n,r){var s={name:n.text,detail:"",kind:F[n.kind]||i.Mj.SymbolKind.Variable,range:a._textSpanToRange(e,n.spans[0]),selectionRange:a._textSpanToRange(e,n.spans[0]),tags:[]};if(r&&(s.containerName=r),n.childItems&&n.childItems.length>0)for(var u=0,c=n.childItems;u<c.length;u++){var l=c[u];o(t,l,s.name)}t.push(s)},s=[],r.forEach((function(e){return o(s,e)})),[2,s])}}))}))},t}(b),D=function(){function e(){}return e.unknown="",e.keyword="keyword",e.script="script",e.module="module",e.class="class",e.interface="interface",e.type="type",e.enum="enum",e.variable="var",e.localVariable="local var",e.function="function",e.localFunction="local function",e.memberFunction="method",e.memberGetAccessor="getter",e.memberSetAccessor="setter",e.memberVariable="property",e.constructorImplementation="constructor",e.callSignature="call",e.indexSignature="index",e.constructSignature="construct",e.parameter="parameter",e.typeParameter="type parameter",e.primitiveType="primitive type",e.label="label",e.alias="alias",e.const="const",e.let="let",e.warning="warning",e}(),F=Object.create(null);F[D.module]=i.Mj.SymbolKind.Module,F[D.class]=i.Mj.SymbolKind.Class,F[D.enum]=i.Mj.SymbolKind.Enum,F[D.interface]=i.Mj.SymbolKind.Interface,F[D.memberFunction]=i.Mj.SymbolKind.Method,F[D.memberVariable]=i.Mj.SymbolKind.Property,F[D.memberGetAccessor]=i.Mj.SymbolKind.Property,F[D.memberSetAccessor]=i.Mj.SymbolKind.Property,F[D.variable]=i.Mj.SymbolKind.Variable,F[D.const]=i.Mj.SymbolKind.Variable,F[D.localVariable]=i.Mj.SymbolKind.Variable,F[D.variable]=i.Mj.SymbolKind.Variable,F[D.function]=i.Mj.SymbolKind.Function,F[D.localFunction]=i.Mj.SymbolKind.Function;var I,P,L=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t._convertOptions=function(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:r.Smart,NewLineCharacter:"\n",InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}},t.prototype._convertTextChanges=function(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}},t}(b),T=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.prototype.provideDocumentRangeFormattingEdits=function(e,t,n,r){return f(this,void 0,void 0,(function(){var r,i,o,s,a,u=this;return p(this,(function(c){switch(c.label){case 0:return r=e.uri,i=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),o=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),[4,this._worker(r)];case 1:return s=c.sent(),e.isDisposed()?[2]:[4,s.getFormattingEditsForRange(r.toString(),i,o,L._convertOptions(n))];case 2:return!(a=c.sent())||e.isDisposed()?[2]:[2,a.map((function(t){return u._convertTextChanges(e,t)}))]}}))}))},t}(L),A=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),Object.defineProperty(t.prototype,"autoFormatTriggerCharacters",{get:function(){return[";","}","\n"]},enumerable:!1,configurable:!0}),t.prototype.provideOnTypeFormattingEdits=function(e,t,n,r,i){return f(this,void 0,void 0,(function(){var i,o,s,a,u=this;return p(this,(function(c){switch(c.label){case 0:return i=e.uri,o=e.getOffsetAt(t),[4,this._worker(i)];case 1:return s=c.sent(),e.isDisposed()?[2]:[4,s.getFormattingEditsAfterKeystroke(i.toString(),o,n,L._convertOptions(r))];case 2:return!(a=c.sent())||e.isDisposed()?[2]:[2,a.map((function(t){return u._convertTextChanges(e,t)}))]}}))}))},t}(L),O=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.prototype.provideCodeActions=function(e,t,n,r){return f(this,void 0,void 0,(function(){var r,i,o,s,a,u,c,l=this;return p(this,(function(d){switch(d.label){case 0:return r=e.uri,i=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),o=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),s=L._convertOptions(e.getOptions()),a=n.markers.filter((function(e){return e.code})).map((function(e){return e.code})).map(Number),[4,this._worker(r)];case 1:return u=d.sent(),e.isDisposed()?[2]:[4,u.getCodeFixesAtPosition(r.toString(),i,o,a,s)];case 2:return!(c=d.sent())||e.isDisposed()?[2,{actions:[],dispose:function(){}}]:[2,{actions:c.filter((function(e){return 0===e.changes.filter((function(e){return e.isNewFile})).length})).map((function(t){return l._tsCodeFixActionToMonacoCodeAction(e,n,t)})),dispose:function(){}}]}}))}))},t.prototype._tsCodeFixActionToMonacoCodeAction=function(e,t,n){for(var r=[],i=0,o=n.changes;i<o.length;i++)for(var s=0,a=o[i].textChanges;s<a.length;s++){var u=a[s];r.push({resource:e.uri,edit:{range:this._textSpanToRange(e,u.span),text:u.newText}})}return{title:n.description,edit:{edits:r},diagnostics:t.markers,kind:"quickfix"}},t}(L),N=function(e){function t(t,n){var r=e.call(this,n)||this;return r._libFiles=t,r}return l(t,e),t.prototype.provideRenameEdits=function(e,t,n,r){return f(this,void 0,void 0,(function(){var r,i,o,s,a,u,c,l,d,f,g;return p(this,(function(p){switch(p.label){case 0:return r=e.uri,i=r.toString(),o=e.getOffsetAt(t),[4,this._worker(r)];case 1:return s=p.sent(),e.isDisposed()?[2]:[4,s.getRenameInfo(i,o,{allowRenameOfImportPath:!1})];case 2:if(!1===(a=p.sent()).canRename)return[2,{edits:[],rejectReason:a.localizedErrorMessage}];if(void 0!==a.fileToRename)throw new Error("Renaming files is not supported.");return[4,s.findRenameLocations(i,o,!1,!1,!1)];case 3:if(!(u=p.sent())||e.isDisposed())return[2];for(c=[],l=0,d=u;l<d.length;l++){if(f=d[l],!(g=this._libFiles.getOrCreateModel(f.fileName)))throw new Error("Unknown file "+f.fileName+".");c.push({resource:g.uri,edit:{range:this._textSpanToRange(g,f.textSpan),text:n}})}return[2,{edits:c}]}}))}))},t}(b),K=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.prototype.provideInlayHints=function(e,t,n){return f(this,void 0,void 0,(function(){var n,r,i,o,s,a=this;return p(this,(function(u){switch(u.label){case 0:return n=e.uri,r=n.toString(),i=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),o=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),[4,this._worker(n)];case 1:return s=u.sent(),e.isDisposed()?[2,[]]:[4,s.provideInlayHints(r,i,o)];case 2:return[2,u.sent().map((function(t){return d(d({},t),{position:e.getPositionAt(t.position),kind:a._convertHintKind(t.kind)})}))]}}))}))},t.prototype._convertHintKind=function(e){switch(e){case"Parameter":return i.Mj.InlayHintKind.Parameter;case"Type":return i.Mj.InlayHintKind.Type;default:return i.Mj.InlayHintKind.Other}},t}(b);function E(e){P=V(e,"typescript")}function R(e){I=V(e,"javascript")}function H(){return new Promise((function(e,t){if(!I)return t("JavaScript not registered!");e(I)}))}function W(){return new Promise((function(e,t){if(!P)return t("TypeScript not registered!");e(P)}))}function V(e,t){var n=new a(t,e),r=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n.getLanguageServiceWorker.apply(n,e)},o=new v(r);return i.Mj.registerCompletionItemProvider(t,new _(r)),i.Mj.registerSignatureHelpProvider(t,new S(r)),i.Mj.registerHoverProvider(t,new k(r)),i.Mj.registerDocumentHighlightProvider(t,new x(r)),i.Mj.registerDefinitionProvider(t,new C(o,r)),i.Mj.registerReferenceProvider(t,new M(o,r)),i.Mj.registerDocumentSymbolProvider(t,new j(r)),i.Mj.registerDocumentRangeFormattingEditProvider(t,new T(r)),i.Mj.registerOnTypeFormattingEditProvider(t,new A(r)),i.Mj.registerCodeActionProvider(t,new O(r)),i.Mj.registerRenameProvider(t,new N(o,r)),i.Mj.registerInlayHintsProvider(t,new K(r)),new y(o,e,t,r),r}}}]);
//# sourceMappingURL=68.f55651c5.chunk.js.map