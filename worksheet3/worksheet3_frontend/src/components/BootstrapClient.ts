// to tell next.js this file is to be run on the client side NOT server side. Because Next.js is normally render on the server side.
"use client"
//import userEffect from react, userEffect can only run on Client
import { useEffect } from "react";

function BootstrapClient() {
  //useEffect used to perform a side effect, such as loading the Bootstrap JavaScript bundle
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);//this empty dependency array means the effect runs only once after the initial render.
  return null;//return null since no need to render any UI elements
}
//set BootstrapClient as default export
export default BootstrapClient;
