
define([], function()
{
   "use strict";

	var MoveVO;
	MoveVO = function()
	{
		return {
			repitions: null,
			weight: null,

		   toString:function()
		   {
			   return "[object MoveVO]";
		   }
		};
   };

	return MoveVO;
});