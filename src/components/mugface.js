import { h } from 'preact'

export default function MugFace({ height = 3271, width = 3240 }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <img
        src="https://res.cloudinary.com/defkmsrpw/image/upload/q_auto,f_auto/v1614936697/scottspence.com/mugFace.png"
        alt="cartoonified scott face"
        height={height}
        width={width}
      />
    </div>
  )
}
