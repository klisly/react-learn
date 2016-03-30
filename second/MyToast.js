'use strict';

/**
 * This exposes the native SecondToastModule module as a JS module. This has a function 'show'
 * which takes the following parameters:
 *
 * 1. String message: A string with the text to toast
 * 2. int duration: The duration of the toast. May be SecondToastModule.SHORT or SecondToastModule.LONG
 */
var { NativeModules } = require('react-native');
module.exports = NativeModules.SecondToastModule;