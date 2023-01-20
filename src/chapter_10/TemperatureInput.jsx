const scaleNames = {
  c: "섭씨",
  f: "화씨",
};

function TemperatureInput(props) {
  const handleChange = (e) => {
    props.onTemperaturChange(e.target.value);
  };

  return (
    <fieldset>
      <legend>
        온도를 입력 해 주세요.(단위:{scaleNames[props.scale]});
      </legend>
      <input value={props.temperature} onChange={handleChange} />
    </fieldset>
  );
}

export default TemperatureInput;