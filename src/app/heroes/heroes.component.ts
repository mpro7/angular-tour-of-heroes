import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})

export class HeroesComponent implements OnInit {
  heroes = Array<Hero>();
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  getHeroes(): void {
//this.heroService.getHeroes() WYWOŁAJ MI METODĘ  getHeroes Z SERWISUE heroService
//.then()  JAK OTRZYMASZ ODPOWIEDŹ TO
// heroes => this.heroes = heroes (ODPOWIEDŹ PRZYPISZ MI DO ZMIENNEJ GLOBALNEJ W RAMACH KOMPONENTU O NAZWIE this.heroes)

    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  
  ngOnInit(): void {
    this.getHeroes();
  }
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}