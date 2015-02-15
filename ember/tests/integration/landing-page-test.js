import Ember from 'ember';
import startApp from 'currex/tests/helpers/start-app';

var App;

module('Integration - Landing Page', {
  setup: function(){
    App = startApp();
  },
  teardown: function(){
    Ember.run(App, 'destroy');
  }
});


test('Should welcome me to Currex', function(){
  visit('/').then(function(){
    equal(find('h2#title').text(), 'Currex');
  });
});

test('Should allow return to the home page.', function(){
  visit('/about').then(function(){
    click('a:contains("Home")').then(function(){
      notEqual(find('h3').text(), 'About');
    });
  });
});
