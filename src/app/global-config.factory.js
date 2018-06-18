"use strict";
let global_config_factory = () => {
    const url_server = "http://localhost:5000/";

    return {
        url_server
    };
};
module.exports = global_config_factory; 