({
	
    createItem : function(component, newItem) {
		var createAction = component.get("c.saveItem");
		createAction.setParams({"campingItem":newItem});
		createAction.setCallback(this, function(response) {
			var state = response.getState();
			if(state =="SUCCESS") {
				var items = component.get("v.items");
				items.push(response.getReturnValue());
				component.set("v.items",items);
			}
		
		});
		$A.enqueueAction(createAction);
	}
})