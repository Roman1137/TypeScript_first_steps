class Message {
    messageText: string;

    constructor(text : string) {
        this.messageText = text;
    }

    showAlert() {
        alert(this.messageText)
    }
}

let test = new Message("Hello worddsdld!!!fwedfsdfsdfewfew");
test.showAlert();

