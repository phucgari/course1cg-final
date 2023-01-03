class Rectangle{
    constructor(x,y,width,height,color) {
        this.x=x
        this.y=y
        this.width=width
        this.height=height
        this.color=color
    }
    render(){
        let canva=document.getElementById("myCanvas").getContext("2d")
        canva.moveTo(this.x,this.y)
        canva.lineTo(this.x+this.width,this.y)
        canva.lineTo(this.x+this.width,this.y+this.height)
        canva.lineTo(this.x,this.y+this.height)
        canva.lineTo(this.x,this.y)
        canva.strokeStyle=this.color
        canva.stroke()
    }
}
let draw= new Rectangle(10,10,200,100,"#000000")
draw.render()