import Component from '@ember/component';

export default Component.extend({
  actions: {
    saveItem(item){
      this.get('onSave')(item);
    },
    closePanel(item) {
      item.set('isEditing', false);
      if(item.get('isNew')) {
        this.get('onCancel')(item);
      }
    }
  }
});
