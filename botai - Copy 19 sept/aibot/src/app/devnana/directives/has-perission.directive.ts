import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHasPerission]',
})
export class HasPerissionDirective {
  @Input() appHasPerission!: string;
  constructor(
    private templateref: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit(): void {
    const haspermission = this.appHasPerission;
    if (haspermission === 'admin') {
      this.viewContainer.createEmbeddedView(this.templateref);
    } else {
      this.viewContainer.clear();
    }
  }
}
