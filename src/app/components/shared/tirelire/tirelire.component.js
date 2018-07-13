"use strict";


let tirelire_controller =  function tirelireController($state) {
	let self = this;


}

tirelire_controller.$inject = ["$state"];

let tirelire_component = {
    templateUrl: 'app/components/shared/tirelire/tirelire.html',
    controllerAs: "tlc",
    controller: tirelire_controller
};


module.exports = tirelire_component; 