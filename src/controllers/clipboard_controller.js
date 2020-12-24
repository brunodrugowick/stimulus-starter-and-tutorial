import { Controller } from "stimulus"

export default class extends Controller {

    static targets = [ "pin" ]

    connect() {
        if (document.queryCommandSupported("copy")) {
            this.element.classList.add("clipboard--supported")
        }
    }

    copy(event) {
        event.preventDefault()
        console.log("A method to copy stuff to the clipboard. JS needed...")
        console.log(this.pin)

        // selects whatever is on the element
        this.pinTarget.select()
        // copies to the clipboard
        document.execCommand("copy")
    }

    get pin() {
        return this.pinTarget.value;
    }
}