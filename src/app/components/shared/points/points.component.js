"use strict";


let points_controller =  function pointsController($state) {
	let self = this;


}

points_controller.$inject = ["$state"];

let points_component = {
    templateUrl: 'app/components/shared/points/points.html',
    controllerAs: "pc",
    controller: points_controller
};


module.exports = points_component; 