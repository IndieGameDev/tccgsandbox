/**
 * Created with JetBrains WebStorm.
 * User: maxbobak
 * Date: 13-06-27
 * Time: 4:31 PM
 */
define([],
    function(){
        'use strict';
        //private properties
        var random = {};
        random.inRange = inRange;

        function inRange(from, to){
            var randomPart = Math.floor(Math.random()*(to-from));
            return from+randomPart;
        }
        return random;
    });