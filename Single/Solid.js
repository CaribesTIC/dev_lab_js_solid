const areaCalculator = (shapes) => {
    const proto = {
        sum() {
            const area = [];
            for (shape of this._shapes) {
                if(shape.type === 'Square')
                    area.push(Math.pow(shape.length, 2));
                else if (shape.type === 'Circle')
                   area.push(Math.PI * Math.pow(shape.radius, 2));
            }//return myMathArr.sum(area);         
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
    return Object.assign(Object.create(proto), {_shapes: shapes})
}


const circle = (radius) => {
  const proto = { 
    type: 'Circle'
  }
  return Object.assign(Object.create(proto), {radius})
}

const square = (length) => {
  const proto = { 
    type: 'Square'
  }
  return Object.assign(Object.create(proto), {length})
}





/*
const areaCalculator = (s) => {
  const proto = {
    sum() {
      // logic to sum
    },
    output () {
     return `
       <h1>
         Sum of the areas of provided shapes:
         ${this.sum()} 
       </h1>
    }
  }
  return Object.assign(Object.create(proto), {shapes: s})
}
*/








