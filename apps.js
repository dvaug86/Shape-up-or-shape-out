
//button creation
const recBtn = document.getElementById('rect_Button');
const sqBtn = document.getElementById('sq_Button');
const circBtn = document.getElementById('circ_Button');
const triBtn = document.getElementById('tri_Button');
const drawBoard = document.getElementById('drawBoard');


//for variables for properties output
var outshapeType = document.getElementById('shape_Type');
var outWidth = document.getElementById('shape_Width');
var outHeight = document.getElementById('shape_Height')
var outRadius = document.getElementById('shape_Radius')
var outArea = document.getElementById('shape_Area')
var outPerimeter = document.getElementById('shape_Perimeter')

//event listner for buttons
recBtn.addEventListener('click', () => new Rectangle(document.getElementById('rect_Width').value, document.getElementById('rect_Height').value));
sqBtn.addEventListener('click', () => new Square(document.getElementById('sq_Length').value));
circBtn.addEventListener('click', () => new Circle(document.getElementById('circ_Radius').value));
triBtn.addEventListener('click', () => new Triangle(document.getElementById('tri_Height').value));


class Shape {
    constructor() {
        this.shape = document.createElement('div');
        this.shape.addEventListener('click', () => this.properties());
        this.shape.addEventListener('dblclick', () => drawBoard.removeChild(this.shape));
        this.addToBoard();
    }

    addToBoard() {
        drawBoard.appendChild(this.shape);
    }

    properties() {
        outshapeType.innerText = `Shape Name: ${this.shape.name}`;
        outWidth.innerText = `Width: ${this.shape.width}`;
        outHeight.innerText = `Height: ${this.shape.height}`;
        outRadius.innerText = `Radius: ${this.shape.radius}`;
        outArea.innerText = `Area: ${this.shape.area}`;
        outPerimeter.innerText = `Perimeter: ${this.shape.perimeter}`;
    }
    
}

class Rectangle extends Shape {
    constructor(height, width) {
        super();
        this.shape.name = 'Rectangle';
        this.height = height;
        this.width = width;
        this.calcs();
        this.render();
    }
    calcs() {
        this.shape.height = this.height;
        this.shape.width = this.width;
        this.shape.radius = 'N/A';
        this.shape.area = this.height * this.width;
        this.shape.perimeter = (this.height + this.width) * 2;
    }
    render() {
        this.shape.style.width = `${this.width}px`;
        this.shape.style.height = `${this.height}px`;
        this.shape.classList.add('rectangle');
        this.shape.style.top = `${Math.floor(Math.random() * (600 - this.height))}px`;
        this.shape.style.left = `${Math.floor(Math.random() * (600 - this.width))}px`;
    }
}

class Square extends Shape {
    constructor(length) {
        super();
        this.shape.name = 'Square';
        this.length = length;
        this.calcs();
        this.render();
    }
    calcs() {
        this.shape.height = this.length;
        this.shape.width = this.length;
        this.shape.radius = 'N/A';
        this.shape.area = this.length**2;
        this.shape.perimeter = (this.length) * 4;
    }
    render() {
        this.shape.style.height = `${this.length}px`;
        this.shape.style.width = `${this.length}px`;
        this.shape.classList.add('square');
        this.shape.style.top = `${Math.floor(Math.random() * (600 - this.length))}px`;
        this.shape.style.left = `${Math.floor(Math.random() * (600 - this.length))}px`;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.shape.name = 'Circle';
        this.radius = radius;
        this.calcs();
        this.render();
    }
    calcs() {
        this.shape.height = this.radius * 2;
        this.shape.width = this.radius * 2;
        this.shape.radius = this.radius;
        this.shape.area = (Math.PI * this.radius ** 2);
        this.shape.area = this.shape.area.toFixed(2);
        this.shape.perimeter = (2 * Math.PI * this.radius);
        this.shape.perimeter = this.shape.perimeter.toFixed(2);
    }
    render() {
        this.shape.style.height = `${this.radius}px`;
        this.shape.style.width = `${this.radius}px`;
        this.shape.classList.add('circle');
        this.shape.style.top = `${Math.floor(Math.random() * (600 - this.radius))}px`;
        this.shape.style.left = `${Math.floor(Math.random() * (600 - this.radius))}px`;
    }
}
class Triangle extends Shape {
    constructor(height) {
        super();
        this.shape.name = 'Triangle';
        this.height = height;
        this.calcs();
        this.render();
    }
    calcs() {
        this.shape.height = this.height;
        this.shape.width = this.height;
        this.shape.radius = 'N/A';
        this.shape.area = 0.5 * this.height * this.height;
        this.shape.perimeter = 2 * this.height + Math.sqrt(2) * this.height;
        this.shape.perimeter = this.shape.perimeter.toFixed(2);
    }
    render() {
        this.shape.style.borderTopWidth  = `${this.height}px`;
        this.shape.style.borderRightWidth = `${this.height}px`;
        this.shape.classList.add('triangle');
        this.shape.style.top = `${Math.floor(Math.random() * (600 - this.height))}px`;
        this.shape.style.left = `${Math.floor(Math.random() * (600 - this.height))}px`;
    }
}



