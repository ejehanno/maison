"use strict";
const angular = require("angular");
require("@uirouter/angularjs");
require('angular-translate');
require('angular-translate-loader-partial');

require("./components/shared/shared-components.module");
require("./components/user/user.module");

const global_config_factory = require("./global-config.factory");
const app_config = require("./app.config");

angular.module("test", ["ui.router", "pascalprecht.translate", "SharedComponentsModule", "UserModule"])
    .factory("GlobalConfigFactory", global_config_factory)
    .config(app_config);

/*if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('sw.js').then(function (reg) {
            reg.update();
            reg.onupdatefound = function () {
                let installingWorker = reg.installing;
                installingWorker.onstatechange = function () {
                    switch (installingWorker.state) {
                        case 'installed':
                            if (navigator.serviceWorker.controller) {
                                console.log('New or updated content is available.');
                                location.reload();
                            } else {
                                console.log('Content is now available offline!');
                            }
                            break;
                        case 'redundant':
                            console.error('The installing service worker became redundant.');
                            break;
                    }
                };
            };
        }).catch(function (e) {
            console.error('Error during service worker registration:', e);
        });
    });
}*/
