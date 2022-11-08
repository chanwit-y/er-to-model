// import { useState } from "react";
// import { invoke } from "@tauri-apps/api/tauri";
import dynamic, { noSSR } from "next/dynamic";

function App() {
  const TestMap = dynamic(
    () => import("../components/Test").then((module) => module.Test),
    { ssr: false }
  );
  // const [greetMsg, setGreetMsg] = useState("");
  // const [name, setName] = useState("");

  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  //   setGreetMsg(await invoke("greet", { name }));
  // }

  // const TestMap = dynamic<Props>(
  //   () => import("../components/Test") as any, // replace '@components/map' with your component's location
  //   { ssr: false } // This line is important. It's what prevents server-side render
  // );

  return (
    <div className="container">
      <p>Test</p>
      <TestMap />
      {/* <div>
        <input
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
        />
        <button type="button" onClick={() => greet()}>
          Greet
        </button>
      </div>

      <p>{greetMsg}</p> */}
    </div>
  );
}

export default App;
