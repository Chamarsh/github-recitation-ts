// Endpoint for querying the fibonacci numbers

import { fibonacci } from './fib'

interface Req {
  params: string
}

interface Res {
  send: (arg0: string) => void;
}

export default (req: Req, res: Res) => {
  const num: string = req.params;

  const fibN: number = fibonacci(parseInt(num));
  let result = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};
