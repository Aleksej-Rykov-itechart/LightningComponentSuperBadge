({
	doInit : function(component, event, helper) {
		// create an action
		var action = component.get("c.getSearchOptions");
		// Add callback behavior for when response is received
		action.setCallback(this, function(response) {
			var state = response.getState();
			if(state == "SUCCESS") {
                console.log("Map"+ response.getReturnValue());
				component.set("v.searchOptionToIdMap", response.getReturnValue());
                var boatTypesArr = new Array();
                for(var keyofMap in response.getReturnValue()) {
                   	console.log('boat types -->'+keyofMap); 
                    boatTypesArr.push(keyofMap);
                }
                component.set("v.boatTypes", boatTypesArr);	
			} else {
				console.log("Failed with state: " + state);
			}
		
		});
		// Send action off to be executed
		$A.enqueueAction(action);
	},
    createNewBoat : function(component, event, helper) {
        var createBoatEvent = $A.get('e.force:createRecord');
        if (createBoatEvent) {
            //debugger;
            //component.set("v.showNewButton", true);
            var boatTypeName = component.find('selectedBoat').get('v.value');
            console.log("boatTypeName---: " + boatTypeName);
            var mapBoatNameId = component.get('v.searchOptionToIdMap');
            console.log("mapBoatNameId---: " + mapBoatNameId);
        	var boatTypeId = null;
            if(boatTypeName && mapBoatNameId && mapBoatNameId[boatTypeName]) {
				 boatTypeId = mapBoatNameId[boatTypeName];
                console.log("boatTypeId--->: " + boatTypeId);
            }
       
            createBoatEvent.setParams({
                "entityApiName": "Boat__c",
                "defaultFieldValues": {
                    'BoatType__c' : boatTypeId
                }
            });
            console.log("boatTypeId--->: " + boatTypeId);
            createBoatEvent.fire();
            helper.renderNewButton(component);
        }
    }
})