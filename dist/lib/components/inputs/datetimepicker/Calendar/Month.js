function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,r,a){return r&&t(e.prototype,r),a&&t(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}var a=function(){function t(){var r,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default";e(this,t),a=null!==(r=a)&&void 0!==r?r:new Date,this.Date=a,this.date=a.getDate(),this.day=a.toLocaleString(n,{weekday:"long"}),this.dayNumber=a.getDay()+1,this.dayShort=a.toLocaleString(n,{weekday:"short"}),this.year=a.getFullYear(),this.yearShort=a.toLocaleString(n,{year:"2-digit"}),this.month=a.toLocaleString(n,{month:"long"}),this.monthShort=a.toLocaleString(n,{month:"short"}),this.monthNumber=a.getMonth()+1,this.timestamp=a.getTime(),this.week=this.getWeekNumber(a)}return r(t,[{key:"getWeekNumber",value:function(e){var t=new Date(e.getFullYear(),0,1),r=(e-t)/864e5;return Math.ceil((r+t.getDay()+1)/7)}},{key:"isToday",get:function(){return this.isEqualTo(new Date)}},{key:"isEqualTo",value:function(e){return(e=e instanceof t?e.Date:e).getDate()===this.date&&e.getMonth()===this.monthNumber-1&&e.getFullYear()===this.year}},{key:"format",value:function(e){return e.replace(/\bYYYY\b/,this.year).replace(/\bYYY\b/,this.yearShort).replace(/\bWW\b/,this.week.toString().padStart(2,"0")).replace(/\bW\b/,this.week).replace(/\bDDDD\b/,this.day).replace(/\bDDD\b/,this.dayShort).replace(/\bDD\b/,this.date.toString().padStart(2,"0")).replace(/\bD\b/,this.date).replace(/\bMMMM\b/,this.month).replace(/\bMMM\b/,this.monthShort).replace(/\bMM\b/,this.monthNumber.toString().padStart(2,"0")).replace(/\bM\b/,this.monthNumber)}}]),t}(),n=function(){function t(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default";e(this,t);var i=new a(r,n),o=[31,28,31,30,31,30,31,31,30,31,30,31];this.lang=n,this.name=i.month,this.number=i.monthNumber,this.year=i.year,this.numberOfDays=o[this.number-1],2===this.number&&(this.numberOfDays+=this.isLeapYear(i.year)?1:0),this[Symbol.iterator]=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=1,e.next=3,this.getDay(t);case 3:if(!(t<this.numberOfDays)){e.next=9;break}return++t,e.next=7,this.getDay(t);case 7:e.next=3;break;case 9:case"end":return e.stop()}}),e,this)}))}return r(t,[{key:"isLeapYear",value:function(e){return e%100==0?e%400==0:e%4==0}},{key:"getDay",value:function(e){return new a(new Date(this.year,this.number-1,e),this.lang)}}]),t}();export{n as default};
