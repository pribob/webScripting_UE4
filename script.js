
$(function() {$("#add").on("click", addItem);});  
$(function() {$("#hide").on("click", toggleList);});  
$(function() {$("#item").keypress(function(event)
{
  var keycode = event.key;
  if(keycode == 'Enter')
  {
    addItem();
  }
})});  
//$(()=>{$("#listStart").on("click", handleDeleteItem)});
$(()=>{$("#load").on("click", loadList)});



function loadList(){
  console.log("clicked load button"); 
  //$("#preList").children("option.selected")
  
  $.get("./requestHandlerJson.php", function( data ) {
    console.log(typeof data);
    data.forEach(element => {
               
        $("ol").append("<li>" + element + "</li>").css("display", "none").show("slow ");
        $("li:contains('" + element + "')").on("click",handleDeleteItem);
    });
});
}

function toggleList(){
  console.log("hidden");
  $("#sortable").toggle();
  if ($("#hide").html() == "hide")
  {
    $("#hide").html("show");
  }
  // else{
  //   $("#hide").html("hide");
  // }
}


function addItem() {
        console.log("clicked");
        if ($("#item").val()!="")
        {
        e = $("#item").val();
        console.log(e);       
        $("ol").append("<li>" + e + "</li>").css("display", "none").show("slow ");
        // instead of class add eventlistener?
        $("li:contains('" + e + "')").on("click",handleDeleteItem);
        $("#item").val("");
        console.log("element added");
        }
        else {
          console.log("Empty input!");
        }
    }

function handleDeleteItem () {
   
    let conf = confirm("Sure you wanna delete this element?");
    if (conf)
    {

      $(this).remove();
    }
}



    
    