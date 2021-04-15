
const Person = ({ name, age, hobbies }) => {
    
    let voteText = "Please go vote!" ? age  > 18 : "you must be 18";
    let personHobbies =  hobbies.map(h => <li>{ h }</li>);

    return (
       <div> 
            <p> Learn some information about this person. </p>
            <ul>
                <li>Name: { name }</li>
                <li>Age: { age }</li>
                <ul>
                    Hobbies
                    { personHobbies }
                </ul>
            </ul>
            <h3>{ voteText }</h3>
        </div>
    )
}