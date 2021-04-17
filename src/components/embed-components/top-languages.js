/** @jsx h */
import { h } from 'preact'
// import { useEffect, useRef, useState } from 'preact/hooks'

export const TopLanguages = () => {
  // const imgRef = useRef(null)
  // const [img, setImg] = useState()
  // useEffect(() => {
  //   setImg(document.querySelector(`#lazy`))
  // })

  return (
    <div class="flex justify-center">
      {/* <img
        id="lazy"
        class="h-[328px] w-[624px] block object-cover"
        ref={imgRef}
        data-src="https://res.cloudinary.com/defkmsrpw/image/upload/w_10/v1618469158/language-split-pie.png"
      /> */}
      <img
        src="https://ghui.vercel.app/pie.png?username=spences10"
        loading="eager"
        alt="GitHub last 20 repos language split pie chart"
        class="h-[158px] sm:h-[250px] md:h-[328px]"
      />
    </div>
  )
}
