import { NgModule } from '@angular/core';
import {PanelModule} from 'primeng/panel';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
import {SidebarModule} from 'primeng/sidebar';
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';
import {ToastModule} from 'primeng/toast';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ListboxModule} from 'primeng/listbox';
import {InputNumberModule} from 'primeng/inputnumber';
import {CalendarModule} from 'primeng/calendar';
import {TabViewModule} from 'primeng/tabview';

@NgModule({
  declarations: [],
  exports: [
    
    ButtonModule,
    CardModule,
    MenubarModule,
    SidebarModule,
    TableModule,
    ToolbarModule,
    ToastModule,
    DialogModule,
    InputTextModule,
    DropdownModule,
    MessagesModule,
    MessageModule,
    ListboxModule,
    InputNumberModule,
    CalendarModule,
    PanelModule,
    TabViewModule

  ]
})
export class NgPrimeModule { }
