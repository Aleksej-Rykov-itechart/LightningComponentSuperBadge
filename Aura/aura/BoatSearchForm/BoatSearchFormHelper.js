({
    renderNewButton: function (component) {
    var createRecordEvent = $A.get('e.force:createRecord');
    if (createRecordEvent) {
        component.set('v.showNewButton', true);
    }
}})