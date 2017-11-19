({
	createItem : function(component, newItem) {
		var createEvent = component.getEvent("addItem");
		createEvent.setParams({ "item": newItem });
	    createEvent.fire();
	    component.set("v.newItem",{'sobjectType':'Camping_Item__c','Name':'','Packed__c':false,
	    							'Price__c':0,'Quantity__c':0});
	}
})