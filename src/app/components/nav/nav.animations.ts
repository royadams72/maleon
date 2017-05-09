import { trigger, state, style, transition, animate } from '@angular/animations';
export const ActiveTrigger = trigger('activeState', [
  state('default', style({
    color: '#ffffff'
   })),
  state('active', style({
    color: '#6CA6C1'
  })),
  state('inService', style({
      color: '#000000'
    })),
  transition('default <=> active', [

    animate('500ms ease-out')
  ]),
  transition('inService <=> default', [

    animate('500ms ease-out')
  ])
]);
export const NavServices = trigger('servicesState', [
  state('default', style({
    'background-color': 'transparent'
   })),
  state('active', style({
    'background-color': '#080253'
  })),

  transition('default <=> active', [

    animate('500ms ease-out')
  ])
]);
export const NavUl = trigger('ulState', [
  state('inActive', style({
    'display':'none',
    'opacity': 0,
    'transform': 'translateY(-25px)'
   })),
  state('active', style({
    'display':'block',
    'opacity': 1,
    'transform': 'translateY(0)',
     offset: 1.0
  })),

  transition('inActive <=> active', [
    style({'transform': 'translateY(25px)'}),
    animate('500ms ease-out')
  ])
  ,

  transition('active => inActive', [

    animate('200ms ease-out'),
    style({'display':'none', offset: 1.0})
  ])
]);
