var pas = 15
var n = 8
var width = window.innerWidth - n * pas
var height = window.innerHeight - n * pas

console.log(width, height);

for (let i = 0; i < width; i += pas)
{
    for (let j = 0; j < height; j += pas)
    {
        if (j == 0 || j >= height - pas || i == 0 || i >= width - pas)
        {
            var div = document.createElement("div")
            div.style.position = "absolute"
            div.style.width = pas + "px"
            div.style.height = pas + "px"
            div.style.marginLeft = i + "px"
            div.style.marginTop = j + "px"
            div.style.background = "black"
            
            document.getElementById('game').append(div)
        }
        if (j == 2 * pas && i == 2 * pas)
        {
            var div = document.createElement("div")
            div.style.position = "absolute"
            div.style.width = pas + "px"
            div.style.height = pas + "px"
            div.style.marginLeft = i + "px"
            div.style.marginTop = j + "px"
            div.style.background = "blue"
            div.id = 'snake-0'
            
            document.getElementById('snake').append(div)
        }
    }
}


setInterval(() => 
    {
        var tete = document.getElementById('snake-0')
        var marginTop = tete.style.marginTop
        marginTop = marginTop.replace("px", "")
        var position = parseInt(marginTop) + pas
        document.getElementById('snake-0').style.marginTop = position + "px"
    }, 75
)