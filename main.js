// Fetching HTML elements using DOM
const x1=document.querySelector("#x1");
const x2=document.querySelector("#x2");
const y1=document.querySelector("#y1");
const y2=document.querySelector("#y2");
const P=document.querySelector("#p");
const Q=document.querySelector("#q");
const allPoints=document.querySelectorAll(".point");
const calcBtn=document.querySelector("#calc-btn");
const distFor=document.querySelector("#dist-for");
const midpoFor=document.querySelector("#midpo-for");
const ratioBtn=document.querySelector("#point-ratio-btn");
const ratios=document.querySelector(".ratios");
const ratioArea=document.querySelector(".ratio-area");
const ratioAns=document.querySelector("#point-ratio");
// Restrict input to 3 digits only

ratioArea.style.display="none"
ratios.style.display="none"
allPoints.forEach((point)=>{
  point.addEventListener("input",()=>{
    point.value=point.value.slice(0,3);
  })
});

// Writing Distance Formula logic
function calcDist(a,b,c,d){
  let value=Math.pow(b-a,2)+Math.pow(d-c,2)
  let ans=Math.sqrt(value)
  if(Number.isInteger(ans)){
    distFor.textContent="Distance Formula: "+ans
  }
  else{
    distFor.textContent=`Distance: √${value}`
  }
}

// Writing Mid Point Logic
function calcMidPoint(a,b,c,d){
  p1=(a+b)/2
  p2=(c+d)/2
  midpoFor.textContent=`Mid Point: (${p1} , ${p2})`
}

function showRatios() {
  if (ratios.style.display === "none") {
    ratios.style.display = "block";
    ratioArea.style.display = "block";
    ratioBtn.textContent = "Hide Ratios";  // Change button text to indicate hiding
  } else {
    ratios.style.display = "none";
    ratioArea.style.display = "none";
    ratioBtn.textContent = "Show Ratios";  // Change button text back to show
  }
}

function calcRatios(a,b,c,d,p,q) {
   let rx=(p*b+q*a)/(p+q);
   let ry=(p*d+q*c)/(p+q);
   r1=Number(rx.toFixed(2));
   r2=Number(ry.toFixed(2));
   ratioAns.textContent=`Point Ratio: (${r1} , ${r2})`
}
// All function invoker
function allFunc() {
  let first=Number.parseInt(x1.value)||0
  ;
  let second=Number.parseInt(x2.value)||0;
  let third=Number.parseInt(y1.value)||0
  ;
  let fourth=Number.parseInt(y2.value)||0;
  ratio1=Number.parseInt(P.value)||1;
  ratio2=Number.parseInt(Q.value)||1;
  calcDist(first,second,third,fourth);
  calcMidPoint(first,second,third,fourth);
  calcRatios(first,second,third,fourth,ratio1,ratio2)
  // Clearing all input Boxes
  x1.value=""
  x2.value=""
  y1.value=""
  y2.value=""
  P.value=""
  Q.value=""
}
// Calling the allFunc on Clicks and Enter
calcBtn.addEventListener("click",allFunc);
calcBtn.addEventListener("keydown",(event)=>{
  if(event.key=="Enter"){
    allFunc()
  }
});
ratioBtn.addEventListener("click",()=>{
  showRatios()
});