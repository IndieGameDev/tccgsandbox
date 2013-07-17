/**
 * Created with JetBrains WebStorm.
 * User: maxbobak
 * Date: 13-06-27
 * Time: 4:31 PM
 */
define(["dojo/_base/declare", "sandbox/_base/Player", "sandbox/_base/Board"],
    function(declare, Player, Board){
        'use strict';
        //private properties
        return declare(null,{
            player1 : null,
            player2 : null,
            board : null,
            id : null,

            constructor : function(parameters){
                this.player1 = new Player();
                this.player2 = new Player();
                this.board = new Board();
            },

            load : function(gameId){

            },

            save : function(){

            }
        })
    });