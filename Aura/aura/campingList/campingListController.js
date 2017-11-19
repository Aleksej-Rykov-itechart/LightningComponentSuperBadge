({
	clickCreateItem : function(component, event, helper) {
		var validExpense = component.find('expenseform').reduce(function(validSoFar, inputCmp) {
			// Displays error messages for invalid fields
			inputCmp.showHelpMessageIfInvalid();
			return validSoFar && inputCmp.get('v.validity').valid;
		}, true);
		
		if (validExpense) {
			var newItem = component.get("v.newItem");
			helper.createItem(component, newItem);
			
			console.log("Create expense: " + JSON.stringify(newItem));
			var theItems = component.get("v.items");
			var newItemParsed = JSON.parse(JSON.stringify(newItem));
			//console.log("Expenses before 'create': " + JSON.stringify(newItems));
			
			theItems.push(newItemParsed);
			component.set("v.items",theItems);
			console.log("Expenses after 'create': " + JSON.stringify(theItems));
			component.set("v.newItem",{ 'sobjectType': 'Camping_Item__c',
                    'Name': '',
                    'Quantity__c': 0,
                    'Price__c': 0,
                    'Packed__c': false });
			//helper.createExpense(component, newExpense);
			
            //alert('All form entries look valid. Ready to submit!');
         } else {
             alert('Please update the invalid form entries and try again.');
         }
	},
	
	doInit : function(component, event, helper) {
		// create an action
		var action = component.get("c.getItems");
		// Add callback behavior for when response is received
		action.setCallback(this, function(response) {
			var state = response.getState();
			if(state == "SUCCESS") {
				component.set("v.items", response.getReturnValue());
				
			} else {
				console.log("Failed with state: " + state);
			}
		
		});
		// Send action off to be executed
		$A.enqueueAction(action);
	},
	
	handleAddItem : function(component, event, helper) {
		var updateItem = event.getParam("item");
		var createAction = component.get("c.saveItem");
		createAction.setParams({"campingItem":updateItem});
		createAction.setCallback(this, function(response) {
			var state = response.getState();
			if(state =="SUCCESS") {
				var items = component.get("v.items");
				items.push(response.getReturnValue());
				component.set("v.items",items);
			}
		
		});
		$A.enqueueAction(createAction);
		//helper.createItem(component, updateItem);
	}
})