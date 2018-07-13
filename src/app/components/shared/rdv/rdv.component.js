"use strict";


let rdv_controller =  function rdvController($state) {
	let self = this;

console.log("un truc");



}

rdv_controller.$inject = ["$state"];

let rdv_component = {
    templateUrl: 'app/components/shared/rdv/rdv.html',
    controllerAs: "rdvc",
    controller: rdv_controller
};


module.exports = rdv_component; 