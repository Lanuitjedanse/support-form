// import axios from "./Axios";
import Header from "./header";
import Form from "./form";
import Submitted from "./submitted";

import { BrowserRouter, Route } from "react-router-dom";
// import { useState, useEffect } from "react";

export default function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Header />

                <Route path="/" render={() => <Form />} />
                <Route path="/submitted-issue" render={() => <Submitted />} />
            </div>
        </BrowserRouter>
    );
}
