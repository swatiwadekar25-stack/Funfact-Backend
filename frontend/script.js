const button =document.getElementById("btn")
const fact = document.getElementById("fact")

button.addEventListener("click",async()=>{
    fact.innerText ="Getting a fun fact..";

    try{
        const response = await fetch("http://localhost:5000/fun-fact")
        const data =await response.json()
        fact.innerText = data.fact;
    }
    catch(error){
        fact.innerText ="Something went wrong";
        console.log(error)
    }
})