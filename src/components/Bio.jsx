import { useEffect, useState } from 'react';
import getPhotoUrl from 'get-photo-url'
import profileIcon from '../assets/profileIcon.svg';
import { db } from '../Dexie';

const Bio = () => {
  const [userDetails, setuserDetails] = useState(db.bio.get('info'))

  const [editFormIsOpen, setEditFormIsOpen] = useState(false)
  const [profilePhoto, setProfilePhoto] = useState(profileIcon)
  
  const updateUserDetails =async (event) => {
    event.preventDefault()
    const objectData= {
      name: event.target.nameOfUser.value,
      about: event.target.aboutUser.value,
    }
    setuserDetails(objectData)
    db.bio.put(objectData, 'info')
    setEditFormIsOpen(false)
  }

  useEffect( () => {
const setDataFromDb = async () => {
  const userDetailsFromDb = await db.bio.get('info')
  
}
  })

const updateProfilePhoto = async () =>{
  const newProfilePhoto = await getPhotoUrl('#profilePhotoInput')
  setProfilePhoto(newProfilePhoto)
}

  const editForm = (
    <form className="edit-bio-form" onSubmit={(e) => updateUserDetails(e)}>
      <input type="text" id='' name='nameOfUser' placeholder="Your Name" />
      <input type="text" id='' name='aboutUser' placeholder="About You" />
      <br />
      <button type='button' className='cancel-button' onClick={() => setEditFormIsOpen(false)}>Cancel</button>
      <button type='submit'>Save</button>
    </form>
  )

  const editButton = <button onClick={() => setEditFormIsOpen(true)}>Edit</button>

  return (
    <section className='bio'>
      <input type="file" accept='image/*' id='profilePhotoInput' />
      <label htmlFor="profilePhotoInput" onClick={updateProfilePhoto}>
        <div className="profile-photo" role='button' title='click to edit profile photo'>
          <img src={profilePhoto} alt='' />
        </div>
      </label>
      <div className="profile-info">
        <p className="name">{userDetails.name}</p>
        <p className="about">{userDetails.about}</p>
        {editFormIsOpen ? editForm : editButton}
      </div>
    </section>
  )
}
export default Bio;