import './App.css';
import Card from './Card'
import './Card.css'
import Data from './Data'


function App() {
 
  function ncards(val){
    return(
      <Card 
      key={val.id}
      title={val.title}
      banner={val.banner}
      category= {val.category}
      link={val.link}/>
    );
  }

  return (
    <div className="App">
    <h1 className='heading style'>Top Series to Watch</h1>

    {Data.map(ncards)}

    {/* <Card title="WEDNESDAY"
      banner="https://s.yimg.com/ny/api/res/1.2/ne5lVXWlWJ8C6f6Bvoz9_Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/en/deadline.com/fb23e989d8acd53c7b44d0df737cc5f8"
      category= "NETFLIX ORIGINAL SERIES"
      link="https://www.netflix.com/in/title/81231974"/>

    <Card title={Data[1].title}
      banner={Data[1].banner}
      category= {Data[1].category}
      link={Data[1].link}/> */}

  
    </div>
  );
}

export default App;
