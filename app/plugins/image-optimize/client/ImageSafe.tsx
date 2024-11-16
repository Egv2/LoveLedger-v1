import React, { CSSProperties, ImgHTMLAttributes, useState } from 'react'

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  srcOnError?: string
  isPretty?: boolean
  isHiddenOnError?: boolean
  styleImg?: CSSProperties
  styleWrapper?: CSSProperties
}

export const ImageSafe: React.FC<Props> = ({
  srcOnError,
  style = {},
  isPretty = false,
  isHiddenOnError = false,
  styleImg = {},
  styleWrapper = {},
  ...props
}) => {
  const [isHidden, setHidden] = useState(false)
  const [isLoaded, setLoaded] = useState(false)

  const styleImgPretty: CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
  }

  const styleWrapperPretty: CSSProperties = {
    width: '100%',
    height: '100%',
    maxWidth: '200px',
    minWidth: '200px',
    maxHeight: '200px',
    minHeight: '200px',
    borderRadius: '16px',
    border: '1px solid rgba(0, 0, 0, 0.088)',
    transition: 'opacity 0.3s ease',
    aspectRatio: '1',
    overflow: 'hidden',
  }

  const onLoad = () => setLoaded(true)

  const onError = srcOnError
    ? event => {
        const target = event.target as HTMLImageElement
        target.onerror = null
        target.src = srcOnError
      }
    : () => setHidden(true)

  if (!srcOnError && isHiddenOnError && isHidden) {
    return <></>
  }

  if (isPretty) {
    return (
      <div
        style={{
          opacity: isLoaded ? 1 : 0,
          ...styleWrapperPretty,
          ...style,
          ...styleWrapper,
        }}
      >
        <img
          {...props}
          alt={props.alt}
          style={{ ...styleImgPretty, ...styleImg }}
          onLoad={onLoad}
          onError={onError}
        />
      </div>
    )
  }

  return (
    <img
      {...props}
      alt={props.alt}
      style={{ ...style, ...styleImg }}
      onError={onError}
    />
  )
}
