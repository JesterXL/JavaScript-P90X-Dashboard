require.config({
		baseUrl: "js",
		optimize: "uglify",
		waitSeconds: 10,
		paths:
		{
			hbs: "./libs/handlebars/hbs"
		},
		hbs : {
	        templateExtension : 'hbs',
	        disableI18n : false
	    },
		packages: [
			{
				name: "jquery",
				location: "./libs/jquery",
				main: "jquery"
			},
			{
				name: "json2",
				location: "./libs/json2",
				main: "json2"
			},
			{
				name: "underscore",
				location: "./libs/underscore",
				main: "underscore"
			},
			{
				name: "backbone",
				location: "./libs/backbone",
				main: "backbone"
			},
			{
				name: "EventBus",
				location: "./com/jessewarden/dashboard",
				main: "EventBus"
			}
		]
	});