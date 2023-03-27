let list = document.querySelector('ul')
let btn = document.querySelector('button')
let input = document.querySelector('input')
let inputtime = document.getElementById('time')
btn.addEventListener('click',function ad(){
    const MyItem = input.value;
    const Mytime = inputtime.value;
    input.value = '';
    const LestItem = document.createElement('li')
    const LestText = document.createElement('input')
    const Lesttime = document.createElement('input')
    LestText.value = MyItem
    Lesttime.value = Mytime
    const LestBtndt = document.createElement('button')
    const LestBtndn = document.createElement('button')
    const LestBtnnc = document.createElement('button')
    LestItem.appendChild(LestText)
    LestItem.appendChild(Lesttime)
    LestText.innerHTML=MyItem  

    LestText.setAttribute("readonly","readonly")
  
    LestItem.appendChild(LestBtndt)
    LestItem.appendChild(LestBtndn)
    LestItem.appendChild(LestBtnnc)
    LestBtndt.textContent='delete'
    LestBtndn.textContent='Edit'
    LestBtnnc.textContent='In progress'
    list.appendChild(LestItem)
    LestBtndt.addEventListener('click',()=>{
        list.removeChild(LestItem)
    })
    LestBtndn.addEventListener('click',()=>{
       if (LestBtndn.innerText == "Edit"){
        LestText.removeAttribute("readonly")
        LestText.focus();
        LestBtndn.innerText = "save";
       }
       else{
        LestText.removeAttribute("readonly","readonly")
        LestBtndn.innerText = "Edit";
       }
    })
    LestBtnnc.addEventListener('click',()=>{
        LestItem.style.color = 'red';
    })
})

