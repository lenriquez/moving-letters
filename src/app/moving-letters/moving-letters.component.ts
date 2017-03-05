import { Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-moving-letters',
  templateUrl: './moving-letters.component.html',
  styleUrls: ['./moving-letters.component.css']
})
export class MovingLettersComponent implements OnInit {

  @ViewChild('container')
  canvas: ElementRef;

  positionX: string = '100px';
  positionY: string = '100px';
  letters: Array<string>;
  letters2: Array<any> = [];

  mouseMove$: Observable<Event>;

  ngOnInit() {
    this.letters = 'This is Awesome'.split('');
    this.initMouseMoveObserver();
  }

  getOffset( el ) {
    var _x = 0;
    var _y = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
  }

  initMouseMoveObserver() {
    let div = this.canvas.nativeElement;
    Observable.fromEvent(div, 'mousemove')
      .map((e:MouseEvent) => {
        return {
          offsetX : e.clientX,
          offsetY : e.clientY + 'px'
        }
      })
      .flatMap((delta) => {
        let  index = -1;
        return Observable.from(this.letters)
          .map((letter) => {
            ++index;
            return {
              letter: letter,
              delta: delta,
              index: index
            };
          });
      })
      .flatMap((letterConf) => {
        return Observable.timer(letterConf.index * 50)
          .map(() => {
            return {
              text: letterConf.letter,
              top: letterConf.delta.offsetY,
              left: (letterConf.delta.offsetX + letterConf.index * 20 + 15) + 'px',
              index: letterConf.index
            };
          });
      })
      .subscribe((event)=> {
        this.letters2[event.index] = event;
      });
  }
}
