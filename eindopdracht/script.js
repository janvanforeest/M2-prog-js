class App
{
    runApplication()
    {
    let canvas = document.getElementById("canvasId")
    let g = canvas.getContext("2d");
    console.log(canvas);
    g.fillStyle = "brown"
    g.moveTo(10,10);
    g.lineTo(10,0);
    g.lineTo(0,0); 
    g.lineTo(0,10);
    g.lineTo(10,10);  
    g.closePath();
    g.stroke();
    g.fill(); 

    g.fillStyle = "white"
    g.moveTo(50,20);
    g.lineTo(55,45);
    g.lineTo(80,45);
    g.lineTo(58,55);
    g.lineTo(63,80);
    g.lineTo(50,58);
    g.lineTo(34.5,80);
    g.lineTo(42,55);
    g.lineTo(20,45);
    g.lineTo(45,45);
    g.lineTo(50,20)
    g.closePath();
    g.stroke();
    g.fill();

    g.fillStyle = "green"
    g.moveTo(500,225);
    g.lineTo(350,350);
    g.lineTo(650,350);
    g.lineTo(555,350);
    g.lineTo(710,500);
    g.lineTo(290,500);
    g.lineTo(455,350);
    g.lineTo(650,350)
    g.lineTo(500,225)
    g.closePath();
    g.stroke();
    g.fill();

    g.fillStyle = "#89573f"
    g.moveTo(335,250);
    g.lineTo(18,275);
    g.lineTo(20,480);
    g.lineTo(320,425);
    g.closePath();
    g.stroke();
    g.lineTo(210,170)
    g.lineTo(0,180)
    g.lineTo(0,275)
    g.closePath();
    g.stroke();
    g.fill();
    }
}
let app = new App();
app.runApplication();