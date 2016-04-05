import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    zipLookUp(params) {
      this.transitionTo('results', params.zip);
    }
  }
});
