const li1 = document.querySelector('li');
let pars = document.querySelectorAll('h1')
let ul = document.querySelector('ul')
let lis = document.querySelectorAll('li')
let h2 = document.querySelector('h2');
let a = document.querySelector('link')
let span = document.querySelector('span');
let p = document.querySelector('p')
let links = document.querySelectorAll('.link');
let details = document.querySelectorAll('details')
let body = document.querySelector('body')
let parDetails = document.querySelectorAll('.detailsP')
let parDetailsJS = document.querySelectorAll('.detailsJS')
let parDetailsReact = document.querySelectorAll('.detailsReact')
let footer = document.querySelector('.footer')
let image = document.querySelectorAll('img')
let authorDesc = document.querySelector('.authorDescription')
let headings =document.querySelectorAll('h2')
let changeColorToGreen = li1.style.background ='#6EDC3F';
let background= document.querySelector('.background')
let title = document.querySelector('.title')
let skills = document.querySelector('.skills')
let qly = document.querySelector('.qualifications')
let descriptions = document.querySelectorAll('.descriptions')
let descimgs = document.querySelectorAll('.descImgs')
let keywords = document.querySelector('.keywords')
let keyword = document.querySelectorAll('.keyword')


for(let i = 0; i<lis.length; i++){
    let addMargin = lis[i].style.margin = '3px'
    let addPadding = lis[i].style.padding = '10px'
    let addWidth = lis[i].style.width = '500px'
}

let changeColorToYellow = lis[1].style.background = 'yellow'


for(let i = 2; i<lis.length; i++){
    let addColor = lis[i].style.background = '#DC4F3F';
}

let indexColor= 0;

changeColor = () =>{
   
    let span1 = document.querySelector('span');
    const colors = ['black', 'green', 'yellow', 'violet', 'pink', 'blue', 'black', 'orange', 'gray', 'red'];
    indexColor++;   
    span1.style.color = colors[indexColor];
    if(indexColor > colors.length - 1){
        indexColor=0;
    }
    
   
}


setInterval(changeColor, 1000)

let indexBackgroundColor = 0;
changeColors = () =>{

    let p = document.querySelector('p');
    const colors = ['black', 'green', 'yellow', 'violet', 'pink', 'blue', 'white', 'orange', 'gray', 'red'];
    indexBackgroundColor++;   

    if(colors[indexBackgroundColor]==='red'||colors[indexBackgroundColor]==='blue'){
        p.style.backgroundColor= colors[indexBackgroundColor]; 
        p.style.color = 'white'
    }
    if(colors[indexBackgroundColor]==='white'&&colors[indexBackgroundColor]==='yellow'){
        p.style.backgroundColor= colors[indexBackgroundColor]; 
        p.style.color = 'black'
    }
    else{
        p.style.backgroundColor= colors[indexBackgroundColor]; 
    }
    if(indexBackgroundColor > colors.length - 1){
        indexBackgroundColor=0;
    }

  

}



setInterval(changeColors, 1000)


dates = ()=>{
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const date = new Date();
    let monthIndex = date.getMonth()
    const day = date.getDate();
    const year = date.getFullYear()
    const hours = date.getHours(); 
    const minutes =date.getMinutes();
    const seconds = date.getSeconds()
    
    if(hours>12){
        formattedHours = `0${hours-12}`;
    }
   
    else{
        formattedHours= hours
    }

    if(minutes<10){
        formattedMinutes = `0${minutes}`
    }
    else{
        formattedMinutes = minutes
    }
    
    if(seconds<10){
        formattedSeconds = `0${seconds}`
    }
    else{
        formattedSeconds = seconds
    }

    for(let i = 0; i<months.length; i++){
         monthNow =  months[monthIndex]
    }
    const dateToday = `${monthNow} ${day}, ${year}  ${formattedHours}:${formattedMinutes}:${formattedSeconds}`

   
    let addDatetoP = p.innerHTML = dateToday;
    // let addBackgroundToP = p.style.backgroundColor = 'black';
    let addPaddingtoP = p.style.padding = '10px'
    let addWidthToP = p.style.width = '200px'
    let addFlexToP = p.style.display = 'flex'
    let addAlignItems = p.style.alignItems = 'center';
    let addJustifyContent = p.style.justifyContent='center'
    let addMargintoP = p.style.margin = '0 auto'

}
setInterval(dates, 1000)


