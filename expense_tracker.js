let form_ele = document.getElementById("htmlForm");
let input_amount_ele = document.getElementById("exp_amount");
let description_ele = document.getElementById("description");
let category_ele = document.getElementById("categories");
let submitButton = document.getElementById("submit_button");

function addListElement(e){
    e.preventDefault();

    let amount = input_amount_ele.value;
    let description = description_ele.value;
    let category = category_ele.value;

    let listElement = document.createElement("li");
    listElement.textContent = input_amount_ele.value + "-"+description_ele.value+"-"+category_ele.value;
    form_ele.appendChild(listElement);

    let button_edit = document.createElement("button");
    button_edit.textContent = "Edit Expense";
    listElement.appendChild(button_edit);

    let button_delete = document.createElement("button");
    button_delete.textContent = "Delete Expense";
    listElement.appendChild(button_delete);

    let obj = {
        "amount" : input_amount_ele.value,
        "description" : description_ele.value,
        "category" : category_ele.value
    }

    let Json_object = JSON.stringify(obj);

    localStorage.setItem(input_amount_ele.value, Json_object);

    button_delete.addEventListener("click", function(){
        localStorage.removeItem(input_amount_ele.value);
        form_ele.removeChild(listElement);
    });

    button_edit.addEventListener("click", function(){
        localStorage.removeItem(input_amount_ele.value);
        form_ele.removeChild(listElement);
        input_amount_ele.value = amount;
        description_ele.value = description;
        category_ele.value = category;

    });


}

submitButton.addEventListener("click",addListElement);


