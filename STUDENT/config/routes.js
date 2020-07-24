/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'pages/homepage', locals: {
      layout: 'layouts/layout'
    }
  },
  'get /add': {
    view: 'pages/add', locals: {
      layout: 'layouts/layout'
    }
  },
  'get /edit': {
    view: 'pages/edit', locals: {
      layout: 'layouts/layout'
    }
  },
  'get /list': 'StudentsController.list',
  'post /students/create': 'StudentsController.create',
  'post /students/edit': 'StudentsController.edit',
  'post /students/update/:id': 'StudentsController.update',
  'get /students/delete/:id': 'StudentsController.delete',


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
