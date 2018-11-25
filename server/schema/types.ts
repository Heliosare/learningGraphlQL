export enum MessageType {
  Location = "LOCATION",
  Text = "TEXT",
  Picture = "PICTURE"
}

// ====================================================
// Types
// ====================================================

export interface Query {
  users?: User[] | null;

  chats?: Chat[] | null;

  chat?: Chat | null;
}

export interface User {
  id: string;

  name?: string | null;

  picture?: string | null;

  phone?: string | null;
}

export interface Chat {
  /** May be a chat or a group */
  id: string;
  /** Computed for chats */
  name?: string | null;
  /** Computed for chats */
  picture?: string | null;
  /** All members, current and past ones. */
  allTimeMembers: User[];
  /** Whoever gets the chat listed. For groups includes past members who still didn't delete the group. */
  listingMembers: User[];
  /** Actual members of the group (they are not the only ones who get the group listed). Null for chats. */
  actualGroupMembers: User[];
  /** Null for chats */
  admins?: User[] | null;
  /** If null the group is read-only. Null for chats. */
  owner?: User | null;

  messages: (Message | null)[];
  /** Computed property */
  unreadMessages: number;
  /** Computed property */
  isGroup: boolean;
}

export interface Message {
  id: string;

  sender: User;

  chat: Chat;

  content: string;

  createdAt: string;
  /** FIXME: should return MessageType */
  type: number;
  /** Whoever received the message */
  recipients: Recipient[];
  /** Whoever still holds a copy of the message. Cannot be null because the message gets deleted otherwise */
  holders: User[];
  /** Computed property */
  ownership: boolean;
}

export interface Recipient {
  user: User;

  message: Message;

  chat: Chat;

  receivedAt?: string | null;

  readAt?: string | null;
}

// ====================================================
// Arguments
// ====================================================

export interface ChatQueryArgs {
  chatId: string;
}
export interface MessagesChatArgs {
  amount?: number | null;
}
