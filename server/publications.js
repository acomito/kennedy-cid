Meteor.publish('allMenuItems', function(){
	return MenuItems.find();
});