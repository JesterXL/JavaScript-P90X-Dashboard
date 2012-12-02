(function(){
define(["underscore", "backbone", "EventBus", 
	"com/jessewarden/dashboard/constants/Routes",
	"com/jessewarden/dashboard/views/chestandbackviews/PushupView"], 
		function(_, Backbone, EventBus, Routes, PushupView)
{
	
	var DashboardRouter = Backbone.Router.extend({

		currentView: null,
		dashboardApplication: null,
		
		pushupView: null,

		// TODO: use the constants
		routes:
		{
			//"routine/:routineName/:moveName": 		"onNavigate",
			"": 										"onNavigate",
			"#": 										"onNavigate",
			"chestandback": 							"onNavigate",
			"chestandback/pushup": 						"onNavigate"
		},

		initialize: function()
		{
			this.onNavigate = _.bind(this.onNavigate, this);
			EventBus.on("router:navigate", this.onNavigate);
		},

		onNavigate: function(location)
		{
			logger.debug("DashboardRouter::location: ", location);
			this.navigate(location, {trigger: false});
			var view;
			switch(location)
			{
				case Routes.CHEST_AND_BACK_PUSHUP:
					view = new PushupView();
					break;

				case Routes.HOME:
				case Routes.DEFAULT:
				case undefined:
					view = this.dashboardApplication;
					break;

				default:
					logger.warn("Unsupported location, aborting.");
					return;
			}

			if(this.currentView == view)
			{
				return;
			}

			if(this.currentView != null)
			{
				this.currentView.remove();
			}
			this.currentView = view;
			this.currentView.start();
		},



	});
	return DashboardRouter;
	
});
})();