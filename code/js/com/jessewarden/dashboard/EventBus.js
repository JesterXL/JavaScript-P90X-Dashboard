(function(){
define(["underscore", "backbone"], function(_, Backbone)
{
	var globalEventBus = _.extend({}, Backbone.Events);
	return globalEventBus;
});
})();