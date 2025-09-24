import { Component, input, OnInit } from '@angular/core';
import { Guitar } from '../../models/Guitar';
import { CommonModule } from '@angular/common';
import { GuitarListItemComponent } from '../guitar-list-item/guitar-list-item.component';
import { GuitarService } from '../../services/guitar.service';

@Component({
  selector: 'app-guitar-list',
  standalone: true,
  imports: [CommonModule, GuitarListItemComponent],
  templateUrl: './guitar-list.component.html',
  styleUrl: './guitar-list.component.css',
})
export class GuitarListComponent implements OnInit {
  private _guitarService: GuitarService;

  constructor(guitarService: GuitarService) {
    this._guitarService = guitarService;
  }

  public guitars: Guitar[] = [];

  public ngOnInit() {
    this.getSampleGuitar();
  }

  public getSampleGuitar(): void {
    this._guitarService.getGuitars().subscribe({
      next: (guitars) => {
        this.guitars = guitars;
      },
    });
  }
}
