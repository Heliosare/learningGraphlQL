import {Component, OnInit} from '@angular/core';
import {ChatsService} from '../../../services/chats.service';
import {Observable} from 'rxjs';

@Component({
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss'],
})

export class ChatsComponent implements OnInit {
  chats$: Observable<any[]>;
  constructor(private chatsService: ChatsService) {
  }
  ngOnInit() {
    this.chats$ = this.chatsService.getChats().chats$;
  }
}
