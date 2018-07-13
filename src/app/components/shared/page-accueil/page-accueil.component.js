"use strict";


let page_accueil_controller =  function pageAccueilController($state, $http) {
	let self = this;

//planning date

	var d = new Date();
	self.date = new Date(d.getFullYear(), d.getMonth(), d.getDate());
	self.date_de_demain= new Date(d.getFullYear(), d.getMonth(), d.getDate());
	self.date_de_demain.setDate(self.date_de_demain.getDate()+1);


	var weekday = new Array(7);
	weekday[0] =  new Array("Dimanche","Alyx", "Yann", "lily", "Alyx","lily","yann", "yann", "Alyx");
	weekday[1] = new Array("Lundi","Yann", "lily", "Alyx","lily","yann", "yann", "Alyx","Alyx" );
	weekday[2] = new Array("Mardi","Alyx", "Yann", "lily", "Alyx","lily","yann", "yann", "Alyx");
	weekday[3] = new Array("Mercredi","Alyx", "Yann", "lily", "Alyx","lily","yann", "yann", "Alyx");
	weekday[4] = new Array("Jeudi","Alyx", "Yann", "lily", "Alyx","lily","yann", "yann", "Alyx");
	weekday[5] = new Array("Vendredi","Alyx", "Yann", "lily", "Alyx","lily","yann", "yann", "Alyx"); 
	weekday[6] = new Array("Samedi","Alyx", "Yann", "lily", "Alyx","lily","yann", "yann", "Alyx");
	var n = weekday[d.getDay()];
	self.jour =weekday[d.getDay()][0];
	self.nom_jour=self.jour[0];

	self.accueil=true; 
	self.liste=false;
	self.ajouter_course=false;
	self.tirelire=false;
	self.points=false;
	self.agenda=false;
	self.planning=false;
	self.RDV = false;
	let poubelle=false; 


//RDV

	self.nom_rdv;
	self.date_rdv;
	self.adresse_rdv;

	function Nouveau_RDV(nom, date, adresse) {
		this.nom_rdv = nom;
		this.date_rdv = date;
		this.adresse_rdv = adresse;
	};

	var RDV1 = new Object(); 
	RDV1.nom_rdv = "RDV1";
	RDV1.date_rdv = d;
	//RDV1.jour =  new Date(RDV1.date.getFullYear(), RDV1.date.getMonth(), RDV1.date.getDate()) ;
	RDV1.adresse_rdv = "3, rue des boulets 93456 moncul";

	var RDV2 = new Object(); 
	RDV2.nom_rdv = "RDV2";
	RDV2.date_rdv = d;
	//RDV2.jour = new Date(RDV2.date.getFullYear(), RDV2.date.getMonth(), RDV2.date.getDate()) ;
	RDV2.adresse_rdv = "4, rue des boulets 93456 moncul";

	self.RDVs = new Array(RDV1,RDV2);

	self.comparer_date = function(rdv) {
		if (rdv.date_rdv > self.date && rdv.date_rdv<self.date_de_demain){
			return true
		} else {
			return false 
		}
	};

//transaction

	self.nouvelle_description;
	self.date_transaction=d;
	self.enfant_transaction=null;
	self.montant=0;

	function Transaction(montant, description, date) {
    this.montant = montant;
    this.description = description;
    this.date = date;
	};

//enfant

	var yann = new Object();
	yann.nom ="Yann";
	yann.solde=11;
	yann.point=2;
	yann.naissance= new Date(2006,12,13);
	yann.transactions = new Array();

	var alyx = new Object();
	alyx.nom ="Alyx";
	alyx.solde=14;
	alyx.point=-4;
	alyx.naissance= new Date(2009,3,21);
	alyx.transactions = new Array();

	var lily = new Object();
	lily.nom ="Lily";
	lily.solde=-3;
	lily.point=4;
	lily.naissance= new Date(2010,7,11);
	lily.transactions = new Array();

	var zoey = new Object();
	zoey.nom ="Zoey";
	zoey.solde=3;
	zoey.point=5;
	zoey.naissance= new Date(2013,9,27);
	zoey.transactions = new Array();



	self.enfants = new Array(yann, alyx, lily, zoey);
	self.enfants.forEach((enfant)=>{enfant.revenu = Math.floor((d-enfant.naissance)/ (31557600000))});



//recuperation liste rayon


		$http({
            method: "GET",
            url: "http://localhost:3000/rayon"
        }).then((data)=>{
			if(data.status!== 200){

			}else{
				self.rayons_actuels=data.data;
			}
		}); 
//recuperation liste actuel
		$http({
            method: "GET",
            url: "http://localhost:3000/index/currentListe"}).then((data)=>{
			if(data.status!== 200){

			}else{
				self.idListeCourseActuelle=data.data.course_id;
				$http({
	            method: "GET",
	            url: "http://localhost:3000/liste/self.idListeCourseActuelle"}).then((data)=>{
				if(data.status!== 200){

				}else{
					self.idListeCourseActuelle=data.data.course_id;
					

			}
		}); 

			}
		}); 


	//self.rayons = ["Fruits et légumes", "Fournitures", "Pain", "Boisson", "Viande", "conserve"];
	//self.rayons_actuels = ["Fruits et légumes", "Fournitures", "Pain", "Boisson", "Viande"];

	var papier = new Object();
		papier.nom = "Papier";
		papier.nombre = 1;
		papier.rayon = "Fournitures";
	var stylo = new Object();
		stylo.nom = "Stylo";
		stylo.nombre = 1;
		stylo.rayon = "Fournitures";
	var tomate = new Object();
		tomate.nom = "Tomate";
		tomate.nombre = 1;
		tomate.rayon = "Fruits et legumes";
	var salade = new Object();
		salade.nom = "Salade";
		salade.nombre = 1;
		salade.rayon = "Fruits et legumes";
	var pain = new Object();
		pain.nom = "Pain de mie";
		pain.nombre = 1;
		pain.rayon = "Pain";
	var coca = new Object();
		coca.nom = "Coca";
		coca.nombre = 1;
		coca.rayon = "Boisson";
	var poulet = new Object();
		poulet.nom = "Poulet";
		poulet.nombre = 1;
		poulet.rayon = "Viande";

	//self.listeCourseActuelle =[poulet, pain, coca, tomate, stylo, salade];
	self.listeCourse =[salade, papier, poulet, pain, coca, tomate, stylo];
	self.nouvel_item=new Object();;



	self.debarassage ="";
	self.mettage ="";








	self.toggle_liste = function(){
/*		self.liste=!self.liste;
		self.accueil=!self.accueil;*/
		$state.go("listeComponent");
	};
	self.toggle_ajouter_liste=function(){
		self.ajouter_course=!self.ajouter_course;
	};
	self.toggle_tirelire=function(){
		self.tirelire=!self.tirelire;
		self.accueil=!self.accueil;
		//$state.go("tirelireComponent");
	};
	self.toggle_points=function(){
		self.points=!self.points;
		self.accueil=!self.accueil;
		//$state.go("pointsComponent");
	};
	self.toggle_agenda=function(){
		$state.go("rdvComponent");

	};

	let get_mettre_table = function() {

		return self.jour[1];
	};

	self.get_debarasser = function(){
		return self.jour[2];
	};

	self.get_jour_poubelle = function (){
		 if (weekday[d.getDay()][0] ==="Jeudi"){
		 	return true;
		 }else{
		 	return false;
		 }
	};

	self.get_solde = function (prenom){
	};
		
	
	self.ajout_point = function(enfant){
		if(enfant.point<5){
		enfant.point=enfant.point+1;
		}
	};

	self.retrait_point = function(enfant){
		if(enfant.point>-5){
		enfant.point=enfant.point-1;
		}
	};

	self.ajout_transaction = function(enfant){
		self.enfant_transaction=enfant;
	};
	self.nouvelle_transaction = function(enfant){
		if(enfant){
			let nouvelle_transaction= new Transaction(self.montant, self.nouvelle_description, self.date_transaction);
			enfant.transactions.push(nouvelle_transaction);
			enfant.solde = enfant.solde-self.montant;
			self.enfant_transaction=null; 
			self.montant=0;
			self.nouvelle_description=null;
			self.date_transaction=d;

		}else{

			self.enfant_transaction=null; 
			self.montant=0;
			self.nouvelle_description=null;
			self.date_transaction=d;
		}
	};


	self.nouveau_RDV = function(){
		self.RDV = !self.RDV;
	};
	self.valider_RDV = function(){
		var nouveau_RDV = new Nouveau_RDV(self.nom_rdv, self.date_rdv, self.adresse_rdv);
		self.RDVs.push(nouveau_RDV);
		self.nom_rdv=null;
		self.date_rdv=null;
		self.adresse_rdv=null;

	};
}


page_accueil_controller.$inject = ["$state", "$http"];

let page_accueil = {
    templateUrl: 'app/components/shared/page-accueil/page-accueil.html',
    controllerAs: "mpc",
    controller: page_accueil_controller
};


module.exports = page_accueil; 