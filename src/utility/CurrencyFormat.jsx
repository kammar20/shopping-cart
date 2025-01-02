export const CurrencyFormat = (value) => {
  let formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',

    // These options can be used to round to whole numbers.
    trailingZeroDisplay: 'stripIfInteger', // This is probably what most people
    // want. It will only stop printing
    // the fraction when the input
    // amount is a round number (int)
    // already. If that's not what you
    // need, have a look at the options
    // below.
    minimumFractionDigits: 2, // This suffices for whole numbers, but will

    // print 2500.10 as $2,500.1
    //maximumFractionDigits: 0, // Causes 2500.99 to be printed as $2,501
  });
  return formatter.format(value);
};
