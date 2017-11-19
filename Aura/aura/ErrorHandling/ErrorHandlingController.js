({
	doAction : function(component, event, helper) {
        var inptComp = component.find("inputCmp");
		var inputNumber = inptComp.get("v.value");
        // Is input numeric?
        if(isNaN(inputNumber)) {
            inptComp.set("v.errors",[{message:"Input is not a number :"+ inputNumber}]);
        } else {
          inptComp.set("v.errors", null);  
        }
	},
    
    handleError : function(component, event, helper) {
        var errorsArr = event.getParam("errors");
       for (var i = 0; i < errorsArr.length; i++) {
             console.log("error " + i + ": " + JSON.stringify(errorsArr[i]));
       }
    },
    handleClearError :function(component, event) {
    }
})