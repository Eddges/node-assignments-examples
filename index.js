const rect = {
    area : (x,y) => {
        return (x*y)
    },
}

const rectFunction = (l,b) => {
    console.log(`Area of the rectangle is ${rect.area(l,b)}`)
}

rectFunction(5,10)