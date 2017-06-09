$fh.forms.init({}, function(err){
    if(err){
        console.log("Error Initialising Forms " + err);
        alert("Error Initialising Forms " +JSON.stringify(err));
    }
});

$fh.forms.getForms({"fromRemote": false}, function(err, forms){
    if(err) {
        console.log("Error getting Forms " + JSON.stringify(err));
    } else {
        var formsList = forms.getFormsList();
        console.log("Forms: " + JSON.stringify(formsList));

        var myTableDiv = document.getElementById("form-div");
        var table = document.createElement('TABLE');
        var tableBody = document.createElement('TBODY');

        table.border = '1';

        for (var i = 0; i < formsList.length; i++) {
            var tr = document.createElement('TR');
            var td = document.createElement('TD');
            td.appendChild(document.createTextNode(formsList[i]));
            tr.appendChild(td);
            tableBody.appendChild(tr);
        }

        table.appendChild(tableBody);
        myTableDiv.innerHTML = " ";
        myTableDiv.appendChild(table);
    }
});

