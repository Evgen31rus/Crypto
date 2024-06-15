import Market from "./Market";
import Overview from "./Overview";
import Provide from "./Provide";
import Works from "./Works";

export default function Main() {
  return (
    <div className={`w-[100%] h-[2300px] flex flex-col items-center max-w-[1000px] mt-[100px]`}>
      <Overview />
      <Market />
      <Works/>
      <Provide/>
    </div>
  );
}
