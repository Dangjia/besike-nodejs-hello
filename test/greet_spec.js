//var expect = require("chai").expect;
var greet = require("greet");

describe("greet TEST", function () {
	it("should greet a persion by name", function () {
		expect(greet("Nanjing")).to.eql("Hello, Nanjing");
	});

	it("should greet a persion flirtatiously of if drunk", function () {
		expect(greet("Beijing", true)).to.eql("Hello Beijing, you look sexy today");
	});
});