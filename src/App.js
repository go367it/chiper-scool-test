import './App.css';
import Card from './components/Card';
import image1 from './Images/image1.jpg'
import image2 from './Images/image2.jpg'
import image3 from './Images/image3.jpg'
import image4 from './Images/image4.jpg'

const data = [
  {
    image : image1,
    title : 'Nord Stage 3 88 Keys',
    company: 'E.M.L.M Music',
    address: 'Le Harve, France',
    cost: '5,738.00',
    shippingCharge: '195'
  },
  {
    image : image2,
    title : 'Line 6 Helix guitar',
    company: 'Pro Music Tools',
    address: 'Le Harve, France',
    cost: '1,831.57',
    shippingCharge: '244.36'
  },
  {
    image : image3,
    title : 'Nord Lead A1',
    company: 'Gear Garage',
    address: 'Le Harve, France',
    cost: '1.700',
    shippingCharge: '35'
  },
  {
    image : image4,
    title : 'Moog Subsequent 37',
    company: 'TURNLAB',
    address: 'Le Harve, France',
    cost: '628.80',
    shippingCharge: '205'
  }
]

function App() {
  return (
    <div className="App p-6">
      <div className='w-full space-y-3'>
        {
          data.map(j=>{
            // console.log(j)
            return(
              <Card image={j.image} title={j.title} company={j.company} address={j.address} cost={j.cost} shippingCharge={j.shippingCharge} />
            )
          })
        }
      </div>
      {/* <Card /> */}
    </div>
  );
}

export default App;
