const Card = ({name, description, img, characters, action}) =>{
    return (
        <div className="card">
            <h1 className="book-title">{name}</h1>
            <p>{description}</p>
             <div className="img-box">
             <img src={img} alt={img} />
             </div>
             
             <ul className="character-list">
               {characters.map((character, index) => (
               <li key={index} className="character-item">{character}</li>
               ))}
             </ul>

            <button onClick={() => action (name)} className="btn">click me</button>
        </div>
    )
}
export default Card

