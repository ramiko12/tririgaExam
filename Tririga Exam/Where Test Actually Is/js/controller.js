//105 

angular
	.module("MyApp", [])
	.controller("myCtrl",controller)

function controller(){
	var ctrl = this;
	var beginning = parseInt(prompt("Start from Question: ")) - 1;
	if (isNaN(beginning)){
		console.log("is NaN")
		beginning = 0;
	} else if (beginning >= 105){
		beginning--;
	}
	var end = parseInt(prompt("End at Question: "));

	if (isNaN(end)){
		end = 130;
	} else if (end >= 105){
		end--;
	}

	end = end - beginning;
	ctrl.questions = shuffle(questions.splice(beginning, end));

	ctrl.next = function(){
		if (ctrl.end === true){
			location.reload();
			return null;
		}
		console.log("num", num)
		console.log("end", end)
		if (num === end - 1){
			ctrl.end = true;
			return null;
		}
		ctrl.showAns = false;
		ctrl.correct = false;
		ctrl.incorrect = false;
		ctrl.ans="";
		num++;
		ctrl.question = ctrl.questions[num];
		ctrl.buttonName = "SUBMIT"
	}

	var num = 0;
	ctrl.question = ctrl.questions[num];
	ctrl.showAns = false;
	ctrl.color = "black";
	ctrl.reponse = "";
	ctrl.ansCount = 0;
	ctrl.count = 0;
	ctrl.buttonName = "SUBMIT"

	ctrl.submit = function(){
		ctrl.correct = false;
		ctrl.incorrect = false;
		ctrl.count++;
		if (ctrl.ans.toLowerCase() === ctrl.question[ctrl.question.length-2]){
			ctrl.correct = true;
			ctrl.color = "green"
			ctrl.ansCount++;
		} else {
			ctrl.incorrect = true;
			ctrl.color = "red";
		}
		ctrl.buttonName = "NEXT"
		ctrl.showAns = true;
		
	}

	ctrl.press = function(e){
		if (e.keyCode == 13){
			if(ctrl.showAns === true){
				ctrl.next();
			} else {
				ctrl.submit();
			}
		} else if (e.keyCode == 39){
			if(ctrl.showAns === true){
				ctrl.next();
			} else {
				ctrl.submit();
			}
		}
	}

	ctrl.click = function(){
		if (ctrl.showAns === false){
			ctrl.submit();
			// ctrl.buttonName = "NEXT"
		} else {
			ctrl.next();
			// ctrl.buttonName = "SUBMIT"
		}
	}

	ctrl.reload = function(){
		location.reload();
	}
}

//Fisher-Yates Shuffle Algorithm
function shuffle(array){
	var currentIndex = array.length, temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {

	// Pick a remaining element...
	randomIndex = Math.floor(Math.random() * currentIndex);
	currentIndex -= 1;

	// And swap it with the current element.
	temporaryValue = array[currentIndex];
	array[currentIndex] = array[randomIndex];
	array[randomIndex] = temporaryValue;
	}

	return array;
}

