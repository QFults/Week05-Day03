const dog = {
  name: 'Beef',
  age: 2,
  breed: 'Chihuahua',
  child: {
    name: 'Chicken',
    age: 1,
    breed: 'Chihuahua'
  },
  bark () {
    console.log(`Woof! My name is ${this.name}`)
  }
}

// let { bark } = dog

// bark()

// let { child: { name: childName } } = dog

// console.log(childName)

// let { 
//   name: dogName,
//   breed: dogBreed,
//   age: dogAge
//  } = dog

// console.log(dogAge)
