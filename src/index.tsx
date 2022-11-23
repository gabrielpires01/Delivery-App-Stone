import React from "react";
import { createRoot } from "react-dom/client";
import Page from "./components";

import "./index.module.css";

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(<Page />);
