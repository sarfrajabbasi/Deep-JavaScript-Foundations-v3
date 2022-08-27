// third way to invoke a function

function ask(question){
    console.log(this.teacher,question)
}

var newEmptyObject = new ask("what is 'new' doing here?")
// undefined what is 'new' doing here?

