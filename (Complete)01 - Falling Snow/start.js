(()=>{

function setup(){
    const canvas = document.getElementById('falling-snow-canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    return{
        canvas,
        canvasContext: canvas.getContext('2d'),
        numberOfSnowBalls : 250
    }
}

function random(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

function randomo(min,max){
    return Math.random()*(max-min+1)+min;
}

function createSnowBalls(canvas,numberOfSnowBalls){
    return [...Array(numberOfSnowBalls)].map(()=>{
        return{
            x:random(0,canvas.width),
            y:random(0,canvas.height),
            opacity:random(0.3,1),
            radius:random(2,5),
            X_move:random(-3,5),
            Y_move:random(1,4)
        }
    }
)
}

function DrawSnowBall(canvasContext,Snowball){
    canvasContext.beginPath();
    canvasContext.arc(Snowball.x,Snowball.y,Snowball.radius,0,Math.PI*2);
    canvasContext.fillStyle = `rgba(255,255,255, ${Snowball.opacity})`;
    canvasContext.fill();
}

function SnowMove(Snowball,canvas){
    Snowball.x+=Snowball.X_move;
    Snowball.y+=Snowball.Y_move;
    if(Snowball.x<0){
        Snowball.x=canvas.width;
        Snowball.opacity=random(0.3,1);
        Snowball.radius=random(2,5);
    }
    else if(Snowball.x>canvas.width){
        Snowball.x=0;
        Snowball.opacity=random(0.3,1);
        Snowball.radius=random(2,5);
    }
    else if(Snowball.y>canvas.height){
        Snowball.y=0;
        Snowball.opacity=random(0.3,1);
        Snowball.radius=random(2,5);
    }
}



function run(){
    const {canvas,canvasContext,numberOfSnowBalls} = setup();
    const SnowBalls = createSnowBalls(canvas,numberOfSnowBalls);
    setInterval(() => {
        canvasContext.clearRect(0,0,canvas.width,canvas.height);
        SnowBalls.forEach(snowball => DrawSnowBall(canvasContext,snowball));
        SnowBalls.forEach(snowball => SnowMove(snowball,canvas));
    }, 50);

}



    run();   
})();