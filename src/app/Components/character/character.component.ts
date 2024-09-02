import { Component } from '@angular/core';
import { CharacterService } from '../../Services/character.service';
import { Character } from '../../Models/character.interface';
import { jsPDF } from 'jspdf';


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent {

  characters: Character[] = [];


  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {
    this.characterService.getAllCharacters().subscribe((data: Character[]) => {
      this.characters = data;
    });
  }

  downloadPDF(character: Character): void {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Character Information', 10, 10);
    doc.setFontSize(12);
    doc.text(`Name: ${character.name}`, 10, 30);
    doc.text(`Status: ${character.status}`, 10, 40);
    doc.text(`Species: ${character.species}`, 10, 50);
    doc.text(`Location: ${character.location.name}`, 10, 60);
    doc.text(`First seen in: ${character.episode[0]}`, 10, 70);
    doc.save(`${character.name}.pdf`);
  }
}

