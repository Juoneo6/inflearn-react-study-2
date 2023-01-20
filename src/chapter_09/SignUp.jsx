import React, { useState } from "react";

const styles = {
  between: {
    marginLeft: 8,
    borderRadius: 16,
  },
};  

function SignUp(props) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState('남자');

  const handleSubmit = (e) => {
    alert(`이름 ${name}, 성별: ${gender}`);
    e.preventDefault();
  }

  const handleChangeName = (e) => {
    setName(e.target.value);
  } 

  const handleChangeGender = (e) => {
    setGender(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        이름:
        <input type="text" value={name} onChange={handleChangeName} />
      </label>
      <br />
      <label> 
        성별:
        <select style={styles.between} value={gender} onChange={handleChangeGender}>
          <option value="남자">남자</option>
          <option value="여자">여자</option> 
        </select>
      </label>
      <button type="submit">제출</button>
    </form>
  )
}

export default SignUp;