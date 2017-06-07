document.getElementById('say_hello').onclick = function () {
  document.getElementById('cloudResponse').innerHTML = "<p>Calling Cloud.....</p>";
  $fh.cloud(
      {
        path: 'hello',
        data: {
          hello: document.getElementById('hello_to').value
        }
      },
      function (res) {
        document.getElementById('cloudResponse').innerHTML = "<p>" + res.msg + "</p>";
      },
      function (code, errorprops, params) {
        alert('An error occured: ' + code + ' : ' + errorprops);
      }
  );
};


var myTableDiv = document.getElementById("cloudResponse");
        var table = document.createElement('TABLE');
        var tableBody = document.createElement('TBODY');

        table.border = '1';

        for (i = 0; i < res.length; i++) {
          var tr = document.createElement('TR');
          var td = document.createElement('TD');
          td.appendChild(document.createTextNode(res[i]));
          tr.appendChild(td);
          tableBody.appendChild(tr);
        }

        table.appendChild(tableBody);

        myTableDiv.innerHTML = " ";
        myTableDiv.appendChild(table);