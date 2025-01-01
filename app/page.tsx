import Image from "next/image";
import UseEffect from "./EffectHook/UseEffect";
import UseEffect2 from "./EffectHook/useEffect2";
import ContextHook from "./ContextHook/ContextHook";
import RefHook from "./RefHook/RefHook";
import RefHook2 from "./RefHook/RefHook2";
import ReducerHook from "./ReducerHook/ReducerHook";
import LayoutEffect from "./LayoutEffectHook/LayoutEffect";
import MemoHook from "./MemoHook/MemoHook";
import CallbackHook from "./CallbackHook/CallbackHook";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* <UseEffect/> */}
      {/* <UseEffect2/> */}
      {/* <ContextHook/> */}
      {/* <RefHook/> */}
      {/* <RefHook2/> */}
      {/* <ReducerHook/> */}
      {/* <LayoutEffect/> */}
      {/* <MemoHook/> */}
      {/* <CallbackHook/> */}
    </div>
  );
}
