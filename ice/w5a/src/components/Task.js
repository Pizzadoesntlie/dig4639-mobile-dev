class Task {
  constructor (props) {
    this.props = props
    this.element = document.createElement('div')
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.addEventListener('change', this.inputChanged)
    this.element.appendChild(checkbox)
    const taskText = document.createElement('span')
    taskText.innerHTML = props.content
    this.element.appendChild(taskText)
  }

  render () {
    return this.element
  }
}

export default Task
