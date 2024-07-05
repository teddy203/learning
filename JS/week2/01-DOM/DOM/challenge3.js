const parentList = document.querySelector('#parent-list');
    parentList.addEventListener('click', (event) => {
        const listitem = event.target.closest('.title');
        
        if (listitem) {
         
                listitem.classList.toggle('expanded');
        
 };

});  
    