/**
 * Created with JetBrains WebStorm.
 * User: maxbobak
 * Date: 13-06-27
 * Time: 4:31 PM
 */
define(["dojo/_base/declare"],
    function(declare){
        'use strict';
        //private properties

        return declare(null,{
            constructor : function(parameters, successCallback, failureCallback){
            },

            get : function (parameters) {
                dojo.xhrGet({url: parameters.url,
                    async: parameters.async,
                    handleAs: parameters.handleAs,
                    content: parameters.content}).then(
                    function (data) {
                        successCallbakc(data);
                    },
                    function (data) {
                        failureCallback(data);
                    }
                );
            }
        })
    });