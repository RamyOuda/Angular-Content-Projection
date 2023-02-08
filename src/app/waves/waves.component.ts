import {
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-waves',
  templateUrl: './waves.component.html',
  styleUrls: ['./waves.component.css'],
})
export class WavesComponent implements AfterViewInit {
  titleHidden = false;

  @ViewChild('headerRef') headerElement!: ElementRef;
  @ContentChild('colorBtnRef') colorBtnElement: ElementRef | undefined;
  @ContentChild('logoRef') logoElement: ElementRef | undefined;

  ngAfterViewInit() {
    if (this.colorBtnElement) {
      this.colorBtnElement.nativeElement.addEventListener('click', () => {
        const randomize = () => Math.floor(Math.random() * 256);

        this.headerElement.nativeElement.style.background = `linear-gradient(60deg, rgba(${randomize()}, ${randomize()}, ${randomize()}, 1) 0%, rgba(${randomize()}, ${randomize()}, ${randomize()}, 1) 100%)`;
      });
    }
  }

  toggleTitle() {
    this.titleHidden = !this.titleHidden;
  }
}
