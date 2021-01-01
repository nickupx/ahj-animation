import {fromEvent} from 'rxjs'

export default class WidgetCollapsible {
  init() {
    const buttonCollapse = document.querySelector('.button-collapse')
    const buttonCopy = document.querySelector('.button-copy')
    const container = document.querySelector('.widget-content')
    const input = document.querySelector('.widget-input')

    fromEvent(buttonCollapse, 'click')
      .subscribe(function() {
        container.classList.toggle('expanded')
        buttonCollapse.innerText = buttonCollapse.innerText === 'Expand' ? 'Collapse' : 'Expand'
      })

    fromEvent(input, 'click')
      .subscribe((event) => event.target.select()
      )

    fromEvent(buttonCopy, 'click')
      .subscribe(() => {
        input.select()
        document.execCommand('copy')
      })
  }
}