import { Component } from '@angular/core';

@Component({
  selector: 'cd-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DeprecatedDashboardComponent {
  hasGrafana = false; // TODO: Temporary var, remove when grafana is implemented
}
