let body = document.querySelector("body");
body.setAttribute('style', 'display: flex; justify-content: center; align-items: center');

function creatingFigures(){
    this.triangle = function() {
        this.divTriangle = document.createElement('div');
        this.divTriangle.className = "triangle";
        this.divTriangle.setAttribute('style', 'border-left: 50px solid transparent; border-right: 50px solid transparent; border-bottom: 100px solid #f06b67; width: 0; height: 0; margin-right: 20px;');
        this.body = document.querySelector("body");
        this.body.appendChild(this.divTriangle);
    }
    this.square = function() {
        this.divSquare = document.createElement('div');
        this.divSquare.className = "square";
        this.divSquare.setAttribute('style', 'width: 100px; height: 100px; background: #3abe6c;');
        this.body = document.querySelector("body");
        this.body.appendChild(this.divSquare);
    }
}

let createFigure = new creatingFigures();
createFigure.triangle();
createFigure.square();