class Api {
  constructor({baseUrl}) {
    this._baseUrl = baseUrl;
  }
  
  _getResponseData(res) {
    if (!res.ok) {
       return Promise.reject(`${res.status}`);
    }
    return res.json();
  } 

  getTasks() {

    return fetch(`${this._baseUrl}tasks.json`, {
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': 'key=1:901218266786:web:8390064646181538fbb1fb'
      }
    })
    .then(this._getResponseData)
  }

  addTask({task, date, dateAdding, owner, isDone}) {

    return fetch(`${this._baseUrl}tasks.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        task,
        dateAdding,
        date,
        owner,
        isDone
      })
    })
    .then(this._getResponseData)
  }

  deleteTask({id}) {

    return fetch(`${this._baseUrl}tasks/${id}.json`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(this._getResponseData)
  }

  // patchTask({id, task, date}) {
    patchTask({id, ...rest}) {

      console.log(rest)

    return fetch(`${this._baseUrl}tasks/${id}.json`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(rest)
    })
    .then(this._getResponseData)
  }
  
}
  
const baseUrl = 'https://todolist-4f9ee-default-rtdb.firebaseio.com/';
const api = new Api({
  baseUrl: baseUrl
})
  
export default api;
