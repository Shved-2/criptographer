import { useState } from 'react';
import env from '../env.json';

function Create() {
  const [url, setUrl] = useState('');
  const [lineClass, setLineClass] = useState('hide');
  const [formClass, setFormClass] = useState('');

  //функция отправки сообщения
  const sendData = (obj) => {
    setFormClass('hide');
    setLineClass('');
    fetch(env.urlBackend, {
      method: 'POST',
      headers: {
        // "Content-Type": "application/json",
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(obj), // body data type must match "Content-Type" header
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response.result) {
          setUrl(env.url + '/' + response.url);
        }
      });
  };
  //------------------------------------------
  //функеция  поучения данных и з формы
  const loadDateFromForm = (e) => {
    e.preventDefault();
    let note = e.target.elements.note.value;

    note = note.trim();
    if (note === '') {
      alert('Запоните форму');
      return false;
    }
    // console.log(note);
    sendData({ note: note });
  };
  return (
    <div>
      <h2>Create</h2>

      <form onSubmit={loadDateFromForm} className={formClass}>
        <label htmlFor="note">Создать сообщение</label>
        <textarea name="" id="note" placeholder={'введите сообщение'}></textarea>
        <button type="submit">Send</button>
      </form>

      <div className={lineClass}>
        <div>{url}</div>
        <div>
          <button
            onClick={function () {
              window.location.reload();
            }}>
            new Note
          </button>
        </div>
      </div>
    </div>
  );
}

export default Create;
