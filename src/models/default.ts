
export var defaultTemplate = [
	{
		title : "Initialize",
		propsDesc : [
			{type:"range", name:"Radius", converter:"radius", path:"radius", value:{first:1, second:12}},
			{type:"range", name:"Life", converter:"life", path:"life", value:{first:2, second:4}},
			{type:"range", name:"Mass", converter:"mass", path:"mass", value:{first:1, second:1}},
			{type:"vector2", name:"Position", path:"position", converter:"point", value:{x:300, y:300}},
			{type:"line", name:"Rate"},
			{type:"range", name:"number", converter:"rate-num", path:"rateNum", value:{first:10, second:20}},
			{type:"range", name:"time", converter:"rate-time", path:"rateTime", value:{first:.1, second:.25}},
			{type:"line", name:"Velocity"},
			{type:"options", name:"Type", converter:"velocity", path:"vType", value:"polar",
				options:["polar", "linear"]},
			{type:"range", name:"rpan", converter:"v-rpan", path:"vRpan", value:{first:2, second:4}},
			{type:"range", name:"thapan", converter:"v-thapath", path:"vThapan", value:{first:-30, second:30}},
			{type:"line"},
			{type:"line", name:"Color"},
			{type:"text", name:"Begin", converter:"color", path:"colorBegin", value:"ff0000"},
			{type:"text", name:"End", converter:"color", path:"colorEnd", value:"random"},
			{type:"line"}
		]
	},
	{
		title : "Behaviour",
		propsDesc : [
			{type:"range", name:"Scale", path:"scale", converter:"scale", value:{first:1, second:0.7}},
			{type:"range", name:"Alpha", path:"alpha", converter:"alpha", value:{first:1, second:0}},
			{type:"line", name:"Drift"},
			{type:"vector2", name:"Point", path:"driftPoint", converter:"point", value:{x:30, y:30}},
			{type:"number", name:"Delay", path:"driftDelay", converter:"delay", value:0.05},
			{type:"line"}
		]
	}
];

