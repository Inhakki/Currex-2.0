import Ember from 'ember';
import startApp from 'currex/tests/helpers/start-app';
import Pretender from 'pretender';

var App, server;

module('Integration - Posts Page', {
  setup: function(){
    App = startApp();
    var posts = [
      {
        id: 1,
        isRequest: false,
        title:  'I have 200 Euros available for trade',
        zipCode: '10027',
        currencyType: 'Euro',
        cashAmount: '200',
        user: 13
      },
      {
        id: 2,
        isRequest: false,
        title: 'I also have 3000 Czech Crowns',
        zipCode: '10027',
        currencyType: 'Korunas',
        cashAmount: '3000',
        user: 13
      },
      {
        id: 3,
        isRequest: true,
        title: 'Anyone have Euros? need 100',
        zipCode: '10009',
        currencyType: 'Euros',
        cashAmount: '100',
        user: 14
      }
    ];

    server = new Pretender(function(){

    });
  }
});
