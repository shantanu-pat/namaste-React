

const parent = React.createElement("div",
    {id: "parent"},
    React.createElement("h1",{id:parent},"I Am An H1 Tag")
);


const heading = React.createElement("h1",{id:"heading"},"HELLO SHANTANU FROM REACT");

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);