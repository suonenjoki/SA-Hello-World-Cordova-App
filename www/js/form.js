$fh.forms.init({config: {}}, function(err){
    if(err){
        alert("Error Initialising Forms " + err);
    } else {

    var params = {
    "fromRemote": true
    };

    $fh.forms.getForms(params, function(err, forms){
        if(err) {
            alert(err);
        } else {
            var formsList = forms.getFormsList();


            var myTableDiv = document.getElementById("sync-div");
            var table = document.createElement('TABLE');
            var tableBody = document.createElement('TBODY');

            table.border = '1';

            for (var i = 0; i < products.length; i++) {
                var tr = document.createElement('TR');
                var td = document.createElement('TD');
                td.appendChild(document.createTextNode(products[i].productname));
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