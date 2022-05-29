import { AfterViewInit, Component } from '@angular/core';
import Veriff from '@veriff/js-sdk'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit {
  title = 'test-veriff';

  ngAfterViewInit(): void {  
    const veriff = Veriff({
      apiKey: 'API_KEY',
      parentId: 'veriff-root',
      onSession: function(err, response) {
        // received the response, verification can be started now
      }
    });

    veriff.mount();
  }
}
