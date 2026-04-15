export abstract class bebida{
    abstract getnome(): string;
    abstract getpreco(): number;
}

export class cafe_expresso extends bebida{
    getnome(): string {
        return "Cafe Expresso";
    }
    getpreco(): number {
        return 5;
    } 
}
export class cappuccino extends bebida{
    getnome(): string {
        return "Cappuccino";
    }
    getpreco(): number {
        return 7;
    }
}
export class cha extends bebida{
    getnome(): string {
        return "Chá";
    }
    getpreco(): number {
        return 3;
    }
}
export abstract class complementodecorator extends bebida{
    constructor(protected bebida: bebida){
        super();
        this.bebida = bebida;
    }
    abstract getnome(): string;
    abstract getpreco(): number;
}
export class leite extends complementodecorator{
    getnome(): string {
        return this.bebida.getnome() + ", Leite";
    }
    getpreco(): number {
        return this.bebida.getpreco() + 2;
    }
}
export class chantilly extends complementodecorator{
    getnome(): string {
        return this.bebida.getnome() + ", Chantilly";
    }
    getpreco(): number {
        return this.bebida.getpreco() + 3;
    }
}
export class canela extends complementodecorator{
    getnome(): string {
        return this.bebida.getnome() + ", Canela";
    }
    getpreco(): number {
        return this.bebida.getpreco() + 1;
    }
}
export class calda_de_chocolate extends complementodecorator{
    getnome(): string {
        return this.bebida.getnome() + ", Calda de Chocolate";
    }
    getpreco(): number {
        return this.bebida.getpreco() + 4;
    }
}