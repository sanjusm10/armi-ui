import { Component } from '@angular/core';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-library',
  template: `<h1>Library</h1>`,
})
export class LibraryComponent {
  constructor(private breadcrumbService: BreadcrumbService) {
    this.breadcrumbService.set('@library', 'My Library');
  }
}
