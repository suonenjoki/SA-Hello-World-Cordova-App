


$fh.forms.init({}, function(err){
    if(err){
        console.log("Error Initialising Forms " + err);
    } else {
        console.log("Forms initialized");
        //getFormList(getForm, function() {console.log("Form not found");});
        getFormList();
        var formId = "5922f56cc606e1e807732c09";
        getForm(formId);
        getTheme();
        getSubmissions();
        //console.log("FormList: " + JSON.stringify(forms));
}});


var getFormList = function() {
    console.log("Getting formList...");
    $fh.forms.getForms({"fromRemote": true}, function(err, forms){

        if(err) {
            console.log("Error getting Forms " + JSON.stringify(err));
        } 
          console.log("Forms: " + JSON.stringify(forms));
        

        
      });
};


/*
var getFormList = function(success, error) {
    console.log("Getting formList...");
    $fh.forms.getForms({"fromRemote": true}, function(err, forms){
        if(err) {
            console.log("Error getting Forms " + JSON.stringify(err));
            return error();
        }

        console.log("Forms: " + JSON.stringify(forms));

        if(forms.forms !== undefined) {
          for(var i = 0; i < forms.forms.length; i++) {
            if(forms.forms[i].name === "Computer Repair Form") {
              console.log("Found " + forms.forms[i].name);
              return success(forms.forms[i]._id);
            }
          }
        }

        error();
});
};
*/


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

