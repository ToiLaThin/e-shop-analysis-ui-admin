import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarCollapseService } from './core/services/sidebar-collapse.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'e-shop-analysis-ui-admin';
  sideBarCollapsed$: Observable<boolean> = this._sideBarCollapseService.collapsed$;

  constructor(private _sideBarCollapseService: SideBarCollapseService) {}
}
