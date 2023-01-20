import React, { useState } from "react";

function Select(props) {
  const [value, setValue] = useState('grape');

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    alert('선택한 과일 ' + value);
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        과일을 선택하세요: 
        <select value={value} onChange={handleChange}>
          <option value="apple">사과</option>
          <option value="banana">바나나</option>
          <option value="apple">포도</option>
          <option value="watermelon">수박</option>
        </select>
      </label>
      <button type="submit">제출</button>
    </form>
  )
}

export default Select; 