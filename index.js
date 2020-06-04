const rect = require('./rectangle')

const solveRect = (l, b) => {
    console.log('Solving')

    rect(l, b, (err, funcs) => {
        if(err){
            console.log(err.message)
        }
        else{
            console.log('Area : ' + funcs.area())
        }
    })
}


solveRect(4, 5)
solveRect(8, -1)