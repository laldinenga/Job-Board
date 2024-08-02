import { useState } from 'react';
import './Button.css';
const App = () => {

   const [showEvents, setShowEvents] = useState(true)
   const [profiles, updateProfiles] = useState([
      { id: 1, name: "Sophia Anderson", profilePic: "https://rb.gy/9jh39" },
      { id: 2, name: "Isabella Sullivan", profilePic: "https://rb.gy/gs5lt" },
      { id: 3, name: "Ava Reynolds", profilePic: "https://rb.gy/rs32e" },
      { id: 4, name: "Olivia Thompson", profilePic: "https://rb.gy/xbjed" }
   ])

   const handleDelete = (id) => {
      let filteredProfiles = profiles.filter(each => each.id !== id)
      updateProfiles(filteredProfiles)
   }

   return (<div className='App'>

      {showEvents && <button onClick={() => setShowEvents(false)} className="profile-btn">Hide profiles</button>}

      {!showEvents && <button onClick={() => setShowEvents(true)} className="profile-btn">Display profiles</button>}

      <div className='profile-card'>

         {showEvents && profiles.map((profile) => (


            <div key={profile.id}>

               <div className="card">

                  <div className="number">
                     {profile.id}
                  </div>

                  <div>
                     <img className="profile-pic" src={profile.profilePic} alt="profile picture" />
                  </div>

                  <div className="descr">
                     <p className="name">{profile.name}</p>
                     <button className="delete-profile" onClick={() => handleDelete(profile.id)}> Delete profile</button>
                     {showEvents && <button onClick={() => setShowEvents(false)} className="profile-btn">Hide profiles</button>}
                  </div>

               </div>

            </div>

         ))}
      </div>

   </div>
   )
}

export default App;
