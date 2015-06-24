/**
 * Created by firewaterjoe on 6/23/15.
 */
import Ember from 'ember';

export default Ember.Component.extend({
  isReversed: false,
  actions: {
    reverseList:function(usStates){
      usStates.reverse();
      this.set('isReversed', true);
    },
    normalList:function(usStates){
      usStates.reverse();
      this.set('isReversed',false)
    }
  }
})
