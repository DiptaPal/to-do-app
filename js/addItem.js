let i=1;
document.getElementById('add-item-btn').addEventListener('click', function(){
    const text = document.getElementById('text');
    const inputText = text.value;

    if(inputText === '' || (isNaN(inputText)) === false){
        text.value = '';
        return;
    }
    else{
        const divparent = document.createElement('div');
        divparent.classList.add('grid', 'grid-cols-3','gap-6', 'border-b-2', 'border-slate-200', 'py-3')
        
        const h11 = document.createElement('h1');
        h11.classList.add('text-2xl', 'font-semibold');
        h11.innerText = i++;
        divparent.appendChild(h11);

        const parent = document.getElementById('parent-div');
        parent.appendChild(divparent);

        const h12 = document.createElement('input');
        h12.classList.add('text-2xl','sm:text-1xl', 'font-semibold', 'text-black', 'text-center', 'bg-white');
        h12.setAttribute('disabled',true);
        h12.value = inputText;
        text.value = '';

        divparent.appendChild(h12);
        parent.appendChild(divparent);

        const edit = document.createElement('button');
        edit.classList.add('bg-orange-600', 'rounded', 'py-2', 'md:py-4', 'px-8', 'md:px-4', 'mr-1', 'text-1xl', 'md:text-3xl', 'text-white', 'edit');
        edit.setAttribute('id','edit-item');
        edit.innerText= 'Edit'

        const btnDiv = document.createElement('div');
        btnDiv.appendChild(edit);
        divparent.appendChild(btnDiv);
        parent.appendChild(divparent); 

        const updateBtn = document.createElement('button');
        updateBtn.classList.add('bg-blue-600', 'rounded', 'py-2', 'md:py-4', 'px-8', 'md:px-4', 'mr-1', 'text-1xl', 'md:text-3xl', 'hidden', 'text-white','update');
        updateBtn.setAttribute('id','update-item');
        updateBtn.innerText= 'Update'

        btnDiv.appendChild(updateBtn);
        divparent.appendChild(btnDiv);
        parent.appendChild(divparent); 

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('bg-red-600', 'rounded', 'py-2', 'md:py-4', 'px-8', 'md:px-4', 'mr-1', 'text-1xl', 'md:text-3xl', 'text-white', 'delete');
        deleteBtn.setAttribute('id','delete-item');
        deleteBtn.innerText= 'Delete';

        btnDiv.appendChild(deleteBtn);
        divparent.appendChild(btnDiv);
        parent.appendChild(divparent); 
    }
});

const deleteItems = document.querySelectorAll('#parent-div');
for(const deleteItem of deleteItems){
    deleteItem.addEventListener('click',function(event){
        if(event.target.classList.contains('delete')){
            event.target.parentElement.parentNode.remove();
        }
        if(event.target.classList.contains('edit')){
            event.target.classList.add('hidden');
            event.target.nextElementSibling.classList.remove('hidden');
            event.target.parentElement.previousElementSibling.removeAttribute('disabled');
            event.target.parentElement.previousElementSibling.focus();
        }
        if(event.target.classList.contains('update')){
            event.target.classList.add('hidden');
            event.target.previousElementSibling.classList.remove('hidden');
            event.target.parentElement.previousElementSibling.setAttribute('disabled');
            event.target.parentElement.previousElementSibling.blur();
        }
    });
}
