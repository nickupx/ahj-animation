import {fromEvent} from 'rxjs'

export default class WidgetFeedback {
  init() {
    const button = document.createElement('div')
    button.className = 'button-feedback'
    document.body.appendChild(button)

    fromEvent(button, 'mouseover')
    .subscribe(() => button.classList.add('scaled'))

    fromEvent(button, 'mouseout')
    .subscribe(() => button.classList.remove('scaled'))

    const form = document.createElement('div')
    form.className = 'form-feedback'
    form.classList.add('hidden')
    form.innerHTML = `
        <header class="header-feedback">
          <h3>Напишите нам</h3>
          <div class="closer">&times;</div>
        </header>
        <main>
          <textarea class="input-feedback" placeholder="Текст сообщения"></textarea>
          <button class="submit-feedback">Отправить</button>
        </main>
      `
    document.body.appendChild(form)

    fromEvent(button, 'click')
    .subscribe(() => this.show())
  }

  show() {
    const button = document.querySelector('.button-feedback')
    button.classList.remove('visible')
    button.classList.add('hidden')

    const form = document.querySelector('.form-feedback')
    form.classList.remove('hidden')
    form.classList.add('visible')

    const closer = document.querySelector('.closer')
    fromEvent(closer, 'click')
    .subscribe(() => this.hide())
  }

  hide() {
    const form = document.querySelector('.form-feedback')
    form.classList.remove('visible')
    form.classList.add('hidden')
    const button = document.querySelector('.button-feedback')
    button.classList.remove('hidden')
  }
}