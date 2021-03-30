var start=new Date().getTime();
    function getRandomColor()
    {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    function makesShapeAppear()
    {
        var w=(Math.random()*200 +50);
        if(Math.random()>0.5)
        {
            document.getElementById("shape").style.borderRadius="50%";
        }
        else document.getElementById("shape").style.borderRadius="0%";
        document.getElementById("shape").style.width=w+ "px";
        document.getElementById("shape").style.height= w+ "px";
        document.getElementById("shape").style.backgroundColor=getRandomColor();
        document.getElementById("shape").style.top=Math.random()*200 + "px";
        document.getElementById("shape").style.left=Math.random()*1000 + "px";
        document.getElementById("shape").style.display="block";
        start=new Date().getTime();
    }
    function appearAfter()
    {setTimeout(makesShapeAppear,Math.random()*2000);}
    appearAfter();
    document.getElementById("shape").onclick = function ()
    {
        document.getElementById("shape").style.display = "none";
        var end=new Date().getTime();
        var tm= (end-start)/1000;
        if(tm>1) 
        {
            alert("Game is OVER!");
            return;
        }
        document.getElementById("time").innerHTML = tm + " seconds";
        appearAfter();
    }