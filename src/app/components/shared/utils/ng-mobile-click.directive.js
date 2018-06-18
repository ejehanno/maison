"use strict";
let ng_mobile_click = function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            if ('ontouchstart' in document.documentElement) {
                element.bind("touchstart", function (e) {
                    e.stopPropagation();
                    scope.$apply(attrs["ngMobileClick"]);
                });
            } else {
                element.bind("click", function (e) {
                    e.stopPropagation();
                    scope.$apply(attrs["ngMobileClick"]);
                });
            }
        }
    };
};

module.exports = ng_mobile_click;