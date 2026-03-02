class Pizza{
    constructor(masa, tamano,ingredientes ) {
        this.masa = masa; 
        this.tamano = tamano; 
        this.ingredientes = ingredientes;
    }

    preparar() {
        console.log(`preparando una pizza ${this.tamano} con masa ${this.masa} y los 
         siguientes ingredientes: ${this.ingredientes}.`);
         return this;    
    }

hornear() {
    console.log("la pizza esta en el horno...");
    return this;
}

empacar() {
    console.log("empacando la pizza..")
    return this;
}
};

const pizzaHawaiana = new Pizza("delgada" , "mediana" , ["jamon" , "piña" , "queso"]);
console.log(pizzaHawaiana.preparar());
console.log(pizzaHawaiana.hornear());
console.log(pizzaHawaiana.empacar());



const pizzapeperoni = new Pizza("doble masa" , "grande" , ["jamon , mango , limon" , ]);
console.log(pizzapeperoni.preparar());
console.log(pizzapeperoni.hornear());
console.log(pizzapeperoni.empacar());


class combos extends Pizza {
    constructor(combo , cantidad , tamano , masa , ingrediente, bebida, postre)  {
        super(masa, tamano, ingrediente);
        this.combo = combo
        this.cantidad =  cantidad
        this.bebidas = bebidas
        this.postres = postres 
    }
}