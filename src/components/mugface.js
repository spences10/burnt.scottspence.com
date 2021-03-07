import { h } from 'preact'

export default function MugFace({ height = 300, width = 300 }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <img
        src="https://res.cloudinary.com/defkmsrpw/image/upload/q_auto,f_auto,w_800,r_max/v1614936697/scottspence.com/mugFace.png"
        alt="cartoonified scott face"
        height={height}
        width={width}
        borderRadius="50%"
      />
    </div>
  )
}
