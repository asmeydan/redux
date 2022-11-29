import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import List from "./components/List";
import { arttir, azalt } from "./store/actions/counter";

function App() {
  const { counter} = useSelector((state)=> state);
  const dispatch = useDispatch();

  return (
    <div className=" min-h-screen flex flex-col items-center justify-evenly gap-5">
      <div>
        <p className=" text-9xl font-bold">
          {counter}
        </p>
      </div>
      <div className=" flex gap-20">
        <button className=" border-4 rounded-md border-teal-500 px-10 py-2 text-teal-500 font-bold hover:bg-teal-500 hover:text-white" onClick={()=> dispatch(azalt())}> 
          azalt
        </button>
        <button className=" border-4 rounded-md border-teal-500 px-10 py-2 text-teal-500 font-bold hover:bg-teal-500 hover:text-white" onClick={()=> dispatch(arttir())}>
          arttır
        </button>
      </div>
      <List />
    </div>
  );
}

export default App;
