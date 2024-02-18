function FunctionParenthesisAndParameters() {

    const square  = (a: number) => a * a;
    const plusOne = (a: number) => a + 1;
    const twoSquared = square(2);
    const threePlusOne = plusOne(3);
  
        return (
       <>
        <h3>Parenthesis and Parameters</h3>
        twoSqaured = {twoSquared}<br />
        square(2) = {square(2)}<br />
        threePlusOne(2) = {threePlusOne}<br />
        plusOne(3) = {plusOne(3)}<br />
       </>
      )
    
  }
  export default FunctionParenthesisAndParameters