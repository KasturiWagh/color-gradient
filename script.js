const color=[ '#CBA335', '#5C888B' , '#551A36' , '#431C53','#E806CB' , '#0D97AC' , '#E0D8C3' , '#E2532F' , '#DDA033' 
, '#065125' , '#C71585' , '#6A5ACD' , '#FA8072' , '#DC143C' , '	#4682B4' , '#2E8B57' , '#FFFF00' , '#FF4500' 
, '	#F08080' , '#9400D3' , '#00FF00' ];
function function1() {
    f1 = color[Math.floor(Math.random()*20)];
    f2 = color[Math.floor(Math.random()*20)];
    document.body.style.background = 'linear-gradient(to right,'+ f1 + ',' + f2 + ')';   
}