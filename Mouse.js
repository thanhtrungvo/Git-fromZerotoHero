function Mouse(name){
    this.name = name;
    this.dead = false;
}

Mouse.prototype.die = ()=>{
    this.dead = true;
}

console.log("hello")

module.exports = Mouse;