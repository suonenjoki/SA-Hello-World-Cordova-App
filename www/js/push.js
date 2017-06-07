// register with the server to start receiving push notifications
      $fh.push(function(e) {


      if (e.coldstart) {
        // notification started the app
      }

      // show text content of the message
      alert(e.alert);

      // only on iOS
      if (e.badge) {
        push.setApplicationIconBadgeNumber(successHandler, e.badge);
    }
  }, function() {
    console.log("registered for push");
}, function(err) {
    // handle errors
    console.log("register for push failed: " + err);
  });
