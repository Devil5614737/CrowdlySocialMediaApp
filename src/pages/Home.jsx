import React, { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { Posts } from '../components/Posts'
import { UploadModal } from '../components/UploadModal'


function Home() {
  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);





  return (
    <>
    <Navbar openModal={handleShow}/>
    <main className='container '>
    <Posts/>
    <UploadModal show={show} closeModal={handleClose}/>
    </main>
    </>
  )
}

export default Home