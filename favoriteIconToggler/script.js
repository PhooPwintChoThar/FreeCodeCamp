itemList=document.querySelector(".item-list");

btnList=itemList.querySelectorAll(".favorite-icon");

btnList.forEach(btn=>{
    btn.addEventListener("click", ()=>{toggleIcon(btn)});
})

  function toggleIcon(btn){
     if (btn.classList.contains("filled")){
       btn.classList.remove("filled");
       btn.innerHTML="&#9825";
     }else{
      btn.classList.add("filled");
      
      btn.innerHTML="&#10084;"

     }

     btn.querySelector(".filled").style.Color="red";
  }
