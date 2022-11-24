import { Modal } from "react-bootstrap";
import React, { useContext, useState } from "react";
import {useCloudinary} from '../hooks/useCloudinary';
import {request} from '../api/request';
import { Toaster,toast } from "react-hot-toast";
import {PostContext} from '../context/PostContext';

export const UploadModal = ({ show, closeModal }) => {
  const {setRefetch}=useContext(PostContext)
  const [caption, setCaption] = useState("");
  const [file, setFile] = useState(null);
  const {error,url}=useCloudinary(file)

  const handleUpload = async() => {
    setRefetch(true)
    if(url){
      const {data}=await request.post('/post',{caption,image:url});
      if(data){
        toast.success('posted 🔥🔥🔥')
        closeModal();
      }
    }
else{
  toast.error('no image selected');
}
  };




  return (
   <>
    <Modal show={show} onHide={closeModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>Post Something</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <textarea
          onChange={(e) => setCaption(e.target.value)}
          placeholder="what's on your mind?"
          className="form-control mb-3"
          value={caption}
          type="text"
        />
        <label htmlFor="upload" className="form-label">
          Select a image
        </label>
        <input onChange={(e)=>setFile(e.target.files[0])} id="upload" type="file" className="form-control " />
      </Modal.Body>
      <Modal.Footer>
        <button disabled={!url} onClick={handleUpload} className="btn btn-primary">Upload</button>
      </Modal.Footer>
    </Modal>
    <Toaster
    position="top-right"
    toastOptions={{
      duration:1500,
      style:{
        fontSize:14
      }
    }}
    />
   </>
  );
};
