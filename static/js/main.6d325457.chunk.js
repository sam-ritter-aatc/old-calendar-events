(this["webpackJsonpcalendar-events"]=this["webpackJsonpcalendar-events"]||[]).push([[0],{109:function(e,t,a){},136:function(e,t){var a=function(e){var t=Object.assign({},e);if(e.Sessions){var a=[];return e.Sessions.forEach((function(e){var n=Object.assign({},t);n.Id=e.Id,n.parentId=t.Id,n.Title=e.Title,n.StartDate=e.StartDate,n.EndDate=e.EndDate,n.StartTimeSpecified=e.StartTimeSpecified,n.EndTimeSpecified=e.EndTimeSpecified,n.isRecurringSession=!0,n.isOrganizedEvent=e.Details&&e.Details.Organizer,delete n.Sessions,a.push(n)})),a}return t};e.exports=function(e){var t=[];return Array.isArray(e)?e.forEach((function(e){var n=a(e);Array.isArray(n)?n.forEach((function(e){t.push(e)})):t.push(n)})):t.push(a(e)),t}},149:function(e,t,a){e.exports=a(308)},154:function(e,t,a){},155:function(e,t,a){},191:function(e,t,a){},221:function(e,t){},223:function(e,t){},240:function(e,t,a){},247:function(e,t,a){},248:function(e,t,a){},29:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return c}));var n=a(6),s=a.n(n),r=a(9),o=a(70),i=a(175),c=function(){var t=Object(r.a)(s.a.mark((function t(a){var n,r,c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("url","https://cors-anywhere.herokuapp.com/https://oauth.wildapricot.org/auth/token"),console.log("key","mf8q984b3zem9x5r6rk19yg37ht6uz"),n="Basic "+new e("APIKEY:mf8q984b3zem9x5r6rk19yg37ht6uz").toString("base64"),r={grant_type:"client_credentials",scope:"auto",obtain_refresh_token:!0},c={headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:n}},t.next=7,o.post("https://cors-anywhere.herokuapp.com/https://oauth.wildapricot.org/auth/token",i.stringify(r),c).then((function(e){a(e.data)})).catch((function(e){console.log("error",e)}));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}).call(this,a(50).Buffer)},307:function(e,t,a){},308:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),r=a(46),o=a.n(r),i=(a(154),a(87)),c=a(12),l=(a(155),a(6)),u=a.n(l),h=a(9),v=a(14),m=a(15),d=a(17),p=a(16),f=a(29),b=function(e){return"https://cors-anywhere.herokuapp.com/https://api.wildapricot.org/v2/accounts/"+e.Permissions[0].AccountId},E=function(e){return e.token_type+" "+e.access_token},g=function(e){return{"Content-Type":"application/json",Authorization:E(e)}},D=a(70),S=function(e){return b(e)+"/events"},O=function(){var e=Object(h.a)(u.a.mark((function e(t,a,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("creating new event",a),e.next=3,D.post(S(t),a,{headers:g(t)}).then((function(e){console.log("RESULT",e),n(e.data)})).catch((function(e){console.log("## Error ##",e),console.log("error",e),n({err:e})}));case 3:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),y=function(){var e=Object(h.a)(u.a.mark((function e(t,a,n,s){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("creating new event",n),e.next=3,D.put(S(t)+"/"+a,n,{headers:g(t)}).then((function(e){console.log("RESULT",e),s(e.data)})).catch((function(e){console.log("## Error ##",e),console.log("error",e),s({err:e})}));case 3:case"end":return e.stop()}}),e)})));return function(t,a,n,s){return e.apply(this,arguments)}}(),j=function(){var e=Object(h.a)(u.a.mark((function e(t,a,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("deleting event",a),e.next=3,D.delete(S(t)+"/"+a,{headers:g(t)}).then((function(e){console.log("RESULT",e),n(e.data)})).catch((function(e){console.log("## Error ##",e),console.log("error",e),n({err:e})}));case 3:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),k=function(){var e=Object(h.a)(u.a.mark((function e(t,a,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("getEventById",a),e.next=3,D({url:S(t)+"/"+a,method:"GET",headers:g(t)}).then((function(e){console.log("RESULT",e),n(e.data)})).catch((function(e){console.log("## Error ##",e),n({})}));case 3:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),T=function(){var e=Object(h.a)(u.a.mark((function e(t,a,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.get(S(t),{headers:g(t),params:{$filter:"StartDate ge "+a}}).then((function(e){n(e.data.Events)})).catch((function(e){console.log("Error",e),n([])}));case 2:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),C=a(136),w=a.n(C),N=function(e,t){var a=Object.assign({},e),n=e.Sessions.filter((function(e){return e.Id===Number(t)}));return console.log("foundSession",n),n&&(a.sessionId=n[0].Id,a.Name=n[0].Title,a.StartDate=n[0].StartDate,a.EndDate=n[0].EndDate),console.log("theEvent",a),a},I=function(e,t,a){return s.a.createElement(c.a,{to:{pathname:e,state:{member:t,eventInfo:a}},push:!0})},x=a(138),A=a(42),L=a(139),R=a(140),H=a(141),z=a(142),F=a(143),P=a.n(F),G=(a(191),a(70)),M=function(){var e=Object(h.a)(u.a.mark((function e(t,a,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.get(b(t)+"/contacts/"+a,{headers:{"Content-Type":"application/json",Authorization:E(t)}}).then((function(e){var t={};t.id=e.data.Id,t.firstName=e.data.FirstName,t.lastName=e.data.LastName,t.email=e.data.Email,t.displayName=e.data.DisplayName,t.isAdmin=U(e.data.FieldValues),t.url=e.data.Url,n(t)})).catch((function(e){n(null)}));case 2:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),U=function(e){var t=e.filter((function(e){return"AdminRole"===e.SystemCode}));return t.length>0&&t[0].Value.length>0},V=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).calendarComponentRef=s.a.createRef(),e.state={events:[],member:null,calendarWeekends:!0,waToken:{},showEvent:!1,editEvent:!1},e.createEvent=function(){e.setState({editEvent:!0,eventInfo:{}})},e.handleEventClick=function(t){console.log("going to event",t),e.setState({showEvent:!0,eventInfo:t})},e.handleDateClick=function(t){console.log("DATE CLICKED",t),e.setState({editEvent:!0,eventInfo:t})},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(h.a)(u.a.mark((function e(){var t,a,n=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=P.a.parse(this.props.location.search),console.log("QUERY_PARAMS",this.props.location.search,t),(a=new Date).setFullYear(a.getFullYear()-1),a.setMonth(a.getMonth()-6),console.log("FIRST DATE",a),e.next=8,Object(f.a)((function(e){return n.setState({waToken:e})}));case 8:if(!t.mid||"0"===t.mid){e.next=12;break}return e.next=11,M(this.state.waToken,t.mid,(function(e){n.setState({member:e})}));case 11:console.log("Retrieve Member",this.state.member);case 12:return e.next=14,T(this.state.waToken,a.toISOString(),(function(e){var t=w()(e).map((function(e){return{id:e.Id,title:e.Name.replace("Weekly Workout - ","").replace("Weekly Workout- ",""),start:e.StartDate,end:e.EndDate,Url:e.Url,Tags:e.Tags,backgroundColor:n.getEventColor(e),parentId:e.parentId}}));n.setState({events:t})}));case 14:console.log("EVENTS",this.state.events);case 15:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getEventColor",value:function(e){return/Race/.test(e.Name)?"red":e.Tags&&e.Tags.indexOf("member-event")>-1?"#66CC00":"#3399FF"}},{key:"render",value:function(){return this.state.showEvent?I("showEvent",this.state.member,this.state.eventInfo):this.state.editEvent?I("createEvent",this.state.member,this.state.eventInfo):s.a.createElement("div",{className:"EventCalendar"},s.a.createElement(x.a,{defaultView:"dayGridMonth",firstDay:1,fixedWeekCount:!1,header:{left:"prev today next",center:"title",right:"dayGridMonth,timeGridWeek,listMonth"},plugins:[A.d,L.a,z.a,R.a,H.a],themeSystem:"bootstrap",displayEventTime:!0,selectable:!0,ref:this.calendarComponentRef,weekends:this.state.calendarWeekends,events:this.state.events,dateClick:this.handleDateClick,eventClick:this.handleEventClick}),s.a.createElement("button",{onClick:this.createEvent},"Create Event"))}}]),a}(n.Component),W=(a(109),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{"data-testid":"switchable-text-input",className:this.props.className},s.a.createElement("label",null,this.props.label),this.props.inputFlag?s.a.createElement("input",{type:"text",className:"form-control",value:this.props.value,onChange:function(t){return e.props.onChange(t.target.value)}}):this.props.value)}}]),a}(n.Component)),B=a(144),_=a.n(B),Y=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"loader"},s.a.createElement("h1",null,this.props.name),s.a.createElement("h2",null,"Loading"),s.a.createElement(_.a,{type:"ThreeDots",color:"#2BAD60",height:"100",width:"100"}))}}]),a}(n.Component),q=a(145),J=a.n(q),K=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{"data-testid":"switchable-text-input",className:this.props.className},s.a.createElement("label",null,this.props.label),s.a.createElement("br",null),this.props.displayFlag?s.a.createElement("div",null,J()(this.props.value)):s.a.createElement("div",null))}}]),a}(n.Component),$=(a(240),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={fetch:!0,eventId:"",waToken:{},url:"",event:null,organizer:null},e}return Object(m.a)(a,[{key:"eventDetails",value:function(){var e=Object(h.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(h.a)(u.a.mark((function e(){var t=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.a)((function(e){return t.setState({waToken:e})}));case 2:if(console.log("EVENT DETAILS",this.props.location.state),this.setState({member:this.props.location.state.member,eventInfo:this.props.location.state.eventInfo}),console.log("STATE",this.state),!this.state.eventInfo.event.extendedProps.parentId||!this.state.fetch){e.next=10;break}return e.next=8,k(this.state.waToken,this.state.eventInfo.event.extendedProps.parentId,(function(e){t.setState({event:N(e,t.state.eventInfo.event.id)})}));case 8:e.next=12;break;case 10:return e.next=12,k(this.state.waToken,this.state.eventInfo.event.id,(function(e){t.setState({event:e})}));case 12:if(this.setState({fetch:!1}),console.log("state",this.state),!(this.state.event&&this.state.event.Details&&this.state.event.Details.Organizer)){e.next=18;break}return e.next=17,M(this.state.waToken,this.state.event.Details.Organizer.Id,(function(e){t.setState({organizer:e}),console.log("=====ORG",e,t.state.organizer)}));case 17:console.log("contact",this.state.organizer);case 18:console.log("state",this.state),console.log("CAN EDIT",this.canEdit());case 20:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleEditClick",value:function(){this.setState({editEvent:!0})}},{key:"canEdit",value:function(){return this.state.member&&void 0===this.state.eventInfo.event.extendedProps.parentId&&(this.state.member.isAdmin||this.state.event.Details&&this.state.event.Details.Organizer&&this.state.member.id===this.state.event.Details.Organizer.Id)}},{key:"render",value:function(){var e=this;return this.state.fetch?s.a.createElement(Y,{name:this.props.location.state.name}):this.state.editEvent?I("editEvent",this.state.member,this.state.eventInfo):s.a.createElement("div",null,this.canEdit()&&s.a.createElement("input",{type:"submit",value:"Edit Event",className:"btn btn-primary btn-sm",onClick:function(){return e.handleEditClick()}}),s.a.createElement("h2",null,this.state.event.Name),s.a.createElement(W,{className:"event_id",label:"Event Id: ",value:this.state.event.Id}),s.a.createElement(W,{className:"event-title",label:"Event Name: ",value:this.state.event.Name}),s.a.createElement(W,{className:"event-start",label:"Event Start Date/Time: ",value:this.state.event.StartDate}),s.a.createElement(W,{className:"event-end",label:"Event End Date/Time: ",value:this.state.event.EndDate}),s.a.createElement(W,{className:"location",label:"Event Location: ",value:this.state.event.Location}),this.state.organizer&&s.a.createElement(W,{className:"organizer",label:"Organizer: ",value:this.state.organizer.displayName+"("+this.state.organizer.email+")"}),s.a.createElement(K,{className:"descriptionHtml",label:"Description",value:this.state.event.Details.DescriptionHtml,displayFlag:this.state.event.Details&&this.state.event.Details.DescriptionHtml}))}}]),a}(n.Component)),Q=a(5),X=a(13),Z=a(57),ee=a.n(Z),te=a(58),ae=a.n(te),ne=(a(247),a(34)),se=a.n(ne),re=(a(248),a(148));Object(ne.registerLocale)("en-GB",re.a),Object(ne.setDefaultLocale)("en-GB");var oe=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(v.a)(this,a),n=t.call(this,e),console.log("PROPS",e),n.state={startDate:new Date(n.props.startDate.getTime()),endDate:new Date(n.props.endDate.getTime()),maxDate:n.props.endDate?new Date(new Date(n.props.endDate.getTime()).setHours(23,59,59)):null,minDate:n.props.startDate?new Date(new Date(n.props.startDate.getTime()).setHours(0,0,0)):null},n.onChangeStartDate=n.onChangeStartDate.bind(Object(X.a)(n)),n.onChangeStartTime=n.onChangeStartTime.bind(Object(X.a)(n)),n.onChangeEndTime=n.onChangeEndTime.bind(Object(X.a)(n)),n}return Object(m.a)(a,[{key:"onChangeStartDate",value:function(){var e=Object(h.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new Date(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes()),console.log("Date from component",t,a),e.next=4,this.setState({startDate:a,endDate:new Date(this.state.endDate.setFullYear(t.getFullYear(),t.getMonth(),t.getDate())),minDate:new Date(t.setHours(0,0,0)),maxDate:new Date(t.setHours(23,59,59))});case 4:console.log("DTR STATE",this.state),console.log("CHILD ONCHANGE",t),this.props.onChangeStartDate(this.state.startDate),this.props.onChangeEndDate(this.state.endDate);case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onChangeStartTime",value:function(){var e=Object(h.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(this.state.endDate<this.state.startDate)){e.next=5;break}return e.next=3,this.setState({startDate:t,endDate:t});case 3:e.next=7;break;case 5:return e.next=7,this.setState({startDate:t});case 7:this.props.onChangeStartDate(this.state.startDate),this.props.onChangeEndDate(this.state.endDate),console.log("State after start time change",this.state);case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onChangeEndTime",value:function(e){this.setState({endDate:e}),this.props.onChangeEndDate(e)}},{key:"componentDidUpdate",value:function(e,t,a){this.state.startDate===t.startDate&&this.state.endDate===t.endDate||this.render()}},{key:"render",value:function(){return this.renderComponent()}},{key:"renderComponent",value:function(){var e=this;return s.a.createElement("div",{className:"dateTimeRangeSelector"},s.a.createElement("div",{className:"dateTimeRangeSelector-date"},s.a.createElement("label",null,this.props.dateLabel),s.a.createElement(se.a,{selected:this.props.startDate,placeholderText:"Click to select a date",onChange:function(t){return e.onChangeStartDate(t)}})),s.a.createElement("div",{className:"dateTimeRangeSelector-start"},s.a.createElement("label",null,this.props.startLabel),s.a.createElement(se.a,{selected:this.props.startDate,onChange:function(t){return e.props.onChangeStartDate(t)},showTimeSelect:!0,showTimeSelectOnly:!0,timeIntervals:15,minTime:this.state.minDate,maxTime:this.state.endDate,timeCaption:"Start Time",dateFormat:"h:mm aa"})),s.a.createElement("div",{className:"dateTimeRangeSelector-end"},s.a.createElement("label",null,this.props.endLabel),s.a.createElement(se.a,{selected:this.props.endDate,onChange:function(t){return e.onChangeEndTime(t)},showTimeSelect:!0,showTimeSelectOnly:!0,timeIntervals:15,minTime:this.state.startDate,maxTime:this.state.maxDate,timeCaption:"End Time",dateFormat:"h:mm aa"})))}}]),a}(n.Component),ie=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).handleStartChange=function(){var e=Object(h.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.setState({date:Object(Q.a)(Object(Q.a)({},n.state.date),{},{date:t})});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),console.log("INCOMING PROPS",e),n.state={event:{EventType:"Rsvp",StartDate:"",EndDate:"",Location:"",RegistrationEnabled:!0,EndTimeSpecified:!0,RegistrationsLimit:100,Tags:["member-event"],AccessLevel:"Public",Details:{DescriptionHtml:"",Organizer:{Id:0},AccessControl:{AccessLevel:"Public",AvailableForAnyLevel:!1,AvailableForLevels:[],AvailableForAnyGroup:!1,AvailableForGroups:[]}},Name:""},isEditing:!0,eventInfo:e.location.state.eventInfo,member:e.location.state.member,fetch:!0},n.onSubmit=n.onSubmit.bind(Object(X.a)(n)),n.onChangeEventLocation=n.onChangeEventLocation.bind(Object(X.a)(n)),n.onChangeEventName=n.onChangeEventName.bind(Object(X.a)(n)),n.startDateHandler=n.startDateHandler.bind(Object(X.a)(n)),n.endDateHandler=n.endDateHandler.bind(Object(X.a)(n)),n.handleDelete=n.handleDelete.bind(Object(X.a)(n)),n}return Object(m.a)(a,[{key:"onSubmit",value:function(e){e.preventDefault();var t=Object.assign({},this.state.event);console.log("SAVING EVENT",this.state,t),y(this.state.waToken,this.state.event.Id,this.state.event,(function(e){console.log("UPDATE RESULT",e)})),this.setState({event:{EventType:"Rsvp",StartDate:"",EndDate:"",Location:"",RegistrationEnabled:!0,EndTimeSpecified:!0,RegistrationsLimit:100,Tags:["member-event"],AccessLevel:"Public",Details:{DescriptionHtml:"",Organizer:{Id:0},AccessControl:{AccessLevel:"Public",AvailableForAnyLevel:!1,AvailableForLevels:[],AvailableForAnyGroup:!1,AvailableForGroups:[]}},Name:""}}),this.props.history.push("/?mid=".concat(this.state.member.id))}},{key:"onChangeEventName",value:function(e){this.setState({event:Object(Q.a)(Object(Q.a)({},this.state.event),{},{Name:e.target.value})})}},{key:"onChangeEventLocation",value:function(e){this.setState({event:Object(Q.a)(Object(Q.a)({},this.state.event),{},{Location:e.target.value})})}},{key:"componentDidMount",value:function(){var e=Object(h.a)(u.a.mark((function e(){var t,a=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.a)((function(e){return a.setState({waToken:e})}));case 2:if(console.log("EVENT DETAILS",this.props.location.state),this.setState({member:this.props.location.state.member,eventInfo:this.props.location.state.eventInfo}),console.log("STATE",this.state),!this.state.eventInfo.event||!this.state.fetch){e.next=15;break}if(!this.state.eventInfo.event.extendedProps.parentId||!this.state.fetch){e.next=11;break}return e.next=9,k(this.state.waToken,this.state.eventInfo.event.extendedProps.parentId,(function(e){a.setState({event:N(e,a.state.eventInfo.event.id)})}));case 9:e.next=13;break;case 11:return e.next=13,k(this.state.waToken,this.state.eventInfo.event.id,(function(e){a.setState({event:e})}));case 13:e.next=16;break;case 15:this.state.eventInfo.date&&this.setState({event:Object(Q.a)(Object(Q.a)({},this.state.event),{},{StartDate:new Date(this.state.eventInfo.date)})});case 16:if(this.setState({event:Object(Q.a)(Object(Q.a)({},this.state.event),{},{StartDate:new Date(this.state.event.StartDate)})}),this.setState({event:Object(Q.a)(Object(Q.a)({},this.state.event),{},{EndDate:new Date(this.state.event.EndDate)})}),console.log("===>state",this.state),this.setState({fetch:!1}),this.props.location.state.eventInfo.date&&(t=new Date(this.props.location.state.eventInfo.date.getTime()),this.setState(Object(Q.a)(Object(Q.a)({},this.state.event),{},{startDate:this.props.location.state.eventInfo.date})),this.setState(Object(Q.a)(Object(Q.a)({},this.state.event),{},{endDate:new Date(t.setHours(23,59,59))}))),!(this.state.event&&this.state.event.Details&&this.state.event.Details.Organizer)){e.next=25;break}return e.next=24,M(this.state.waToken,this.state.event.Details.Organizer.Id,(function(e){a.setState({organizer:e}),console.log("=====ORG",e,a.state.organizer)}));case 24:console.log("contact",this.state.organizer);case 25:console.log("state",this.state);case 26:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"startDateHandler",value:function(e){console.log("CreatorState",this.state),this.setState({event:Object(Q.a)(Object(Q.a)({},this.state.event),{},{StartDate:e})})}},{key:"endDateHandler",value:function(e){console.log("CreatorState",this.state),this.setState({event:Object(Q.a)(Object(Q.a)({},this.state.event),{},{EndDate:e})})}},{key:"handleDelete",value:function(){console.log("Deleting Event",this.state.event.Id),j(this.state.waToken,this.state.event.Id,(function(e){console.log("DELETE RESULT",e)})),this.props.history.push("/?mid=".concat(this.state.member.id))}},{key:"render",value:function(){var e=this;return this.state.fetch?s.a.createElement(Y,{name:this.props.location.state.name}):s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"editor"},s.a.createElement("form",{onSubmit:this.onSubmit},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Event Id: "),this.state.event.Id),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Event Name: "),s.a.createElement("input",{type:"text",className:"form-control",value:this.state.event.Name,onChange:this.onChangeEventName})),s.a.createElement("div",{className:"form-group"},s.a.createElement(oe,{dateLabel:"Event Date: ",startLabel:"Start Time: ",endLabel:"End Time: ",startDate:this.state.event.StartDate,endDate:this.state.event.EndDate,onChangeStartDate:this.startDateHandler,onChangeEndDate:this.endDateHandler})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Event Location: "),s.a.createElement("input",{type:"text",className:"form-control",value:this.state.event.Location,onChange:this.onChangeEventLocation})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Description"),s.a.createElement(ee.a,{editor:ae.a,data:this.state.event.Details.DescriptionHtml,onChange:function(t,a){var n=e.state.event.Details;n.DescriptionHtml=a.getData(),e.setState({event:Object(Q.a)(Object(Q.a)({},e.state.event),{},{Details:n})})}})),s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"submit",value:"Save Event",className:"btn btn-primary btn-sm"})),s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"button",value:"Delete Event",className:"btn btn-danger btn-sm",onClick:this.handleDelete})))))}}]),a}(n.Component),ce=(a(307),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(v.a)(this,a),n=t.call(this,e),console.log("INCOMING PROPS",e),n.state={event:{EventType:"Rsvp",StartDate:"",EndDate:"",Location:"",RegistrationEnabled:!0,EndTimeSpecified:!0,RegistrationsLimit:100,Tags:["member-event"],AccessLevel:"Public",Details:{DescriptionHtml:"",Organizer:{Id:0},AccessControl:{AccessLevel:"Public",AvailableForAnyLevel:!1,AvailableForLevels:[],AvailableForAnyGroup:!1,AvailableForGroups:[]}},Name:""},isEditing:!0,eventInfo:e.location.state.eventInfo,member:e.location.state.member,fetch:!0},n.onSubmit=n.onSubmit.bind(Object(X.a)(n)),n.onChangeEventLocation=n.onChangeEventLocation.bind(Object(X.a)(n)),n.onChangeEventName=n.onChangeEventName.bind(Object(X.a)(n)),n.startDateHandler=n.startDateHandler.bind(Object(X.a)(n)),n.endDateHandler=n.endDateHandler.bind(Object(X.a)(n)),n}return Object(m.a)(a,[{key:"onSubmit",value:function(e){e.preventDefault();var t=Object.assign({},this.state.event);t.StartDate=t.StartDate.toISOString(),t.EndDate=t.EndDate.toISOString(),console.log("SAVING EVENT",this.state,t),O(this.state.waToken,t,(function(e){console.log("CREATE RESULT",e)})),this.setState({event:{EventType:"Rsvp",StartDate:"",EndDate:"",Location:"",RegistrationEnabled:!0,EndTimeSpecified:!0,RegistrationsLimit:100,Tags:["member-event"],AccessLevel:"Public",Details:{DescriptionHtml:"",Organizer:{Id:0},AccessControl:{AccessLevel:"Public",AvailableForAnyLevel:!1,AvailableForLevels:[],AvailableForAnyGroup:!1,AvailableForGroups:[]}},Name:""}}),this.props.history.push("/?mid=".concat(this.state.member.id))}},{key:"onChangeEventName",value:function(e){this.setState({event:Object(Q.a)(Object(Q.a)({},this.state.event),{},{Name:e.target.value})})}},{key:"onChangeEventLocation",value:function(e){this.setState({event:Object(Q.a)(Object(Q.a)({},this.state.event),{},{Location:e.target.value})})}},{key:"componentDidMount",value:function(){var e=Object(h.a)(u.a.mark((function e(){var t,a=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.a)((function(e){return a.setState({waToken:e})}));case 2:console.log("EVENT DETAILS",this.props.location.state),this.setState({member:this.props.location.state.member,eventInfo:this.props.location.state.eventInfo}),console.log("STATE",this.state),this.state.eventInfo.date&&(this.setState({event:Object(Q.a)(Object(Q.a)({},this.state.event),{},{StartDate:new Date(new Date(this.state.eventInfo.date).setHours(8,0,0))})}),this.setState({event:Object(Q.a)(Object(Q.a)({},this.state.event),{},{EndDate:new Date(new Date(this.state.eventInfo.date).setHours(20,0,0))})})),this.setState({fetch:!1}),console.log("===>state",this.state),(t=Object.assign({},this.state.event.Details)).Organizer={Id:this.state.member.id},this.setState({event:Object(Q.a)(Object(Q.a)({},this.state.event),{},{Details:t})}),console.log("state",this.state);case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"startDateHandler",value:function(e){console.log("CreatorState-start",this.state),this.setState({event:Object(Q.a)(Object(Q.a)({},this.state.event),{},{StartDate:e})})}},{key:"endDateHandler",value:function(e){console.log("CreatorState-end",this.state),this.setState({event:Object(Q.a)(Object(Q.a)({},this.state.event),{},{EndDate:e})})}},{key:"componentDidUpdate",value:function(e,t,a){this.state.event.StartDate===t.event.StartDate&&this.state.event.EndDate===t.event.EndDate||this.render()}},{key:"render",value:function(){var e=this;return this.state.fetch?s.a.createElement(Y,{name:this.props.location.state.name}):s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"editor"},s.a.createElement("form",{onSubmit:this.onSubmit},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Event Name: "),s.a.createElement("input",{type:"text",className:"form-control",value:this.state.event.Name,onChange:this.onChangeEventName})),s.a.createElement("div",{className:"form-group"},s.a.createElement(oe,{dateLabel:"Event Date: ",startLabel:"Start Time: ",endLabel:"End Time: ",startDate:this.state.event.StartDate,endDate:this.state.event.EndDate,onChangeStartDate:this.startDateHandler,onChangeEndDate:this.endDateHandler})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Event Location: "),s.a.createElement("input",{type:"text",className:"form-control",value:this.state.event.Location,onChange:this.onChangeEventLocation})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Description"),s.a.createElement(ee.a,{editor:ae.a,data:this.state.event.Details.DescriptionHtml,onChange:function(t,a){var n=e.state.event.Details;n.DescriptionHtml=a.getData(),e.setState({event:Object(Q.a)(Object(Q.a)({},e.state.event),{},{Details:n})})}})),s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"submit",value:"Create Event",className:"btn btn-primary btn-sm"})))))}}]),a}(n.Component));var le=function(){return s.a.createElement(i.a,{basename:"/"},s.a.createElement("div",{className:"App container-fluid"},s.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"}),s.a.createElement(c.d,null,s.a.createElement(c.b,{exact:!0,path:"/",component:V}),s.a.createElement(c.b,{exact:!0,path:"/showEvent",component:$}),s.a.createElement(c.b,{exact:!0,path:"/editEvent",component:ie}),s.a.createElement(c.b,{exact:!0,path:"/createEvent",component:ce}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[149,1,2]]]);
//# sourceMappingURL=main.6d325457.chunk.js.map