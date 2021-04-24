import { useState, useEffect } from "react";
import axios from "./Axios";

export default function Form() {
    // console.log("editprofile: ", props);
    let [name, setName] = useState("");

    let [topic, setTopic] = useState([]);
    let [versionNum, setVersionNum] = useState("");
    let [email, setEmail] = useState(false);
    let [phone, setPhone] = useState(false);

    // const [id, setId] = useState("");
    let [description, setDescription] = useState("");
    let [error, setError] = useState(false);

    const validVersion = /^\S+@\S+\.\S+$/;

    const selectTopic = [
        {
            name: "---",
            key: 0,
            value: "",
        },
        {
            name: "General Request",
            key: 1,
            value: "generalRequest",
        },
        {
            name: "Software",
            key: 2,
            value: "software",
        },
        {
            name: "Callback",
            key: 3,
            value: "callback",
        },
    ];

    const submitIssue = (e) => {
        e.preventDefault();

        axios
            .post("/report-issue", { name, topic, email, description })
            .then((res) => {
                // console.log("response: ", res);
                location.replace("/submitted-issue");

                setError(false);
            })
            .catch((err) => {
                console.log("error in axios api/user: ", err);
                location.replace("/submitted-issue");
                setError(true);
            });
    };

    return (
        <>
            <div className="report-box">
                <h3>Report an issue</h3>
                <input
                    className="edit-field"
                    onChange={(e) => setName(e.target.value)}
                    name="name"
                    type="text"
                    placeholder="Name"
                    autoComplete="off"
                ></input>
                <input
                    className="edit-field"
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    type="email"
                    placeholder="Email"
                    autoComplete="off"
                ></input>

                <div className=" box-choose-topic">
                    <label htmlFor="topic">Select a topic: </label>
                    <select
                        id="music"
                        name="music"
                        className="select-music"
                        onChange={(e) => setTopic(e.target.value)}
                    >
                        {selectTopic.map((topic) => (
                            <option
                                key={topic.key}
                                value={topic.value}
                                type="text"
                            >
                                {topic.name}
                            </option>
                        ))}
                    </select>
                </div>
                {topic == "software" && (
                    <input
                        className="edit-field"
                        onChange={(e) => setVersionNum(e.target.value)}
                        name="version"
                        type="text"
                        placeholder="Version 1.01.00"
                        autoComplete="off"
                    ></input>
                )}
                {topic == "callback" && (
                    <input
                        className="edit-field"
                        onChange={(e) => setPhone(e.target.value)}
                        name="phone"
                        type="tel"
                        placeholder="Insert your phone number"
                        autoComplete="off"
                    ></input>
                )}

                <textarea
                    onChange={(e) => setDescription(e.target.value)}
                    name="description"
                    type="description"
                    placeholder="description"
                    autoComplete="off"
                ></textarea>

                <button className="btn" onClick={(e) => submitIssue(e)}>
                    Submit
                </button>
            </div>
        </>
    );
}
