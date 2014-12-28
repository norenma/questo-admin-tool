    Router.configure({
       layoutTemplate: 'layout'  //can be any template name
     });
	Router.route('/', function() {
		if(Meteor.user()){
			this.render('StudentHelp');
		}
	});

	Router.route('/locations.html', function() {
		this.render('locations');
	});

	Router.route('/categories.html', function() {
		this.render('categories');
	});