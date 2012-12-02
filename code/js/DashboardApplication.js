(function(){
define(["underscore", "backbone", "hbs!DashboardApplicationTemplate", "EventBus", 
    "com/jessewarden/dashboard/constants/Routes"], 
    function(_, Backbone, template, EventBus, Routes)
{
    var DashboardApplication = Backbone.View.extend(
    {
        tagName: "body",
        router: null,

        initialize: function()
        {
            logger.debug("DashboardApplication::initialize");
        },

        start: function()
        {
            this.render();
            this.addEvents();
        },

        // TODO: figure out why declarative events break when I use the body tag vs. selector
        addEvents: function()
        {
            this.onChestAndBack = _.bind(this.onChestAndBack, this);
            $('#chestAndBack').click(this.onChestAndBack);
        },

        render: function()
        {
            $('body').html(template({}));
        },

        onChestAndBack: function()
        {
            EventBus.trigger("router:navigate", Routes.CHEST_AND_BACK_PUSHUP);
        }


    });
    return DashboardApplication;
});
})();