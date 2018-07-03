class Barco {
    constructor (modelo, tamanho, marca){
        this._modelo = modelo;
        this._marca = marca;
        this._tamanho = tamanho;
        this.vela = "genoa";
        this.velocidade = 0;
        this.balão = "off";
        this.tripulação = 4;
    }
    get modelo(){
        return this._modelo;
    }
    get marca(){
        return this._marca;
    }
    get tamanho(){
        return this._tamanho;
    }
    orçar(){
        this.velocidade --;
    }
    folgar(){
        this.velocidade -=2;
    }
    arribar(){
        this.velocidade ++;
    }
    caçar(){
        this.velocidade +=2;
    }
    colocarBalao(){
        this.balão = "on";
        this.vela = "balão";
        this.velocidade += 4;
        this.tripulação = 5;
    }
    toString(){
        return (`Barco modelo: ${this.modelo} , Tamanho: ${this.tamanho} , Marca: ${this.marca}, Velocidade atual: ${this.velocidade} knots , Vela utilizada: ${this.vela} , Balão: ${this.balão}`);
    }
}

const vent = new Barco('Delta', 21, 'Hugo Boss');
console.log(vent.modelo === 'Delta');
console.log(vent.marca === 'Hugo Boss');
console.log(vent.tamanho === 21);
console.log(vent.velocidade); //0
console.log(vent.vela); //"genoa"
console.log(vent.tripulação); //4
console.log(vent.balão);    //"off"
vent.arribar();
console.log(vent.velocidade);   //1
vent.caçar();
console.log(vent.velocidade);   //3
vent.orçar();
console.log(vent.velocidade);   //2
vent.folgar();
console.log(vent.velocidade);   //0
vent.colocarBalao();
console.log(vent.velocidade);   //4
console.log(vent.balão);    //"on"
console.log(vent.vela); //"balão"
console.log(vent.tripulação);   //5
vent.arribar();
console.log(vent.velocidade);   //5
c = vent.toString();
