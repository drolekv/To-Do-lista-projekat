'use-strict';

angular
	.module('dolist')
	.directive('defaultTable', defaultTable);

	function defaultTable() {
		return {
			restrict: 'E',
			templateUrl: 'ispis.html',
			controller: 'DolistCtrl',
			controllerAs: 'vm'
		}
	}