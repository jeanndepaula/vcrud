import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    newUser() {
      this.get('model').save().then(()=>{
        alert('Salvou');
      })
      .catch(()=>{
        alert('Erro');
      })
    }
  }
});
