function make_reqParams(ids) {
    if (ids.length == 0) {
        window.alert("Select a task to delete");
    }
    // /deleteTask/?id0= id1= id2=
    // console.log(ids);
    let s = "/deleteTasks/?"
    let count = 0;
    for (let id of ids) {
        s += "id" + count + "=";
        s += id;
        if (count < ids.length - 1) {
            s += "&";
        }
        count++;
    }
    // console.log(s);
    $("#delete-button").attr('href', s);
    console.log($("#delete-button"));
}





$("#delete-button").on('click', function (e) {

    let id_list = new Array();
    // console.log($('input[type="checkbox"]'));
    for (let checkbox of $('input[type="checkbox"]')) {
        // console.log(checkbox);
        if (checkbox.checked) {
            id_list.push(checkbox.getAttribute("id"));
            // console.log(id_list);
        }
    }
    make_reqParams(id_list);
});

for(let date of $(" .date")){
   

    date.innerText = String(date.innerText).substring(0,15);
    

}

for(let icon of $(".category-button>h3")){
    console.log(String(icon.innerText));
    if(String(icon.innerText)=="Choose a category:"){
        // console.log(true);
        icon.style.display = "none";
    }
}

$("button[type='submit']").on('click',function(){

    if($('textarea').val()==""||$("#date-category select")=="Choose a category:"||$("#date-category input")==""){
        window.alert('Remember to fill all the fields from next time.\nAn empty task will be added for you!');
    }

})