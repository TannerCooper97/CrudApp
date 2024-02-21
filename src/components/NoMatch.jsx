import { Link, useNavigate } from "react-router-dom";

export default function FirstComp() {
    const navigate = useNavigate();
    const returnHome = () => {
        navigate("/");
    };
    return (
        <div>
            <h1>Sorry, the URL you entered didn't match.</h1>
            <button onClick={returnHome}>Return Home</button>
        </div>
    );
}
