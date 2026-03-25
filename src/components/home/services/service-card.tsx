import { twMerge } from "tailwind-merge";
import { useFeatureStore } from "./store";

type CardProps = {
    id: string;
    imageUrl?: string;
}

type ServiceCardProps = {
    gradient: string;
    children: React.ReactNode;
} & CardProps

const ServiceCard = ({ gradient, children, id }: ServiceCardProps) => {
    const inViewFeature = useFeatureStore((state) => state.inViewFeature);
    return (
        <div className={twMerge("absolute inset-0  h-full w-full rounded-2xl bg-gradient-to-br transition-opacity duration-300", gradient, inViewFeature === id ? "opacity-100" : "opacity-0")}>
            {children}
        </div>
    )
}

export const WeddingCard = ({ id, imageUrl }: CardProps) => {
    return (
        <ServiceCard id={id} gradient="from-[#f7f0ff] to-[#a78afe]">
            <img src={imageUrl} alt="Wedding" className="object-contain w-full h-full" />
        </ServiceCard>
    )
}

export const BirthdayCard = ({ id, imageUrl }: CardProps) => {
    return (
        <ServiceCard id={id} gradient="from-[#f5fbff] to-[#addeff]">
            <img src={imageUrl} alt="Wedding" className="object-contain w-full h-full" />
        </ServiceCard>
    )
}

export const RealEstateCard = ({ id, imageUrl }: CardProps) => {
    return (
        <ServiceCard id={id} gradient="from-[#f5fff7] to-[#adf8ff]">
            <img src={imageUrl} alt="Wedding" className="object-contain w-full h-full" />
        </ServiceCard>
    )
}

export const CorporateCard = ({ id, imageUrl }: CardProps) => {
    return (
        <ServiceCard id={id} gradient="from-[#f7fff5] to-[#adffd8]">
            <img src={imageUrl} alt="Wedding" className="object-contain w-full h-full" />
        </ServiceCard>
    )
}

export const FashionCard = ({ id, imageUrl }: CardProps) => {
    return (
        <ServiceCard id={id} gradient="from-[#fef5ff] to-[#ffade1]">
            <img src={imageUrl} alt="Wedding" className="object-contain w-full h-full" />
        </ServiceCard>
    )
}