import Component from '@ember/component';

export default Component.extend({
  actions: {
    checkItem(item) {
      item.toggleProperty('checked');
      this.get('onCheck')(item);
    }
  }
});
