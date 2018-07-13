let app_config = function($compileProvider, $stateProvider, $urlRouterProvider, $httpProvider, GlobalConfigFactoryProvider, 
    $translateProvider, $translatePartialLoaderProvider) {
    // $httpProvider.defaults.headers.common['Authorization'];
    const page_accueil_state = {
        "name" : "pageAccueilComponent",
        "url" : "/",
        "component" : "pageAccueilComponent"
    };

    const liste_state ={
        "name" : "listeComponent",
        "url" : "/liste",
        "component" : "listeComponent"
    };

    const rdv_state ={
        "name" : "rdvComponent",
        "url" : "/rdv",
        "component" : "rdvComponent"
    };


    const points_state ={
        "name" : "pointsComponent",
        "url" : "/points",
        "component" : "pointsComponent"
    };


    const tirelire_state ={
        "name" : "tirelireComponent",
        "url" : "/tirelire",
        "component" : "tirelireComponent"
    };






    

    $stateProvider.state(page_accueil_state);
    $stateProvider.state(liste_state);
    $stateProvider.state(rdv_state);
    $stateProvider.state(points_state);
    $stateProvider.state(tirelire_state);
    $urlRouterProvider.otherwise("/");

    // Config  I18N
    $translateProvider.useSanitizeValueStrategy('escape');
    $translateProvider.useLoader("$translatePartialLoader",{
        urlTemplate: "asset/i18n/{lang}.json"
    });
    $translatePartialLoaderProvider.addPart('app');
    $translateProvider.preferredLanguage('fr'); 
    $translateProvider.forceAsyncReload(true);
};

app_config.$inject = ["$compileProvider", "$stateProvider", "$urlRouterProvider","$httpProvider","GlobalConfigFactoryProvider",
"$translateProvider", "$translatePartialLoaderProvider"];

module.exports = app_config;
