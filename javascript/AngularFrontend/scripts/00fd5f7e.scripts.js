!function(){"use strict";angular.module("ClubConnectApp",["ui.bootstrap","ngResource","ngRoute"]).config(["$routeProvider","$httpProvider",function(a,b){return b.defaults.useXDomain=!0,b.defaults.withCredentials=!0,a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/clubs",{templateUrl:"views/ClubDirectory.html",controller:"ClubDirectoryCtrl"}).when("/registration",{templateUrl:"views/RegistrationList.html",controller:"RegistrationListCtrl"}).when("/registration/:regid",{templateUrl:"views/ClubRegistration.html",controller:"ClubRegistrationCtrl"}).when("/people",{templateUrl:"views/People.html",controller:"PeopleCtrl"}).when("/reg/:regid",{templateUrl:"views/ProcessRegistration.html",controller:"ProcessRegistrationCtrl"}).when("/registrations",{templateUrl:"views/RegistrationList.html",controller:"RegistrationListCtrl"}).when("/dirdemo/tagselect",{templateUrl:"views/directive-tagselect.html",controller:"DirectiveDemoTagSelectCtrl"}).when("/dirdemo/clubdirectory",{templateUrl:"views/directive-clubdirectory.html",controller:"DirectiveDemoClubDirectoryCtrl"}).otherwise({redirectTo:"/"})}])}.call(this),function(){"use strict";angular.module("ClubConnectApp").directive("tagSelect",function(){return{require:"ngModel",scope:{tags:"=",cols:"@",radio:"=",model:"=ngModel"},replace:!0,template:'<div class="row"><div ng-repeat="group in chunkedTags" class="col-lg-{{12 / cols || 12}}"><ul class="nav nav-pills nav-stacked tagselect"><li ng-repeat="tag in group" ng-class="isSelected(tag) && \'active\' || \'\'"><a href="javascript:void(0)" ng-click="tagClicked(tag)">{{tag.name}}</a></li></ul></div></div>',link:function(a,b,c,d){return a.getVal=function(a){return _.isUndefined(a.val)?a.name:a.val},a.tagClicked=function(b){var c,e,f,g,h;if(c=a.getVal(b),e=d.$viewValue,a.radio)e=c===e?void 0:c;else{e=d.$viewValue,g=!1;for(f in e)h=e[f],h===c&&(e.splice(f,1),g=!0);g||(e||(e=[]),e.push(c))}return d.$setViewValue(e),a.lastSelected=c,void 0},d.$render=function(){var b,c,d,e,f,g,h;if(e=a.tags,!e)return void 0;for(d=0,g=e.length,h=!a.cols||a.cols<1?1:a.cols,c=Math.ceil(g/h),b=[];g>d;)f=d,d+=c,b.push(e.slice(f,+(d-1)+1||9e9));return a.chunkedTags=b,void 0},a.$watch("radio",function(b){var c;return c=d.$viewValue,b&&a.lastSelected?_.contains(c,a.lastSelected)?d.$setViewValue(a.lastSelected):d.$setViewValue(void 0):b||c&&d.$setViewValue([c]),void 0}),a.isSelected=function(b){return a.radio?d.$viewValue===a.getVal(b):_.contains(d.$viewValue,a.getVal(b))},a.$watch("model",function(){return a.$eval(c.ngModel+" = model")}),a.$watch(c.ngModel,function(b){return a.model=b})}}})}.call(this),function(){"use strict";angular.module("ClubConnectApp").directive("clubDirectory",function(){return{scope:{clubs:"=clubs",tags:"=tags",search:"=search"},template:'<ul class="nav nav-tabs nav-stacked"><li ng-repeat="club in clubs | SelectedTagsFilter:tags | filter:search"><a href="javascript:void(0)">{{club.fullname}} <span ng-repeat="tag in club.tags" ng-class="{{ tag == club.electionTag && \'label-success\' || \'\' }}" class="label">{{tag}}</span></a></li></ul>'}})}.call(this),function(){"use strict";angular.module("ClubConnectApp").directive("personSelector",function(){return{scope:{search:"="},template:"<form><input ng-model=\"terms\" placeholder=\"Type here to search for someone\"></form><ul><li ng-repeat=\"result in results |orderBy:['last', 'first', 'middle']\">{{result.last}}, {{result.first}} {{result.middle}} - {{result.username}} - {{result.id}}</li></ul>",controller:["$scope","$element",function(a,b){return a.terms="",a.results=[],b.bind("keyup",function(){return a.$apply(function(){return a.results=a.terms.length<3?[]:a.search(a.terms)})}),void 0}]}})}.call(this),function(){"use strict";angular.module("ClubConnectApp").directive("ckeditor",function(){return{require:"?ngModel",link:function(a,b,c,d){var e;return e=window.CKEDITOR.replace(b[0],{contentsCss:"/themes/bootstrAPP3/css/bootstrap.min.css"}),d?(e.on("pasteState",function(){return a.$apply(function(){return d.$setViewValue(e.getData())})}),d.$render=function(){return e.setData(d.$viewValue)}):void 0}}})}.call(this),function(){"use strict";angular.module("ClubConnectApp").directive("formGroup",function(){return{restrict:"C",link:function(a,b){var c,d,e,f,g,h,i,j;if(d=$(b.parents("form")[0]).attr("name")){for(e=function(a){return"submit"===a.attr("type")||"button"===a.attr("type")||a.is("button")},f=function(){var c,f,g,h,i,j,k;for(b.removeClass("has-error"),k=b.find("input,textarea,select"),i=0,j=k.length;j>i;i++)f=k[i],c=$(f),e(c)||(h=c.attr("name"),g=a[d][h],g.$erroneous&&b.addClass("has-error"));return void 0},g=function(b){var c,g,h,i;return e(b)?void 0:(i=b.attr("name"),c=a[d][i],h=d+"."+i+".$invalid",g=d+"."+i+".$erroneous",b.blur(function(){return a.$apply(function(){return c.$erroneous=c.$invalid?!0:!1})}),a.$watch(h,function(a){return a?void 0:c.$erroneous=!1}),a.$watch(g,function(){return f()}),void 0)},j=b.find("input,textarea,select"),h=0,i=j.length;i>h;h++)c=j[h],g($(c));return void 0}}}})}.call(this),function(){"use strict";angular.module("ClubConnectApp").controller("MainCtrl",["$scope",function(a){return a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}])}.call(this),function(){"use strict";angular.module("ClubConnectApp").controller("DirectiveDemoTagSelectCtrl",["$scope","tagProvider",function(a,b){return a.tsdemo={tags:b.getElectionTags(),isActive:function(a){return!!a.selected},radio:!1}}])}.call(this),function(){"use strict";angular.module("ClubConnectApp").controller("DirectiveDemoClubDirectoryCtrl",["$scope","clubSearch",function(a,b){return a.clubs=b.getAllClubs()}])}.call(this),function(){"use strict";angular.module("ClubConnectApp").controller("ClubDirectoryCtrl",["$scope","sdrConfig","clubService","tagService","userApi",function(a,b,c,d,e){return c.getAllClubs().then(function(b){return a.clubs=b}),d.getSearchTags().then(function(b){return a.tags=b}),a.url={clubreg:b.clubRegUrl},a.user=e.get(),a.forClubDirectory=function(a){return(201340===a.term||201310===a.term||201240===a.term)&&1===a.student_managed},a.orderClubDirectory=function(a){return a.fullname.replace(/^(ASU|Appalachian( State)?( University)?) /i,"")},a.clubRowClicked=function(a){return window.location=a}}])}.call(this),function(){"use strict";angular.module("ClubConnectApp").controller("ClubRegistrationCtrl",["$scope","tagService","clubService","registrationApi","officerRequestApi","userApi","sdrConfig",function(a,b,c,d,e,f,g){var h,i;return a.sdrdata={},a.officerRequest={officers:[]},a.removedOfficers=[],a.loading=!1,a.isNew=function(){var b;return!a.registration.state||"New"===(b=a.registration.state)||"Continuing"===b},a.registration=d.get({registration_id:g.registrationId},function(){return a.officerRequest=e.get({officer_request_id:a.registration.officer_request_id})}),a.user=f.get(),i=function(b){return _.findWhere(a.user.regclubs,{id:b})},a.canLoadOldData=function(){var b,c;return(b=a.registration.organization_id)?(c=i(b),c&&!!c.registration_id):!1},a.loadOldData=function(){var b,c;return a.canLoadOldData()?(b=i(a.registration.organization_id,!0),c=d.get({registration_id:b.registration_id},function(){var b;return b=e.get({officer_request_id:c.officer_request_id},function(){var d,e,f,g;for(delete c.registration_id,delete c.term,delete c.officer_request_id,delete c.updated,delete c.updated_by,delete c.state_updated,delete c.state_updated_by,delete c.state,delete c.history,delete c.allowView,delete c.allowModify,delete c.allowState,delete c.$promise,angular.extend(a.registration,c),g=b.officers,e=0,f=g.length;f>e;e++)d=g[e],delete d.fulfilled;return a.officerRequest.officers=b.officers,console.log(["test",a.registration,a.officerRequest])})})):!1},b.getSearchTags().then(function(b){return a.sdrdata.searchTags=b}),b.getElectionTags().then(function(b){return a.sdrdata.electionTags=b}),b.getMonthTags().then(function(b){return a.sdrdata.monthTags=b}),c.getRoles().then(function(b){var c,d,e,f;for(a.sdrdata.roles=b,a.sdrdata.roleLookup={},f=[],d=0,e=b.length;e>d;d++)c=b[d],f.push(a.sdrdata.roleLookup[c.id]=c.title);return f}),a.ckeditorCss=g.ckeditorCss,c.getAllClubs().then(function(b){return a.sdrdata.clubs=b}),h=function(){return a.registration&&a.clubregistration?a.clubregistration.ein.$setValidity("bank",!a.registration.bank&&!a.registration.ein||!!a.registration.bank&&!!a.registration.ein):void 0},a.$watch("registration.ein",h),a.$watch("registration.bank",h),a.presidentValid=function(){var b,c,d,e;if(!a.officerRequest.officers)return!1;for(e=a.officerRequest.officers,c=0,d=e.length;d>c;c++)if(b=e[c],34===b.role_id)return!0;return!1},a.advisorValid=function(){var b,c,d,e;if(!a.officerRequest.officers)return!1;for(e=a.officerRequest.officers,c=0,d=e.length;d>c;c++)if(b=e[c],53===b.role_id)return!0;return!1},a.newOfficer=function(){return a.officerRequest.officers.push({person_email:"",type_id:-1,admin:!1})},a.removeOfficer=function(b){return a.removedOfficers.push(a.officerRequest.officers.splice(b,1)[0])},a.undoRemoveOfficer=function(b){return a.officerRequest.officers.push(a.removedOfficers.splice(b,1)[0])},a.submit=function(b){var c,d,e,f,g,h,i;for(a.loading=!0,e=a.registration.state,h=a.officerRequest.officers,f=0,g=h.length;g>f;f++)d=h[f],(34===(i=d.role_id)||53===i)&&(d.admin=1);return c=function(b){return function(){return a.loading=!1,a.registration.state=e,alert(b)}},"Approved"===b&&(a.officerRequest.approved=!0),a.isNew()?(a.registration.state=b,a.registration.officers=a.officerRequest.officers,a.registration.$save({},function(){return window.location=a.registration.url},c("Error creating Registration"))):(a.registration.state=b,a.registration.$update({},function(){return a.officerRequest.$update({},function(){return window.location.reload()},c("Error saving Officer Request"))},c("Error saving Registration")))}}])}.call(this),function(){"use strict";angular.module("ClubConnectApp").controller("PeopleCtrl",["$scope","personService",function(a,b){var c,d;return a.results=[],a.search="",d=void 0,c=function(){return a.$apply(function(){return b.search(a.search).then(function(b){return a.results=b})})},a.personRowClicked=function(a){return window.location=a},a.$watch("search",function(){return d&&clearTimeout(d),d=setTimeout(c,500)})}])}.call(this),function(){"use strict";angular.module("ClubConnectApp").controller("RegistrationListCtrl",["$scope","registrationApi",function(a,b){var c,d;return a.sdrdata={},a.sdrdata.registrations=b.query(),a.regRowClicked=function(a){return window.location=a},a.regOrder=function(a){return[a.created,a.term,(a.approved?"a":"b")+(a.presCertified&&a.advCertified?"a":"b")]},c=function(a,b){return _.findWhere(a.history,{state:b})},d=function(a){return a?a.split(" ")[0]:a},a.getStateEffective=function(a,b){var e;return e=c(a,b),e?d(e.effective_date):"No"},a.getClass=function(b,c){var d;return d=a.getStateEffective(b,c),"No"===d?"warning":"success"},a.getWaiting=function(a){return c(a,"Submitted")?c(a,"Approved")?c(a,"Certified")?"":c(a,"PresCertified")?"Advisor":c(a,"AdvCertified")?"President":"Pres/Adv":"CSIL":"Submitter"},a.pr={selected:!1},a.prettyTerm=function(a){var b,c;return a=""+a,c=a.slice(0,4),b=a[4],"1"===b?"Spring, "+c:"2"===b?"Summer 1, "+c:"3"===b?"Summer 2, "+c:"4"===b?"Fall, "+c:a}}])}.call(this),function(){"use strict";angular.module("ClubConnectApp").service("clubService",["$http","$filter","$resource","sdrConfig","errorService",function(a,b,c,d,e){var f,g,h,i,j;return h=function(){return a.jsonp(d.makeSearchUrl()).then(function(a){return a.data},e.handle)},i=function(){return a.jsonp(d.makeRolesUrl()).then(function(a){return a.data},e.handle)},j=function(b){return a({method:"POST",url:d.makeRegSubmitUrl(),data:b,headers:{"Content-type":"application/json"}}).then(function(a){return a.data},e.handle)},g=function(a){return a?a.split(" ")[0]:a},f=function(a){return a.created=g(a.created),a.approved=g(a.approved),a.president?void 0:a.presCertified="data error please contact ESS"},this.user=c(d.userUrl,{},{get:{method:"JSONP",params:{callback:"JSON_CALLBACK"}}}),this.getRoles=i,this.submitReg=j,this.getAllClubs=h,void 0}])}.call(this),function(){"use strict";angular.module("ClubConnectApp").service("tagService",["$http","$q",function(a,b){var c,d,e,f,g;return f=[{name:"January"},{name:"February"},{name:"March"},{name:"April"},{name:"May"},{name:"June"},{name:"July"},{name:"August"},{name:"September"},{name:"October"},{name:"November"},{name:"December"}],g=[{name:"Academics"},{name:"Athletics"},{name:"Business"},{name:"Culture"},{name:"Dance"},{name:"Education"},{name:"Global Learning"},{name:"Visual Art"},{name:"Fraternity"},{name:"Health"},{name:"Honor"},{name:"Humanities"},{name:"Language"},{name:"Leadership"},{name:"Music"},{name:"Multicultural"},{name:"Politics"},{name:"Religion"},{name:"Residence Life"},{name:"Science"},{name:"Service"},{name:"Sexuality"},{name:"Social"},{name:"Sorority"},{name:"Sustainability"},{name:"Technology"},{name:"Theatre"}],c=[{name:"Greek Life (Fraternities and Sororities Only)",val:1},{name:"Honors / Academics",val:2},{name:"Multicultural Affairs",val:3},{name:"Sports",val:4},{name:"Service Initiative",val:5},{name:"Special Interest",val:6}],this.getSearchTags=e=function(){var a;return a=b.defer(),a.resolve(g.slice(0)),a.promise},this.getElectionTags=d=function(){var a;return a=b.defer(),a.resolve(c.slice(0)),a.promise},this.getMonthTags=d=function(){var a;return a=b.defer(),a.resolve(f.slice(0)),a.promise},void 0}])}.call(this),function(){"use strict";angular.module("ClubConnectApp").service("personService",["$http","makePersonSearchUrl","errorService",function(a,b,c){var d;return this.search=d=function(d){return a.jsonp(b(d)).then(function(a){return a.data},c.handle)}}])}.call(this),function(){"use strict";angular.module("ClubConnectApp").service("errorService",["$http",function(){var a;return this.handle=a=function(a){return a.message?alert(a.message):alert("There was a problem communicating with the server.  Please try again later. "+a.status)}}])}.call(this),function(){"use strict";angular.module("ClubConnectApp").provider("registrationApi",function(){var a;return a=null,this.setUri=function(b){return a=b},this.$get=["$resource",function(b){return b(a,{},{get:{method:"JSONP",params:{registration_id:"@registration_id",callback:"JSON_CALLBACK"}},query:{method:"JSONP",isArray:!0,params:{callback:"JSON_CALLBACK"}},update:{method:"POST",params:{registration_id:"@registration_id"}}})}],void 0})}.call(this),function(){"use strict";angular.module("ClubConnectApp").provider("officerRequestApi",function(){var a;return a=null,this.setUri=function(b){return a=b},this.$get=["$resource",function(b){return b(a,{},{get:{method:"JSONP",params:{officer_request_id:"@officer_request_id",callback:"JSON_CALLBACK"}},update:{method:"POST",params:{officer_request_id:"@officer_request_id"}}})}],void 0})}.call(this),function(){"use strict";angular.module("ClubConnectApp").provider("userApi",function(){var a;return a=null,this.setUri=function(b){return a=b},this.$get=["$resource",function(b){return b(a,{},{get:{method:"JSONP",params:{callback:"JSON_CALLBACK"}}})}],void 0})}.call(this),function(){"use strict";angular.module("ClubConnectApp").filter("SelectedTagsFilter",function(){return function(a,b){var c;return c=_.pluck(_.filter(b,function(a){return a.selected}),"name"),c.length?_.filter(a,function(a){return!!_.intersection(a.tags,c).length}):a}})}.call(this);