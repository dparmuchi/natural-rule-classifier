/* Copyright IBM Corp. 2016
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*jshint node:true*/

'use strict';

var express     = require('express'),
  app           = express(),
  config        = require('./config/config'),
  watson        = require('watson-developer-cloud');

// Bootstrap application settings
require('./config/express')(app);

// Create the NLC service
var natural_language_classifier = new watson.natural_language_classifier(config.natural_language_classifier);

// Make the services accessible to the router
app.use(function(req,res,next){
  req.natural_language_classifier = natural_language_classifier;
  next();
});

// Bootstrap routes
require('./app/routes/index')(app);

// Global error handler
require('./config/error-handler')(app);

module.exports = app;