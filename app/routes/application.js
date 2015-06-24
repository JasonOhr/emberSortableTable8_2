/**
 * Created by firewaterjoe on 6/23/15.
 */
import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({


      usStates: Ember.$.getJSON("states.json")
    });
  }
});
