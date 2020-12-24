import { Controller } from "stimulus"

export default class extends Controller {

    static targets = [ "name" ];

    connect() {
        console.log("Oh, I'm connected to ", this.element);
    }

    greet() {
        
        const element = this.nameTarget;
        const name = element.value;

        console.log("Cool, now I'm operating on some event from ", this.element);
        console.log("Hello", name);

    }
}