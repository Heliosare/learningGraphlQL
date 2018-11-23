import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { MatMenuModule, MatIconModule, MatButtonModule, MatListModule } from '@angular/material';
import {TruncateModule} from 'ng2-truncate';

import { ChatsComponent } from './containers/chats/chats.component';
import { ChatsListComponent } from './components/chats-list/chats-list.component';
import { ChatItemComponent } from './components/chat-item/chat-item.component';
import { SharedModule } from '../shared/shared/shared.module';
import { ChatsService } from '../services/chats.service';

const routes: Routes = [
  {path: '', redirectTo: 'chats', pathMatch: 'full'},
  {path: 'chats', component: ChatsComponent},
];
@NgModule({
  declarations: [
    ChatsComponent,
    ChatsListComponent,
    ChatItemComponent,
  ],
  imports: [
    BrowserModule,
    // Material
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    // Animations
    BrowserAnimationsModule,
    // Routing
    RouterModule.forChild(routes),
    // Forms
    FormsModule,
    // Truncate Pipe
    TruncateModule,
    // Feature modules
    SharedModule,
  ],
  providers: [
    ChatsService,
  ],
})
export class ChatsListerModule {
}
