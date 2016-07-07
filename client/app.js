// Register a Globally Available Helper
Template.registerHelper('compareHelper', function(value) {

	if (value === 1) { return true; }
	if (value === 0) { return false; }
	return false;

});