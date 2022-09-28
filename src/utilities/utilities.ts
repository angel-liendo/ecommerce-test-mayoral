export const setNumberToEuropeanFormat = (numberPrice: number): string => {
  const newNumber = numberPrice;
  return Number(newNumber).toLocaleString("es-ES", {
    minimumFractionDigits: 2,
  });
};

export const currency = "€";
export const percentageNumber = "(-20%)";
