const change_btn = document.getElementById('show-date')
const displayDate = document.getElementById('time-area')

class DateTime{
    constructor(){
        this.now = new Date();
    }

    getTodaysDate(){
       return this.now
    }

    
}

let currDate = new DateTime()

change_btn.addEventListener('click', ()=>{
  displayDate.innerHTML = `
  <p> ${currDate.getTodaysDate()}</p>
  `
})