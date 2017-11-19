({
	doInit : function(component, event, helper) {
		// create an action
		var action = component.get("c.getExpenses");
		// Add callback behavior for when response is received
		action.setCallback(this, function(response) {
			var state = response.getState();
			if(state == "SUCCESS") {
				component.set("v.expenses", response.getReturnValue());
				
			} else {
				console.log("Failed with state: " + state);
			}
		
		});
		// Send action off to be executed
		$A.enqueueAction(action);
	},
    
    handleUpdateExpense : function(component, event, helper) {
        var updateExp = event.getParam("expense");
        helper.updateExpense(component, updateExp);
    },
    handleCreateExpense: function(component, event, helper) {
        var newExpense = event.getParam("expense");
        helper.createExpense(component, newExpense);
    }
})