import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
  animations: [
    trigger('slideAnimation', [
      state('show', style({
        opacity: '1',
      })),
      state('hide', style({
        opacity: '0',
      })),
      transition('hide => show', [
        animate('0.5s ease')
      ]),
      transition('show => hide', [
        animate('0.5s ease')
      ])
    ])
  ]
})
export class ErrorComponent {
  @Input() isError: boolean;
  @Input() errorMessage: string;
}
