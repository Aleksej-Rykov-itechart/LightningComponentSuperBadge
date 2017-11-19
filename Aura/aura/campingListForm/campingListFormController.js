({
	clickCreateItem : function(component, event, helper) {
		var validItem = component.find('expenseform').reduce(function(validSoFar, inputCmp) {
			// Displays error messages for invalid fields
			inputCmp.showHelpMessageIfInvalid();
			return validSoFar && inputCmp.get('v.validity').valid;
		}, true);
		
		if (validItem) {
			var newItem = component.get("v.newItem");
			console.log("Create expense: " + JSON.stringify(newItem));
			helper.createItem(component, newItem);
			
         } else {
             alert('Please update the invalid form entries and try again.');
         }
	}
})