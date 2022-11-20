import React from "react";
import { createRoot } from "react-dom/client";
import Page from "./components";

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(<Page />);
