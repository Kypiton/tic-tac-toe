import React from 'react';

function App() {
  const [feedback, setFeedback] = React.useState('');
  const [student, setStudent] = React.useState('');

  function handleChangeFeedback(e) {
    setFeedback(e.target.value);
  }

  function handleChangeStudent(e) {
    setStudent(e.target.value);
  }

  return (
    <>
      <section id='feedback'>
        <h2>Please share some feedback</h2>
        <p>
          <label>Your Feedback</label>
          <textarea value={feedback} onChange={handleChangeFeedback} />
        </p>
        <p>
          <label>Your Name</label>
          <input type='text' value={student} onChange={handleChangeStudent} />
        </p>
      </section>
      <section id='draft'>
        <h2>Your feedback</h2>

        <Review feedback={feedback} student={student} />

        <p>
          <button>Save</button>
        </p>
      </section>
    </>
  );
}

export default App;

function Review({ feedback, student }) {
  return (
    <figure>
      <blockquote>
        <p>{feedback}</p>
      </blockquote>
      <figcaption>{student}</figcaption>
    </figure>
  );
}
