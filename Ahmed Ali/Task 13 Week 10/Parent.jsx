import Child from "./Child"

function Parent ()
{
   const count = 1;
   const num = 4;
   const Secnum = 2;
    return(
        <div>
            <h1>Parent</h1>
        <Child Value={ count }></Child>
        <Child secValue={ num }></Child>
        <Child thirdValue={ Secnum }></Child>
        </div>
    )
}
export default Parent ;