import { trigger, state, animate, transition, style } from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
	
    transition(':enter', [
      style({opacity: 0}),
      animate('500ms', style({opacity: 1}))
    ]),
    transition(':leave', [
      style({opacity: 1}),
      animate('500ms', style({opacity: 0}))
    ])
])