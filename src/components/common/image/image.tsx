import { FC, useEffect, useState } from 'react'

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
	preview?: string
	image?: string
	alt?: string
	imageStyleClass?: string
	divStyleClass?: string
	bgColor?: string
}

const CustomImage: FC<ImageProps> = ({
	preview,
	image,
	alt,
	imageStyleClass,
	divStyleClass,
	bgColor = 'transparent',
	...props
}: ImageProps): JSX.Element => {
	const [currentImage, setCurrentImage] = useState(preview)
	const [loading, setLoading] = useState(true)

	const fetchImage = (src: string) => {
		const loadingImage = new Image()
		loadingImage.src = src
		loadingImage.onload = () => {
			setCurrentImage(loadingImage.src)
			setLoading(false)
		}
	}

	useEffect(() => {
		setLoading(true)
		fetchImage(image!)
	}, [image])

	return (
		<div className={divStyleClass}>
			<img
				style={{
					filter: `${loading ? 'blur(15px)' : ''}`,
					transition: '.5s filter linear',
					width: '100%',
					background: bgColor,
				}}
				src={currentImage}
				alt={alt}
				className={imageStyleClass}
				{...props}
			/>
		</div>
	)
}

export default CustomImage
