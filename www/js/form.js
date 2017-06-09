$fh.forms.init({}, function(err){
    if(err){
        console.log("Error Initialising Forms " + err);
        alert("Error Initialising Forms " + err);
    } else {

        var params = {"fromRemote": true};

        $fh.forms.getForms(params, function(err1, forms){
            if(err) {
                console.log("Error getting Forms " + err1);
                alert(err1);
            } else {
                var formsList = forms.getFormsList();

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

    }
});