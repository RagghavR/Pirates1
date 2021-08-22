class Cannon {
    constructor(x,y,w,h,a){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.a = a

    }
    display(){
        fill("lightgrey")
        push()
        translate(this.x,this.y-40)
        rotate(this.a)
        rect(0,0,this.w,this.h)
        pop()
        //arc(x,y,w,h,starting angle, ending angle)
        arc(this.x,this.y+60,140,200,PI,2*PI)
    }
}