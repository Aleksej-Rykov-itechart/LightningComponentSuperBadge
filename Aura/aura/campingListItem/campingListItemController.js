({
	packItem : function(component, event, helper) {
		//var newMessage = event.getSource().get("v.label");
		//console.log("handleClick2: Message: " + newMessage);
		var itemPacked = component.get("v.item");
		itemPacked.Packed__c = true;
		var btn = event.getSource();
		btn.set("v.disabled",true)
		component.set("v.item", itemPacked);
	}
})