class App
{
    runApplication()
    {
        console.log("hello world!");
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        console.log(canvas);
        g.fillStyle = "#ff4500";     
        g.beginPath();
        g.moveTo(300,100);
        g.lineTo(700,200);
        g.lineTo(600,400);
        g.lineTo(200,300);
        g.lineTo(300,100);
        g.closePath();
        g.stroke();
        g.fill();

        g.fillStyle = "#8b4513"
        g.beginPath()
        g.moveTo(200,300);
        g.lineTo(200,500);
        g.lineTo(600,600);
        g.lineTo(600,400);
        g.closePath();
        g.stroke();
        g.fill();

        g.fillStyle = "#8b4513"
        g.beginPath()
        g.moveTo(600,400);
        g.lineTo(600,600);
        g.lineTo(800,500);
        g.lineTo(800,300);
        g.closePath();
        g.stroke();
        g.fill();

        g.fillStyle = "#8b4513"
        g.beginPath()
        g.moveTo(600,400);
        g.lineTo(700,200);
        g.lineTo(800,300);
        g.closePath();
        g.stroke();
        g.fill();
        
        g.fillStyle = "#ffff00"
        g.beginPath()
        g.moveTo(675,348);
        g.lineTo(725,319);
        g.lineTo(725,235);
        g.lineTo(675,264);
        g.lineTo(675,348)
        g.closePath();
        g.stroke();
        g.fill();

        g.fillStyle = "#000000"
        g.beginPath()
        g.moveTo(650,550);
        g.lineTo(650,425);
        g.lineTo(750,378);
        g.lineTo(750,498);        
        g.closePath();
        g.stroke();
        g.fill();

        g.fillStyle = "#000000"
        g.beginPath()
        g.moveTo(250,350);
        g.lineTo(250,450);
        g.lineTo(350,475);
        g.lineTo(350,375);
        g.lineTo(250,350);
        g.closePath();
        g.stroke();
        g.fill();

        
        g.fillStyle = "green"
        g.beginPath()
        g.moveTo(475,570);
        g.lineTo(475,400);
        g.lineTo(550,420);
        g.lineTo(550,588);
        g.lineTo(475,570);
        g.closePath();
        g.stroke();
        g.fill();
    }
}
let app = new App();
app.runApplication();