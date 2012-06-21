
var appUrl = 'http://localhost:3000';
var facebookAppId = '483283551685204';
var googleClientId = '5896850787.apps.googleusercontent.com';

Meteor.accounts.facebook.config(facebookAppId, appUrl);
Meteor.accounts.google.config(googleClientId, appUrl)