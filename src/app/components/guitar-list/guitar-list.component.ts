import { Component, input, OnInit } from '@angular/core';
import { Guitar } from '../../models/Guitar';
import { CommonModule } from '@angular/common';
import { GuitarListItemComponent } from '../guitar-list-item/guitar-list-item.component';
import { GuitarService } from '../../services/guitar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guitar-list',
  standalone: true,
  imports: [CommonModule, GuitarListItemComponent],
  templateUrl: './guitar-list.component.html',
  styleUrl: './guitar-list.component.css',
})
export class GuitarListComponent implements OnInit {
  private _guitarService: GuitarService;
  private _router: Router;

  constructor(guitarService: GuitarService, router: Router) {
    this._guitarService = guitarService;
    this._router = router;
  }

  public guitars: Guitar[] = [];

  public ngOnInit() {
    this.getSampleGuitar();
  }

  public handleSelected(guitarIdFromChild: string) {
    this._router.navigateByUrl('/details/' + guitarIdFromChild);
    

    
  }

  public getSampleGuitar(): void {
    this._guitarService.getGuitars().subscribe({
      next: (guitars) => {
        this.guitars = guitars;
      },
    });
  }
}
