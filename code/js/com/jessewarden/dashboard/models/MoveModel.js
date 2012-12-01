define(["backbone"], function()
{
    var MoveModel = Backbone.Model.extend({
        defaults:
        {
            name: "Default Move",
            done: false,
        }

        initialize: function()
        {

        }
    });
    return MoveModel;
});