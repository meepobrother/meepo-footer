import {
  Component, OnInit, ChangeDetectionStrategy,
  ViewChild, ElementRef, ChangeDetectorRef
} from '@angular/core';
import { EventService } from 'meepo-event';
import { FOOTER_HIDDEN, FOOTER_SHOWN } from '../../src/app/app';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(
    public event: EventService
  ) {
    let now = new Date();

    let version = new Date(now.getFullYear(), now.getMonth() + 1, now.getDate()).getTime();
    this.event.checkVersion(version);
  }

  showFooter() {
    this.event.publish(FOOTER_SHOWN, '');
  }
  hideFooter() {
    this.event.publish(FOOTER_HIDDEN, '');
  }
}
