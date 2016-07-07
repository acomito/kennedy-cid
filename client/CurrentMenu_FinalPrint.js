
/*



*/



const returnMatchedItem = function(itemType){
		var currentMenu = Session.get('CurrentMenuList');
		var currentMenu_filtered = currentMenu.filter(function(item){
			if (item.Category === itemType) { return item; }
		});
		console.log(currentMenu_filtered);
		return currentMenu_filtered;
}


Template.CurrentMenu_FinalPrint.helpers({
	getCurrentMenu_MeyhaneSnacks: function(){
		var currentMenu_MeyhaneSnacks = returnMatchedItem("Meyhane Snacks");
		return currentMenu_MeyhaneSnacks;
	},
	getCurrentMenu_Meze: function(){
		var currentMenu_MeyhaneSnacks = returnMatchedItem("Meze");
		return currentMenu_MeyhaneSnacks;
	},
	getCurrentMenu_Vegetables: function(){
		var currentMenu_MeyhaneSnacks = returnMatchedItem("Vegetables");
		return currentMenu_MeyhaneSnacks;
	},
	getCurrentMenu_Shish: function(){
		var currentMenu_MeyhaneSnacks = returnMatchedItem("Shish");
		return currentMenu_MeyhaneSnacks;
	},
	getCurrentMenu_Sarma: function(){
		var currentMenu_MeyhaneSnacks = returnMatchedItem("Sarma");
		return currentMenu_MeyhaneSnacks;
	},
	getCurrentMenu_Dessert: function(){
		var currentMenu_MeyhaneSnacks = returnMatchedItem("Dessert");
		return currentMenu_MeyhaneSnacks;
	},
	getCurrentMenu_PancakesPiePide: function(){
		var currentMenu_MeyhaneSnacks = returnMatchedItem("Pancakes, Pie & Pide");
		return currentMenu_MeyhaneSnacks;
	},


});