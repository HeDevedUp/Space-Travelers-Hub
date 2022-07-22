import React,{ useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getMission,missionUpdate } from "../Redux/mission/mission";
import "../Styles/Mission.css"

const Mission = () => {
  const dispatch= useDispatch()
  useEffect(()=>{
    if (!missions.length) {
      dispatch(getMission());
    }
  },[dispatch])
  const { missions} = useSelector((store)=>store.mission)
  
  const updateMission= (id)=>{
  const dene= missions.map((item)=>{
    if (item.id=== id){
      const missionState=item.mission
      return{
        ...item,
        mission:!missionState
      }
    }
    return item
  })
  dispatch(missionUpdate(dene))
  }
     


  return (
    <div className="mission-page">
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>  
        {   missions.map((mis)=>(

          <tbody key={mis.id}>
            <tr key={mis.id} className="mission-card">
              <td>{ mis.name }</td>
              <td>{ mis.description }</td>
              <td className="mission-btns">

                <p className={mis.mission? ' aactive' : ' inactive ' }>{mis.mission? ' active Member' : 'Not a Memeber'}</p>
                <button className={ mis.mission ? 'activebtn' : 'inactivebtn' }  type="button" onClick={()=>updateMission(mis.id)} >{ mis.mission? 'Cancel Misson ' : ' Join Mission'}</button>

 
              </td>
            </tr>

        </tbody>
        ))};

        

      
      </table>
    </div>
  );
        }
export default Mission;