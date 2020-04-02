const shapeInterface = (state) => ({ type: 'shapeInterface', area: () => state.area(state) })

const solidShapeInterface = (state) => ({ type: 'solidShapeInterface', volume: () => state.volume(state) })

const manageShapeInterface = (fn) => ({ type: 'manageShapeInterface', calculate: () => fn() })

const sumCalculatorOputter = (a) => {
  const proto = {
    toJson() {
      return JSON.stringify(this.calculator.sum())
    },
    toHtml() {
      return `
        <h1>
          Suma calculada:
          ${this.calculator.sum()}
        </h1>`
    }
  }
  return Object.assign(Object.create(proto), {calculator: a})
}

const areaCalculator = (s) => {
  const proto = {
    type: 'areaCalculator',
    sum() {
      const area = []
      for (shape of this.shapes) {
          if (Object.getPrototypeOf(shape).type === 'manageShapeInterface')
              area.push(shape.calculate());
          else
              throw new Error('this is not a shapeInterface object'); 
      }
      return area.reduce((v, c) => c += v, 0)
    }
  }

  return Object.assign(Object.create(proto), {shapes: s})
}                

const volumeCalculator = (s) => {
  const proto = {
    type: 'volumeCalculator'
  }
  const areaCalProto = Object.getPrototypeOf(areaCalculator())
  const inherit = Object.assign({}, areaCalProto, proto)
  return Object.assign(Object.create(inherit), {shapes: s})
}

const square = (length) => {
  const proto = {
    length,
    type : 'Square',
    area : (args) => Math.pow(args.length, 2)
  }
  const basics = shapeInterface(proto)
  const abstraccion = manageShapeInterface(() => basics.area())
  const composite = Object.assign({}, basics, abstraccion)
  return Object.assign(Object.create(composite), {length})
}

const circle = (radius) => {
  const proto = {
    radius,
    type: 'Circle',
    area: (args) => Math.PI * Math.pow(args.radius, 2)
  }

  const basics = shapeInterface(proto)
  const abstraccion = manageShapeInterface(() => basics.area())
  const composite = Object.assign({}, basics, abstraccion)
  return Object.assign(Object.create(composite), {radius})
}

const cubo = (length) => {
  const proto = {
    length,
    type   : 'Cubo',
    area   : (args) => Math.pow(args.length, 2),
    volume : (args) => Math.pow(args.length, 3)
  }
  const basics  = shapeInterface(proto)
  const complex = solidShapeInterface(proto)
  const abstraccion = manageShapeInterface(() => basics.area() + complex.volume())
  const composite = Object.assign({}, basics, abstraccion)
  return Object.assign(Object.create(composite), {length})
}

