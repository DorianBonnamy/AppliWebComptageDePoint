import { Injectable } from '@angular/core';
import { Player } from '../Player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  player:Player[]= [];

  constructor() { }

  addPlayer(nom:String){
    this.player = [ ... this.player, new Player(this.player.length, nom)];
  }

  modifyScore(id:number, score:number){
    this.player[id].modifyScore(score);
  }

}
