import {map} from 'rxjs/operators';
import {Apollo} from 'apollo-angular';
import {Injectable} from '@angular/core';

import { getChatsQuery } from 'src/graphql/getChats.query';

@Injectable()
export class ChatsService {
  messagesAmount = 3;
  constructor(private apollo: Apollo) {}
  getChats() {
    const query = this.apollo.watchQuery<any>({
      query: getChatsQuery,
      variables: {
        amount: this.messagesAmount,
      },
    });
    const chats$ = query.valueChanges.pipe(
      map((result) => result.data.chats)
    );
    return {query, chats$};
  }
}
