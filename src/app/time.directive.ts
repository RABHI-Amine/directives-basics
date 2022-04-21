import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTime]'
})
export class TimeDirective {


  constructor(
    private viewConrainer:ViewContainerRef, //a reference to the container in wich case id the ul 
    private tempateRef: TemplateRef<any>  //the html that is placed inside the viewContainer
  ) { }

  @Input('appTime') set render(times: number){
    // this.viewConrainer.clear()
    for(let i=0; i<times;i++){
      this.viewConrainer.createEmbeddedView(this.tempateRef,{
        index: i  //aliasing inside the element => this will expose a variable ,
        ,name : 'amine'
       })
    }
  }

}
