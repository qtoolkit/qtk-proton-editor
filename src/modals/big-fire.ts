var imageURL="https://qtoolkit.github.io/qtk-proton-editor/assets/fire.png";

export var bigFireTemplate = [
	{
		title : "Initialize",
		propsDesc : [
			{type:"hide",  path:"globalCompositeOperation", value:"lighter"},
			{type:"text", name: "Background", path:"backGroundColor", value:"Black"},
			{type:"line", name:"Rate"},
			{type:"range", name:"number", converter:"rate-num", path:"rateNum", value:{first:5, second:13}},
			{type:"range", name:"time", converter:"rate-time", path:"rateTime", value:{first:.1, second:.1}},
			{type:"line"},
			{type:"range", name:"Mass", converter:"mass", path:"mass", value:{first:1, second:1}},
			{type:"text", name:"image", path:"image", value:imageURL},
			{type:"vector3", name:"Position", path:"positionCircle", converter:"circle", zTitle:"R",
				value:{x:300, y:300, z:10}},
			{type:"range", name:"Life", converter:"life", path:"life", value:{first:5, second:7}},

			{type:"line", name:"Velocity"},
			{type:"options", name:"Type", converter:"velocity", path:"vType", value:"polar",
				options:["polar", "linear"]},
			{type:"range", name:"rpan", converter:"v-rpan", path:"vRpan", value:{first:2, second:3}},
			{type:"hide",  path:"vRpanCenter", value:false},
			{type:"range", name:"thapan", converter:"v-thapath", path:"vThapan", value:{first:0, second:30}},
			{type:"hide",  path:"vThapanCenter", value:true},
			{type:"line"}
		]
	},
	{
		title : "Behaviour",
		propsDesc : [
			{type:"range", name:"Scale", path:"scale", converter:"scale", value:{first:1, second:0.2}},
			{type:"range", name:"Alpha", path:"alpha", converter:"alpha", value:{first:1, second:0.2}}
		]
	}
];

