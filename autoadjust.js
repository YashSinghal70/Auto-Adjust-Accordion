    let questions=document.querySelectorAll(".accordian-item");
    console.log(questions)
    questions.forEach((question)=>{
      console.log(question)
      question.addEventListener("click",()=>{
        // When something is next to the element use nextElementSibling (or previousElementSibling) because you’re looking for a sibling element at the same level.
        const item= question.nextElementSibling;
        console.log(item)
        if(item.style.height){
          item.style.height=null
        }
        else{
          item.style.height=item.scrollHeight + "px"
        }
      })
    })