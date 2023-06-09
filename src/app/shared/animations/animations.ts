import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";

export const slideInAnimation =
    trigger('routeAnimations',[
        transition('* <=> *',[
            style({ position:'relative' }),
            query(':enter, :leave',[
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    overflowY: 'hidden',
                    opacity: 1
                })
            ]),
            query(':enter',[
                style({ 
                    //left: '-100%' 
                    opacity:0
                })
            ]),
            query(':leave',animateChild()),
            group([
                query(':leave', [
                    animate('750ms ease-out', style({ 
                        //left: '100%' 
                        opacity:0
                    }))
                  ]),
                  query(':enter', [
                    animate('750ms ease-out', style({ 
                        //left: '0%' 
                        opacity: 1
                    }))
                  ])
            ]),
            query(':enter', animateChild())
        ])
    ]);