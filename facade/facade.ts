export class tv{
    ligar(){
        console.log("TV ligada");
    }
    desligar(){
        console.log("TV desligada");
    }
}
export class projetor{
    ligar(){
        console.log("Projetor ligado");
    }
    desligar(){
        console.log("Projetor desligado");
    }
}
export class receiver{
    ligar(){
        console.log("Receiver ligado");
    }
    desligar(){
        console.log("Receiver desligado");
    }
}
export class playerdemidia{
    ligar(){
        console.log("Player de mídia ligado");
    }
    desligar(){
        console.log("Player de mídia desligado");
    }
}
export class sistemadesom{
    ligar(){
        console.log("Sistema de som ligado");
    }
    desligar(){
        console.log("Sistema de som desligado");
    }
}
export class luzdeambiente{
    ligar(){
        console.log("Luz de ambiente ligada");
    }
    desligar(){
        console.log("Luz de ambiente desligada");
    }
}
export class hometheater{
    constructor(private tv:tv, private projetor:projetor, private receiver:receiver, private playerdemidia:playerdemidia, private sistemadesom:sistemadesom, private luzdeambiente:luzdeambiente){
        this.tv = tv;
        this.projetor = projetor;
        this.receiver = receiver;
        this.playerdemidia = playerdemidia;
        this.sistemadesom = sistemadesom;
        this.luzdeambiente = luzdeambiente
    }
    assistirfilme():void{
        console.log("assistir filme...");
        this.tv.ligar();
        this.projetor.ligar();
        this.receiver.ligar();
        this.playerdemidia.ligar();
        this.sistemadesom.ligar();
    }
    ouvirmusica():void{
        console.log("ouvir música...");
        this.receiver.ligar();
        this.playerdemidia.ligar();
        this.sistemadesom.ligar();
        this.luzdeambiente.ligar();
    }
    desligar():void{
        console.log("plim plom");
        this.tv.desligar();
        this.projetor.desligar();
        this.receiver.desligar();
        this.playerdemidia.desligar();
        this.sistemadesom.desligar();
        this.luzdeambiente.desligar();
    }
}