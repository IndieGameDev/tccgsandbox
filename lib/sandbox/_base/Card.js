/**
 * Created with JetBrains WebStorm.
 * User: maxbobak
 * Date: 13-06-27
 * Time: 4:31 PM
 * To change this template use File | Settings | File Templates.
 */
define(["dojo/_base/declare"], function(declare){
    'use strict';
    return function(){
        var faceUp = false;
        function flip(){
            faceUp = !faceUp;
        }
        function isFaceUp(){
            return faceUp;
        }
        this.isFaceUp = isFaceUp;
        this.flip = flip;
    };
});