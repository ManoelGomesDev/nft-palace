import Image from "next/image"

interface CardProps {
     img: any;
    title: string;
    text: string;
}

 function Card ({ img, title, text}: CardProps){
    return (
        <div className="container__card">
            <Image src={img}  alt="nft" className="img__nft" />
            <p className="title__nft">{title}</p>
            <p className="text__nft">{text}</p>
          
        
        </div>
    )
}

export default Card

