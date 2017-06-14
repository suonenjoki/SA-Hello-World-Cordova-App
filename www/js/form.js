

$fh.on('fhinit', function(err){

  $fh.forms.init({}, function(err){
      if(err){
          console.log("Error Initialising Forms " + err);
      } else {
          console.log("Forms initialized");
          getFormList(getForm, function(msg) {console.error(msg);});

        }
      }
    );

});


var getFormList = function(success, error) {
    console.log("Getting formList...");
    $fh.forms.getForms({"fromRemote": true}, function(err, forms){
        if(err) {
            //console.log("Error getting Forms " + JSON.stringify(err));
            return error("Error getting Forms " + JSON.stringify(err));
        }

          if(forms.props.forms != undefined) {
            for(var i = 0; i < forms.props.forms.length; i++) {
              if(forms.props.forms[i].name === "Computer Repair Form") {
                console.log("Found " + forms.props.forms[i].name);
                return success(forms.props.forms[i]._id);
              }
            }
          }

        return error("Computer Repair Form not found");
});
};



var getForm = function(formId) {


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
        var pageList = form.getPageModelList();

        var myTableDiv = document.getElementById("form-div");
        var table = document.createElement('TABLE');
        var tableBody = document.createElement('TBODY');

        table.border = '1';

        for(var i = 0; i < pageList.length; i++) {
            //console.log('Page ' + i + ': ' +  JSON.stringify(pageList[i].props.fields));

            for(var j = 0; j < pageList[i].props.fields.length; j++) {
                console.log('Field ' + j + ': ' +  JSON.stringify(pageList[i].props.fields[j]));

                var tr = document.createElement('TR');
                var td = document.createElement('TD');
                td.appendChild(document.createTextNode(pageList[i].props.fields[j].name));
                tr.appendChild(td);
                tableBody.appendChild(tr);


            }

        }


  table.appendChild(tableBody);

  myTableDiv.innerHTML = " ";
  myTableDiv.appendChild(table);



    });
};



var getTheme = function() {
    console.log("Getting theme...");
    $fh.forms.getTheme({"css": true}, function(err, theme){
        if(err) console.error("Error getting Theme: " + JSON.stringify(err));

        console.log(theme);
    });
};


var getSubmissions = function() {
    console.log("Getting submissions...");
    $fh.forms.getSubmissions({}, function (err, submissions) {
        if (err) console.error(err);

        console.log('Array of completed submissions', JSON.stringify(submissions));
    });
};
