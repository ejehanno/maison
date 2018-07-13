"use strict";


let liste_controller =  function listeController($state) {
	let self = this;

	self.vider_liste_course = function(){
		self.listeCourseActuelle=[""];
		self.toggle_liste();
	};


	self.ajouter_item = function(item){
			let noDuplicate=true;
/*			let data = {produit_id: 5, nom: "un truc",nombre: 2,rayon: 5}

 console.log(data);*/
// Create a new todo





            for (let k = 0; k < self.listeCourseActuelle.length; k += 1) {
                if(self.listeCourseActuelle[k].nom===item.nom){
                    self.listeCourseActuelle[k].nombre = self.listeCourseActuelle[k].nombre+1;
                    noDuplicate=false
                    break;
                }
            } 
            if(noDuplicate){
            	if(self.listeCourseActuelle[0]===""){
            		self.listeCourseActuelle.shift();
            	}
				self.listeCourseActuelle.push(item);
            }
	};


	self.ajouter_nouvel_item = function(item){
		if(item.rayon==="nouveau_rayon"){
			self.rayons.push(item.nom);
			self.nouvel_item=null;
		}else{

			let noDuplicate=true;
            for (let k = 0; k < self.listeCourse.length; k += 1) {
                if(self.listeCourse[k].nom===item.nom){
                    noDuplicate=false;
                    self.nouvel_item=null;
                    break;
                }
            } 
            if(noDuplicate){
            	item.nombre=1;
            	self.listeCourse.push(item);
            	self.listeCourse.sort(function(a, b){return a.nom - b.nom});
				self.nouvel_item=null;
            }
        }
	};

}

liste_controller.$inject = ["$state"];

let liste_component = {
    templateUrl: 'app/components/shared/liste/liste.html',
    controllerAs: "lc",
    controller: liste_controller
};


module.exports = liste_component; 