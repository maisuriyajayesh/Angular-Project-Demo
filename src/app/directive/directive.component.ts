import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent implements AfterViewInit {
  
  // postArray: Array<string> = ['post 1', 'post 2', 'post 3', 'post 4', 'post 5'];
  
  // objArray : Array<any> = [
  //   {id:1, postTitle: 'Post 1'},
  //   {id:2, postTitle: 'Post 2'},
  //   {id:3, postTitle: 'Post 3'},
  //   {id:4, postTitle: 'Post 4'},
  //   {id:5, postTitle: 'Post 5'}
  // ]
  // stepForm: string = "Somthing Else";
  // constructor(){
  //   for (let i = 0; i < this.postArray.length; i++){
  //     console.log(this.postArray[i])
  //   }
  // }
  // addNew(){
  //   this.objArray.push({id:6, postTitle: 'Post 6'})
  // }
  // onDelete(post: any){
  //   let index = this.objArray.indexOf(post);
  //   this.objArray.splice(index, 1);
  // }

  
  // onClick(status: any){
  //   console.log(this.stepForm);
  //     this.stepForm = status;
  // }
  @ViewChild('outerDiv') outerDivRef!: ElementRef;
  @ViewChild('bottomDiv') bottomDivRef!: ElementRef;

  outerDivHeight!: number;
  bottomDivHeight!: number;

  ngAfterViewInit() {
    // Initialize heights after the view has been initialized
    this.outerDivHeight = this.outerDivRef.nativeElement.offsetHeight;
    this.bottomDivHeight = this.bottomDivRef.nativeElement.offsetHeight;
  }

  onButtonClick(action: string) {
    const maxOuterHeight = 192;
    const minBottomHeight = 136;
    const maxBottomHeight = 555;
  
    if (action === 'plus') {
      if (this.outerDivHeight < maxOuterHeight) {
        this.outerDivHeight += 48; // Increase the height of #outerDiv
        this.bottomDivHeight -= 48; // Decrease the height of #bottomDiv
        if (this.bottomDivHeight < minBottomHeight) {
          this.bottomDivHeight = minBottomHeight;
        }
      }
    } else if (action === 'minus') {
      if (this.outerDivHeight > 96) {
        this.outerDivHeight -= 48; // Decrease the height of #outerDiv
        this.bottomDivHeight += 48; // Increase the height of #bottomDiv
        if (this.bottomDivHeight > maxBottomHeight) {
          this.bottomDivHeight = maxBottomHeight;
        }
      }
    }
  }

}
