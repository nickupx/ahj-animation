import {fromEvent} from 'rxjs'

export default class WidgetCollapsible {
  init() {
    const buttonCollapse = document.querySelector('.button-collapse')
    const buttonCopy = document.querySelector('.button-copy')
    const container = document.querySelector('.widget-content')
    const input = document.querySelector('.widget-input')

    fromEvent(buttonCollapse, 'click')
      .subscribe(() => {
        container.classList.toggle('expanded')
        if (buttonCollapse.innerText === 'Expand') {
          buttonCollapse.innerText = 'Collapse'
          return
        }
        if (buttonCollapse.innerText === 'Collapse') {
          buttonCollapse.innerText = 'Expand'
        }
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