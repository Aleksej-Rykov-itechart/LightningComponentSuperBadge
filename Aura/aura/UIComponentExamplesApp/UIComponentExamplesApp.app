<aura:application extends="force:slds">
    <c:UIComponentExamples />
    <lightning:button label="Search" onclick="{!c.doSomething}"/>
	<lightning:button label="Download" iconName="utility:download" onclick="{!c.doSomething}"/>
	<lightning:buttonIcon iconName="utility:settings" alternativeText="Settings" onclick="{!c.doSomething}"/>
	<ui:message title="Error" severity="error" closable="true">
      This is an error message.
	</ui:message>
    <ui:message title="Confirmation" severity="confirm" closable="true">
        This is a confirmation message.
    </ui:message>
    <ui:message title="Information" severity="info" closable="true">
        This is a message.
    </ui:message>
    <ui:message title="Warning" severity="warning" closable="true">
        This is a warning.
    </ui:message>
    <ui:message title="Error" severity="error" closable="true">
        This is an error message.
    </ui:message>
    <ui:menu >
    	<ui:menuTriggerLink aura:id="trigger" label="Opportunity Status"/>
        <ui:menuList class="actionMenu" aura:id="actionMenu">
              <ui:actionMenuItem aura:id="item2" label="Open" click="{!c.updateTriggerLabel}"/>
              <ui:actionMenuItem aura:id="item3" label="Closed" click="{!c.updateTriggerLabel}"/>
              <ui:actionMenuItem aura:id="item4" label="Closed Won" click="{!c.updateTriggerLabel}"/>
        </ui:menuList>
	</ui:menu>
</aura:application>