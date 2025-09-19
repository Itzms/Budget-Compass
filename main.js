document.addEventListener('DOMContentLoaded', ()=>{
   let date = document.querySelectorAll('.date');
   date.textContent = new Date();
    
});
function changePage(menuIndex, pageId){
     const pagesIds = document.querySelectorAll('main>[id]');
     const indexes = document.querySelectorAll(".navItem");
     pagesIds.forEach(page => {
        page.style.display="none"
     });
     document.getElementById(pageId).style.display="flex";
     indexes.forEach(index => {
        index.style.background = "none";
     });
     indexes[menuIndex].style.background = "#9980d8";
}
function addBudget(outCard, inCard){
   // let budget = document.querySelectorAll(".budget");
   // let budgetIn = document.getElementById('budgetIn').textContent;
   // budget.textContent = budgetIn;
   document.getElementById(outCard).style.display="none";
   document.getElementById(inCard).style.display="flex";
}