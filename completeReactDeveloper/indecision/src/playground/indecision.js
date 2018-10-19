import React from 'react'
import ReactDom from 'react-dom'

const app = {
  title: 'Indecision App',
  subTitle: 'List your decisions',
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault()
  const option = e.target.elements.option.value
  if (option) {
    app.options.push(option)
    e.target.elements.option.value = ''
  }
  render()
}

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length)
  const result = app.options[randomNum]
  console.error(result)
}

const removeOptions = () => {
  app.options = []
  render()
}

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {(app.subTitle && <p>{app.subTitle}</p>)}
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      {(app.options.length > 0 &&
        <div>
          <button onClick={removeOptions}>Remove Options</button>
          <ol>
            {app.options.map(option => {
              return <li key={option}>{option}</li>
            })}
          </ol>
        </div>
      )}
      <form onSubmit={onFormSubmit}>
        <input type='text' name='option' />
        <button>Add Option</button>
      </form>
    </div>
  )
  var appRoot = document.getElementById('app')
  ReactDom.render(template, appRoot)
}

render()
