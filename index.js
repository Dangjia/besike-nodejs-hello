var hello = function (name, drunk) {
	if(drunk) {
		return "Hello " + name + ", you look sexy today";
	} else {
		return "Hello, " + name;
	}
}
module.exports = hello;
