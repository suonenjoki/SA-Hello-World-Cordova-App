$fh.forms.init({}, function(err){
    if(err){
        console.log("Error Initialising Forms " + err);
    }
});

/*
$fh.forms.getForms({"fromRemote": true}, function(err, forms){
    if(err) {
        console.log("Error getting Forms " + JSON.stringify(err));
    } 
        console.log("Forms: " + JSON.stringify(forms));
    
});

*/

var formId = "5922f56cc606e1e807732c09";

var params = {
 "fromRemote" : true,
 "formId" : formId,
 "environment": "demos-dev"
};

$fh.forms.getForm(params, function(err, form){
if(err) console.log("Error getting Form " + JSON.stringify(err));

var formName = form.getName();
var formDesc = form.getDescription();
console.log('Form Name: ', formName, 'Form Desc: ', formDesc);
});

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

