import { Suspense } from "react"
import Loading from "./components/Loading"
import CatFact from "./components/CatFact"

function App() {


  return (
    <div style={{
      backgroundColor : "azure",
      height: "100vh",
      width: "100%",
    }}>
      {/* Happy Coding start here :) */}

        <CatFact />

    </div>
  )

}




export default App
