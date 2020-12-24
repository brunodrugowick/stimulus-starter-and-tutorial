import { Controller } from "stimulus"

export default class extends Controller {

    // This guarantees I have a nameTarget property that returns the first 
    // matching target element (the one with the data-hello-target on the HTML).
    static targets = [ "name" ];

    connect() {
        console.log("Oh, I'm connected to ", this.element);
    }

    greet() {
        console.log("Hello", this.name);
    }

    get name() {
        return this.nameTarget.value
    }
}