let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.scripts([
      'bower_components/jquery/dist/jquery.js',
      'bower_components/bootstrap/dist/js/bootstrap.js',
      'bower_components/particleground/jquery.particleground.js',
      'bower_components/metisMenu/dist/metisMenu.js',
      'bower_components/raphael/raphael.js',
      'bower_components/morris.js/morris.js',
      'resources/assets/js/proj.js'
    ], 'public/js/app.js')
   .styles([
      'bower_components/bootstrap/dist/css/bootstrap.css',
      'bower_components/metisMenu/dist/metisMenu.css',
      'bower_components/font-awesome/css/font-awesome.css',
    ], 'public/css/app.css')
   .less('resources/assets/less/proj.less', 'public/css')
   .copyDirectory('bower_components/bootstrap/dist/fonts', 'public/fonts')
   .copyDirectory('bower_components/font-awesome/fonts', 'public/fonts')
   .version();
