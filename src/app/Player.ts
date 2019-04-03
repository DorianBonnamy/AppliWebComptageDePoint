export class Player{

    id:number;
    nom:String;
    score:number;

    constructor(id:number, nom:String){
        this.id = id;
        this.nom = nom;
        this.score = 0;
    }

    modifyScore(score:number){
        this.score += score;
    }
}