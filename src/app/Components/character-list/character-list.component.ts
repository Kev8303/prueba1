import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../Services/character.service';
import { Character } from '../../Models/character.interface';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent implements OnInit{

  characters: Character[] = [];

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService.getAllCharacters().subscribe((response) => {
      this.characters = response;
    });
  }
}
