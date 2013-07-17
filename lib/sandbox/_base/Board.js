/**
 * Created with JetBrains WebStorm.
 * User: maxbobak
 * Date: 13-06-27
 * Time: 4:31 PM
 */
define(["dojo/_base/declare", "sandbox/util/random", "dojo/query", "dojo/dom-style"],
    function(declare, random, query, domStyle){
        'use strict';
        //private properties
        var boardColors = ["#22BB25", "#119999", "#FACE8D", "#99B28E"]
        return declare(null,{
            constructor : function(parameters){
                this.renderBoardLayout();
                console.log("board created");
            },

            renderBoardLayout : function(){
                var body = query("body")[0];
                var rand = random.inRange(0,boardColors.length);
                domStyle.set(body, "background", boardColors[rand]);
            }
        })
    });