({
	validateContactForm : function(component) {
        var validContactReturn = true;
        //debugger;
        var validContact = component.find('contactField').reduce(function(validSoFar, inputCmp) {
			// Displays error messages for invalid fields
			inputCmp.showHelpMessageIfInvalid();
			return validSoFar && inputCmp.get('v.validity').valid;
		}, true);
        if(!validContact) {
            validContactReturn = false; 
        }
        return(validContactReturn);
	}
})