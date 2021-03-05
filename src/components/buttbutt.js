import { h } from 'preact'

export default function ButtButt({ height = 533, width = 849 }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <img
        src="https://res.cloudinary.com/defkmsrpw/image/upload/q_auto,f_auto/v1614936696/scottspence.com/buttbutt.png"
        alt="a cheeky butt"
        height={height}
        width={width}
      />
    </div>
  )
}
