import React, { useCallback, useMemo, useState } from 'react';
import * as _ from './Averagestyle'

// 숫자, 문자열, 객체 재사용 => useMemo
// 함수 재사용 => useCallback 

const getAverage = (numbers) => {
  console.log('평균값 계산중..');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
}

function Average(props) {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const onChange = useCallback(e => {
    setNumber(e.target.value);
  }, []); // 컴포넌트가 처음 렌더링 될 때만 단 한 번 함수 생성

  const onInsert = useCallback(
    e=> {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber('');
  },
  [number, list]
  ); // number or list 가 바뀌었을 때만 함수 생성

/* 
  useCallback(() => {
  console.log('hello world!');
}, []) */

/* useMemo(() => {
  const fn = () => {
    console.log('hello world!');
  };
  return fn;
}, []) */ // -> 위 아래 코드는 완벽히 똑같은 코드 

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <_.Wrapper value={number} onChange={onChange}></_.Wrapper>
      <_.Between onClick={onInsert}>등록</_.Between>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <strong>평균 값:</strong> {avg}
      </div>
    </div>
  )
}

export default Average;