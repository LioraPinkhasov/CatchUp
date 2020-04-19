maper = { "0" : "Easy", "1": "medium", "2": "Hard"};

var all_data;
/* set up XMLHttpRequest */
var url = "/assets/Data/random.xlsx";
var oReq = new XMLHttpRequest();
oReq.open("GET", url, true);
oReq.responseType = "arraybuffer";

oReq.onload = function(e) {
  var arraybuffer = oReq.response;

  /* convert data to binary string */
  var data = new Uint8Array(arraybuffer);
  var arr = new Array();
  for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
  var bstr = arr.join("");

  /* Call XLSX */
  var workbook = XLSX.read(bstr, {type:"binary"});

  /* DO SOMETHING WITH workbook HERE */
  var first_sheet_name = workbook.SheetNames[0];
  /* Get worksheet */
  var worksheet = workbook.Sheets[first_sheet_name];
  console.log(XLSX.utils.sheet_to_json(worksheet,{raw:true}));
  all_data = XLSX.utils.sheet_to_json(worksheet,{raw:true});
  $('#ran').hide();
                          $('#ran')[0].innerHTML  = all_data[Math.floor(Math.random() * 100)][maper[Math.floor(Math.random() * 3).toString()]];

}

oReq.send();
setTimeout(function(){
        $( document ).ready(function() {
                 $('#random').click(function(){
                        $('#ran').show();
                                                  $('#ran')[0].innerHTML  = all_data[Math.floor(Math.random() * 155[maper[Math.floor(Math.random() * 3).toString()]];
                  });
         });
}, 3000);


// add to html   <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.7.12/xlsx.core.min.js"></script>