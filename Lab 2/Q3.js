
const person1 = {
    organization: 'Science',
    people: ['John', 'Jane'],

    print: function () {
        this.people.forEach(function (value) {
            console.log(value, this.organization);
        })
    }
}

person1.print();

// John undefined
// Jane undefined

//That is because inside forEach 's function() 'this' refers to the window
//object. (global scope) (organization is not visible to the global)

//But if we use arrow function, there 'this' will refer to the enclosing scope.

const person2 = {
    organization: 'Science',
    people: ['John', 'Jane'],

    print: function () {
        this.people.forEach((value) => {
            console.log(value, this.organization);
        })
    }
}

person2.print();

// John Science
// Jane Science
