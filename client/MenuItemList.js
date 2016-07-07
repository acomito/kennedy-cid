Template.MenuItemsList.onCreated(function(){
	Meteor.subscribe('allMenuItems');
});




Template.MenuItemsList.helpers({
	allMenuItems: function(){
		let menuItems = MenuItems.find();
		menuItems.forEach(function(item){
			item["UndercookedWarning"] = item["Undercooked Warning"];
		});
		console.log(menuItems);
		return menuItems;
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

		currentMenu.push(menuItemToAdd);
		Session.set('CurrentMenuList', currentMenu);
		console.log(Session.get('CurrentMenuList'));
	}
});