questions = [
		["Where are the classifications' hierarchical parents to child associations created?",
		"A. In the Form Builder",
		"B. In the Data Modeler",
		"C. In the Association Manager",
		"D. In the State Family Manager",
		"b",
		"B. In the Data Modeler"],
		["An existing portal must be modified so that a new navigation collection will display in the portal. Assuming that a navigation collection of type Quick Links exists and is populated with navigation items, what additional new element must be created to display this collection in the existing portal?",
		"A. Portal",
		"B. Portal Section",
		"C. Navigation Item",
		"D. Navigation Collection",
		"b",
		"B. Portal Section"
		],
		["Which workflow type gets executed by an association of two objects?",
		"A. synchronous workflow using temporary data",
		"B. synchronous workflow using permanent data",
		"C. asynchronous workflow using temporary data",
		"D. asynchronous workflow using permanent data",
		"d",
		"D. asynchronous workflow using permanent data"
		],
		["When a transition occurs to move a record into a tri Active state, the expected behavior is that the form is in a read-only state. This is not happening. What is the issue with the Read-Only property?",
		"A. It is not configured in the Sub Action properties.",
		"B. It is not configured in the Form Section properties.",
		"C. It is not configured in the Business Object properties.",
		"D. It is not configured in the State Transition properties for at least one transition.",
		"d",
		"D. It is not configured in the State Transition properties for at least one transition."
		],
		["Several organization records appear in reports but do not appear in the Organization hierarchy. What should be the first item to validate during the troubleshooting process for the records in question?",
		"A. verify that the records have the required Primary Organization association to the organization's root node in the hierarchy",
		"B. verify that the records have forward and reverse association strings of Included In and Includes to other records in the hierarchy",
		"C. verify that the records have forward and reverse association strings of Is Parent Of and Is Child Of to other records in the hierarchy",
		"D. verify that the records have forward and reverse association strings of Primary Location and Primary Location Of to other records in the hierarchy",
		"c",
		"C. verify that the records have forward and reverse association strings of Is Parent Of and Is Child Of to other records in the hierarchy"
		],
		["How can a list be sorted to display more frequent values first?",
		"A. In the Data Modeler, set the sequence order in the properties of the List field.",
		"B. Values can only be sorted in ascending and descending order and cannot be ordered individually.",
		"C. In the Form layout, use the Manual Sort option to arrange the entries in the desired order sequence.",
		"D. In the List Manager, use arrows from the Order column to move entries to the desired order sequence.",
		"d",
		"D. In the List Manager, use arrows from the Order column to move entries to the desired order sequence."
		],
		["What is the process to hide a state transition action from view in a form?",
		"A. Select Secondary Action in the sub actions properties in Form Builder.",
		"B. Deselect Default Display in the state transition properties in Form Builder.",
		"C. Select Secondary Action in the state transition properties in Form Builder.",
		"D. Configure Includes/Excludes in the sub actions properties in Form Builder.",
		"b",
		"B. Deselect Default Display in the state transition properties in Form Builder."
		],
		["Which statement is true when defining an Include association?",
		"A. The association from the child to the parent must be defined with the child in an editable state.",
		"B. The association from the parent to the child must be defined with the parent in an editable state.",
		"C. The association from the parent to the child must be defined with both the parent and the child in an editable state.",
		"D. The association from the child to the parent must be defined with both the parent and the child in an editable state.",
		"b",
		"B. The association from the parent to the child must be defined with the parent in an editable state."
		],
		["In the Data Modeler's Association List what does a red star next to the association indicate?",
		"A. The association is used in a smart section.",
		"B. The association is a dependent association.",
		"C. The association is referenced by a locator field.",
		"D. The association is referenced by a required field. ",
		"b",
		"B. The association is a dependent association."
		],
		["A navigation collection is a hierarchical structure that contains what?",
		"A. portal sections",
		"B. navigation items",
		"C. only menu items",
		"D. only related navigation items",
		"b",
		"B. navigation items"
		],
		["An extended formula can be created for which two data types? (Choose two, no spaces)",
		"A. Text",
		"B. Date",
		"C. Number",
		"D. Boolean",
		"E. Classification",
		"bc",
		"B. Date, C. Number"
		],
		["The designer is creating a query that will return several thousand records, so he is using the option Prompt Before Query to give the user a chance to reduce the number of records to be returned by the query. When the report is run it does not stop and returns all the records immediately. What is wrong with this query?",
		"A. There are no runtime filters.",
		"B. There are no system filters.",
		"C. The record's flag Enable Prompt Before Query has not been set in the business objects.",
		"D. The records returned are below a preset threshold used by the platform to enable this function",
		"a",
		"A. There are no runtime filters."
		],
		["While troubleshooting associations on a World Region record of Europe, the Associations tab shows these conditions while exploring the triCountry associations. What do the results indicate?",
		"A. Europe has duplicate associations to France, Germany, Ireland, and Italy.",
		"B. France, Germany, Ireland, and Italy will not show up properly in the Geography hierarchy.",
		"C. Europe has the association Is Parent Of and the association Is Parent World Region to several countries.",
		"D. Europe has the association Is Parent Of and the reverse association Is Parent World Region to several countries.",
		"c",
		"C. Europe has the association Is Parent Of and the association Is Parent World Region to several countries."
		],
		["The IF/THEN logic of the workflow is failing. Which task should be checked?",
		"A. Iter Task",
		"B. Fork Task",
		"C. Switch Task",
		"D. Create Record Task",
		"c",
		"C. Switch Task"
		],
		["Business objects are created using which tool?",
		"A. Form Builder",
		"B. Data Modeler",
		"C. Data Integrator",
		"D. Association Manager",
		"b",
		"B. Data Modeler"
		],
		["Query sections are preferred over multi-record smart sections except for what instance?",
		"A. When the developer wants the records displayed in a vertical format.",
		"B. When there are a lot of records so the query section performance suffers.",
		"C. When the developer wants the user to be able to filter the data at runtime.",
		"D. When the developer wants to sort the records by clicking on a column header.",
		"a",
		"A. When the developer wants the records displayed in a vertical format."
		],
		["A customer has complained that an error message is showing up after they close and reopen the form. It is discovered that a synchronous workflow controls the error message process. What should be changed so that the error message displays while the form is open?",
		"A. Change the synchronous workflow to use temporary data.",
		"B. Change the synchronous workflow to use permanent data.",
		"C. Change the synchronous workflow to trigger from a state action. ",
		"D. Change the synchronous workflow to an asynchronous workflow.",
		"a",
		"A. Change the synchronous workflow to use temporary data."
		],
		["When exporting an object migration package, what does the Wait option do?",
		"A. Stops the creation of the package",
		"B. Saves the package to a local drive",
		"C. Pauses the creation of the package",
		"D. Saves the package to the hosting server",
		"b",
		"B. Saves the package to a local drive "
		],
		["What are the three types of fields that may be created on a form?",
		"A. Smart Field, Data, Locator",
		"B. Data, Locator, Form Action",
		"C. Data, Form Action, Form Field",
		"D. Locator, Form Action, Form Field",
		"c",
		"C. Data, Form Action, Form Field"
		],
		["Which task has the option of forcing a recalculation of formulas?",
		"A. Trigger Formula",
		"B. Modify Metadata",
		"C. Retrieve Records",
		"D. Associate Records",
		"d",
		"D. Associate Records"
		],
		["An object migration package is being validated. Which log file shows the details of the validation?",
		"A. server.log",
		"B. Cache.log",
		"C. security.log",
		"D. ObjectMigration.log",
		"d",
		"D. ObjectMigration.log"
		],
		["Which statement is true about a switch task?",
		"A. The square is always the true side and always on the left.",
		"B. The square is always the false side and always on the left.",
		"C. The square is always the true side and can be on either the left or right.",
		"D. The square is always the false side and can be on either the left or right.",
		"d",
		"D. The square is always the false side and can be on either the left or right."
		],
		["If a list value is entered incorrectly, what step is required to change it in the List Manager?",
		"A. Update the list using a workflow",
		"B. Open the entry, change the value, and save it",
		"C. Delete the incorrect entry and add a correct entry",
		"D. Click Revise, make the necessary changes, then click Publish",
		"c",
		"C. Delete the incorrect entry and add a correct entry"
		],
		["A workflow instance shows the path that the workflow took during operation. A Create task failed in this workflow and the results of the Create task are zero. What does this mean?",
		"A. A record was not created",
		"B. A Modify task in the workflow failed.",
		"C. An association was created instead.",
		"D. A record was created but deleted in a later workflow task.",
		"a",
		"A. A record was not created"
		],
		["The requirement for a state transition is to automatically close the record window when the transition occurs at runtime. How can this functionality be implemented?",
		"A. Configure the Close Window setting in the sub action properties",
		"B. Configure the Close Window setting in the state transition properties",
		"C. Configure the Close Window setting for the target state properties in Form Builder",
		"D. Configure the Close Window setting in the properties for this action in Form Builder",
		"b",
		"B. Configure the Close Window setting in the state transition properties"
		],
		["The Workflow Instance tab of a form is not available at runtime. What should be done to make this tab visible?",
		"A. Configure the Show Workflow Instance setting in Form Builder",
		"B. Configure the Include Workflow Instance Tab setting in Data Modeler",
		"C. Configure the Visible setting in the Workflow Instance tab in Form Builder",
		"D. Configure the Visible setting in the Workflow Instance tab in the pre-load workflow",
		"a",
		"A. Configure the Show Workflow Instance setting in Form Builder"
		],
		["In the Data Modeler's Association List what does a yellow highlight behind the association indicate?",
		"A. The association is used in a smart section.",
		"B. The association is a dependent association.",
		"C. The association is referenced by a locator field.",
		"D. The association is referenced by a required field.",
		"a",
		"A. The association is used in a smart section."
		],
		["Which statement is true about the Data Scope setting when creating a query/report?",
		"A. Setting it to All Projects returns only records associated to projects for which the user is a contact.",
		"B. Setting it to Retired Projects returns only records of those projects that have been completed.",
		"C. Setting it to Company returns only records that are associated to the user's primary organization.",
		"D. Setting it to Active Project returns only records associated to the project the user is logged into when the report is rendered.",
		"d",
		"D. Setting it to Active Project returns only records associated to the project the user is logged into when the report is rendered."
		],
		["If using a Retrieve Records task whose source object is the Start Task and the object to be retrieved is related to the object of the Start Task by a Locator Field, which option in the From Records section would be the best to use?",
		"A. Use It",
		"B. Use Its Reference",
		"C. Use Its Association",
		"D. Use Any Associated BO from Module ... of Type ...",
		"b",
		"B. Use Its Reference"
		],
		["A workflow needs to perform a sequence of tasks many times for a finite set of records. Which workflow task should be used?",
		"A. Iter task",
		"B. Modify Records task",
		"C. Retrieve Records task",
		"D. Get Temp Record task",
		"a",
		"A. Iter task"
		],
		["When looking at a workflow instance, what does the green border around a task mean?",
		"A. The task was skipped.",
		"B. The task is a critical task.",
		"C. The task is currently executing.",
		"D. The task completed successfully.",
		"d",
		"D. The task completed successfully."
		],
		["How can the progress of a Data Integrator file upload be monitored in IBM TR1RIGA Application Platform V3.2 (TRIRIGA)?",
		"A. The TRIRIGA Admin Console: Error Logs > Process Error Log",
		"B. The TRIRIGA Admin Console: Managed Objects > System Manager",
		"C. The TRIRIGA application menu: Tools > Administration > Data Integrator",
		"D. The TRIRIGA application menu: Tools > System Setup > System > Data Upload",
		"d",
		"D. The TRIRIGA application menu: Tools > System Setup > System > Data Upload"
		],
		["In the Data Modeler under the Tools menu, which option defines the Publish Name?",
		"A. Publish BO",
		"B. BO Mapping",
		"C. Display Sequence",
		"D. BO State Transition",
		"b",
		"B. BO Mapping"
		],
		["Which workflow type can be called from a custom section action?",
		"A. Subflow workflow",
		"B. Synchronous workflow",
		"C. Asynchronous workflow",
		"D. Scheduled event workflow",
		"b",
		"B. Synchronous workflow"
		],
		["A change is made in a state transition configuration in Data Modeler but it has not carried over correctly at runtime. Why?",
		"A. The developer did not import the state transition in Data Modeler.",
		"B. The developer did not click Apply in the state transition properties.",
		"C. The developer did not publish the form of the base business object (BO).",
		"D. The developer did not make the change in the base BO in Data Modeler.",
		"b",
		"B. The developer did not click Apply in the state transition properties."
		],
		["Which data attribute(s) must a Data Integrator file contain to determine if the data being imported should create new records or update existing records?",
		"A. ID field",
		"B. SPECJD field",
		"C. Control Number field",
		"D. All elements of the Publish Name ",
		"d",
		"D. All elements of the Publish Name "
		],
		["Which property must be defined during the creation of a locator that will display information about a secondary business object record?",
		"A. the association string",
		"B. the Live Link Property",
		"C. the Edit Mapping Property link",
		"D. the secondary's object forward association",
		"a",
		"A. the association string"
		],
		["After making a change in a form, what action must be selected to make the change visible to end users?",
		"A. Reset",
		"B. Publish",
		"C. Preview",
		"D. Validate",
		"b",
		"B. Publish"
		],
		["Which workflow type updates the database immediately?",
		"A. synchronous workflow using temporary data",
		"B. synchronous workflow using permanent data",
		"C. asynchronous workflow using temporary data",
		"D. asynchronous workflow using permanent data",
		"b",
		"B. synchronous workflow using permanent data"
		],
		["Which list shows valid report types when creating a new report in the Report Manager?",
		"A. Report, Chart, Plot",
		"B. Chart, Plot, Summary",
		"C. Report, Plot, Summary",
		"D. Report, Chart, Summary",
		"d",
		"D. Report, Chart, Summary"
		],
		["A field level formula that depends on a query has been modified within a business object. The query did not change. Which cache must be cleared?",
		"A. UOM Data",
		"B. State Data",
		"C. Query Cache",
		"D. Extended Formula Cache",
		"d",
		"D. Extended Formula Cache"
		],
		["What is the required action to trigger an onChange event? ",
		"A. A state transition action is clicked.",
		"B. The field value is changed by a workflow.",
		"C. A field value is changed by a Data Integrator.",
		"D. The user removing the focus from a field after changing its value",
		"d",
		"D. The user removing the focus from a field after changing its value"
		],
		["A text field on a form cannot display all of the characters in its value in a single line. How can the visible portion of the field be enlarged on the form?",
		"A. Adjust the size value for this field in Data Modeler",
		"B. Adjust the minimum size setting for this field in Form Builder",
		"C. Adjust the result column setting for this field in Data Modeler",
		"D. Adjust the column and/or row span settings for this field in Form Builder",
		"d",
		"D. Adjust the column and/or row span settings for this field in Form Builder"
		],
		["How are runtime filters created?",
		"A. By selecting the appropriate Module, Business Object, and Field in the Advanced tab.",
		"B. By checking the Prompt Before Query check box on the Options sub tab of the General tab.",
		"C. By checking the box marked User and setting the appropriate filter operator for the desired field.",
		"D. By checking the box marked System with a keyword of $$RUNTIME$$ as the value for the desired field",
		"c",
		"C. By checking the box marked User and setting the appropriate filter operator for the desired field."
		],
		["Where are sub actions defined?",
		"A. The state transition in Form Builder",
		"B. The state transition in Data Modeler",
		"C. The state transition in Report Manager",
		"D. The state transition in Workflow Builder",
		"b",
		"B. The state transition in Data Modeler"
		],
		["Where in the Admin Console can it be determined which workflows are currently running in the system?",
		"A. Workflow Events",
		"B. Threads Manager",
		"C. Workflows Executing",
		"D. Workflow Agent Manager",
		"c",
		"C. Workflows Executing"
		],
		["A user reports that the workflow is updating the wrong set of records. Which workflow task should be checked?",
		"A. Modify Metadata Task",
		"B. Retrieve Records Task",
		"C. Get Temp Record Task",
		"D. Save Permanent Record Task",
		"b",
		"B. Retrieve Records Task"
		],
		["If a field is set to Read Only in a business object (BO), how does it affect a form based on that BO?",
		"A. The field will not be allowed to be used in the form.",
		"B. The field will have the Read Only box checked by default in the form, but it can be changed.",
		"C. The field will have the Read Only box checked by default in the form, but it cannot be changed.",
		"D. The field will not be set to Read Only in the form, and the field will have to be set to Read Only.",
		"c",
		"C. The field will have the Read Only box checked by default in the form, but it cannot be changed."
		],
		["Which type of workflow can be called from an onClick event?",
		"A. Subflow workflow",
		"B. System workflow",
		"C. Synchronous workflow",
		"D. Asynchronous workflow",
		"c",
		"C. Synchronous workflow"
		],
		["What is the purpose of a group override?",
		"A. To exclude a navigation portal section from a portal",
		"B. To exclude a navigation item from a navigation collection",
		"C. To exclude a portal section from the personalization option",
		"D. To exclude a navigation item from being added as related links",
		"b",
		"B. To exclude a navigation item from a navigation collection"
		],
		["How is Workflow Logging turned on in the Admin Console?",
		"A. Check the box for Roll Workflow Logging",
		"B. Check the box for Workflow Logging and click Apply",
		"C. Check the box for Enable All Logging and click Apply",
		"D. Check the box for Workflow Logging and restart the application",
		"b",
		"B. Check the box for Workflow Logging and click Apply"
		],
		["How can some of the Menu tabs be hidden from end users in the system? ",
		"A. In the Security Manager, set Access All Profiles to No",
		"B. In the Security Manager, set Personalize Portal to Yes, then hide the tabs in their portal",
		"C. In the Security Manager, set Personalize Bookmarks to Yes, then hide the tabs in their portal",
		"D. In the Navigation Builder, use the Group Overrides to hide these Menu tabs from the end users1 Security Group",
		"d",
		"D. In the Navigation Builder, use the Group Overrides to hide these Menu tabs from the end users1 Security Group"
		],
		["Which workflow type updates the screen and not the database?",
		"A. Synchronous workflow using temporary data",
		"B. Synchronous workflow using permanent data",
		"C. Asynchronous workflow using temporary data",
		"D. Asynchronous workflow using permanent data",
		"a",
		"A. Synchronous workflow using temporary data"
		],
		["Which statement is true about documents whose document record has been published?",
		"A. They cannot be downloaded.",
		"B. They can never be checked out again.",
		"C. They receive a new major revision number.",
		"D. They can be edited by the user in the application.",
		"c",
		"C. They receive a new major revision number."
		],
		["Which statement is always true about the columns tab of a query?",
		"A. The developer can set field filters against individual fields.",
		"B. The Editable check box is available for each selected field.",
		"C. The Business Object (BO) section will only show BOs if there are associated BOs set for the query.",
		"D. The columns section will display fields by name and label for the selected BO. grouped by BO section.",
		"d",
		"D. The columns section will display fields by name and label for the selected BO. grouped by BO section."
		],
		["An editable report has been created with the name triPeople - triRetired - Editable. The report designer wants to allow the user to be able to unretire multiple records. The designer has properly set the query to be editable and has selected the proper state. When the designer goes to the query's Advanced tab to set the actions that will be available to the user, he finds that option is not available. What could be the problem?",
		"A. The report has been created from the My Reports Tab.",
		"B. There are no editable fields in the triRetired state so no actions are allowed.",
		"C. The query is of type Report. Queries of type Report cannot be made editable.",
		"D. The record is not editable for that state so no actions are available from the editable query.",
		"a",
		"A. The report has been created from the My Reports Tab."
		],
		["Which statement is true about selecting Live Link when setting up a smart section?",
		"A. The data displayed in the section is related to the choices selected by the user at run time.",
		"B. The data will always be pulled from the referenced record every time the smart section is rendered.",
		"C. The smart section cannot be populated by workflow, dataconnect,or data integrator, only by an active end user.",
		"D. The associations used in connecting the records at run time do not need to be pre-defined but can be established at run time.",
		"b",
		"B. The data will always be pulled from the referenced record every time the smart section is rendered."
		],
		["Which statement is true about how association filters may be used in queries/reports? ",
		"A. They cannot be used if using system filters.",
		"B. They can filter based on an association to a fixed record.",
		"C. They cannot be used if using a runtime filter against a field.",
		"D. They can filter based on an association determined at runtime by user input.",
		"b",
		"B. They can filter based on an association to a fixed record"
		],
		["A customer has reported that the Send E-mail button is failing. The synchronous workflow is not processing. What should be checked with the synchronous workflow?",
		"A. Make sure it is attached to the onClick event of the button.",
		"B. Make sure it is attached to the onChange event of the button.",
		"C. Make sure it is attached to the save sub action of the state transition.",
		"D. Make sure it is attached to the section action in the section that the button resides.",
		"a",
		"A. Make sure it is attached to the onClick event of the button."
		],
		["A customer requests a package of all their People data. How can this request be met?",
		"A. Create a Full Package of the people data, export it, and send it to the client",
		"B. Create a By Date package of the people data, export it to the server, and send to the client",
		"C. Inform the customer that data packages are too large to be created and therefore it cannot be done",
		"D. Inform the customer that data packages are problematic because record level associations are not maintained",
		"d",
		"D. Inform the customer that data packages are problematic because record level associations are not maintained"
		],
		["In the Admin Console DataConnect tool, what is the purpose of Force Clean Up?",
		"A. It fails the completed DataConnect jobs.",
		"B. It retries the completed DataConnect jobs.",
		"C. It readies the completed DataConnect jobs.",
		"D. It removes the completed DataConnect jobs.",
		"d",
		"D. It removes the completed DataConnect jobs."
		],
		["A Notification Helper Object needs to be associated to the people records to notify using which association string?",
		"A. Notify",
		"B. Route To",
		"C. Deliver To",
		"D. Notification For",
		"a",
		"A. Notify"
		],
		["After clicking the Find action in the Field List panel in the Data Modeler, which three options can be used to limit search results without wildcards? (Choose three, no spaces)",
		"A. Type",
		"B. Form",
		"C. Suffix",
		"D. Formula",
		"E. Module Name",
		"F. Business Object Name",
		"aef",
		"A. Type, E. Module Name, F. Business Object Name"
		],
		["A smart section must be created for a business object (BO). What is required in order for this to be possible?",
		"A. The BO must be in a non-published state.",
		"B. A smart section must be created in Form Builder.",
		"C. The BO must be configured with Has Staging Table.",
		"D. A new data section must be created in Data Modeler.",
		"a",
		"A. The BO must be in a non-published state."
		],
		["When creating a new Query section, what must be selected in order to save the section?",
		"A. Association type",
		"B. A predefined query",
		"C. Show Query Header parameter",
		"D. Temp Select Association parameter",
		"b",
		"B. A predefined query"
		],
		["Which statement is true regarding building a form?",
		"A. Sections can be added to the form without being defined in the business object (BO).",
		"B. Data fields can be added to the form without being defined in the BO.",
		"C. Locator fields can be added to the form without being defined in the BO.",
		"D. Smart sections can be added to the form without being defined in the BO.",
		"a",
		"A. Sections can be added to the form without being defined in the business object (BO)."
		],
		["For a new non-base business object (BO), what is the default origin of the state family?",
		"A. It must be manually imported from another BO.",
		"B. It is automatically imported into the new BO from the module.",
		"C. It must be manually imported from the State Family collection.",
		"D. It is automatically imported into the new BO from the base BO.",
		"d",
		"D. It is automatically imported into the new BO from the base BO."
		],
		["What does using a system keyword within an association filter allow a developer to do?",
		"A. Filter based on relationships to user input at runtime",
		"B. Filter based on a relationship to another query result set",
		"C. Dynamically change the record used as the basis for the association filter",
		"D. Overload the data type provided as the filter source for the association filter",
		"c",
		"C. Dynamically change the record used as the basis for the association filter"
		],
		["The Attention section is intended to be hidden by default for a record in null state but it is able to be seen at runtime. What should be done to hide the Attention section?",
		"A. Configure the Visible setting for this tab in Form Builder ",
		"B. Configure the Visible setting for this section in Form Builder",
		"C. Configure the Visible setting for this state transition in Form Builder",
		"D. Configure the Visible setting for this state transition in Data Modeler",
		"b",
		"B. Configure the Visible setting for this section in Form Builder"
		],
		["A state transition is not supposed to be available as a clickable action in a form at runtime but it appears anyway. Why?",
		"A. The state transition is not configured to be excluded in the Sub Action properties.",
		"B. The Hidden Action property is not configured correctly in the State Transition properties.",
		"C. The Default Display property is not configured to be excluded in the Sub Action properties.",
		"D. The Secondary Action property is not configured correctly in the State Transition properties.",
		"a",
		"A. The state transition is not configured to be excluded in the Sub Action properties."
		],
		["Which statement is true about a Publish Name (also known as BO Mapping)?",
		"A. The Publish Name must start with a field.",
		"B. A Publish Name is not required to publish a BO.",
		"C. The Publish Name may not use multiple field values.",
		"D. Using multiple values for the Name field is allowed only if they come from different BO sections.",
		"a",
		"A. The Publish Name must start with a field."
		],
		["The Association tab of a form is not available at runtime. What should be done to make this tab visible?",
		"A. Configure the Show Association setting in Form Builder",
		"B. Configure the Include Association Tab setting in Data Modeler",
		"C. Configure the Visible setting in the Association tab in Form Builder",
		"D. Configure the Visible setting in the Association tab in the pre-load workflow ",
		"a",
		"A. Configure the Show Association setting in Form Builder"
		],
		["Which statement is true about a reference when referring to a smart section or locator field?",
		"A. It indicates a direct link between records.",
		"B. It is a lookup established by using a dependent association.",
		"C. It is the slowest way to access related data and should only be used in mapping as a last resort.",
		"D. It represents a relationship between records by bridging across the IBS_SPEC_ASSIGNMENTS (association) table.",
		"a",
		"A. It indicates a direct link between records."
		],
		["Which statement is true about deleting objects from an object migration import package?",
		"A. Objects cannot be deleted from an import package.",
		"B. Objects should be deleted after applying the import package.",
		"C. Only validated objects can be deleted from an import package.",
		"D. Objects should be deleted before applying the import package.",
		"d",
		"D. Objects should be deleted before applying the import package."
		],
		["While working in the Document Manager tool, which statement is true about a document that has been checked out?",
		"A. It is not accessible to the application.",
		"B. It cannot be checked out by another person.",
		"C. It can be checkout out again, but only by the owner of the document.",
		"D. It cannot be checked out again until the document record has been published",
		"b",
		"B. It cannot be checked out by another person."
		],
		["When do we define the additional fields to be populated along with the locator field?",
		"A. At runtime in the record with the Ed it Map command.",
		"B. After the locator field has been saved, with the Edit Map command.",
		"C. At the same time that the locator field is first created and before it is saved.",
		"D. After the locator field has been saved, from the additional fields own Edit Map properties.",
		"b",
		"B. After the locator field has been saved, with the Edit Map command."
		],
		["The Building form utilizes a Contact query section to show all contacts associated to the Building. A user says that he remembers adding multiple contacts to the Building record last week but now no contacts appear in the Contact query section. When troubleshooting the associations, which statement is true? ",
		"A. The association filter used in the query must also have the association defined in the Report Manager.",
		"B. The association filter for the query in the query section is no longer filtering by the association string created when the form adds records.",
		"C. The association filter used in the query must match what is defined in the Data Modeler's Association List for the Building business object (BO).",
		"D. The association filter used in the query must match what is defined in the Association Manager between the Building and Contact BO.",
		"b",
		"B. The association filter for the query in the query section is no longer filtering by the association string created when the form adds records."
		],
		["Changes have been made to several queries and reports in the system. Which caches must be cleared in the Admin Console so the query and report changes can be applied?",
		"A. Portal Logo",
		"B. Query Cache",
		"C. Security Scope",
		"D. Object MetaData Cache",
		"b",
		"B. Query Cache"
		],
		["Which workflow type gets fired by a user closing the form to a record?",
		"A. Subflow",
		"B. System",
		"C. Synchronous",
		"D. Asynchronous",
		"d",
		"D. Asynchronous"
		],
		["When is a dependent association used by a developer?",
		"A. When the association is only assignable by workflow mapping.",
		"B. When the association is only valid when used with the module's base business object.",
		"C. When the choice of associations available to a user is dependent on a previous selected association.",
		"D. When the dependent record is to be deleted if the parent record is deleted or the association is broken.",
		"d",
		"D. When the dependent record is to be deleted if the parent record is deleted or the association is broken."
		],
		["After using the Find option to add existing fields to a business object (BO), which statement is true?",
		"A. Field properties cannot be changed.",
		"B. Field properties are all automatically set to the default values of the last added field.",
		"C. Field properties can be changed, and any changes will be propagated to the original field in the source BO.",
		"D. Field properties can be changed, and any changes will not be propagated to the original field in the source BO.",
		"d",
		"D. Field properties can be changed, and any changes will not be propagated to the original field in the source BO."
		],
		["An object migration package is about to be imported but a few objects are identified that should not be overwritten. What is the best option?",
		"A. There is no other choice but to overwrite these objects.",
		"B. Delete these objects from the package and import the rest.",
		"C. The Comparison Report allows the choosing of what to import. ",
		"D. Only select the desired objects to import and then click Import.",
		"b",
		"B. Delete these objects from the package and import the rest."
		],
		["When looking at a workflow instance, what can the red border around a task mean?",
		"A. The task has failed.",
		"B. The task was skipped.",
		"C. The task is a critical task.",
		"D. The task has been completed.",
		"a",
		"A. The task has failed."
		],
		["Which workflow tasks can remove an association, not just replace it?",
		"A. Modify Records",
		"B. Delete Reference",
		"C. Associate Records",
		"D. Modify Metadata Records",
		"c",
		"C. Associate Records"
		],
		["Workflows are not running in the system. Where in the Admin Console can workflow processing be turned on?",
		"A. Agent Manager",
		"B. Workflow Events",
		"C. Threads Manager",
		"D. Workflows Executing",
		"a",
		"A. Agent Manager"
		],
		["If the Dependent List box is checked, what must also be specified?",
		"A. List Size",
		"B. Master List",
		"C. Default Value",
		"D. Business Object",
		"b",
		"B. Master List"
		],
		["When applying the Sort Section action on a form's tab, which statement is true regardless of the original layout of the sections? ",
		"A. The sections will be reorganized in the order that they were created.",
		"B. The sections will be reorganized in the selected order with the exception of those sections where the Visible property is left unchecked.",
		"C. The sections will be reorganized in the selected order from the bottom of the tab to the top of the tab regardless of the original parameters.",
		"D. The sections will be reorganized in the selected order from the top of the tab to the bottom of the tab regardless of the original parameters.",
		"d",
		"D. The sections will be reorganized in the selected order from the top of the tab to the bottom of the tab regardless of the original parameters."
		],
		["Which workflow task can create an association?",
		"A. Trigger Action",
		"B. Modify Records",
		"C. Modify Metadata",
		"D. Retrieve Records",
		"b",
		"B. Modify Records"
		],
		["How can a designer add a field to the form that will trigger a workflow when it is clicked on?",
		"A. Add a field of type Data and attach a workflow to its action",
		"B. Add a field of type Form Field and attach a workflow to its action",
		"C. Add a field of type Form Action and attach a workflow to its action",
		"D. Add a field from the Components pane and attach a workflow to its action",
		"c",
		"C. Add a field of type Form Action and attach a workflow to its action"
		],
		["Which tool can change the name of a form?",
		"A. Form Builder",
		"B. Data Modeler",
		"C. Reports Manager",
		"D. Association Manager",
		"a",
		"A. Form Builder"
		],
		["A developer has been tasked to create a method to push a record from the null state to the triActive state without having the action available on a form. What should be done to implement this design?",
		"A. Create a state transition from null to triActive in Form Builder and keep Visible unchecked in the state transition properties.",
		"B. Create a state transition from null to triActive in Data Modeler and keep Default Display unchecked in the state transition properties.",
		"C. Create a state transition from null to tri Draft, another from tri Draft to triActive in Form Builder, and keep Secondary Action checked in the state transition properties.",
		"D. Create a state transition from null to tri Draft, another from tri Draft to triActive in Data Modeler, and keep Secondary Action checked in the state transition properties.",
		"b",
		"B. Create a state transition from null to triActive in Data Modeler and keep Default Display unchecked in the state transition properties."
		],
		["Which statement is true about source mapping?",
		"A. It is used only when mapping a smart section or locator field.",
		"B. It is used only when the source object is the object of the start task.",
		"C. It is used only when the source and target objects are the same type.",
		"D. It is used only when there is a temporary association between the objects.",
		"a",
		"A. It is used only when mapping a smart section or locator field."
		],
		["Which workflow type gets executed by a subaction of a state transition?",
		"A. Subflow",
		"B. System",
		"C. Synchronous",
		"D. Asynchronous",
		"c",
		"C. Synchronous"
		],
		["What action is required to roll the server.log file?",
		"A. Restart the system",
		"B. Click Roll All Logs in the System Manager",
		"C. Stop and start any agent in the Agent Manager",
		"D. Click the Roll Log Image/Link next to the appropriate category in Error Logging",
		"d",
		"D. Click the Roll Log Image/Link next to the appropriate category in Error Logging"
		],
		["Multiple DataConnect jobs were supposed to start but have not. What should be checked to make sure the DataConnect process is running?",
		"A. DataConnect",
		"B. Agent Manager",
		"C. Database Manager",
		"D. Database Query Tool",
		"b",
		"B. Agent Manager"
		],
		["What is the most efficient way to add an additional 10 new entries to an existing list?",
		"A. Use a workflow to add the new list values.",
		"B. Use Data Integrator to import a new list with the new values.",
		"C. Select the list, enter all the values, and then save the entries.",
		"D. In the form that lists the values, enter each value as it is needed for that particular record.",
		"c",
		"C. Select the list, enter all the values, and then save the entries."
		],
		["When creating an extended formula there are variable declarations called Inputs. Which statement is true?",
		"A. Inputs are case sensitive and must be used in the order they were declared.",
		"B. Inputs are not case sensitive and must be used in the order they were declared.",
		"C. Inputs are case sensitive and do not have to be used in the order they were declared.",
		"D. Inputs are not case sensitive and do not have to be used in the order they were declared.",
		"c",
		"C. Inputs are case sensitive and do not have to be used in the order they were declared."
		],
		["What is the purpose of a group override? ",
		"A. To change a navigation item to a group-specific target",
		"B. To change a portal section to a secondary portal type",
		"C. To change a navigation portal section to a specific portal target",
		"D. To change a navigation item so it can be added as related links",
		"a",
		"A. To change a navigation item to a group-specific target"
		],
		["Which statement is true when choosing between using a smart section or locator field?",
		"A. A locator field allows live link; a smart section does not.",
		"B. A locator field can be overloaded with alternate data types; a smart section cannot.",
		"C. A smart section only creates an association; a locator field creates an association and a reference.",
		"D. A smart section can be mapped directly with data integrator using the keyword Associate; a locator field cannot.",
		"b",
		"B. A locator field can be overloaded with alternate data types; a smart section cannot."
		],
		["Which statement is always true about runtime filters and queries?",
		"A. Users are limited to three values when using runtime filters.",
		"B. Runtime filters can be set against fields that are not displayed on the query.",
		"C. When using runtime filters, the user must apply filters before seeing the results of the query.",
		"D. Runtime filters allow the system to dynamically alter results (for example based on the record that initiated the query)",
		"b",
		"B. Runtime filters can be set against fields that are not displayed on the query."
		],
		["A data load was done incorrectly resulting in a number of records not being set up correctly. There are too many to modify by hand so a workflow gets written to fix the deficiency. What should the workflow be tied to and triggered from?",
		"A. A Patch Helper",
		"B. A Workflow Helper ",
		"C. A Calculation Helper",
		"D. A Notification Helper",
		"a",
		"A. A Patch Helper"
		],
		["How should an object migration package be exported directly to the hosting server? ",
		"A. click on Export then click on Wait",
		"B. click on Export then click on Background ",
		"C. save the package locally and then FTP it to the server",
		"D. save the package locally and then e-mail it to the server administrator",
		"b",
		"B. click on Export then click on Background "
		],
		["When looking at a workflow instance there is a switch that is inside the body of an iterator that shows that both sides of the switch were executed. Why?",
		"A. Each side alternately executes in switch tasks.",
		"B. Each side was executed during separate iterations.",
		"C. Each side was executed because the switch criteria was left blank.",
		"D. Each side is shown only when the last two iterations resulted in both sides executing.",
		"b",
		"B. Each side was executed during separate iterations."
		],
		["A developer adds a new state transition to a business object and now would like it add it to an existing form. What must be done?",
		"A. Click Find in the form to import existing state transitions.",
		"B. Nothing, state transitions are automatically imported into a form.",
		"C. Select Default Display in the state transition properties in Data Modeler.",
		"D. Select Secondary Action in the state transition properties in Data Modeler.",
		"a",
		"A. Click Find in the form to import existing state transitions."
		],
		["Which statement is true about the Summary Columns section on the Order and Group tab of a query?",
		"A. It is used with every field type.",
		"B. It returns the records in a summary line instead of as individual records.",
		"C. It sums any selected number field for each group type and/or for total records.",
		"D. It allows the developer to type in a query description for other developers to preview",
		"c",
		"C. It sums any selected number field for each group type and/or for total records."
		],
		["A new classification has been defined and the developer is ready to create the new classification's local root. From the Hierarchy pane the focus is placed on the Classification root node and the option New is selected. The new classification does not show up as an option in the Hierarchy pane drop-down as a valid child that can be added to the root. What could be wrong?",
		"A. The new classification's form has not been added to the Includes/Forms tab of the new classification's form.",
		"B. The new classification's form has not been added to the Includes/Forms tab of the root classification form.",
		"C. The new classification's form has not been added to the Includes/Forms tab of the classification business object (BO).",
		"D. The new classification's form has not been added to the Includes/Forms tab of the new classifications BO.",
		"b",
		"B. The new classification's form has not been added to the Includes/Forms tab of the root classification form."
		],
		["Where are two places to view the results of a completed workflow? (Choose two, no spaces)",
		"A. Workflow Builder",
		"B. Workflow Instance Tab of a record",
		"C. Workflow Events in the Admin Console",
		"D. Workflows Executing in the Admin Console",
		"E. Workflow Agent Manager in the Admin Console",
		"ab",
		"A. Workflow Builder, B. Workflow Instance Tab of a record"
		],
		["A My Reports report has been designed to return the assets associated with the user logged into the system. When the report is run by the user it returns all the assets in the database. The user has been assigned assets. The assets display correctly in the user's people record and the proper forward association from the perspective of the people Has Assets and the reverse association Is Asset Of has been created. What could be wrong with the report?",
		"A. The association filter is using the string Has Assets.",
		"B. The association's filter property Reverse Association is set to Yes.",
		"C. The association filter is using the keyword $$RECORDID$$ for the record. ",
		"D. The association filter is using the business object of triPeople as the filter's object.",
		"c",
		"C. The association filter is using the keyword $$RECORDID$$ for the record. "
		],
		["The Data Integrator tool supports which file format for import?",
		"A. XML(*.xml)",
		"B. Tab delimited(*.txt)",
		"C. Excel (*.xls, *xlsx)",
		"D. HTML(*.htm,*.html)",
		"b",
		"B. Tab delimited(*.txt)"
		],
		["In a workflow, a Retrieve Records Task is failing to return records. Which two steps should be taken to resolve the issue? (Choose two, no spaces)",
		"A. Make sure that the query is attached",
		"B. Check that the filter in the query is correct",
		"C. Check the association selected in the From Records",
		"D. Run the query in the Systems Report tab of My Reports",
		"E. Check that the From Record is pointing to the correct workflow task",
		"ce",
		"C. Check the association selected in the From Records, E. Check that the From Record is pointing to the correct workflow task"
		],
		["A navigation collection of type Menu can contain a maximum of how many levels?",
		"A. 1 level of navigation",
		"B. 2 levels of navigation",
		"C. 3 levels of navigation",
		"D. 4 levels of navigation",
		"d",
		"D. 4 levels of navigation"
		],
		["An editable query has been created with the name triPeople - triRetired - Editable. The query designer wants to allow the user to be able to unretire multiple records. When the designer goes to set the state in the editable query she does not see the option to set this property. What could be the problem?",
		"A. The developer has not set the editable property to Yes.",
		"B. The query type has been set to Report. This type of query is not editable.",
		"C. There are no editable fields in the triRetired state so this state is excluded.",
		"D. The record has been set to be uneditable in the triRetired state, so an editable query cannot be created",
		"a",
		"A. The developer has not set the editable property to Yes."
		],
		["Which type of state transition completion will trigger a save process on the record at runtime?",
		"A. A transition that links back to itself.",
		"B. A transition that links to another state.",
		"C. Any transition will trigger a save process.",
		"D. Any transition that contains an action called triSave or triSaveAndClose.",
		"c",
		"C. Any transition will trigger a save process."
		],
		["A change is made in a sub action configuration but has not carried over correctly at runtime. Why? ",
		"A. The developer did not publish the state transition in Data Modeler.",
		"B. The developer did not import the sub action into the form in Form Builder. ",
		"C. The developer did not click OK to save the changes in the Sub Action properties.",
		"D. The developer did not make the change in the base business object in Data Modeler.",
		"b",
		"B. The developer did not import the sub action into the form in Form Builder. "
		],
		["Which workflow type will be a Pre-Create workflow?",
		"A. Subflow",
		"B. System",
		"C. Synchronous",
		"D. Asynchronous",
		"c",
		"C. Synchronous"
		],
		["Where is a user's new login portal set?",
		"A. User's profile",
		"B. User's preferences",
		"C. User's security group",
		"D. User's organization profile",
		"a",
		"A. User's profile"
		],
		["Which three options are inherited from the BASE business object (BO)? (Choose three, no spaces)",
		"A. Form",
		"B. Fields",
		"C. Description",
		"D. BO Mapping",
		"E. State Family",
		"F. Associations",
		"bef",
		"B. Fields, E. State Family, F. Associations"
		],
		["What type of workflow can be called from an onChange event? ",
		"A. Subflow workflow",
		"B. Synchronous workflow",
		"C. Asynchronous workflow",
		"D. Scheduled event workflow",
		"b",
		"B. Synchronous workflow"
		],
		["The design requirement for a query section is to make sure that the end user cannot remove any records from the query section at runtime. By default, a DeAssociate action does appear. What should be done to reconfigure the section?",
		"A. Delete the DeAssociate action from the query section.",
		"B. Delete the label for the DeAssociate action in the query section.",
		"C. Uncheck the Active setting in the DeAssociate action for the source query.",
		"D. Uncheck the Pop-up setting for the DeAssociate action in the source query.",
		"b",
		"B. Delete the label for the DeAssociate action in the query section."
		],
		["A requirement is sent to save the data when a user clicks on Create Draft. The record should move to the next state after a user clicks Create Draft. It is verified that the validation workflow is processing, but the record remains in the Draft state. What action should be taken?",
		"A. Check that the synchronous workflow is set to permanent data.",
		"B. Check that the event has been set correctly on the asynchronous workflow.",
		"C. Check that the synchronous workflow is properly attached to the sub action.",
		"D. Check that the Save Permanent Data task has been added to the synchronous workflow.",
		"d",
		"D. Check that the Save Permanent Data task has been added to the synchronous workflow."
		],
		["When a business object (BO) is published, how can one tell that the publish process has been completed?",
		"A. A pop-up message appears to confirm the BO publication.",
		"B. The revised property is not grayed out in the Data Modeler.",
		"C. All forms for this BO are automatically published with this BO.",
		"D. A notification has been sent to the user that triggered the publish process.",
		"d",
		"D. A notification has been sent to the user that triggered the publish process."
		],
		["Where is it possible to set field values for a state transition?",
		"A. In the state properties in the Data Modeler",
		"B. In the sub action properties in the Data Modeler",
		"C. In the state transition properties in the Form Builder",
		"D. In the state transition properties in the State Family Manager",
		"b",
		"B. In the sub action properties in the Data Modeler"
		],
		["Where does an onClick event get configured?",
		"A. In the start condition of a workflow",
		"B. In the properties of a tab in Form Builder",
		"C. In the properties of a field in Form Builder",
		"D. In the properties of a smart section in Data Modeler",
		"c",
		"C. In the properties of a field in Form Builder"
		],
		["The workflow is failing to loop through the records. Which task in the workflow should be checked?",
		"A. Iter Task",
		"B. Switch Task",
		"C. Modify Record Task",
		"D. Retrieve Records Task",
		"a",
		"A. Iter Task"
		],
		["When creating or modifying a form, which item can be added directly to a tab?",
		"A. a tab",
		"B. afield",
		"C. a form",
		"D. a section",
		"d",
		"D. a section"
		],
		["State actions can only be added to which query? ",
		"A. An editable query",
		"B. A metric type query",
		"C. A hierarchy type query",
		"D. A query with associated business objects",
		"a",
		"A. An editable query"
		],
		["What do associations do?",
		"A. Link state families to their required forms.",
		"B. Link records that have some real relationship.",
		"C. Link a business object with its appropriate form.",
		"D. Link workflows with the appropriate form actions.",
		"b",
		"B. Link records that have some real relationship."
		],
		["A Data Integrator file is imported. Some of the records in the file can be created/updated successfully and some of the records contain errors. What will the platform do?",
		"A. Generate only a Data Upload record that lists the errors",
		"B. Generate only a Data Upload Error record that lists the errors",
		"C. Generate a Data Upload Error log file on the application server",
		"D. Generate both a Data Upload Error record and a Data Upload record that list the errors",
		"d",
		"D. Generate both a Data Upload Error record and a Data Upload record that list the errors"
		],
		["Which field type can be used as a Locator field?",
		"A. Text",
		"B. Date",
		"C. Number",
		"D. Classification",
		"a",
		"A. Text"
		],
		["How can end users be prevented from personalizing their portals?",
		"A. Modify their Security Group; change Personalize Portal to No",
		"B. Modify their Security Group; change Personalize Bookmarks to No",
		"C. Modify their Security Group; change Ignorable For Nav. Overrides to No",
		"D. Modify the Portal using the Portal Builder; change Lockdown Portal to Yes",
		"a",
		"A. Modify their Security Group; change Personalize Portal to No"
		]

	];

/*
		["",
		"",
		"",
		"",
		"",
		"",
		""
		],

*/
