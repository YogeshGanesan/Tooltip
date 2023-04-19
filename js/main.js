let btn=document.getElementsByTagName("img");
for(let i=0;i<btn.length;i++)
	
{
btn[i].addEventListener("mouseenter",function(event)
{
	let currentElement=event.target;
	let display=currentElement.dataset.first;
	let paren=currentElement.parentNode;
	console.log(display);
	// creating span to insert the data-attribute value into span
	 let outputName=document.createElement("span");
	 
	 outputName.innerText=display;

	paren.append(outputName);
	
btn[i].addEventListener("mouseout",function(event)
{
	outputName.remove("span");
});
	
});
}	
console.log("hi");