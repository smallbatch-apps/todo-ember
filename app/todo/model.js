import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  checked: DS.attr('boolean', {defaultValue: false}),
  isEditing: DS.attr('boolean', {defaultValue: false})
});
