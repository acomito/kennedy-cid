Meteor.methods({
	AddMenuItem: function(MenuItem){
		MenuItems.insert(MenuItem);
	},
	DeleteMenuItem: function(MenuItem_id){
		var id = MenuItem_id;
		MenuItems.remove({_id: id});
	}
});