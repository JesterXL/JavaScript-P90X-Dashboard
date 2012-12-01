(function(){
define(["underscore", "backbone", "hbs!DashboardApplicationTemplate", "EventBus"], 
    function(_, Backbone, template, EventBus)
{
    var DashboardApplication = Backbone.View.extend(
    {
        el: "#dashboardApplication",
        router: null,
        events: 
        {
            "click #chestAndBack": "onChestAndBack",
        },

        initialize: function()
        {
            logger.debug("DashboardApplication::initialize");
            //this.onChestAndBack = _.bind(this.onChestAndBack, this);
            this.render();
        },

        render: function()
        {
            this.$el.html(template({}));
            //$("#chestAndBack").click(this.onChestAndBack);
        },

        onChestAndBack: function()
        {
            EventBus.trigger("router:navigate", "routine/chestAndBack");
        }


    });
    return DashboardApplication;
});
})();