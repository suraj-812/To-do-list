let list_display = localStorage.getItem('to_do_list');
 let   todo_list= list_display ? JSON.parse(list_display) : [];
    display_item()

// let todo_list=[
//     {
//     item:'one',
//     due_date:4/10/26,
// },
// {
//     item:'two',
//     due_date:4/10/26,
// }
// ];
// display_item()



function add_to_do(){
    // let input_element=document.querySelector('#todo_input');
    let todo_item= document.querySelector('#todo_input').value;

    let todoDate= document.querySelector('#todo_date').value;
    console.log(todo_item);
    todo_list.push({item:todo_item, due_date: todoDate});
    // console.log(todo_list)
    document.querySelector('#todo_input').value='';  
    document.querySelector('#todo_date').value='';
    
    display_item()
    localStorage.setItem('to_do_list', JSON.stringify(todo_list));
}

function display_item(){
    let container_element=document.querySelector('.to_do_container');
    
    let newHtml='';



    for(let i=0; i<todo_list.length; i++){
        let todo_item = todo_list[i].item;
        let due_date= todo_list[i].due_date;

        newHtml+=`
        
        <span>${todo_item}</span>
        <span>${due_date}</span>

        <button  class="btn_delete"   onclick="todo_list.splice(${i},1);
        display_item();
        " >Delete</button>
        
        `;
        
    }
     container_element.innerHTML=newHtml;
}