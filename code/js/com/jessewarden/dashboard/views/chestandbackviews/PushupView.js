(function(){
define(["underscore", 
		"backbone", 
		"hbs!com/jessewarden/dashboard/views/chestandbackviews/PushupViewTemplate", 
		"EventBus"], 
    function(_, Backbone, template, EventBus)
{
    var PushupView = Backbone.View.extend(
    {

        events: 
        {
            "click #chestAndBack": "onChestAndBack",
        },

        initialize: function()
        {
        },

        start: function()
        {
            this.render();
        },

        render: function()
        {
            logger.debug("PushupView::render");
            $('body').html(template({current: 7, total: 8}));
            logger.debug(this.$el.html());
        },

        onChestAndBack: function()
        {
            EventBus.trigger("router:navigate", "routine/chestAndBack");
        }


    });
    return PushupView;
});
})();