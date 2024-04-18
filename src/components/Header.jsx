import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpenReader, faComments, faEnvelope, faFileCircleCheck, faHandshakeAngle, faHeadSideVirus, faUser} from '@fortawesome/free-solid-svg-icons';


function Header() {
  return (
    
    <div className='flex flex-col w-max h-96  text-xl justify-between  items-center p-5   fixed right-6 top-40 bg-slate-400 bg-opacity-15 rounded-3xl '>
     <FontAwesomeIcon icon={faUser} className="my-icon w-10" />
     <FontAwesomeIcon icon={faHeadSideVirus} className="my-icon w-10" />
     <FontAwesomeIcon icon={faHandshakeAngle} className="my-icon w-10" />
     <FontAwesomeIcon icon={faBookOpenReader} className="my-icon w-10" />
     <FontAwesomeIcon icon={faFileCircleCheck} className="my-icon w-10" />
     <FontAwesomeIcon icon={faComments} className="my-icon w-10" />
     <FontAwesomeIcon icon={faEnvelope} className="my-icon w-10" />
    </div>
   
  )
}

export default Header