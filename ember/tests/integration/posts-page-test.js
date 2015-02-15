import Ember from 'ember';
import startApp from 'currex/tests/helpers/start-app';
import Pretender from 'pretender';

var App, server;

module('Integration - Posts Page', {
  setup: function(){
    App = startApp();
  }
});
