Template.CurrentMenu.helpers({
	getCurrentMenu: function(){
		return Session.get('CurrentMenuList');
	}
});

Template.CurrentMenu.events({

	// remove item from CurrentMenu
	'click #removeMenuItem': function(){
		//get current menu
		let currentMenu = Session.get('CurrentMenuList');
		//get _id of the item user clicked
		var itemId = this._id;
		// run through array of menu items looking for a match on the _id property, then splice
		for (var i = 0; i < currentMenu.length; i++) {
    			if(currentMenu[i]._id == itemId) {
        		currentMenu.splice(i, 1);
        		break;
    		}
    	}
    	// insert the new array into the CurrentMenuList session variable
		Session.set('CurrentMenuList', currentMenu);
		Bert.alert( 'Item Deleted From Current Menu!', 'danger', 'growl-top-right' );
	}
});

