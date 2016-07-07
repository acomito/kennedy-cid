Template.MenuItemsList.onCreated(function(){
	Meteor.subscribe('allMenuItems');
});




Template.MenuItemsList.helpers({
	allMenuItems: function(){
		return MenuItems.find();
	},
	property: function(){
		var item = this["Undercooked Warning"];
		if (item === 1) {return true}
		if (item === 0) {return false}
		return false;
	}
});


Template.MenuItemsList.events({
	'click #addToCurrentMenu': function(){

		var currentMenu = Session.get('CurrentMenuList');

		const menuItemToAdd = {
			"_id": this._id,
			"Name": this.Name,
			"Category": this.Category,
			"Description": this.Description,
			"Price": this.Price,
			"Undercooked Warning": this["Undercooked Warning"],
			"Vegetarian": this.Vegetarian
		};

		//todo: check array for _id, to make sure you don't add duplicate items to currentMenu
		currentMenu.push(menuItemToAdd);
		Session.set('CurrentMenuList', currentMenu);
		Bert.alert( this.Name + ' was added to current menu!', 'info', 'growl-top-right' );
	},

	'click #deleteItemFromDB': function(){
		Meteor.call('DeleteMenuItem', this._id);
		Bert.alert( this.Name + ' Deleted from DB!', 'danger', 'growl-top-right' );
	}

});


