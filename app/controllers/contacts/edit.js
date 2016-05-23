import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		editContact:function(id){
			var self=this;
			var name=this.get('model.name');
			var mobile=this.get('model.mobile');
			var street1=this.get('model.street1');
			var street2=this.get('model.street2');
			var city=this.get('model.city');
			var emailId=this.get('model.emailId');

			this.store.findRecord('contact',id).then(function(contact){
				contact.set('name',name);
				contact.set('mobile',mobile);
				contact.set('street1',street1);
				contact.set('street2',street2);
				contact.set('city',city);
				contact.set('emailId',emailId);

				contact.save();

				self.transitionToRoute('getAllContacts');
			});
		}
	}
});
