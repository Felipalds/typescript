class Client {
    readonly code: number;

    constructor(){
        this.code = 3;
        this.code = 4;
        console.log(this.code)

    }


}

const newClient = new Client()
console.log(newClient.code)