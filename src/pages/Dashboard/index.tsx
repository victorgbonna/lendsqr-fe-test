import Card from "../../components/Card";
import Maintable from "../../components/Maintable";
import './Dashboard.css'

export default function Dashboard() {
  const cardContents=[
    { 
      label:"USERS", 
      numbers:'2,453'
    },{ 
      label:"ACTIVE USERS", 
      numbers:'2,453'
    },{ 
      label:"USERS WITH LOANS", 
      numbers:'12,453'
    },{ 
      label:"USERS WITH SAVINGS", 
      numbers:'102,453'
    }
  ]

    return (
      <div className="dashboard">
        <h2>Users</h2>
        <div className="cardbox">
          {cardContents.map((contents, index)=>
              <Card key={index} {...contents} index={index}/>
          )}
        </div>
        <Maintable/>
      </div>
    );
}
  