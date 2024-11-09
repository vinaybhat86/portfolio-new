import React from 'react'

function Footer(props) {
  let darkmode = props.darkmode;
  return (
    <footer
      style={{
        backgroundColor: darkmode ? '#1D232A' : 'white',
        color: darkmode ? '#A6ADAF' : 'black',
        width:'100%',
        display:'flex',
        justifyContent:'center',
        textAlign:'center',
        paddingBottom:'20px'
      }}
    >
      <p className='opacity-50 font-light text-[16px]'> 
      Made with ♥ by Vinay Bhat
      <br/>
      © 2024
    </p>
  </footer>
  )
}

export default Footer;