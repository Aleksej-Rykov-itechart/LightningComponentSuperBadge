({
	doInit : function(component, event, helper) {
		// Prepare a new record from template
        component.find("contactRecordCreator").getNewRecord("Contact",null, false,$A.getCallback(function() {
            var rec = component.get("v.newContact");
            var error = component.get("v.newContactError");
            if(error || (rec === null)) {
               	console.log("Error initializing record template: " + error);
            } else {
                console.log("Record template initialized: " + rec.sobjectType);
            }    
        }));
	}, 
    
    handleSaveContact: function(component, event, helper) {
        //debugger;
        if(helper.validateContactForm(component)) {
            component.set("v.newContactError", null);
            component.set("v.simpleNewContact.AccountId", component.get("v.recordId"));
            component.find("contactRecordCreator").saveRecord(function(saveResult) {
            	if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
                    // record is saved successfully
                    var resultsToast = $A.get("e.force:showToast");
                    resultsToast.setParams({
                        "title": "Saved",
                        "message": "The record was saved."
                    });
                    $A.get("e.force:closeQuickAction").fire();
                    resultsToast.fire();
                    $A.get("e.force:refreshView").fire();
                } else if (saveResult.state === "INCOMPLETE") {
                    // handle the incomplete state
                    console.log("User is offline, device doesn't support drafts.");
                } else if (saveResult.state === "ERROR") {
                    // handle the error state
                    console.log('Problem saving contact, error: ' + 
                                 JSON.stringify(saveResult.error));
                } else {
                    console.log('Unknown problem, state: ' + saveResult.state + ',error: ' + JSON.stringify(saveResult.error));
                }
        	});
        } else {
            component.set("v.newContactError", "Please fill the mandatory fields");
        }
    }
})