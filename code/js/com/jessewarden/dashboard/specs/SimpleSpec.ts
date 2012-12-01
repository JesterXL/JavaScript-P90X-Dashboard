

describe("Simple Test:", function() {
	"use strict";

	var obj;

	beforeEach(function()
			   {
				   obj = {};
				   obj.cow = null;
			   });

	afterEach(function()
			  {
				  obj = null;
			  });

	xit("a is in fact 'Hello World!' and b to be not null", function() {
		var a = "Hello World!";
		var b = true;
		expect(a).toBe("Hello World!");
		expect(b).not.toBe(null);
	});

	xit("undefined can be used with ==", function()
	{
		expect(obj.cow == undefined).toBe(true);
	});

	xit("undefined can be used with ===", function()
	{
		expect(obj.cow === undefined).toBe(true);
	});

	xit("null can be used with == when xit's actually undefined", function()
	{
		expect(obj.cow == null).toBe(true);
	});

	xit("null cannot be used with === when xit's actually undefined", function()
	{
		expect(obj.cow === null).toBe(false);
	});

	it("verifying superCallFragaListic doesn't exist and it doesn't throw an exception", function()
	{
		var testFunction = function()
		{
			var result = typeof superCallFragaListic;
			console.debug("result: " + result);
			if(typeof superCallFragaListic != null)
			{
				console.debug("superCallFragaListic is not undefined");
			}
			else
			{
				console.debug("superCallFragaListic is undefined");
			}
		};
		expect(testFunction).not.toThrow();
	});

	it("verifying superCallFragaListic does throw an exception when you attempt to check if null", function()
	{
		var testFunction = function()
		{
			if(superCallFragaListic != null)
			{
				console.debug("superCallFragaListic is not null");
			}
			else
			{
				console.debug("superCallFragaListic is null");
			}
		};
		expect(testFunction).toThrow();
	});

	it("verifies that >= 0 is in fact false.", function()
	{
		var a = {};
		//a.gridSortOrder = 0;
		var b = {};
		if(a.gridSortOrder >= 0)
		{
			console.debug("Yep, greater than 0.");
		}
		else
		{
			console.debug("Nope, less than 0.");
		}
		expect(true).toBe(true);
	});

	it("null is ok to use instead of undefined for vars", function()
	{
		var result = (a == null);
		expect(result).toBe(true);
	});

	it("using typeof and null are fine if it's a prop", function()
	{
		var a = {};
		var result1 = (typeof a.cow == 'undefined');
		var result2 = (a.cow == null);
		expect(result1).toEqual(result2);
	})

});