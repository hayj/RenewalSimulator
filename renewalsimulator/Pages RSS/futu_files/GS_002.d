function sirData(){this.insertDataURL="js.sddan.com/ID.d?";this.searchKeywords='';this.keywords='';this.partnerID=0;this.siteID=0;this.subID=0;this.requestID='';this.userID='';this.country='';this.getParams={};this.userCat={};this.userIteratorFunc=[];this.customVar={};this.cookieData={};this.hashList={};this.service='';this.u='';this.ts=null;this.welcomeMediaHash='';};sirData.prototype.getDataURL=function(){return 'https://'+this.insertDataURL;};sirData.prototype.definePartner=function(partnerID,siteID,subID){this.partnerID=partnerID;this.siteID=siteID;this.subID=subID;};sirData.prototype.getALlKeywords=function(){return this.searchKeywords+' '+this.keywords;};sirData.prototype.addKeyword=function(keywords){this.keywords+=' '+keywords;};sirData.prototype.addSearchKeyword=function(keywords){this.searchKeywords+=' '+keywords;};sirData.prototype.callUrlIfBlock=function(blockPixelArray,notBlockPixelArray){var isOpera=!!window.opera||navigator.userAgent.indexOf(' OPR/')>=0;var isChrome=!!window.chrome&&!isOpera;var isFirefox=typeof InstallTrigger!=='undefined';if(isChrome||isFirefox){var htmlElem=document.createElement('div');htmlElem.className='AdvertContainer adblock annonces_google barre_adsense adBlock';htmlElem.style.height='1px';htmlElem.style.width='1px';htmlElem.style.opacity='0.1';document.body.appendChild(htmlElem);if(htmlElem.offsetHeight==0){for(var i=0;i<blockPixelArray.length;i++){this.callURL(blockPixelArray[i]);}}
else{for(var i=0;i<notBlockPixelArray.length;i++){this.callURL(notBlockPixelArray[i]);}}
htmlElem.parentNode.removeChild(htmlElem);}};sirData.prototype.httpCall=function(url){if(!url)
return;var i=new Image();i.src=url.substr(0,2048);};sirData.prototype.httpCallList=function(list){for(var c=0;c<list.length;c++){this.httpCall(list[c]);}};sirData.prototype.httpCallWithoutProtocol=function(url){var i=new Image('http://'+url);i.src=url.substr(0,2048);};sirData.prototype.sendData=function(uri){var img=new Image();img.src=this.getDataURL()+uri;};sirData.prototype.getMeta=function(name){var metas=document.getElementsByTagName('meta');for(var x=0,y=metas.length;x<y;x++){if(metas[x].name.toLowerCase()==name){return metas[x].content;}}
return '';};sirData.prototype.sendDataArg=function(args){var uri='';for(key in args){uri+=encodeURIComponent(key)+'='+encodeURIComponent(args[key])+'&';}
this.sendData(uri);};sirData.prototype.getURLKeywords=function(url){var r=new RegExp('^https?://([a-z.-0-9]+)/(.+)$','i');var found=r.exec(url);return '';};sirData.prototype.callURL=function(url){var i=new Image();i.src=url.substr(0,1023);};sirData.prototype.stripAccent=function(str){var rExps=[{re:/[\xC0-\xC6]/g,ch:'A'},{re:/[\xE0-\xE6]/g,ch:'a'},{re:/[\xC8-\xCB]/g,ch:'E'},{re:/[\xE8-\xEB]/g,ch:'e'},{re:/[\xCC-\xCF]/g,ch:'I'},{re:/[\xEC-\xEF]/g,ch:'i'},{re:/[\xD2-\xD6]/g,ch:'O'},{re:/[\xF2-\xF6]/g,ch:'o'},{re:/[\xD9-\xDC]/g,ch:'U'},{re:/[\xF9-\xFC]/g,ch:'u'},{re:/[\xD1]/g,ch:'N'},{re:/[\xF1]/g,ch:'n'}];for(var i=0,len=rExps.length;i<len;i++){str=str.replace(rExps[i].re,rExps[i].ch);}
return str;};sirData.prototype.run=function(){if(arguments.callee.done)return;arguments.callee.done=true;var args={ri:this.requestID,pa:this.partnerID,si:this.siteID,su:this.subID,userID:this.userID,v:1,t:this.stripAccent(document.title).replace(/[^\w -.]/g,'').replace(/[ ]{2,}/g,' ').substr(0,150),k:this.keywords,u:window.location.href,r:document.referrer,s:this.searchKeywords};};sirData.prototype.findHTMLNode=function(nodeInfo){for(i=0;i<nodeInfo.length;i++){if(nodeInfo[i].css==undefined)
return false;var found=this.getElementsBySelector(nodeInfo[i].css);if(found&&found.length>0){if(nodeInfo[i].item==undefined)
for(j=0;j<found.length;j++){this.addKeyword(found[j].text!=undefined?found[j].text:found[j].innerHTML);}
else if(nodeInfo[i].item!=undefined&&found[nodeInfo[i].item]!=undefined)
this.addKeyword(found[nodeInfo[i].item].text!=undefined?found[nodeInfo[i].item].text:found[nodeInfo[i].item].innerHTML);}
return false;}};sirData.prototype.getElementsBySelector=function(all_selectors){var selected=[];if(!document.getElementsByTagName)return selected;all_selectors=all_selectors.replace(/\s*([^\w])\s*/g,"$1");var selectors=all_selectors.split(",");var getElements=function(context,tag){if(!tag)tag='*';var found=new Array;for(var a=0,len=context.length;con=context[a],a<len;a++){var eles;if(tag=='*')eles=con.all?con.all:con.getElementsByTagName("*");else eles=con.getElementsByTagName(tag);for(var b=0,leng=eles.length;b<leng;b++){found.push(eles[b]);}}
return found;};COMMA:for(var i=0,len1=selectors.length;selector=selectors[i],i<len1;i++){var context=new Array(document);var inheriters=selector.split(" ");SPACE:for(var j=0,len2=inheriters.length;element=inheriters[j],j<len2;j++){var left_bracket=element.indexOf("[");var right_bracket=element.indexOf("]");var pos=element.indexOf("#");if(pos+1&&!(pos>left_bracket&&pos<right_bracket)){var parts=element.split("#");var tag=parts[0];var id=parts[1];var ele=document.getElementById(id);if(!ele||(tag&&ele.nodeName.toLowerCase()!=tag)){continue COMMA;}
context=new Array(ele);continue SPACE;}
pos=element.indexOf(".");if(pos+1&&!(pos>left_bracket&&pos<right_bracket)){var parts=element.split('.');var tag=parts[0];var class_name=parts[1];var found=getElements(context,tag);context=new Array;for(var l=0,len=found.length;fnd=found[l],l<len;l++){if(fnd.className&&fnd.className.match(new RegExp('(^|\s)'+class_name+'(\s|$)')))context.push(fnd);}
continue SPACE;}
if(element.indexOf('[')+1){if(element.match(/^(\w*)\[(\w+)([=~\|\^\$\*]?)=?['"]?([^\]'"]*)['"]?\]$/)){var tag=RegExp.$1;var attr=RegExp.$2;var operator=RegExp.$3;var value=RegExp.$4;}
var found=getElements(context,tag);context=new Array;for(var l=0,len=found.length;fnd=found[l],l<len;l++){if(operator=='='&&fnd.getAttribute(attr)!=value)continue;if(operator=='~'&&!fnd.getAttribute(attr).match(new RegExp('(^|\\s)'+value+'(\\s|$)')))continue;if(operator=='|'&&!fnd.getAttribute(attr).match(new RegExp('^'+value+'-?')))continue;if(operator=='^'&&fnd.getAttribute(attr).indexOf(value)!=0)continue;if(operator=='$'&&fnd.getAttribute(attr).lastIndexOf(value)!=(fnd.getAttribute(attr).length-value.length))continue;if(operator=='*'&&!(fnd.getAttribute(attr).indexOf(value)+1))continue;else if(!fnd.getAttribute(attr))continue;context.push(fnd);}
continue SPACE;}
var found=getElements(context,element);context=found;}
for(var o=0,len=context.length;o<len;o++){selected.push(context[o]);}}
return selected;};sirData.prototype.addAxciomTag=function(account_id){var tag=document.createElement('iframe');tag.name='_rlcdn';tag.width=0;tag.height=0;tag.src='https://rc.rlcdn.com/'+account_id+'.html';tag.frameborder=0;tag.style.display='none';this.appendElemToBody(tag);};sirData.prototype.addPixelInIframe=function(url){var tag=document.createElement('iframe');tag.width=0;tag.height=0;tag.src='https://ct.sddan.com/CT.d?imgUrl='+encodeURIComponent(url);tag.frameborder=0;tag.style.display='none';this.appendElemToBody(tag);};sirData.prototype.addIframeInIframe=function(url){var tag=document.createElement('iframe');tag.width=0;tag.height=0;tag.src='https://ct.sddan.com/CT.d?iframeUrl='+encodeURIComponent(url);tag.frameborder=0;tag.style.display='none';this.appendElemToBody(tag);};sirData.prototype.appendElemToBody=function(elem){if(document.getElementsByTagName('body').length>0){document.getElementsByTagName('body')[0].appendChild(elem);return;}
var scripts=document.getElementsByTagName("script");if(scripts.length>0&&scripts[0].parentNode!==undefined&&scripts[0].parentNode!=null){scripts[0].parentNode.appendChild(elem);}};sirData.prototype.getUserID=function(){return this.userID;};sirData.prototype.getPartnerID=function(){return this.partnerID;};sirData.prototype.setService=function(service){this.service=service;};sirData.prototype.getService=function(){return this.service;};sirData.prototype.setCountry=function(country){this.country=country;};sirData.prototype.getCountry=function(){return this.country;};sirData.prototype.setCity=function(city){this.city=city;};sirData.prototype.getCity=function(){return this.city;};sirData.prototype.setHash=function(type,value){this.hashList[type]=value;};sirData.prototype.getHash=function(type){return this.hashList[type]?this.hashList[type]:false;};sirData.prototype.setCookieData=function(data){this.cookieData=data;};sirData.prototype.getCookie=function(name){return this.cookieData[name]?this.cookieData[name]:false;};sirData.prototype.setGetParams=function(params){this.getParams=params;};sirData.prototype.getGetParams=function(){return this.getParams;};sirData.prototype.getGetParam=function(paramName){return this.getParams[paramName]!==undefined?this.getParams[paramName]:false;};sirData.prototype.getIntGetParam=function(paramName){var val=this.getGetParam(paramName);if(!val)
return false;val.replace(',','.').replace(/[^0-9.]/,'');return val?parseFloat(val):false;};sirData.prototype.getUserCat=function(catID){return this.userCat[catID]!==undefined?this.userCat[catID]:false;};sirData.prototype.setUserData=function(userData){this.userData=userData;this.userCat={};for(var i=0;i<userData.categories.length;i++){this.userCat[userData.categories[i].id]=userData.categories[i].cat;}};sirData.prototype.getUserCats=function(){return this.userCat;};sirData.prototype.getUrl=function(){if(this.getGetParam('u'))
return this.getGetParam('u');if(this.getGetParam('r'))
return this.getGetParam('r');return this.u;};sirData.prototype.addUserCatIterator=function(func,beforeExec,afterExec){this.userIteratorFunc.push([func,beforeExec,afterExec]);};sirData.prototype.executeUserCatIteratorFunc=function(){for(var c=0;c<this.userIteratorFunc.length;c++){if(this.userIteratorFunc[c][1])
this.userIteratorFunc[c][1]();}
for(var catID in this.userCat){for(var c=0;c<this.userIteratorFunc.length;c++)
if(this.userIteratorFunc[c][0])
this.userIteratorFunc[c][0](catID,this.userCat[catID]);}
for(var c=0;c<this.userIteratorFunc.length;c++){if(this.userIteratorFunc[c][2])
this.userIteratorFunc[c][2]();}};var _sdAD=new sirData();_sdAD.insertDataURL='/GS.d?';_sdAD.userID="20210412_73c762d4ab7aede7de6f8f7a4772fe8e";_sdAD.partner_id="22284";_sdAD.setService('GS.d');_sdAD.setGetParams({"c":"TiAyr","cmp":"0","cookieless_ignore":"1","fb_consent":"1","gdpr":"1","gdpr_consent":"CPFQ7MZPFQ7MZBcAIBENBXCgAP_AAH_AAAqIILtf_X_fbX9j-_59f_t0eY1P9_r_v-Qzjhfds-8FyL_W_L0X52E7NF36pq4KuR4ku3bBIQNlHMnUTUmwaokVrTPsak2Mr6NKJ7LkinsZO2dYGHtPn91TuZKZr_7s_9fz3z-v_t__79f3_-3_3_v59X_--_-_V399wAAAAAAAAAAAAAAAACC4BJhqXgAWYljgSTRpVCiBCFYSHQCgAooBhaJrAAgcFOysAj1BAwAQmoCMCIEGIKMGAQACAQBIREBIAWCARAEQCAAEAKkBCAAiYBBYAWBgEAAoBoWIEUAQgSEGRwVHKYEBEi0UE8lYAlF3sYYQhlFgBQKP6KjARKAAAAAAAAAAAAAAAAAAAA","globalscope":"false","pa":"22284","r":"https://www.google.com/","rand":"1631290430085","si":"6","tbp":"true","u":"https://www.futura-sciences.com/flux-rss/"});_sdAD.setCountry("FR");_sdAD.setCookieData({"SDDAN":"20210412_73c762d4ab7aede7de6f8f7a4772fe8e","csent":"CPFQ7MZPFQ7MZBcAIBENBXCgAP_AAH_AAAqIILtf_X_fbX9j-_59f_t0eY1P9_r_v-Qzjhfds-8FyL_W_L0X52E7NF36pq4KuR4ku3bBIQNlHMnUTUmwaokVrTPsak2Mr6NKJ7LkinsZO2dYGHtPn91TuZKZr_7s_9fz3z-v_t__79f3_-3_3_v59X_--_-_V399wAAAAAAAAAAAAAAAACC4BJhqXgAWYljgSTRpVCiBCFYSHQCgAooBhaJrAAgcFOysAj1BAwAQmoCMCIEGIKMGAQACAQBIREBIAWCARAEQCAAEAKkBCAAiYBBYAWBgEAAoBoWIEUAQgSEGRwVHKYEBEi0UE8lYAlF3sYYQhlFgBQKP6KjARKAAAAAAAAAAAAAAAAAAAA","d_cm":"1","d_fb":"1","d_pxs":"1","d_rt":"1","d_sh":"1","dc3":"1","eye":"1","map_adobe":"69470918705564882969168418257257125665","map_amazon":"33b1630e857d6ff24b1ce5eba3cf0afc","map_beop":"0b0cdc01-3789-4a0b-b6b0-cc62a0eea454","map_freewheel":"d83d429688c7968441fdd2623d32f3cf","map_google":"EXT|e85fbb7f3eee442796830ca4e2d43b4b","map_nexus":"0","map_smart":"7405798863037593777","map_squadata":"163007507343232953","map_yahoo":"y-NdwUYSdE2oO471mV0yJ0gXYQq.t9JpysXwk-~A","mex":"1","mgm":"1","mregen3":"1","rubi":"1","tb":"1"});_sdAD.setUserData({"id":"20210412_73c762d4ab7aede7de6f8f7a4772fe8e","segments":[{"id":1252,"expiration_time":"2021-11-01T21:04:34.426Z"},{"id":906,"expiration_time":"2021-10-19T19:22:07.716Z"},{"id":1063,"expiration_time":"2021-10-19T19:22:07.716Z"},{"id":1293,"expiration_time":"2021-11-01T21:04:34.426Z"},{"id":3902,"expiration_time":"2021-10-02T21:04:34.426Z"},{"id":4,"expiration_time":"2021-09-16T19:10:40.111Z"},{"id":974,"expiration_time":"2021-10-19T19:22:07.716Z"},{"id":3525,"expiration_time":"2021-10-02T08:30:35.828Z"},{"id":1298,"expiration_time":"2021-10-21T19:42:13.148Z"},{"id":1102,"expiration_time":"2021-10-19T19:22:07.716Z"},{"id":897,"expiration_time":"2021-10-19T19:22:07.716Z"},{"id":2865,"expiration_time":"2022-03-09T17:13:50.151722516+01:00"},{"id":1087,"expiration_time":"2021-10-19T19:22:07.716Z"},{"id":2882,"expiration_time":"2022-03-09T17:13:50.151724719+01:00"},{"id":64,"expiration_time":"2021-11-01T21:04:34.426Z"},{"id":927,"expiration_time":"2021-10-19T19:22:07.716Z"},{"id":980,"expiration_time":"2021-10-19T19:22:07.716Z"},{"id":1146,"expiration_time":"2021-10-19T19:22:07.716Z"},{"id":973,"expiration_time":"2021-10-19T19:22:07.716Z"},{"id":1255,"expiration_time":"2021-11-01T17:35:00.008Z"},{"id":1072,"expiration_time":"2021-10-19T19:22:07.716Z"},{"id":1114,"expiration_time":"2021-10-19T19:22:07.716Z"},{"id":1060,"expiration_time":"2021-10-19T19:22:07.716Z"},{"id":826,"expiration_time":"2021-10-21T19:42:13.148Z"},{"id":1093,"expiration_time":"2021-10-19T19:22:07.716Z"},{"id":909,"expiration_time":"2021-10-19T19:22:07.716Z"},{"id":2980,"expiration_time":"2021-10-19T19:22:07.716Z"},{"id":981,"expiration_time":"2021-10-19T19:22:07.716Z"},{"id":1144,"expiration_time":"2021-09-14T19:18:30.656Z"},{"id":2972,"expiration_time":"2021-10-19T19:22:07.716Z"},{"id":926,"expiration_time":"2021-10-19T19:22:07.716Z"},{"id":2113,"expiration_time":"2022-03-09T17:13:50.151720275+01:00"},{"id":4063,"expiration_time":"2022-03-09T17:13:50.151720983+01:00"},{"id":599,"expiration_time":"2021-10-02T08:30:35.828Z"},{"id":976,"expiration_time":"2021-10-19T19:22:07.716Z"},{"id":1155,"expiration_time":"2021-10-19T19:22:07.716Z"},{"id":1989,"expiration_time":"2021-10-19T19:22:07.716Z"},{"id":1094,"expiration_time":"2021-10-19T19:22:07.716Z"},{"id":918,"expiration_time":"2021-10-19T19:22:07.716Z"},{"id":1067,"expiration_time":"2021-10-19T19:22:07.716Z"},{"id":2099,"expiration_time":"2022-03-09T17:13:50.151720074+01:00"},{"id":3530,"expiration_time":"2022-03-09T17:13:50.151720812+01:00"},{"id":1115,"expiration_time":"2021-10-19T19:22:07.716Z"},{"id":4176,"expiration_time":"2022-03-09T17:13:50.151721151+01:00"},{"id":965,"expiration_time":"2021-10-19T19:22:07.716Z"},{"id":1994,"expiration_time":"2021-10-21T19:42:13.148Z"},{"id":925,"expiration_time":"2021-10-19T19:22:07.716Z"},{"id":1090,"expiration_time":"2021-10-19T19:22:07.716Z"},{"id":1104,"expiration_time":"2021-10-19T19:22:07.716Z"},{"id":899,"expiration_time":"2021-10-19T19:22:07.716Z"},{"id":1170,"expiration_time":"2021-10-19T19:22:07.716Z"},{"id":3028,"expiration_time":"2022-03-09T17:13:50.151720446+01:00"},{"id":1098,"expiration_time":"2021-10-19T19:22:07.716Z"},{"id":2070,"expiration_time":"2022-03-09T17:13:50.151719754+01:00"}],"categories":[{"id":7370,"points":1000,"timestamp":"2021-06-18T19:10:40.111Z"},{"id":3374,"points":1000,"timestamp":"2021-09-04T19:22:07.716Z"},{"id":735,"points":1000,"timestamp":"2021-08-03T08:30:35.828Z"},{"id":5441,"points":1000,"timestamp":"2021-08-03T17:35:00.008Z"},{"id":9144,"points":1000,"timestamp":"2021-09-04T19:22:07.716Z"},{"id":3358,"points":1000,"timestamp":"2021-09-04T19:22:07.716Z"},{"id":3359,"points":1000,"timestamp":"2021-09-04T19:22:07.716Z"},{"id":3320,"points":1000,"timestamp":"2021-09-04T19:22:07.716Z"},{"id":3337,"points":1000,"timestamp":"2021-09-04T19:22:07.716Z"},{"id":3273,"points":1000,"timestamp":"2021-09-04T19:22:07.716Z"},{"id":3342,"points":1000,"timestamp":"2021-09-04T19:22:07.716Z"},{"id":3124,"points":1000,"timestamp":"2021-09-04T19:22:07.716Z"},{"id":3255,"points":1000,"timestamp":"2021-09-04T19:22:07.716Z"},{"id":3349,"points":1000,"timestamp":"2021-09-04T19:22:07.716Z"},{"id":3381,"points":1000,"timestamp":"2021-06-16T19:18:30.656Z"},{"id":7322,"points":1000,"timestamp":"2021-07-23T19:42:13.148Z"},{"id":3131,"points":1000,"timestamp":"2021-09-04T19:22:07.716Z"},{"id":3373,"points":1000,"timestamp":"2021-09-04T19:22:07.716Z"},{"id":3357,"points":1000,"timestamp":"2021-09-04T19:22:07.716Z"},{"id":3080,"points":1000,"timestamp":"2021-09-04T19:22:07.716Z"},{"id":3329,"points":1000,"timestamp":"2021-09-04T19:22:07.716Z"},{"id":3128,"points":1000,"timestamp":"2021-09-04T19:22:07.716Z"},{"id":9114,"points":1000,"timestamp":"2021-09-04T19:22:07.716Z"},{"id":3084,"points":1000,"timestamp":"2021-09-04T19:22:07.716Z"},{"id":3064,"points":1000,"timestamp":"2021-09-04T19:22:07.716Z"},{"id":3353,"points":1000,"timestamp":"2021-09-04T19:22:07.716Z"},{"id":3134,"points":1000,"timestamp":"2021-09-04T19:22:07.716Z"},{"id":3123,"points":1000,"timestamp":"2021-09-04T19:22:07.716Z"},{"id":3261,"points":1000,"timestamp":"2021-09-04T19:22:07.716Z"},{"id":3391,"points":1000,"timestamp":"2021-09-04T19:22:07.716Z"},{"id":0,"points":0,"timestamp":"2021-09-04T19:22:07.716Z"},{"id":3350,"points":1000,"timestamp":"2021-09-04T19:22:07.716Z"},{"id":3130,"points":1000,"timestamp":"2021-09-04T19:22:07.716Z"},{"id":3326,"points":1000,"timestamp":"2021-09-04T19:22:07.716Z"},{"id":3387,"points":1000,"timestamp":"2021-09-04T19:22:07.716Z"},{"id":5584,"points":1000,"timestamp":"2021-08-03T21:04:34.426Z"},{"id":3248,"points":1000,"timestamp":"2021-09-04T19:22:07.716Z"},{"id":3249,"points":1000,"timestamp":"2021-09-04T19:22:07.716Z"},{"id":3425,"points":1000,"timestamp":"2021-09-04T19:22:07.716Z"},{"id":4878,"points":1000,"timestamp":"2021-09-04T19:22:07.716Z"}],"mapping_key":[{"user_id":"20210412_73c762d4ab7aede7de6f8f7a4772fe8e","name":"Adobe","value":"69470918705564882969168418257257125665","timestamp":"2021-08-26T18:02:53.035Z"},{"user_id":"20210412_73c762d4ab7aede7de6f8f7a4772fe8e","name":"Amazon","value":"33b1630e857d6ff24b1ce5eba3cf0afc","timestamp":"2021-08-26T18:10:31.436Z"},{"user_id":"20210412_73c762d4ab7aede7de6f8f7a4772fe8e","name":"Beop","value":"0b0cdc01-3789-4a0b-b6b0-cc62a0eea454","timestamp":"2021-09-06T11:51:15.182Z"},{"user_id":"20210412_73c762d4ab7aede7de6f8f7a4772fe8e","name":"Freewheel","value":"d83d429688c7968441fdd2623d32f3cf","timestamp":"2021-08-26T17:56:37.823Z"},{"user_id":"20210412_73c762d4ab7aede7de6f8f7a4772fe8e","name":"PA:22066","value":"ZHMAA2Eo+MEAAAAIDt7QAw==","timestamp":"2021-08-27T14:43:13.466Z"},{"user_id":"20210412_73c762d4ab7aede7de6f8f7a4772fe8e","name":"PA:22508","value":"1639206289","timestamp":"2021-09-06T12:04:48.04Z"},{"user_id":"20210412_73c762d4ab7aede7de6f8f7a4772fe8e","name":"Smart","value":"7405798863037593777","timestamp":"2021-08-30T11:30:29.796Z"},{"user_id":"20210412_73c762d4ab7aede7de6f8f7a4772fe8e","name":"Squadata","value":"163007507343232953","timestamp":"2021-08-27T14:58:51.247Z"},{"user_id":"20210412_73c762d4ab7aede7de6f8f7a4772fe8e","name":"Yahoo","value":"y-NdwUYSdE2oO471mV0yJ0gXYQq.t9JpysXwk-~A","timestamp":"2021-08-26T18:14:59.586Z"}],"mapping_keys":[]});_sdAD.u="https://www.futura-sciences.com/flux-rss/";_sdAD.run();_sdAD.addIframeInIframe("https://map.sddan.com/SC.d?mapnames=nexus,ttd,weborama&gdpr=1&gdpr_consent=CPFQ7MZPFQ7MZBcAIBENBXCgAP_AAH_AAAqIILtf_X_fbX9j-_59f_t0eY1P9_r_v-Qzjhfds-8FyL_W_L0X52E7NF36pq4KuR4ku3bBIQNlHMnUTUmwaokVrTPsak2Mr6NKJ7LkinsZO2dYGHtPn91TuZKZr_7s_9fz3z-v_t__79f3_-3_3_v59X_--_-_V399wAAAAAAAAAAAAAAAACC4BJhqXgAWYljgSTRpVCiBCFYSHQCgAooBhaJrAAgcFOysAj1BAwAQmoCMCIEGIKMGAQACAQBIREBIAWCARAEQCAAEAKkBCAAiYBBYAWBgEAAoBoWIEUAQgSEGRwVHKYEBEi0UE8lYAlF3sYYQhlFgBQKP6KjARKAAAAAAAAAAAAAAAAAAAA");_sdAD.httpCall("https://fr-gmtdmp.mookie1.com/t/v2/learn?tagid=V2_308122&src.rand=1631290430&gdpr=1&gdpr_consent=CPFQ7MZPFQ7MZBcAIBENBXCgAP_AAH_AAAqIILtf_X_fbX9j-_59f_t0eY1P9_r_v-Qzjhfds-8FyL_W_L0X52E7NF36pq4KuR4ku3bBIQNlHMnUTUmwaokVrTPsak2Mr6NKJ7LkinsZO2dYGHtPn91TuZKZr_7s_9fz3z-v_t__79f3_-3_3_v59X_--_-_V399wAAAAAAAAAAAAAAAACC4BJhqXgAWYljgSTRpVCiBCFYSHQCgAooBhaJrAAgcFOysAj1BAwAQmoCMCIEGIKMGAQACAQBIREBIAWCARAEQCAAEAKkBCAAiYBBYAWBgEAAoBoWIEUAQgSEGRwVHKYEBEi0UE8lYAlF3sYYQhlFgBQKP6KjARKAAAAAAAAAAAAAAAAAAAA");