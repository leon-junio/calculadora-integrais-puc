const rectArea = (b, a) => {
  return b * a;
};

// Formula da conta matemática da soma de Riemann usando um laço de repetição e a soma de quadrados em um intervalo
// Interval = Intervalo no qual serão desenhados os quadrados
// N = número de quadrados que vão ser usados na conta
const riemann = (equation, interval, n) => {
  const eqParsed = math.parse(equation);
  const eq = (x) => eqParsed.evaluate({ x });

  //   if (interval[0] < 0) {
  //     let eq1 = riemann(equation, [interval[0], 0], n);
  //     let eq2 = riemann(equation, [0, interval[1]], n);
  //   }

  let distance = interval[1] - interval[0];

  let sum = 0;
  let width = 0;
  let x = 0;
  let height = 0;
  // Criação e uso dos quadrados para realizar a soma enquanto o laço de repetição de deslocamento é realizado
  for (let i = 0; i < n; i++) {
    width = distance / n;
    x = interval[0] + width * i;
    height = eq(x);
    sum += rectArea(width, height);
  }
  return sum;
};

export default riemann;