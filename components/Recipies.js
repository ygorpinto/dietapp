const Recipies = ({title,calories,image, ingredients}) => {
    return (
        <div>
            <h1>{title}</h1>
            <img src={image}></img>
            <p>Calories: {Math.round(calories)} k/cal</p>
            <p>ingredients:</p>
            <ul>{ingredients.map((ing)=>(
                <li>{ing.text}</li>
            ))}</ul>
        </div>
    )
}

export default Recipies;