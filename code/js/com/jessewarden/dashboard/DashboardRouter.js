(function(){
define(["underscore", "backbone", "EventBus"], 
		function(_, Backbone, EventBus)
{
	
	var DashboardRouter = Backbone.Router.extend({

		currentView: null,
		dashboardApplication: null,

		routes:
		{
			"main": 								"onNavigate", 	// #help
			"routine": 								"onNavigate",
			"routine/:routineName": 				"onNavigate", 	// #search/kiwis
			"routine/:routineName/:moveName": 		"onNavigate", 	// #search/kiwis/p7
		},

		// the view you're supposed to show for a given route
		views:
		{
			"chestAndBack": 						"ChestAndBackView",
			"chestAndBack/lawnmowers": 				"lawnmowersView"
		},

		initialize: function()
		{
			Backbone.history.start();
			this.onNavigate = _.bind(this.onNavigate, this);
			EventBus.on("router:navigate", this.onNavigate);
		},

		onNavigate: function(location)
		{
			logger.debug("DashboardRouter::location: ", location);
			this.navigate(location, {trigger: true});
			
		},



	});
	return DashboardRouter;
	
});
})();