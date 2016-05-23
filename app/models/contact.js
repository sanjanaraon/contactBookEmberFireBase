import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  mobile: DS.attr('number'),
  street1:DS.attr('string'),
  street2:DS.attr('string'),
  city:DS.attr('string'),
  emailId: DS.attr('string'),
});
