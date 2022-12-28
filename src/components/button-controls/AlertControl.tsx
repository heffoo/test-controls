import React, { useState } from "react";
import Button from "../Button";
import Input from "../Input";

const AlertControl = () => {
  const [value, setValue] = useState<string>("");

  const numberCheck = () => {
    if (Number(value)) {
      alert(value);
    } else if (value === "") {
      alert("пустые входные данные");
    } else {
      alert("это не число");
    }
  };

  return (
    <div>
      <Button text="Вывести" onClick={() => alert(value)} />
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      <Button text="Проверка" onClick={numberCheck} />
    </div>
  );
};

export default AlertControl;
