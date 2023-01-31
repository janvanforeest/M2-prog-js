class App
{
    runApplication()
    {
    let canvas = document.getElementById("canvasId")
    let g = canvas.getContext("2d");
    console.log(canvas);

   

    g.fillStyle = "white"
    g.beginPath();
    g.moveTo(0,420);
    g.lineTo(1000,420)
    g.lineTo(1000,1000)
    g.lineTo(0,1000)
    g.lineTo(0,420)
    g.closePath();
    g.stroke();
    g.fill();

    g.fillStyle = "green"
    g.beginPath();
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

    g.fillStyle = "#ffd700"
    g.beginPath();
    g.moveTo(500,185);
    g.lineTo(505,210);
    g.lineTo(530,210);
    g.lineTo(508,220);
    g.lineTo(513,245);
    g.lineTo(500,223);
    g.lineTo(485.5,245);
    g.lineTo(492,220);
    g.lineTo(470,210);
    g.lineTo(495,210);
    g.lineTo(500,185)
    g.closePath();
    g.stroke();
    g.fill();

    g.fillStyle = "#89573f"
    g.beginPath();
    g.moveTo(315,250);
    g.lineTo(18,275);
    g.lineTo(20,480);
    g.lineTo(320,425);
    g.closePath();
    g.stroke();
    g.fill();

    g.fillStyle = "#543627"
    g.beginPath();
    g.moveTo(315,250);
    g.lineTo(210,170);
    g.lineTo(0,180);
    g.lineTo(0,260);
    g.lineTo(18,275);
    g.closePath();
    g.stroke();
    g.fill();
    
    g.fillStyle = "#89573f"
    g.beginPath();
    g.moveTo(0,260);
    g.lineTo(18,275);
    g.lineTo(20,480);
    g.lineTo(0,470);
    g.lineTo(0,260);
    g.closePath();
    g.stroke();
    g.fill();

    g.fillStyle = "yellow"
    g.beginPath();
    g.moveTo(270,280);
    g.lineTo(275,380);
    g.lineTo(140,403);
    g.lineTo(138,297);
    g.lineTo(270,280);
    g.closePath();
    g.stroke();
    g.fill();
    
    g.fillStyle = "#50493c"
    g.beginPath();
    g.moveTo(45,475);
    g.lineTo(90,465);
    g.lineTo(88,340);
    g.lineTo(42,345);
    g.lineTo(45,470);
    g.closePath();
    g.stroke();
    g.fill();

    g.fillStyle = "#89573f"
    g.beginPath();
    g.moveTo(1000,260);
    g.lineTo(982,275);
    g.lineTo(980,480);
    g.lineTo(1000,470);
    g.lineTo(1000,260);
    g.closePath();
    g.stroke();
    g.fill();

    g.fillStyle = "#543627"
    g.beginPath();
    g.moveTo(685,250);
    g.lineTo(790,170);
    g.lineTo(1000,180);
    g.lineTo(1000,260);
    g.lineTo(982,275);
    g.closePath();
    g.stroke();
    g.fill();

    g.fillStyle = "#89573f"
    g.beginPath();
    g.moveTo(685,250);
    g.lineTo(982,275);
    g.lineTo(980,480);
    g.lineTo(680,425);
    g.closePath();
    g.stroke();
    g.fill();

    g.fillStyle = "yellow"
    g.beginPath();
    g.moveTo(730,280);
    g.lineTo(725,380);
    g.lineTo(860,403);
    g.lineTo(862,297);
    g.lineTo(730,280);
    g.closePath();
    g.stroke();
    g.fill();

    g.fillStyle = "#50493c"
    g.beginPath();
    g.moveTo(955,475);
    g.lineTo(910,465);
    g.lineTo(912,340);
    g.lineTo(958,345);
    g.lineTo(955,470);
    g.closePath();
    g.stroke();
    g.fill();

    g.fillStyle = "black"
    g.beginPath();
    g.moveTo(350,1000);
    g.lineTo(650,1000);
    g.lineTo(550,600);
    g.lineTo(450,600);
    g.lineTo(350,1000);
    g.closePath();
    g.stroke();
    g.fill();

    g.fillStyle = "#89573f"
    g.beginPath();
    g.moveTo(450,600);
    g.lineTo(550,600);
    g.lineTo(550,500);
    g.lineTo(450,500);
    g.lineTo(450,600);
    g.closePath();
    g.stroke();
    g.fill();

    g.fillStyle = "black"
    g.beginPath();
    g.moveTo(0,800);
    g.lineTo(1000,800)
    g.lineTo(1000,1000)
    g.lineTo(0,1000)
    g.lineTo(0,800)
    g.closePath();
    g.stroke();
    g.fill();
    }
}
let app = new App();
app.runApplication();