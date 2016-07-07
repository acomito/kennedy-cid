Template.MenuForm.helpers({
	showForm: function(){
		return Session.get('showForm');
	},
	categoryOptions: function () {
            let options = [
                {label: "Meyhane Snacks", value: "Meyhane Snacks"},
                {label: "Meze", value: "Meze"},
                {label: "Vegetables", value: "Vegetables"},
                {label: "Shish", value: "Shish"},
                {label: "Sarma", value: "Sarma"},
                {label: "Dessert", value: "Dessert"},
                {label: "Pancakes, Pie & Pide", value: "Pancakes, Pie & Pide"}
            ];
            return options
    }
});

Template.MenuForm.events({
	'click .toggleShowForm': function(){
		var currentFormState = Session.get('showForm');
		Session.set('showForm', !currentFormState);
	}
});