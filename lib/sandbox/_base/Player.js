/**
 * Created with JetBrains WebStorm.
 * User: maxbobak
 * Date: 13-06-27
 * Time: 4:31 PM
 */
define(["dojo/_base/declare", "sandbox/_base/Deck", "sandbox/_base/Hand", "sandbox/_base/Playfield", "sandbox/util/random"],
    function(declare, Deck, Hand, Playfield, random){
        'use strict';
        var classAccents = [["red","orange","brown","purple"], ["blue","sky","turquoise","aqua"]];
        return declare(null,{
            name : null,
            playerDesignation: null,
            hand: null,
            deck: null,
            character: null,
            playfield: null,
            classAccentColor: null,
            constructor : function(parameters){
                var parameters = parameters || {};
                this.playerDesignation = parameters.playerDesignation;
                this.deck = new Deck();
                this.hand = new Hand();
                this.playfield = new Playfield();
                this.setClassAccentColor();
                console.log("player created: "+this.classAccentColor);
            },

            setClassAccentColor : function(){
                if(this.playerDesignation == "enemy"){
                    this.classAccentColor = classAccents[0][random.inRange(0, classAccents[0].length)];
                } else {
                    this.classAccentColor = classAccents[1][random.inRange(0, classAccents[1].length)];
                }
            }
        })
    });