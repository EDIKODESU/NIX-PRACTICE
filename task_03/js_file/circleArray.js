function circleArray(){
    this.arr = [];
    this.add = function (name){
        this.arr.push(name);
    }
    this.get = function (numb){
        this.len = this.arr.length;
        console.log(this.arr[(numb % this.len + this.len) % this.len]);
    }
}

let circledArray = new circleArray();

circledArray.add("Київ");
circledArray.add("Харків");
circledArray.add("Херсон");

circledArray.get(0);
circledArray.get(4);
circledArray.get(-1);