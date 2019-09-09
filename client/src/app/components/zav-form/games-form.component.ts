import { Component, OnInit, HostBinding } from '@angular/core';
import { Game } from 'src/app/models/Game';

import { GamesService } from 'src/app/services/games.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Alert } from 'selenium-webdriver';
import { isNull, isNullOrUndefined } from 'util';

@Component({
  selector: 'app-games-form',
  templateUrl: './games-form.component.html',
  styleUrls: ['./games-form.component.css']
})
export class GameFormComponent implements OnInit {

  @HostBinding('class') clases = 'row';

  game: Game = {
    id: 0,
    nombre: '',
    mail: '',
    phone: '',
    comentarios: '',
    motivo: '',
    created_at: new Date()
  };

  edit: boolean = false;

  constructor(private gameService: GamesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.gameService.getGame(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.game = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  saveNewGame() {
    const params = this.activatedRoute.snapshot.params;
    var nombre = this.game.nombre;
    var mail = this.game.mail;
    var phone = this.game.phone;
    var motivo = this.game.motivo;

    if (!nombre == true || !mail == true || !phone == true || !motivo == true)
    {
        console.error("Todos los campos son obligatorios")
        alert("Todos los campos son obligatorios");
    }
    else
    {
      delete this.game.created_at;
      delete this.game.id;
      this.gameService.saveGame(this.game)
      .subscribe(
          res => {
            console.log(res);
            this.router.navigate(['/games']);
          },
          err => console.error(err)
        )   
    }

  }

  updateGame() {

    const params = this.activatedRoute.snapshot.params;
    var nombre = this.game.nombre;
    var mail = this.game.mail;
    var phone = this.game.phone;
    var motivo = this.game.motivo;

    if (!nombre == true || !mail == true || !phone == true || !motivo == true)
    {
        console.error("Todos los campos son obligatorios")
        alert("Todos los campos son obligatorios");
    }
    else
    {
      delete this.game.created_at;
      this.gameService.updateGame(this.game.id, this.game)
        .subscribe(
          res => { 
            console.log(res);
            this.router.navigate(['/games']);
          },
          err => console.error(err)
        )
        
    }

  }

}
