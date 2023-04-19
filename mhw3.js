let a=0;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c17d1ca95bmsh17e200c95ef1237p146c73jsn11d94a5a6c18',
		'X-RapidAPI-Host': 'aircraft-by-api-ninjas.p.rapidapi.com'
	}
};



const form=document.querySelector('form');
form.addEventListener('submit',cerca);


function cerca(event)
{
    const marca=encodeURIComponent(document.querySelector('#marca').value);
    const modello=encodeURIComponent(document.querySelector('#modello').value);
    console.log("il modello da cercare è:"+modello);
    event.preventDefault();
    fetch('https://aircraft-by-api-ninjas.p.rapidapi.com/v1/aircraft?manufacturer='+marca+'&model='+modello, options)
    .then(onResponse)
    .then(onJson)  
}
function onResponse(response) 
{
    console.log('Risposta ricevuta');
    return response.json();
}
  


function onJson(json)
{

   console.log(json)
  
   
   const spa=document.querySelector("form");
   if(a>0){
    spa.removeChild(spa.lastElementChild);
    console.log("sono qua");
   }
   a++;
   
   
   const risposta=document.createElement("div");
   
   const tabella=document.createElement("table");
   
   tabella.classList.add("tabella");
   risposta.classList.add("risultato")
   const tr=document.createElement("tr");
   const td=document.createElement("td");
   const td2=document.createElement("td");
   td.textContent="Motore";
   tr.appendChild(td);
   td2.textContent=json[0].engine_type;
   tr.appendChild(td2);
   tabella.appendChild(tr);
   risposta.appendChild(tabella);
   const m2tr=document.createElement("tr");
   const m2td=document.createElement("td");
   const m2td2=document.createElement("td");
   m2td.textContent="Autonomia";
   m2tr.appendChild(m2td);
   m2td2.textContent=json[0].range_nautical_miles*1.85+" km";
   m2tr.appendChild(m2td2);
   m2tr.appendChild(m2td2);
   tabella.appendChild(m2tr);
   risposta.appendChild(tabella);
   
   spa.appendChild(risposta);   
}





// api per weather
//auto:ip
const key="4c4f1940288e4841bae153059231804";

    fetch('http://api.weatherapi.com/v1/current.json?key='+key+'&q=auto:ip')
	//.then(ReloadMeteo)
    .then(response => response.json())
    
    .then(ReloadMeteo)
	.catch(err => console.error(err));
    

function ReloadMeteo(json){
    console.log(json);
    const img=document.querySelector(".met");
    img.src=json.current.condition.icon;
    const h5=document.querySelector("h5");
    h5.textContent=json.location.name+" "+json.current.temp_c+"° "+json.current.wind_kph+" km/h "+json.current.wind_dir;
}




