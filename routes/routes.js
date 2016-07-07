FlowRouter.route('/', {
    name: 'HomeLayout',
    action() {
        BlazeLayout.render('MainLayout', {mainlayout: 'HomeLayout'});
    }
});


FlowRouter.route('/Print', {
    name: 'CurrentMenu_FinalPrint',
    action() {
        BlazeLayout.render('MainLayout', {mainlayout: 'CurrentMenu_FinalPrint'});
    }
});



