class Rectangle{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    area(){
        const area = this.width * this.height;
        console.log(this);
        return area;
    }

    paint(){
        console.log(`Painting with color : ${this.color}`);
    }

    destroy(){

    }
}

const rect = new Rectangle(2, 4, "red");
const area = rect.area();
console.log(rect.paint());
console.log(area);


