import { Controller } from "stimulus"

export default class extends Controller {
    static values = { 
        url: String,
        refreshInterval: Number
     }

    connect() {
        this.load();

        if (this.hasRefreshIntervalValue) {
            this.startRefreshing()
        }
    }

    startRefreshing() {
        this.refreshTimer = setInterval(() => {
            this.load()
        }, this.refreshIntervalValue)
    }

    stopRefreshing() {
        if (this.refreshTimer) {
            cleanInterval(this.refreshTimer)
        }
    }

    load() {
        fetch(this.urlValue)
            .then(response => response.text())
            .then(html => this.element.innerHTML = html)
    }

    disconnect() {
        this.stopRefreshing()
    }
}