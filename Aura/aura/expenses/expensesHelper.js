({
	createExpense : function(component, expense) {
        this.saveExpense(component, expense, function(response) {
			var state = response.getState();
			if(state == "SUCESS") {
				var expenses = component.get("v.expenses");
				expenses.push(response.getReturnValue());
				component.set("v.expenses", expenses);
			}  
        });
		
		//$A.enqueueAction(saveAction);
		var theExpenses = component.get("v.expenses");
		var newExpense = JSON.parse(JSON.stringify(expense));
		console.log("Expenses before 'create': " + JSON.stringify(theExpenses));
		
		theExpenses.push(newExpense);
		component.set("v.expenses",theExpenses);
		console.log("Expenses after 'create': " + JSON.stringify(theExpenses));
		
	},
    updateExpense : function(component, expense) {
		 this.saveExpense(component, expense);
    },
    
    saveExpense : function(component, expense, callback) {
		var action = component.get("c.saveExpense");
		action.setParams({"expense":expense});  
        if(callback) {
            action.setCallback(this, callback);
        }
        $A.enqueueAction(action);
    }
})