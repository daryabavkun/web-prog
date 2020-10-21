import {Injectable} from '@angular/core';
import { wayWS } from './config';

@Injectable()
export class WebSocketService {

private _message: string;

private _webSocketContext = new WebSocket(wayWS);

constructor() {
}

get webSocketContext(): WebSocket {
  return this._webSocketContext;
}

set webSocketContext(value: WebSocket) {
  this._webSocketContext = value;
}

get message(): string {
  return this._message;
}

set message(value: string) {
  this._message = value;
}

}