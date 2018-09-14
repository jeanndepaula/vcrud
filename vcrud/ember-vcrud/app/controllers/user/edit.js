import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    updateUser() {
      this.get('model').save().then(() => {
          alert('Salvou');
        })
        .catch(() => {
          alert('Erro');
        })
    }
  }
});
