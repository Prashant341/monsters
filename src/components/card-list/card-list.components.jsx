import Card from '../card/card.components'
import './card-list.style.css'

const CardList = ({monsters}) => {
   
    return(
        <div className='card-list'>
            {
                monsters.map(
                    (monster,idx) => <Card 
                                    key = {idx}
                                    id = {monster.id}
                                    name = {monster.name} 
                                    email = {monster.email}
                                />
                )
            }
        </div>
        
    )
}

export default CardList