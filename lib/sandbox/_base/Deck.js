/**
 * Created with JetBrains WebStorm.
 * User: maxbobak
 * Date: 13-06-27
 * Time: 4:31 PM
 */
define(["dojo/_base/declare", "dojo/dom", "dojo/dom-construct", "dojo/query"],
    function(declare, dom, domConstruct, query){
    'use strict';
    //private properties
    var cardsArray = [];
    return declare(null,{
        constructor : function(parameters){
            console.log("deck created");
        },

        shuffle: function(){
            for(var i = this.length(); i > 0; i--){
                var j = Math.floor(Math.random() * (i+1));
                var temp = cardsArray[i];
                cardsArray[i] = cardsArray[j];
                cardsArray[j] = temp;
            }
        },

        length: function(){
            return cardsArray.length;
        },

        drawCard: function(){
            if(this.length() <= 0){
                return undefined;
            }
            return cardsArray.pop();
        },

        addCard: function(card){
            cardsArray.push(card);
        },

        render: function(target){
            var visual = domConstruct.create("div", {innerHTML: "<h1>"+this.length()+"</h1>"});
            var targetPlace = query(target)[0];
            targetPlace.appendChild(visual);
        }
    })
});