class WebSocketService {
  constructor() {
    this.websocket = null;
    this.messageHandler = null;
    this.status = false;
  }

  connect() {
    this.websocket = new WebSocket('ws://10.231.6.34:5000/v1/user');
    this.websocket.onopen = this.onOpen;
    this.websocket.onmessage = this.onMessage;
    this.websocket.onerror = this.onError;
    this.websocket.onclose = this.close;
    this.status = true;
  }

  sendMessage(body) {
    if (this.websocket && this.websocket.readyState === WebSocket.OPEN) {
      const message = JSON.stringify(body);
      this.websocket.send(message)
    }
  }

  receiveMessage(callback) {
    this.messageHandler = callback;
  }

  close() {
    if (this.websocket) {
      this.websocket.close();
      this.status = false;
    }
  }

  onOpen = () => {
    console.log('Websocket Connection Opened')
  };

  onMessage = (event) => {
    const message = JSON.parse(event.data);
    if (this.messageHandler) {
      this.messageHandler(message);
    }
  };

  onError = (error) => {
    console.error('WebSocket error:', error.message);
    // Additional error handling logic
  };

  onClose = (event) => {
    console.log('WebSocket connection closed:', event.code, event.reason);
    // Additional logic on connection close
  };
}

const webSocketService = new WebSocketService();
export default webSocketService;
