//propTypes:is a Mechanism that ensures that passed
//  value is of the correct datatype

// defaultprops:defaultvalues for props in case they 
// are not passed from the parent component

// conditional rendering:allows you to control what gets 
// rendered in your application based on certain conditions(show,hideor change components)

function Student(props){
    return(
        <div className="student">
            <p>Name:{props.name}</p>
            <p>Age:{props.age}</p>
            <p>Student:{props.isStudent ?"Yes" :"No"}</p>
        </div>
    );
}
Student.propTypes={
    name:PropTypes.string,
    age:PropTypes.number,
    isStudent:PropTypes.bool,

}
Student.defaultProps={
    name:"ally",
    age:0,
    isStudent:"false",
}
export default Student