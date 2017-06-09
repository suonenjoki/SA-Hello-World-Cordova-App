


$fh.forms.init({}, function(err){
    if(err){
        console.log("Error Initialising Forms " + err);
    } else {
        console.log("Forms initialized");
        getFormList();
}});
        


var getFormList = function() {
    console.log("Getting formList...");
    $fh.forms.getForms({"fromRemote": true}, function(err, forms){
        if(err) {
            console.log("Error getting Forms " + JSON.stringify(err));
        } else {
            console.log("Forms: " + JSON.stringify(forms));

        var formList = forms.forms;

         var myTableDiv = document.getElementById("form-div");
            var table = document.createElement('TABLE');
            var tableBody = document.createElement('TBODY');

            table.border = '1';

            for (var i = 0; i < formList.length; i++) {
                var tr = document.createElement('TR');
                var td = document.createElement('TD');
                td.appendChild(document.createTextNode(formList[i].name));
                tr.appendChild(td);
                tableBody.appendChild(tr);
            }

            table.appendChild(tableBody);

            myTableDiv.innerHTML = " ";
            myTableDiv.appendChild(table);


    }
});
}


var getForm = function() {
    var formId = "5922f56cc606e1e807732c09";

    var params = {
    "fromRemote" : true,
    "formId" : formId
    };

    console.log("Getting form " + formId + "...");

    $fh.forms.getForm(params, function(err, form){
        if(err) console.log("Error getting Form " + JSON.stringify(err));

        var formName = form.getName();
        var formDesc = form.getDescription();
        console.log('Form Name: ', formName, 'Form Desc: ', formDesc);
    });
};


/*

$fh.forms.getTheme({"css": true}, function(err, theme){
    if(err) console.error("Error getting Theme: " + JSON.stringify(err));

    console.log(theme);
});
*/


/*
$fh.forms.getSubmissions({}, function (err, submissions) {
  if (err) console.error(err);

  console.log('Array of completed submissions', JSON.stringify(submissions));
});
*/

