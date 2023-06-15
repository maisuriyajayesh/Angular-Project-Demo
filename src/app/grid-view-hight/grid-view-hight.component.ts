import { Component, AfterViewInit, ViewChildren, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-grid-view-hight',
  templateUrl: './grid-view-hight.component.html',
  styleUrls: ['./grid-view-hight.component.scss']
})
export class GridViewHightComponent  implements AfterViewInit {
  @ViewChildren('textDivs') textDivs!: ElementRef[];

  constructor(private renderer: Renderer2) {}
  ngAfterViewInit() {
    this.textDivs.forEach(div => {
      const height = div.nativeElement.offsetHeight;
      this.applyStyle(div, 'height', `${height}px`);
    });
  }

  private applyStyle(elementRef: ElementRef, styleProperty: string, value: string): void {
    this.renderer.setStyle(elementRef.nativeElement, styleProperty, value);
  }
  
}
