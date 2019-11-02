import React, {useState} from 'react';

const NameForm = () => {
    const [name, setName] = useState("");
    function handleChange(event){
        const target = event.target;
        const id = target.id;
        const value = target.value;
        setName(value);

    }
    function handleSubmit(event){
        window.alert(name);

    }
    return(
        <div>
            <form onChange={handleChange}>
                <label>
                    Name:
                    <input type="text"></input>
                </label>
                <input type="submit" value ="Submit" onClick={() => handleSubmit()}></input>
            </form>
            
            {JSON.stringify(name)}

        </div>
    );
};

export default function FormDemo() {
    return(
        <div style={{marginTop:25}}>
            <NameForm />
        </div>
    );
}