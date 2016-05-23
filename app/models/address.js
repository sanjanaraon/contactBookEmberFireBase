import Model from 'ember-data/model';

export default Model.extend({
  street1:Model.attr('string'),
  street2:Model.attr('string'),
  city:Model.attr('string'),
});
