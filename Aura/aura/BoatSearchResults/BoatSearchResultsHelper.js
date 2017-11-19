({
	onSearch : function(component, event, helper) {
		// create an action
		var action = component.get("c.getBoats");
        action.setParams({boatTypeId:""});
        action.setCallback(this, function(response) {
			var state = response.getState();
			if(state == "SUCCESS") {
                console.log("response.getReturnValue() " + response.getReturnValue());
				component.set("v.boats", response.getReturnValue());
			} else {
				console.log("Failed with state: " + state);
			}
		});
		// Send action off to be executed
		$A.enqueueAction(action);
	}
})