let display = ul.style.display ='flex';
let flexDirection = ul.style.flexDirection= 'column';
let alignItems = ul.style.alignItems= 'center';
let justifyContent = ul.style.justifyContent= 'center';
let aHref = '<a href="https://github.com/" target=_blank id="link">30DaysOfJavaScript Challenge</a>'
let addContenttoH2 = h2.innerHTML = aHref;
let addUnderlineToH2 = h2.style.textDecoration = 'underline';
let addStyletoH2 = h2.style.fontWeight = 'normal';
let addColortoSpan = span.style.color= 'red'
let addFontSizeToSpan = span.style.fontSize= '100px'

for(let i = 0; i<lis.length; i++){
    lis[i].style.display='flex'
    lis[i].style.flexWrap='wrap'
    lis[i].style.justifyContent='space-between'

}

for(const detail of details){

    // detail.style.position = 'absolute'
    // detail.style.left = '50%'

}

for(const link of links){
    link.style.margin='0px'
    link.style.padding = '0px'
    link.style.width ='100px'
}
for(let i = 0; i<links.length; i++){
    links[0].style.width = '80px'
    links[i].style.color='black'
}



for(let i = 0; i<lis.length; i++){
    if(lis[i].innerHTML.includes('Coming')){
        links[i].style.textDecoration='none'
        details[i].innerHTML ='Comiing soon!'
    }


}



for(const par of parDetails){
    par.style.margin ='1px'
    par.style.textAlign='justify'

}
for(const par of parDetailsJS){
    par.style.margin ='1px'
    par.style.textAlign='justify'
    par.style.marginLeft='80px'
}
for(const par of parDetailsReact){
    par.style.margin ='1px'
    par.style.textAlign='justify'
    par.style.marginLeft='80px'
}
for(const img of image){
    img.style.width= '40px'
    img.style.height ='40px'
}


authorDesc.style.width='470px'
authorDesc.style.display ='flex'
authorDesc.style.margin ='50px auto'
authorDesc.style.textAlign='center'
authorDesc.style.textAlign='justify'

background.style.display='flex'
background.style.alignItems='center'
background.style.justifyContent='center'
background.style.margin='0 auto'
background.style.width='800px'



title.style.width='200px'
title.style.height='300px'


skills.style.width='200px'
skills.style.height='300px'


qly.style.width='350px'
qly.style.height='300px'




for(let i = 0; i<descriptions.length; i++){
    descriptions[i].style.display='flex'
    descriptions[i].style.flexWrap='wrap'


}

for(let i = 0 ; i<descimgs.length; i++){
    descimgs[i].style.width = '25px'
    descimgs[i].style.height = '25px'
    descimgs[i].style.marginLeft = '10px'
    descimgs[i].style.marginRight = '10px'
}
console.log(headings)


footer.style.width='700px'
footer.style.display='flex'
footer.style.flexWrap='wrap'
footer.style.justifyContent='center'
footer.style.alignItems='center'
footer.style.margin='20px auto'
footer.style.textAlign='center'
keywords.style.float='left'
// keywords.style.width='500px'

pickAColor=()=>{
    colors = ['#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#f1c40f', '#e67e22', '#e74c3c','#95a5a6', '#d35400', '#bdc3c7', '#ffcccc', '#17c0eb']
    return colors[Math.floor(Math.random()*colors.length)];
}

for(const word of keyword){
    word.style.padding='5px'
    word.style.paddingRight='15px'
    word.style.margin='10px'
    word.style.background='green'
    word.style.borderRadius='20px'
    word.style.background =pickAColor();


}