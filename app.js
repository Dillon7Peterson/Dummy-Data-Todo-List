   // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

   let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
  }]
  
  let orderedListElement = document.querySelector('ol')


  const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
  }

  const logTodos = () => {
    console.log(arrayOfTodos)
  }

  const populateTodos = () => {
    console.log ('arrayOfTodos', arrayOfTodos)
    console.log ('orderedListElement', orderedListElement)
    var listItem = document.createElement("li")
     arrayOfTodos.forEach(item => {
      console.log ('item', item)
      listItem.innerText = item.title
      orderedListElement.appendChild(listItem)
     })
  }
