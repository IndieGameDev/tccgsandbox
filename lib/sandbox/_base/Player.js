/**
 * Created with JetBrains WebStorm.
 * User: maxbobak
 * Date: 13-06-27
 * Time: 4:31 PM
 */
define(["dojo/_base/declare", "sandbox/_base/Deck"],
    function(declare, Deck){
        'use strict';
        //private properties

        return declare(null,{
            name : null,
            playerDesignation: null,
            hand: null,
            deck: null,
            character: null,
            play: null,
            constructor : function(parameters){
                this.deck = new Deck();
                this.deck.shuffle();
                this.name = parameters.name;
                this.playerDesignation = parameters.playerDesignation;
            }
        })
    });