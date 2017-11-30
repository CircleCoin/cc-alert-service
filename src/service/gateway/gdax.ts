const Gdax = require("gdax");

class GdaxExchange {
    websocket: any;

    constructor() {
        this.websocket = new Gdax.WebsocketClient(["BTC-USD", "ETH-USD"]);
    }

    startListening(): void {
        this.websocket.on("message", (data: any) => {
            console.log(data);
         })
         .on("error", (err: any) => { /* handle error */ })
         .on("close", () => { /* ... */ });
    }
}

export function createGdax(): GdaxExchange {
    return new GdaxExchange();
}