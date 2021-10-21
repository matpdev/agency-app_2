import * as React from "react";

import { useDencrypt } from "use-dencrypt-effect";

import './TextScramble.css'

const values = ["Eae", "Me Chamo Matheus", "Desenvolvedor Front-End", "Consigo Resolver seus Bugs"];

const Example = () => {
  const { result, dencrypt } = useDencrypt();

  React.useEffect(() => {
    let i = 0;

    const action = setInterval(() => {
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 4000);

    return () => clearInterval(action);
  }, []);

  return <div className="Result">{result}</div>;
};

export default Example;