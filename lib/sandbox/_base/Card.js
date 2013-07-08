/**
 * Created with JetBrains WebStorm.
 * User: maxbobak
 * Date: 13-06-27
 * Time: 4:31 PM
 */
define(["dojo/_base/declare"], function(declare){
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
            if(!isFaceUp){
                console.log("XXXXXXXXX");
            } else {
                console.log(this);
            }
        },

        flip: function(){
            isFaceUp = !isFaceUp;
        }
    })
});