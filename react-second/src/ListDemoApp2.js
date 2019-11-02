import React, {useState} from 'react';
import "./table.css";

function TableItem(props){
    return (<tr><td>{props.name}</td><td>{props.age}</td></tr>);
}

function MemberTable(props){
    const members = props.members;
    const tBody = members.map((member) =>
        <TableItem key={member.name + member.age} name={member.name} age={member.age}/>
    );

    return(
        <table>
            <thead><tr><td>Name</td><td>Age</td></tr></thead>
            <tbody>
                {tBody}
            </tbody>
        </table>
    );
}

function MemberDemo(props){
    return(
        <div>
            <h4>All Members</h4>
            <MemberTable members = {props.members}/>
        </div>
    );
}

export default function ListDemoApp2(){
    const initialMembers = [
        {name : "Peter", age: 18},
        {name : "Jan", age: 35},
        {name : "Janne", age: 25},
        {name : "Martin", age: 22}
    ];

    const [members, setMembers] = useState(initialMembers);
    return (

        <MemberDemo members = {members}/>        
        );
}