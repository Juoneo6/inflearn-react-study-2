import React from 'react';

const students = [
  {
    id: 1,
    name: "Inje",
  },
  {
    id: 2,
    name: "Steve",
  },
  {
    id: 3,
    name: "Juwon",
  },
  {
    id: 4,
    name: "Bill",
  },
];

function Book(props) {
  return (
    <ui>
      {students.map((student) => {
        // key를 포맷팅 된 문자열로 변경함 
        return <li key={`student-id-${student.id}`}>{student.name}</li>
      })}
    </ui>
  )
}

export default Book;