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
            boardLayout : 0,
            constructor : function(parameters){
                var parameters = parameters || {};
                if(parameters.autoRender) this.renderBoardLayout(parameters.layout);
                console.log("board created");
            },

            renderBoardLayout : function(layout){
                var body = query("body")[0];
                this.boardLayout = (layout) ? layout : random.inRange(0,boardColors.length);
                domStyle.set(body, "background", boardColors[this.boardLayout]);
            }
        })
    });