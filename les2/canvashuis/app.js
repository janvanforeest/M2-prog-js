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

        g.fillStyle = "blue"
        g.beginPath()
        g.moveTo(250,350);
        g.lineTo(250,450);
        g.lineTo(350,500);
        g.lineTo(350,400);
        g.lineTo(250,350)
        g.closePath();
        g.stroke();
        g.fill();
    }
}
let app = new App();
app.runApplication();