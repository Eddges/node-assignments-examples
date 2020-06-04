module.exports = (x, y, callback) => {
    if(x < 0 || y < 0){
        setTimeout(() => {
            callback(new Error('There was an error'), null)
        }, 2000)
        
    }
    else{
        callback(null, {
            area : () => (x*y),
            perimeter : () => (2*(x+y))
        })
    }
}
