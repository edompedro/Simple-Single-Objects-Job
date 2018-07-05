class ATM {
    constructor(serie) {
        this._numeroSerie = serie;
        this.valor = 0;
        this.cinco = 0;
        this.des = 0;
        this.vinte = 0;
        this.cinquenta = 0;
        this.cem = 0;
    }
    get numeroSerie() {
        return this._numeroSerie;
    }
    abastecer(numero, cedula) {
        if (cedula===5) {
            this.cinco = numero;
            this.valor = +numero * cedula;
        }
        if (cedula===10) {
            this.des = numero;
            this.valor = +numero * cedula;
        }
        if (cedula===20) {
            this.vinte = numero;
            this.valor = +numero * cedula;
        }
        if (cedula===50) {
            this.cinquenta = numero;
            this.valor = +numero * cedula;
        }
        if (cedula===100) {
            this.cem = numero;
            this.valor = +numero * cedula;
        }
        if (cedula != 5&&10&&20&&50&&100) {
            return 0;
        }
    }
    cedulas(cedula) {
        if (cedula===5) {
            return this.cinco; 
        }
        if (cedula===10) {
            return this.des;
        }
        if (cedula===20) {
            return this.vinte;
        }
        if (cedula===50) {
            return this.cinquenta;
        }
        if (cedula===100) {
            return this.cem;
        }
        if (cedula!= 5&&10&&20&&50&&100) {
            return 0;
        }
    }
    retirar(x) {
        let c5,c10,c20,c50,c100 = 0;
        if (x>this.valor) {
            return "Não há cedulas suficientes"
        }else{
            if(x>=100){
                let c100 = Math.floor((x/100))
                if(c100>this.cem){
                    return "Não há cedulas suficientes"
                }
                let r = x%100
                if(r===0){
                    this.valor = this.valor - x;
                    this.cinco = this.cinco - c5;
                    this.des = this.des - c10;
                    this.vinte = this.vinte - c20;
                    this.cinquenta = this.cinquenta - c50;
                    this.cem = this.cem - c100;
                }
                if(r>=50){
                    let c50 = Math.floor(r/50)
                    if(c50>this.cinquenta){
                        return "Não há cedulas suficientes"
                    }else{
                        let re = r%50
                        if(re===0){
                            this.valor = this.valor - x;
                            this.cinco = this.cinco - c5;
                            this.des = this.des - c10;
                            this.vinte = this.vinte - c20;
                            this.cinquenta = this.cinquenta - c50;
                            this.cem = this.cem - c100;
                        }
                        if(re>=20){
                            let c20 = Math.floor(re/20)
                            if(c20>this.vinte){
                                return "Não há cedulas suficientes"
                            }else{
                                let res = re%20
                                if(res===0){
                                    this.valor = this.valor - x;
                                    this.cinco = this.cinco - c5;
                                    this.des = this.des - c10;
                                    this.vinte = this.vinte - c20;
                                    this.cinquenta = this.cinquenta - c50;
                                    this.cem = this.cem - c100;
                                }
                                if(res>=10){
                                    let c10 = Math.floor(res/10)
                                    if(c10>this.des){
                                        return "Não há cedulas suficientes"
                                    }else{
                                        let rest = res%10
                                        if(rest===0){
                                            this.valor = this.valor - x;
                                            this.cinco = this.cinco - c5;
                                            this.des = this.des - c10;
                                            this.vinte = this.vinte - c20;
                                            this.cinquenta = this.cinquenta - c50;
                                            this.cem = this.cem - c100;
                                        }
                                        if(rest>=5){
                                            let c5 = Math.floor(rest/5)
                                            if(c5>this.cinco){
                                                return "Não há cedulas suficientes"
                                            }else{
                                                let resto = rest%5
                                                if(resto===0){
                                                    this.valor = this.valor - x;
                                                    this.cinco = this.cinco - c5;
                                                    this.des = this.des - c10;
                                                    this.vinte = this.vinte - c20;
                                                    this.cinquenta = this.cinquenta - c50;
                                                    this.cem = this.cem - c100;
                                                }
                                                if(resto!=0) {
                                                    return "Não há cedulas suficientes";
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }else{
                    if(r>=20){
                        let c20 = Math.floor(r/20)
                        if(c20>this.vinte){
                            return "Não há cedulas suficientes"
                        }else{
                            let res = r%20
                            if(res===0){
                                this.valor = this.valor - x;
                            }
                            if(res>=10){
                                let c10 = Math.floor(res/10)
                                if(c10>this.des){
                                    return "Não há cedulas suficientes"
                                }else{
                                    let rest = res%10
                                    if(rest===0){
                                        this.valor = this.valor - x;
                                    }
                                    if(rest>=5){
                                        let c5 = Math.floor(rest/5)
                                        if(c5>this.cinco){
                                            return "Não há cedulas suficientes"
                                        }else{
                                            let resto = rest%5
                                            if(resto===0){
                                                this.valor = this.valor - x;
                                            }
                                            if(resto!=0){
                                                return "Não há cedulas suficientes"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }else{
                        if(r>=10){
                            let c10 = Math.floor(r/10)
                            if(c10>this.des){
                                return "Não há cedulas suficientes"
                            }else{
                                let rest = r%10
                                if(rest===0){
                                    this.valor = this.valor - x;
                                }
                                if(rest>=5){
                                    let c5 = Math.floor(rest/5);
                                    if(c5>this.cinco){
                                        return "Não há cedulas suficientes";
                                    }else{
                                        let resto = rest%5
                                        if(resto===0){
                                            this.valor = this.valor - x;
                                        }
                                        if(resto!=0){
                                            return "Não há cedulas suficientes";
                                        }
                                    }
                                }
                            }
                        }else{
                            if(r>=5){
                                let c5 = Math.floor(r/5)
                                if(c5>this.cinco){
                                    return "Não há cedulas suficientes"
                                }else {
                                    let resto = r%5
                                    if(resto===0) {
                                        this.valor = this.valor - x;
                                    }
                                    if(resto!=0) {
                                        return "Não há cedulas suficientes";
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
const atm = new ATM(2344499);
console.log(atm.numeroSerie === 2344499);
// a linha a seguir não deve fazer efeito
atm.numeroSerie = 34883444;
console.log(atm.numeroSerie === 2344499);
// o ATM não tem dinheiro no início
console.log(atm.valor); // 0
console.log(atm.valor === 0);
// abastecendo com 33 notas de 100
atm.abastecer(33, 100);
// verificando a quantidade de cédulas de 100
console.log(atm.cedulas(100)); // 33
// espera-se 33 cédulas
console.log(atm.cedulas(100) === 33);
// e 33 * R$ 100 totalizando R$ 3300
console.log(atm.valor === 3300);
// espera-se nenhuma cédula de qualquer outro valor
console.log(atm.cedulas(5)); // 0
console.log(atm.cedulas(5) === 0);
console.log(atm.cedulas(50)); // 0
console.log(atm.cedulas(50) === 0);
// mesmo os que não existem podem ser consultados, mas retornam 0
console.log(atm.cedulas(3)); // 0
console.log(atm.cedulas(3) === 0);
// abastecimento de cédulas não existentes são rejeitados
atm.abastecer(8, 3); // 8 cédulas de R$ 3,00
console.log(atm.cedulas(3) === 0);
// consultando o valor
console.log(atm.valor); // 33 * 100 = 3300 reais
console.log(atm.valor === 3300);

// retirada rejeitada
atm.retirar(350); // não há cédulas de R$ 50,00
console.log(atm.cedulas(100) === 33);
console.log(atm.valor === 3300);
// retirada válida
atm.retirar(300); // 3 cédulas de 100
console.log(atm.cedulas(100) === 30);
console.log(atm.valor === 3000);
// retirada rejeitada
atm.retirar(3100); // não há cédulas suficientes
console.log(atm.cedulas(100) === 30);
console.log(atm.valor === 3000);
// retirada válida
atm.retirar(3000); // vai esvaziar o ATM
console.log(atm.cedulas(100) === 0);
console.log(atm.valor === 0);

// abastecimento de R$ 50,00 e R$ 10,00
atm.abastecer(10, 10); // 10 cédulas de R$ 10,00
atm.abastecer(10, 50); // 10 cédulas de R$ 50,00
console.log(atm.cedulas(10) === 10);
console.log(atm.cedulas(50) === 10);
console.log(atm.valor === 600); // 10 * 10 + 10 * 50
// retirada prioriza cédulas de maior valor
atm.retirar(100); // retira 2 cédulas de R$ 50,00
console.log(atm.cedulas(10) === 10);
console.log(atm.cedulas(50) === 8);
console.log(atm.valor === 500); // 10 * 10 + 8 * 50
// retirada combinada
atm.retirar(90); // 1 cédula de R$ 50,00 e 4 cédulas de R$ 10,00
console.log(atm.cedulas(10) === 6);
console.log(atm.cedulas(50) === 7);
console.log(atm.valor === 410);
