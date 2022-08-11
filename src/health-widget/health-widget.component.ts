import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchClient } from '@c8y/client';
@Component({
    template: './demo-widget.component.html',
    styles: [ `.text { font-size: 3em ;}` ]
})
export class WidgetHealth {
    @Input() config;
    data: any;
    dataRecieved: Promise<boolean>;
    constructor(private fetchClient: FetchClient, public route: ActivatedRoute) {}
    async ngOnInit() {
      const response = await this.fetchClient.fetch('service/health-microservice/deviceHealth?'+new URLSearchParams({
        source: this.route.snapshot.parent.data.contextData.id
      }));
      this.data = await response.json();
      this.dataRecieved = Promise.resolve(true);
    }
}
