import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Guitar } from '../../models/Guitar';

@Component({
  selector: 'app-guitar-list-item',
  standalone: true,
  imports: [],
  templateUrl: './guitar-list-item.component.html',
  styleUrl: './guitar-list-item.component.css',
})
export class GuitarListItemComponent {
  @Input()
  public guitar: Guitar | undefined;

  @Output() selectedEvent: EventEmitter<string> = new EventEmitter();

  selected(): void {
    this.selectedEvent.emit(this.guitar?.id);
  }
}
