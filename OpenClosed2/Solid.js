const shapeInterface = (state) => ({
    type: 'shapeInterface',
    area: () => state.area(state)
})

const areaCalculator = (arrShapes) => {
    const proto = {
        sum() {
            const area = [];
            for (shape of this.shapes) {
                if (Object.getPrototypeOf(shape).type === 'shapeInterface')
                    area.push(shape.area());
                else
                    throw new Error('this is not a shapeInterface object');                    
            }                
            return area.reduce((v, c) => c += v, 0); 
        },
        output () {
            return `
                <h1>
                    Sum of the areas of provided shapes:
                    ${this.sum()} 
                </h1>`;
            }
    }
    return Object.assign(Object.create(proto), {shapes: arrShapes})
}

const square = (length) => {
    const proto = {
        length,
        type : 'Square',
        area : (args) => Math.pow(args.length, 2)
    }
    const basics = shapeInterface(proto);
    const composite = Object.assign({} , basics);
    return Object.assign(Object.create(composite), {length});
}

const circle = (radius) => {
    const proto = {
        radius,
        type: 'Circle',
        area: (args) => Math.PI * Math.pow(args.radius, 2)            
    }
    const basics = shapeInterface(proto)
    const composite = Object.assign({} , basics);
    return Object.assign(Object.create(composite), {radius})
}



