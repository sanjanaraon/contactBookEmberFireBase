import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('getAllContacts');

  this.route('contacts', function() {
    this.route('edit',{path: '/edit/:contact_id'});
    this.route('new');
  });
});

export default Router;
