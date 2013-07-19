/**
 * Created with JetBrains WebStorm.
 * User: maxbobak
 * Date: 13-06-27
 * Time: 4:31 PM
 */
define(["dojo/_base/declare", "sandbox/_base/Player", "sandbox/_base/Board", "sandbox/util/random"],
    function(declare, Player, Board, random){
        'use strict';
        //private properties
        function prepareGameSave(parameters){
            var parameters = parameters || {};
            var saveObject = {};
            saveObject.player = parameters.player;
            saveObject.enemy = parameters.enemy;
            saveObject.board = parameters.board;
            saveObject.id = parameters.id;
            console.log(saveObject);
        }
        return declare(null,{
            player : null,
            enemy : null,
            board : null,
            id : null,

            constructor : function(parameters){
                this.player = new Player({playerDesignation : "player"});
                this.enemy = new Player({playerDesignation : "enemy"});
                this.board = new Board({autoRender : true});
                this.id = random.alphaString(20);
            },

            load : function(gameId){

            },

            save : function(){
                prepareGameSave(this);
            }
        })
    });