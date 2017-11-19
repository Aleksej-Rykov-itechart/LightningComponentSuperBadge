({
    doInit : function(component, event, helper) {
        //debugger;
        var action = component.get("c.getCurrentUser");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if(state === "SUCCESS") {
                var user = response.getReturnValue();
            	component.set("v.greeting", user.FirstName);
            } else if(state === "ERROR") {
                let errors = response.getError();
                console.error(errors);
            }
            
        })
        $A.enqueueAction(action);
    }
})