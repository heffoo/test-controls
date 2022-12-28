import React, { useState } from "react";
import Button from "../Button";
import Input from "../Input";

const ControlHandler = () => {
  const [value, setValue] = useState<string>("");

  return (
    <div>
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      <Button text="Сбросить" onClick={() => setValue("")} />
      <Button text="Заполнить" onClick={() => setValue("hello world")} />
    </div>
  );
};

export default ControlHandler;
