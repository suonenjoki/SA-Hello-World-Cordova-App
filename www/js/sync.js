 var datasetId = "Product";
    var products = [];

    $fh.sync.init({
      "do_console_log" : true,
      "storage_strategy" : "dom"
    });

    $fh.sync.manage(datasetId);

    $fh.sync.notify(function(notification) {
      console.log("Sync Notification: " + notification.code);

      if( 'sync_complete' == notification.code ) {
        console.log("Sync Complete");
        $fh.sync.doList(datasetId,
          function(res){

            products = []; // Clear sync data to avoid duplicates
            //res is a JSON object
            for(var key in res){
              if(res.hasOwnProperty(key)){
                // Unique Id of the record, used for read, update & delete operations (string).
                var uid = key;
                // Record data, opaque to sync service.
                var data = res[key].data;
                data.uid = uid;
                products.push(data);
                // Unique hash value for this record
                var hash = res[key].hash;
              }
            }

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
            
          },
          function(code, msg){
            console.log("error: " + code + ' : ' + msg);
          }
        );
      } else if( 'local_update_applied' === notification.code ) {

      } else if( 'remote_update_failed' === notification.code ) {
        console.log("Sync Error: " + notification.message);
      }
    });


    