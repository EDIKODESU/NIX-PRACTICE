let body = document.querySelector("body");
body.setAttribute('style', 'display: flex; justify-content: center; align-items: center');

function creatingTriangle(width, height, color){
    this.divTriangle = document.createElement('div');
    this.divTriangle.className = "triangle";
    this.divTriangle.setAttribute('style', `border-left: ${height/2}px solid transparent; border-right: ${height/2}px solid transparent; border-bottom: ${width}px solid ${color}; width: 0; height: 0; margin-right: 20px;`);
    this.body = document.querySelector("body");
    this.body.appendChild(this.divTriangle);
}

function creatingSquare(width, height, color){
    this.divSquare = document.createElement('div');
    this.divSquare.className = "square";
    this.divSquare.setAttribute('style', `width: ${width}px; height: ${height}px; background: ${color};`);
    this.body = document.querySelector("body");
    this.body.appendChild(this.divSquare);
}

new creatingTriangle(100, 100, "#f06b67");
new creatingSquare(100, 100, "#3abe6c");
