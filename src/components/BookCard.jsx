import Card from "./card"
import FirstImg from '../asseds/1.jpg'
import secondImg from '../asseds/2.jpg'
import thirdImg from '../asseds/3.jpg'
import fourthImg from '../asseds/4.png'

const BookCard = () => {
  function action (name){
    alert(`${name}`)
  }

  return (
    <div className="card-list">
    <Card name={'ვეფხისტყაოსანი'} description={'ავტორი: შოთა რუსთაველი'} characters={['თინათინი','ნესტანი','ავთანდილი', 'ტარიელი']}
     img={FirstImg} action={action}/>   
    <Card name={'მთვარის მოტაცება'} description={'ავტორი: კონსტანტინე გამსახურდია'} characters={['თამარი', 'თარაში']} 
     img={secondImg} action={action}/>
    <Card name={'დიდოსტატის კონსტანტინეს მარჯვენა'} description={'ავტორი: კონსტანტინე გამსახურდია'} 
     characters={['შორენა', 'კონსტანტინე', 'მეფე გიორგი']} img={thirdImg} action={action}/>
    <Card name={'ჯაყოს ხიზნები'} description={'ავტორი: მიხეილ ჯავახიშვილი'} characters={['მარგო', 'თეიმურაზი', 'ჯაყო']} 
     img={fourthImg} action={action}/> 
    </div>
  )
}

export default BookCard