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

            


        }
    });



    }
});