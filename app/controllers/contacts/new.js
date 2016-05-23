import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		addContact:function(){
			var name=this.get('name');
			var mobile=this.get('mobile');
			var street1=this.get('street1');
			var street2=this.get('street2');
			var city=this.get('city');
			var emailId=this.get('emailId');

			var newContact=this.store.createRecord('contact',{
				name:name,
				mobile:mobile,
				street1:street1,
				street2:street2,
				city:city,
				emailId:emailId
			});

			newContact.save();

			this.setProperties({
				name:'',
				mobile:'',
				street1:'',
				street2:'',
				city:'',
				emailId:''
			});
			this.transitionToRoute('getAllContacts');
		}
	}
});
