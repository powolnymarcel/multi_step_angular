// Configuration des routes
// =============================================================================
app.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider

	// Route pour montrer le formulaire (/form)
		.state('form', {
			url: '/form',
			templateUrl: 'form.html',
			controller: 'formController'
		})

		// "Etats niché" nested states
		// Chacunes de ces sections aura sa propre vue
		// les url seront "nichée" (/form/profile)
		.state('form.profile', {
			url: '/profile',
			templateUrl: 'form-profile.html'
		})

		// l'url sera  /form/interets
		.state('form.interets', {
			url: '/interets',
			templateUrl: 'form-interets.html'
		})

		// l'url sera  /form/payement
		.state('form.payement', {
			url: '/payement',
			templateUrl: 'form-payement.html'
		});

	// Si aucunes routes ne correspond
	// envoie l'user au formulaire
	$urlRouterProvider.otherwise('/form/profile');
});
