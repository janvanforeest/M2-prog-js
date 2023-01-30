class App
{
    runApplication()
    {
        console.log("hallo wereld");
        this.runfunction();
        this.runreturn();
        this.runvariablemath();
        this.runcount();
    }
    runfunction()
    {
        console.log("MARIO!!");
    }
    runreturn()
    {
        console.log("BWAHAHA!!!")
        return
    }
    runvariablemath()
    {
        var a = 4
        var b = 7
        console.log(a + b)
    }
    runcount()
    {
        let myWord = "bamboo";
        console.log("there are " + myWord.length + " letters")
        
    }

}
let app = new App();
app.runApplication();