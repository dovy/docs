(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{383:function(t,e,s){"use strict";s.r(e);var a=s(9),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"date-time-picker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#date-time-picker","aria-hidden":"true"}},[t._v("#")]),t._v(" Date-Time Picker")]),t._v(" "),s("p",[t._v("The Redux Date-Time Picker (DTP) extension is a new way to select dates and times for use in text fields.  The DTP contains several modes based no how you would like to display time and date data.   Include all date-time info in one text box?  No problem!  Split the time into its own text box?  No problem!  Have need to set ranges for dates or times?  We've got you covered there too!")]),t._v(" "),s("h2",{attrs:{id:"getting-started"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-started","aria-hidden":"true"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),s("p",[t._v("To understand how to use extensions, you should read this article on "),s("a",{attrs:{href:"/redux-framework/advanced/loading-extensions/"}},[t._v("Loading Extensions")]),t._v(".  To shortcut the process, you should use the "),s("a",{attrs:{href:"http://generate.reduxframework.com/",target:"_blank"}},[t._v("Redux Generator")]),t._v(".  Please be aware that a working knowledge of PHP and CSS is required to properly use this field. Should you not be familiar with one or the other (or both), please refer to the basic guides to get you started: "),s("a",{attrs:{href:"http://www.php.net/manual/en/tutorial.php"}},[t._v("Getting Started with PHP")]),t._v(", "),s("a",{attrs:{href:"http://www.w3schools.com/css/css_intro.asp"}},[t._v("CSS Introduction")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"arguments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#arguments","aria-hidden":"true"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),s("table",{attrs:{border:"0"}},[s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("Name")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("Type")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("Default")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("Description")])])]),t._v(" "),s("tr",[s("td",[t._v("type")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("'datetime'")]),t._v(" "),s("td",[t._v("Value identifying the field type.")])]),t._v(" "),s("tr",[s("td",[t._v("id")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Unique ID identifying the field. Must be different from all other field IDs.")])]),t._v(" "),s("tr",[s("td",[t._v("title")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Displays title of the field.")])]),t._v(" "),s("tr",[s("td",[t._v("subtitle")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Subtitle display of the field, situated beneath the title.")])]),t._v(" "),s("tr",[s("td",[t._v("desc")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Description of the field, appearing beneath the field control.")])]),t._v(" "),s("tr",[s("td",[t._v("class")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Appends any number of classes to the field's class attribute.")])]),t._v(" "),s("tr",[s("td",[t._v("compiler")]),t._v(" "),s("td",[t._v("bool")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("Flag to run the compiler hook. "),s("a",{attrs:{title:"Integrating a Compiler",href:"/redux-framework/advanced/integrating-a-compiler/"}},[t._v(" More info")])])]),t._v(" "),s("tr",[s("td",[t._v("date-format")]),s("td",[t._v("str")]),s("td",[t._v("'mm-dd-yy'")]),s("td",[t._v("String to assign the format of the date output.  For more info, please see 'Date Formatting' below.")])]),s("tr",[s("td",[t._v("time-format")]),s("td",[t._v("str")]),s("td",[t._v("h:mm TT z'")]),s("td",[t._v("String to assign the format of the time output.  For more info, please see 'Time Formatting' below.")])]),t._v(" "),s("tr",[s("td",[t._v("required")]),t._v(" "),s("td",[t._v("array")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Provide the parent, comparison operator, and value which affects the field's visibility. "),s("a",{staticClass:"more_info",attrs:{href:"/redux-framework/the-basics/the-required-argument/"}},[s("i",{staticClass:"el-icon-circle-arrow-right"}),t._v(" More info")])])]),t._v(" "),s("tr",[s("td",[t._v("date-picker")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("Flag that sets the display or hiding of the date picker portion of the picker window.")])]),t._v(" "),s("tr",[s("td",[t._v("time-picker")]),t._v(" "),s("td",[t._v("bool")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("Flag that sets the display or hiding of the time picker portion of the picker window.")])]),t._v(" "),s("tr",[s("td",[t._v("split")]),t._v(" "),s("td",[t._v("bool")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("Flag to set whether the date and time will be separated into their own fields.  See 'Split Mode' below.")])]),t._v(" "),s("tr",[s("td",[t._v("separator")]),s("td",[t._v("string")]),s("td",[t._v("'  ' (two spaces)")]),s("td",[t._v("String that appears between the date and time when split more is false.  Blanks or characters may be used.")])]),t._v(" "),s("tr",[s("td",[t._v("control-type")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("'slider'")]),t._v(" "),s("td",[t._v("string command determining the interface of the time picker.  Choose between select slider.")])]),t._v(" "),s("tr",[s("td",[t._v("placeholder")]),t._v(" "),s("td",[t._v("string/array")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Text to display in the input when no value is present.  See 'Placeholder Options' below.")])]),t._v(" "),s("tr",[s("td",[t._v("num-of-months")]),t._v(" "),s("td",[t._v("int")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("The number of calendar months to display in the datepicker.")])]),t._v(" "),s("tr",[s("td",[t._v("timezone-list")]),t._v(" "),s("td",[t._v("array")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("An array of timezones values used to populate the timezone select: `array('value' => 'EST', 'label' => 'Eastern')`. The value should be the offset number in minutes. So \"-0400\" which is the format \"-hhmm\", would equate to -240 minutes.")])]),t._v(" "),s("tr",[s("td",[t._v("timezone")]),t._v(" "),s("td",[t._v("int/string")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v('Default timezone to display in the timezone list.  This is the offset in minutes. If null the browser\'s local timezone will be used. If your timezone is "-0400" you would use -240. For backwards compatibility you may pass "-0400", however the timezone is stored in minutes and more reliable.')])]),t._v(" "),s("tr",[s("td",[t._v("hour-min")]),t._v(" "),s("td",[t._v("int")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("The minimum hour allowed for all dates.")])]),t._v(" "),s("tr",[s("td",[t._v("hour-max")]),t._v(" "),s("td",[t._v("int")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("The maximum hour allowed for all dates.")])]),t._v(" "),s("tr",[s("td",[t._v("minute-min")]),t._v(" "),s("td",[t._v("int")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("The minimum minute allowed for all dates.")])]),t._v(" "),s("tr",[s("td",[t._v("minute-max")]),t._v(" "),s("td",[t._v("int")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("The maximum minute allowed for all dates.")])]),t._v(" "),s("tr",[s("td",[t._v("date-min")]),t._v(" "),s("td",[t._v("int/array")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Array of minimum month, day, year values.  See 'Min/Max Date Options' below.")])]),t._v(" "),s("tr",[s("td",[t._v("date-max")]),t._v(" "),s("td",[t._v("int/array")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Array of maximum month, day, year values.  See 'Min/Max Date Options' below.")])]),t._v(" "),s("tr",[s("td",[t._v("hint")]),t._v(" "),s("td",[t._v("array")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Array containing the `content` and optional `title` arguments for the hint tooltip. "),s("a",{staticClass:"more_info",attrs:{title:"Using Hints in Fields",href:"/redux-framework/the-basics/using-hints-in-fields/"}},[s("i",{staticClass:"el-icon-circle-arrow-right"}),t._v("More info")])])])])]),t._v(" "),s("h2",{attrs:{id:"placeholder-optionsthe-placeholder-argument-if-used-must-be-set-in-accordance-with-the-split-argument-consider-the-following-field-arguments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#placeholder-optionsthe-placeholder-argument-if-used-must-be-set-in-accordance-with-the-split-argument-consider-the-following-field-arguments","aria-hidden":"true"}},[t._v("#")]),t._v(" Placeholder OptionsThe placeholder argument, if used, must be set in accordance with the split argument.  Consider the following field arguments.")]),t._v(" "),s("h3",{attrs:{id:"when-split-is-set-to-true"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#when-split-is-set-to-true","aria-hidden":"true"}},[t._v("#")]),t._v(" When "),s("code",[t._v("split")]),t._v(" is set to "),s("code",[t._v("true")])]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'placeholder'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Array")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'date'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Date'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'time'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Time'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"when-split-is-set-to-false"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#when-split-is-set-to-false","aria-hidden":"true"}},[t._v("#")]),t._v(" When "),s("code",[t._v("split")]),t._v(" is set to "),s("code",[t._v("false")])]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'placeholder'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Datetime'")]),t._v("\n")])])]),s("h2",{attrs:{id:"min-max-date-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#min-max-date-options","aria-hidden":"true"}},[t._v("#")]),t._v(" Min/Max Date Options")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("date-min")]),t._v(" and "),s("code",[t._v("date-max")]),t._v(" arguments accept either an integer value or the array value shown in the table below.  When setting the "),s("code",[t._v("date-min")]),t._v(" and "),s("code",[t._v("date-max")]),t._v(" arguments as integers, the "),s("code",[t._v("date-min")]),t._v(" argument begins the selectable range with the number of days beginning at the current date.  Setting it to "),s("code",[t._v("0")]),t._v(" begins the selectable range at today's date, setting it to "),s("code",[t._v("1")]),t._v(" begins on the day after the current date, and so on.  The "),s("code",[t._v("date-max")]),t._v(" argument as an integer sets the number of days in the actual range.  Setting it to "),s("code",[t._v("30")]),t._v(" would create a 30 day range.")]),t._v(" "),s("p",[t._v("Alternatively, setting the "),s("code",[t._v("date-min")]),t._v(" and "),s("code",[t._v("date-max")]),t._v(" ranges as an array of month, day, and year values allows you to select a date specific range at any point in the calender.")]),t._v(" "),s("table",{attrs:{border:"0"}},[s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("Name")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("Type")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("Default")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("Description")])])]),t._v(" "),s("tr",[s("td",[t._v("month")]),t._v(" "),s("td",[t._v("int")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("The one or two digit integer expressing the month.")])]),t._v(" "),s("tr",[s("td",[t._v("day")]),t._v(" "),s("td",[t._v("int")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("The one or two digit integer expressing the day.")])]),t._v(" "),s("tr",[s("td",[t._v("year")]),t._v(" "),s("td",[t._v("int")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("The four digit integer expressing the year.")])])])]),t._v(" "),s("h2",{attrs:{id:"split-mode-when-split-mode-is-set-to-true"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#split-mode-when-split-mode-is-set-to-true","aria-hidden":"true"}},[t._v("#")]),t._v(" Split Mode#### When "),s("code",[t._v("split")]),t._v(" mode is set to "),s("code",[t._v("true")]),t._v(":"),s("a",{attrs:{href:"http://docs.reduxframework.com/wp-content/uploads/sites/4/2014/08/dtp_split.png"}},[s("img",{staticClass:"alignnone size-full wp-image-578",attrs:{src:"http://docs.reduxframework.com/wp-content/uploads/sites/4/2014/08/dtp_split.png",alt:"dtp_split",height:"73",width:"607"}})])]),t._v(" "),s("p",[t._v("When "),s("code",[t._v("split")]),t._v(" mode is set to "),s("code",[t._v("false")]),t._v(":\n"),s("a",{attrs:{href:"http://docs.reduxframework.com/wp-content/uploads/sites/4/2014/08/dtp_nosplit.png"}},[s("img",{staticClass:"alignnone size-full wp-image-577",attrs:{src:"http://docs.reduxframework.com/wp-content/uploads/sites/4/2014/08/dtp_nosplit.png",alt:"dtp_nosplit",height:"76",width:"605"}})])]),t._v(" "),s("h2",{attrs:{id:"example-declaration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-declaration","aria-hidden":"true"}},[t._v("#")]),t._v(" Example Declaration")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'id'")]),t._v("            "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'opt-date-time'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'type'")]),t._v("          "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'datetime'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Date/Time Picker'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'subtitle'")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Date/Time Picker extension'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'split'")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'separator'")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("' @ '")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Optional timezone list")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'timezone-list'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'value'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'label'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Eastern'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'value'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("360")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'label'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Central'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'value'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("420")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'label'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Moutain'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'value'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("480")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'label'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Pacific'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Alternative method to display time zone data")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'timezone-list' => array(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     array('value' => 'EST', 'label' => 'Eastern'),")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     array('value' => 'CST', 'label' => 'Central'),")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     array('value' => 'GMT', 'label' => 'Moutain'),")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     array('value' => 'PST', 'label' => 'Pacific')")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ),")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'timezone'")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'-300'")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Optional Min/Max hour values")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'hour-min'")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'hour-max'")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Optional Min/Max minute values")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'minute-min'")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'minute-max'")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Optional Min/Max date values.")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Creates a selectable date range between the current date ")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// and 30 days from the current date.")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'date-min'")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'date-max'")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Alternative Min/Max date values.")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Selects a selectable date range between 10/5/2014 to 11/15/2014")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'date-min'      => array(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     'month' => 10,")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     'day'   => 5,")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     'year'  => 2014")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ),")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'date-max'      =>  array(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     'month' => 11,")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     'day'   => 15,")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     'year'  => 2014")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// )")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("h3",{attrs:{id:"example-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-usage","aria-hidden":"true"}},[t._v("#")]),t._v(" Example Usage")]),t._v(" "),s("p",[t._v("This example in based on the example usage provided above. Be sure to change "),s("code",[t._v("$redux_demo")]),t._v(" to the value you specified in your "),s("code",[t._v('<a href="/redux-framework/arguments/opt_name/" title="opt_name">opt_name</a>')]),t._v(" argument.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("global")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux_demo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// When split mode is set to false.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Datetime output: '")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux_demo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'opt_date-time'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// When split mode is set to true.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Date output: '")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux_demo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'opt-date-time'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'date'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Time output: '")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux_demo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'opt-date-time'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'time'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"date-formatting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#date-formatting","aria-hidden":"true"}},[t._v("#")]),t._v(" Date Formatting")]),t._v(" "),s("p",[t._v("Format a date into a string value with a specified format. The format can be combinations of the following:")]),t._v(" "),s("pre",[s("code",[t._v("    <ul><li><strong>d</strong> - day of month (no leading zero)</li><li><strong>dd</strong> - day of month (two digit)</li><li><strong>o</strong> - day of the year (no leading zeros)</li><li><strong>oo</strong> - day of the year (three digit)</li><li><strong>D</strong> - day name short</li><li><strong>DD</strong> - day name long</li><li><strong>m</strong> - month of year (no leading zero)</li><li><strong>mm</strong> - month of year (two digit)</li><li><strong>M</strong> - month name short</li><li><strong>MM</strong> - month name longy - year (two digit)</li><li><strong>y</strong> - year (two digit)</li><li><strong>yy</strong> - year (four digit)</li><li><strong>@</strong> - Unix timestamp (ms since 01/01/1970)</li><li><strong>!</strong> - Windows ticks (100ns since 01/01/0001)</li><li><strong>'...'</strong> - literal text'' - single quoteanything else - literal text</li></ul>\n")])]),t._v(" "),s("h3",{attrs:{id:"time-formatting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#time-formatting","aria-hidden":"true"}},[t._v("#")]),t._v(" Time Formatting")]),t._v(" "),s("p",[t._v("Format a time into a string value with a specified format.  The format can be combinations of the following:\n"),s("ul",[s("li",[s("strong",[t._v("H")]),t._v(" - Hour with no leading 0 (24 hour)")]),s("li",[s("strong",[t._v("HH")]),t._v(" - Hour with leading 0 (24 hour)")]),s("li",[s("strong",[t._v("h")]),t._v(" - Hour with no leading 0 (12 hour)")]),s("li",[s("strong",[t._v("hh")]),t._v(" - Hour with leading 0 (12 hour)")]),s("li",[s("strong",[t._v("m")]),t._v(" - Minute with no leading 0")]),s("li",[s("strong",[t._v("mm")]),t._v(" - Minute with leading 0")]),s("li",[s("strong",[t._v("s")]),t._v(" - Second with no leading 0")]),s("li",[s("strong",[t._v("ss")]),t._v(" - Second with leading 0")]),s("li",[s("strong",[t._v("l")]),t._v(" - Milliseconds always with leading 0")]),s("li",[s("strong",[t._v("c")]),t._v(" - Microseconds always with leading 0")]),s("li",[s("strong",[t._v("t")]),t._v(" - a or p for AM/PMTA or P for AM/PM")]),s("li",[s("strong",[t._v("tt")]),t._v(" - am or pm for AM/PMTTAM or PM for AM/PM")]),s("li",[s("strong",[t._v("z")]),t._v(" - Timezone as defined by timezoneListZTimezone in Iso 8601 format (+04:45)")]),s("li",[s("strong",[t._v("'...' ")]),t._v("- Literal text (Uses single quotes)")])])])])},[],!1,null,null,null);e.default=n.exports}}]);