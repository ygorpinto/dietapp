const Recipies = ({title,calories,image, ingredients}) => {
    return (
        <div className="itens">
            <h1 className="title">{title}</h1>
            <img className="img" src={image}></img>
            <p className="txt"><strong>Calories:</strong> {Math.round(calories)} k/cal</p>
            <p className="menutitle"><strong>Ingredients:</strong></p>
            <ul className="menu">{ingredients.map((ing)=>(
                <li className="menuitens">{ing.text}</li>
            ))}</ul>
        </div>
    )
}

export default Recipies;