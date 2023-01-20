import React, { useState } from 'react';

function NameForm(props) {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    alert('입력한 이름: '+ value);
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
          이름:
          <input type="text" value={value} onChange={handleChange} />
      </label>
      <button type="submit">제출</button>
    </form>
  )
}

export default NameForm;