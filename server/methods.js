Meteor.methods({
	AddMenuItem: function(MenuItem){
		MenuItems.insert(MenuItem);
	}
});