$fh.forms.init({}, function(err){
    if(err){
        console.log("Error Initialising Forms " + err);
        alert("Error Initialising Forms " +JSON.stringify(err));
    }
});

$fh.forms.getForms({"fromRemote": true}, function(err, forms){
    if(err) {
        console.log("Error getting Forms " + JSON.stringify(err));
         console.log("Forms: " + JSON.stringify(forms));
    } else {
        console.log("Forms: " + JSON.stringify(forms));
    }
});


/*
$fh.forms.getSubmissions({}, function (err, submissions) {
  if (err) console.error(err);

  console.log('Array of completed submissions', JSON.stringify(submissions));
});
*/

