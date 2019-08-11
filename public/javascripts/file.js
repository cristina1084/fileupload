var file_arr=Array();
var i = 0;
var fileName;
$(document).ready(function() { 
     $('#customFile').on('change',function(){
          //get the file name
          fileName = $(this).val().replace('C:\\fakepath\\', " ");
          //replace the "Choose a file" label
          $(this).next('.custom-file-label').html(fileName);
     });

    $('#uploadForm').submit(function() {  
        $(this).ajaxSubmit({      
           error: function(xhr) {  
                status('Error: ' + xhr.status);  
           },  
           success: function(response) {  
               alert("File uploaded successfully!");
               file_arr[i] = fileName;
               i++;
               var result = "";
               for(j=0;j<file_arr.length;j++){
                    var href = '/'+$.trim(file_arr[j]);
                    //console.log(href);
                    result+="<tr><td>" + (j+1) + "</td><td>" + file_arr[j] + "</td><td>" + "<a href='"+href+"'><i class='fa fa-download' aria-hidden='true'></i></a> / <a href='#'> <i class='fa fa-image'></i> </a></td></tr>";                //important!
               }
               $('#list').html(result);
           }  
        });  
   return false;  
   });      
}); 