import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    saveItem(item) {
      item.set('isEditing', false);
      item.save();
    },
    createItem(){
      this.store.createRecord('todo', {isEditing: true});
    },
    cancelItem(item){
      item.deleteRecord();
    }
  }
});
