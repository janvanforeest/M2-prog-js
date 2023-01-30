class App
{
    runApplication()
    {
        //dit is comentaar voor javascript
        let getalVariable = "title";
        document.getElementById("newstitle")
        let randomGetal = Math.random(0.0, 0.999999);
        if (randomGetal = Math.random == 0)
        {
            getalVariable.fillstyle == "green";
        }
        if (randomGetal = Math.random <= 0.2)
        {
            getalVariable.fillstyle == "red";
        }
        if (randomGetal = Math.random > 0.2 < 0.6)
        {
            getalVariable.fillstyle == "yellow";
        }
        else if (randomGetal = Math.random  >= 0.6)
        {
            getalVariable.fillstyle == "purple";
        }
        console.log(randomGetal)
        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d")
        g.fillStyle = "#ff4500";     
        g.beginPath();
        g.moveTo(30,10);
        g.lineTo(70,20);
        g.lineTo(60,40);
        g.lineTo(20,30);
        g.lineTo(30,10);
        g.closePath();
        g.stroke();
        g.fill();

        g.fillStyle = "#8b4513"
        g.beginPath()
        g.moveTo(20,30);
        g.lineTo(20,50);
        g.lineTo(60,60);
        g.lineTo(60,40);
        g.closePath();
        g.stroke();
        g.fill();

        g.fillStyle = "#8b4513"
        g.beginPath()
        g.moveTo(60,40);
        g.lineTo(60,60);
        g.lineTo(80,50);
        g.lineTo(80,30);
        g.closePath();
        g.stroke();
        g.fill();

        g.fillStyle = "#8b4513"
        g.beginPath()
        g.moveTo(60,40);
        g.lineTo(70,20);
        g.lineTo(80,30);
        g.closePath();
        g.stroke();
        g.fill();
        
        g.fillStyle = "#ffff00"
        g.beginPath()
        g.moveTo(67.5,34.8);
        g.lineTo(72.5,31.9);
        g.lineTo(72.5,23.5);
        g.lineTo(67.5,26.4);
        g.lineTo(67.5,34.8)
        g.closePath();
        g.stroke();
        g.fill();

        g.fillStyle = "#000000"
        g.beginPath()
        g.moveTo(65,55);
        g.lineTo(65,42.5);
        g.lineTo(75,37.8);
        g.lineTo(75,49.8);        
        g.closePath();
        g.stroke();
        g.fill();

        g.fillStyle = "#000000"
        g.beginPath()
        g.moveTo(25,35);
        g.lineTo(25,45);
        g.lineTo(35,47.5);
        g.lineTo(35,37.5);
        g.lineTo(25,35);
        g.closePath();
        g.stroke();
        g.fill();

        
        g.fillStyle = "green"
        g.beginPath()
        g.moveTo(47.5,57);
        g.lineTo(47.5,40);
        g.lineTo(55,42);
        g.lineTo(55,58.8);
        g.lineTo(47.5,57);
        g.closePath();
        g.stroke();
        g.fill();

    }
}
let app = new App();
app.runApplication();