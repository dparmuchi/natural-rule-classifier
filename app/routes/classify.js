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

'use strict';

var router = require('express').Router(),
  Q        = require('q');

/**
 * Query a category to NLC's thread
 */
router.post('/api', function(req, res) {
  var query = req.body.Pregunta;
  var getClass = Q.denodeify(req.natural_language_classifier.classify.bind(req.natural_language_classifier));

  return getClass({
    text: query,
    classifier_id: '<classifier_id>' // from the Beta Toolkit
  }).then(function(response){
    var category = response.top_class;
    var description = '';
    switch (category){
      case "FaltanteInsumos":
        description = 'Faltante de Insumos';
        break;
      case "RRHHSkills":
        description = 'Problemas de RRHH';
        break;
    }
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({categoria: category, descripcion: description}));
  }).catch(function (err) {
    console.log('catch():', err);
    var error = 'Perdon, hubo un error. Por favor intenta mas tarde.',
      status = 500;
   
  res.status(status);
  res.json({exito:false, error: error});
  // return null because we already fulfill the response
  return null;
  });
});

module.exports = router;
