import { Controller } from "stimulus"

export default class extends Controller {
    static targets = [ "slide" ]
    static values = {
        index: Number
    }

    indexValueChanged() {
        this.showCurrentSlide()
    }

    next() {
        this.indexValue >= this.slideTargets.length - 1 ? this.slideTargets.length - 1 : this.indexValue++
    }

    previous() {
        this.indexValue <= 0 ? 0 : this.indexValue--
    }

    showCurrentSlide() {
        this.slideTargets.forEach((element, index) => {
        element.hidden = index != this.indexValue
        })
        console.log("Showing slide", this.indexValue)
    }
}