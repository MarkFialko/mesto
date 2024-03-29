export default class Section {

    constructor({items, renderer}, containerSelector) {
        this._items = items
        this._renderer = renderer

        this._container = document.querySelector(containerSelector)
    }

    setItem(item) {
        this._container.prepend(item)
    }

    clear() {
        this._container.innerHTML = ''
    }

    render() {
        this.clear()

        this._items.forEach(item => {
            this._renderer(item)
        })
    }
}