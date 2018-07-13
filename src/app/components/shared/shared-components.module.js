const ng_mobile_click = require("./utils/ng-mobile-click.directive");
const page_accueil_component = require("./page-accueil/page-accueil.component");
const header_component = require("./header/header.component");
const liste_component = require("./liste/liste.component");
const points_component = require("./points/points.component");
const rdv_component = require("./rdv/rdv.component");
const tirelire_component = require("./tirelire/tirelire.component");


angular.module('SharedComponentsModule', [])
    .directive("ngMobileClick", ng_mobile_click)
    .component("pageAccueilComponent", page_accueil_component)
    .component("headerComponent", header_component )
    .component("listeComponent", liste_component )
    .component("pointsComponent", points_component)
    .component("rdvComponent", rdv_component )
    .component("ltirelireComponent", tirelire_component );


