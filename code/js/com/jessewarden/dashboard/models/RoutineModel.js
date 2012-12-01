define(["backbone"], function()
{
    var RoutineModel = Backbone.Model.extend({
    	defaults:
    	{
            name: "Default Routine",
    		done: false,
    	}

        initialize: function()
        {

        }
    });
    return RoutineModel;
});