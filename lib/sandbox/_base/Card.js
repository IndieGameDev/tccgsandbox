/**
 * Created with JetBrains WebStorm.
 * User: maxbobak
 * Date: 13-06-27
 * Time: 4:31 PM
 */
define(["dojo/_base/declare","dojo/dom", "dojo/dom-construct", "dojo/query", "dojo/on"],
    function(declare, dom, domConstruct, query, on){
    'use strict';
    //private properties
    var isFaceUp = false;

    return declare(null,{
        //public properties
        name : null,
        description : null,
        picture : null,
        rarity : null,
        suit : null,
        cost : null,
        life : null,
        fight : null,

        //callback functions
        enterPlayCallback : function(){},
        activatePlayCallback : function(){},
        removePlayCallback : function(){},
        startTurnCallback : function(){},
        endTurnCallback : function(){},
        drawHandCallback : function(){},
        discardCallback : function(){},

        constructor : function(parameters){
            this.name = parameters.name;
            this.description = parameters.description;
            this.picture = parameters.picture;
            this.rarity = parameters.rarity;
            this.suit = parameters.suit;
            this.cost = parameters.cost;
            this.life = parameters.life;
            this.fight = parameters.fight;

        },

        render: function(){
            var visual = domConstruct.create("div", {innerHTML: "<h2>"+this.name+"</h2><p>"+this.description+"</p>"});
            var target = query("#cardBox")[0];
            target.appendChild(visual);
            var _this = this;
            on(visual, "click", function(event){
                console.log(_this.name+" played!");
                domConstruct.destroy(visual);
            });
        },

        flip: function(){
            isFaceUp = !isFaceUp;
        }
    })
});