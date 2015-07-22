/**
 * Sapiant - Robust real-time neural network engine. Designed to be easy to use by non-experts.
 * @license Copyright (C) 2015 BrainyGuy.com LLC
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 * 
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

//-------------------------------------------------------------------
// http://www.matteoagosti.com/blog/2013/02/24/writing-javascript-modules-for-both-browser-and-node/
// http://www.richardrodger.com/2013/09/27/how-to-make-simple-node-js-modules-work-in-the-browser/
(function() {
  "use strict";

  /**
   * @type {function(Array, Array, Number) : Object}
   */
  var Sapiant = function(inputRanges, outputRange, hiddenNeurons) {
    this.inputRanges  = inputRanges;
    this.inputCount   = inputRanges.length * 2 + 1;   // add squares and bias
    this.outputRange  = outputRange;

    //-------------------------------------------------------------------
    /**
     * @type {function(Array, Number)}
     */
    this.train = function(inputs, output) {

    };

    //-------------------------------------------------------------------
    /**
     * @type {function(Array) : Number}
     */
    this.predict = function(inputs) {

    };

    //-------------------------------------------------------------------

  };

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = Sapiant;
  } else {
    if (typeof define === 'function' && define.amd) {
      define([], function() {
        return Sapiant;
      });
    } else {
      window.Sapiant = Sapiant;
    }
  }
}).call(this);
