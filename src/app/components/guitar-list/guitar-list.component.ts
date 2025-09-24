import { Component, input } from '@angular/core';
import { Guitar } from '../../models/Guitar';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { GuitarListItemComponent } from "../guitar-list-item/guitar-list-item.component";

@Component({
  selector: 'app-guitar-list',
  standalone: true,
  imports: [CommonModule, GuitarListItemComponent],
  templateUrl: './guitar-list.component.html',
  styleUrl: './guitar-list.component.css',
})
export class GuitarListComponent {
  private _http: HttpClient | undefined;
  

  constructor(http: HttpClient) {
    this._http = http;
  }

  public guitars: Guitar[] = []

  public getSampleGuitar(): void {
    this._http!.get<Guitar[]>(
      'https://island-survival-kit-builder.onrender.com/guitars'
    ).subscribe({







      
      next: (guitars) => {
        this.guitars = guitars
      },
    });
  }
}
