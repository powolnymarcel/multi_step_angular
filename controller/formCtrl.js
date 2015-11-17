
// Le Ctrl du form
// =============================================================================
app.controller('formController', function($scope) {

	// we will store all of our form data in this object
	$scope.formData = {};

	// function to process the form
	$scope.gererLeForm = function() {
		alert('awesome!');
	};

});
