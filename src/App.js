import Square from "./Components/Square";

//This is a sample component which are reusable

//export makes it available to other files
//default says its the main function in the file
export default function Board() {
  return (
    //This marker <> </> is to denote a JSX Fragment. It helps us write components that consist of more lines of JSX code
    //className is a JSX attribute
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
