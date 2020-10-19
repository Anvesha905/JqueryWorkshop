$('document').ready(()=>{
  
    console.log("in document");
    $.ajax(
        {
            url:"https://jsonplaceholder.typicode.com/users",
            method:"GET",
            success:(x)=>{
               console.log(x);
               for(var i=1;i<=x.length;i++)
               {
                   var text1="<tr><td>"+x[i].name+"</td>"+"<td>"+x[i].username+"</td>"+"<td>"+x[i].email+"</td>"+"<td>"+x[i].phone+"</td>"+"<td>"+x[i].website+"</tr></td>"
                   $('#table').append(text1);
               }
              
               /*for(var i=0;i<x.length;i++)
               {
                $("div#id1").append(x[i].name);
               
                $("div#id2").append(x[i].username);

                $("div#id3").append(x[i].email);

                $("div#id4").append(x[i].phone);
             
                $("div#id5").append(x[i].website);
            }
            }, */
        },
            error:(e)=>
            {
                alert("error"+e);
            }
        } )
$("#table").DataTable();
});