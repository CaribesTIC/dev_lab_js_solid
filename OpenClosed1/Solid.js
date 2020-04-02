const areaCalculator = (arrShapes) => {
    const proto = {
        sum() {
            const area = [];
            for (shape of this.shapes)
                area.push(shape.area());                
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
        type: 'Square',
        area () {
            return Math.pow(this.length, 2);
        }
    }
    return Object.assign(Object.create(proto), {length})
}

const circle = (radius) => {
    const proto = { 
        type: 'Circle',
        area () {
            return Math.PI * Math.pow(shape.radius, 2);
        }
    }
    return Object.assign(Object.create(proto), {radius})
}


