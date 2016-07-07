Template.MenuForm.helpers({
	showForm: function(){
		return Session.get('showForm');
	}
});

Template.MenuForm.events({
	'click .toggleShowForm': function(){
		var currentFormState = Session.get('showForm');
		Session.set('showForm', !currentFormState);
	}
});