const heading =React.createElement("h1",{id:"heading"},
[React.createElement("h1",{id:"child"},"hello i am vikash")]);
const root=ReactDOM.createRoot(document.getElementById("root"));

// rensopile of render method to take this object and put it up and convert into heading tag and put it into DOM
// convert into html and puts it to DOM
root.render(heading);

