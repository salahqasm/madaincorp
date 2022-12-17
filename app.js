let resultDiv=document.getElementById("dataDiv");
let btn1=document.getElementById("cat1");
let btn2=document.getElementById("cat2");
let btn3=document.getElementById("cat3");

function getData(){
    fetch('http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&category=["category1","category2","category3"]&pretty=true')
  .then((response) => response.json())
  .then((data) => makeData(data));
}

getData();

function makeData(data){
    
    render(data);
    
    btn1.addEventListener("click",()=>{
        resultDiv.textContent="";
       let newData= data.filter(elem=>elem.category=="category1");
       render(newData);
    })

    btn2.addEventListener("click",()=>{
        resultDiv.textContent="";
       let newData= data.filter(elem=>elem.category=="category2");
       render(newData);
    })

    btn3.addEventListener("click",()=>{
        resultDiv.textContent="";
       let newData= data.filter(elem=>elem.category=="category3");
       render(newData) 
    })

}

function render(data){
    data.map(elem=>{
        let card=document.createElement("div");
        card.className="cards";
        resultDiv.appendChild(card);
        
       
        let logo=document.createElement("h1");
        logo.className="logo"; 
        card.appendChild(logo);

        let name=document.createElement("h2");
        name.className="name";
        card.appendChild(name);

        let categ=document.createElement("h3");
        categ.className="categ";
        card.appendChild(categ);


        logo.textContent=elem.fname[0]+elem.lname[0];
        name.textContent=elem.fname+" "+elem.lname;
        categ.textContent=elem.category;

    })
}