import { useParams } from 'react-router-dom';
import env from '../env.json';
import { useEffect, useState } from 'react';

function Note() {
  let { noteURL } = useParams();
  const [noteText, setNoteText] = useState('');
  const [lineClass, setLineClass] = useState('hide');
  const [formClass, setFormClass] = useState('hide');
  const [errorClass, setErrorClass] = useState('hide');
  useEffect(() => {
    if (noteURL !== undefined) {
      fetch(env.urlBackend, {
        method: 'POST',
        headers: {
          // "Content-Type": "application/json",
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ url: noteURL }), // body data type must match "Content-Type" header
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          if (response.result) {
            setNoteText(response.note);
            setFormClass('hide');
            setLineClass('');
            setErrorClass('hide');
          } else if (!response.result) {
            setFormClass('hide');
            setLineClass('hide');
            setErrorClass('');
          }
        });
    } else {
      setFormClass('');
      setLineClass('hide');
      setErrorClass('hide');
    }
  }, []);
  function getNote(e) {
    e.preventDefault();
    let url = e.target.elements.url.value;

    url = url.trim();
    if (url === '') {
      alert('Заполнитне поле');
      return false;
    }
    noteURL = url;
    window.location.href = env.url + '/' + url;
  }
  function serchNote() {
    window.location.href = env.url;
  }
  return (
    <div>
      <h2>Note</h2>
      <div className={formClass}>
        <form action="" onSubmit={getNote}>
          <label htmlFor="url">Введите хэш</label>
          <input type="text" id="url" className="formControl" />
          <button type="submit">искать Note</button>
        </form>
      </div>
      <div className={lineClass}>
        <p>{noteText}</p>
        <button onClick={serchNote}>Смотреть еще один Note</button>
      </div>
      <div className={errorClass}>
        <p>Произола ошибка. таой хэш не найден</p>
      </div>
    </div>
  );
}

export default Note;
