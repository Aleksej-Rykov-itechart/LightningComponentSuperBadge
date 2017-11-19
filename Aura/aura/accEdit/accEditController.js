({
	handleSaveRecord : function(component, event, helper) {
        component.find("recordEditor").saveRecord($A.getCallback(function(saveResult) {
           if(saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
               /* 
                //You can handle the success and error message in 
                // recordUpdated="{!c.handleRecordUpdated}" attribute also
               var resultsToast = $A.get("e.force:showToast");
                resultsToast.setParams({
                    "title": "Saved",
                    "message": "The record was saved."
                });
               resultsToast.fire();
               $A.get("e.force:refreshView").fire();*/
               console.log("Save completed successfully");
           } else if(saveResult.state === "INCOMPLETE") {
                console.log("User is offline, device doesn't support drafts.");
           } else if(saveResult.state === "ERROR") {
                    var errMsg = "";
                    // saveResult.error is an array of errors, 
                    // so collect all errors into one message
                    for (var i = 0; i < saveResult.error.length; i++) {
                        errMsg += saveResult.error[i].message + "\n";
                    }
                   if(errMsg != "") {
                      	cmp.set("v.recordError", errMsg); 
                   } else {
                    	cmp.set("v.recordError", "");
                   }
                console.log('Problem saving record, error: ' + JSON.stringify(saveResult.error));
            } else {
                 console.log('Unknown problem, state: ' + saveResult.state + ', error: ' + JSON.stringify(saveResult.error));
            }
        }));
	},
    handleRecordUpdated : function(component, event, helper) {
        var eventParams = event.getParams();
        if(eventParams.changeType === "CHANGED") {
            // get the fields that changed for this record
            var changedFields = eventParams.changedFields;
            console.log('Fields that are changed: ' + JSON.stringify(changedFields));
            // record is changed, so refresh the component (or other component logic)
            var resultsToast = $A.get("e.force:showToast");
            resultsToast.setParams({
                "title": "Saved",
                "message": "The record was updated."
            });
            resultsToast.fire();
        } else if(eventParams.changeType === "LOADED") {
            // record is loaded in the cache
        } else if(eventParams.changeType === "REMOVED") {
            // record is deleted and removed from the cache
        } else if(eventParams.changeType === "ERROR") {
            // there’s an error while loading, saving or deleting the record
        }
    }
})