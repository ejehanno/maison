let app_config = function($compileProvider, $stateProvider, $urlRouterProvider, $httpProvider, GlobalConfigFactoryProvider, 
    $translateProvider, $translatePartialLoaderProvider) {
    // $httpProvider.defaults.headers.common['Authorization'];
    const user_login_state = {
        "name" : "login",
        "url" : "/",
        "component" : "login"
    };

    $stateProvider.state(user_login_state);
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
