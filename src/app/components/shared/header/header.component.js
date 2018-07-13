"use strict";


let header_controller =  function listeController($state) {
	let self = this;
	self.go_to_accueil = function(){
		$state.go("pageAccueilComponent");
	};

}

header_controller.$inject = ["$state"];

let header_component = {
    templateUrl: 'app/components/shared/header/header.html',
    controllerAs: "hc",
    controller: header_controller
};


module.exports = header_component; 