/** @jsx h */
import { h } from 'preact'

export default function MugFace({ height = 300, width = 300 }) {
  return (
    <div class="flex justify-center overflow-hidden">
      <img
        src="https://res.cloudinary.com/defkmsrpw/image/upload/q_auto,f_auto,w_800/v1614936697/scottspence.com/mugFace.png"
        alt="cartoonified scott face"
        height={height}
        width={width}
        class="rounded-full"
      />
    </div>
  )
}
