import React from "react";
import { Admin } from "react-admin";
import attrs from "./providers/attrs";
import data from "./providers/data";

const title = attrs.title;
const dataProvider = data;

const App = () => <Admin title={title} dataProvider={dataProvider} />;

export default App;
