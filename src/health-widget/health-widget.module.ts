import {CoreModule, HOOK_COMPONENTS} from "@c8y/ngx-components";
import {WidgetConfigHealth} from "./health-widget-config.component";
import {WidgetHealth} from "./health-widget.component";
import {NgModule} from "@angular/core";

// This will import css from the styles folder (Note: will be applied globally, not scoped to the module/components)
import '~styles/index.css';

// You can also import css from a module
// import 'some-module/styles.css'

@NgModule({
    imports: [
        CoreModule
    ],
    declarations: [WidgetHealth, WidgetConfigHealth],
    entryComponents: [WidgetHealth, WidgetConfigHealth],
    providers: [
        // Connect the widget to Cumulocity via the HOOK_COMPONENT injection token
        {
            provide: HOOK_COMPONENTS,
            multi: true,
            useValue: {
                id: 'device.health.widget',
                label: 'Health widget',
                description: 'Widget for device health microservice',
                component: WidgetHealth,
                configComponent: WidgetConfigHealth,
                previewImage: require("~styles/previewImage.png"),
                // data: {
                //     settings: {
                //         noDeviceTarget: true
                //     }
                // }
            }
        }
    ],
})
export class HealthWidgetModule {}
