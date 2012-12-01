define(["backbone"], function()
{
    var CalculatedModel = Backbone.Model.extend({
        defaults:
        {
            name: "Calculated Model"
        }

        initialize: function()
        {

        }
    });
    return CalculatedModel;
});