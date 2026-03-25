import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { twMerge } from 'tailwind-merge';
import type { Service } from "@/types";
import { useFeatureStore } from "./store";


type ServiceFeatureProps = {
  service: Service;
}

export const ServiceFeature = ({ service }: ServiceFeatureProps) => {
  const { title, description, id } = service
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-50% 0px -50% 0px" });
  const setInViewFeature = useFeatureStore((state) => state.setInViewFeature);
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);

  useEffect(() => {
    if (inView) {
      setInViewFeature(id);
    }
    if (!inView && inViewFeature === id) {
      setInViewFeature(null);
    }
  }, [inView, id, setInViewFeature, inViewFeature])

  return (
    <div ref={ref} className="py-16 space-y-4">
      <p className={twMerge("text-5xl text-gray-300 transition-colors duration-300", inView ? "text-black" : "text-gray-300")}>
        {title}
      </p>
      <p className={twMerge("text-gray-300 transition-colors duration-300", inView ? "text-black" : "text-gray-300")}>{description}</p>
    </div>
  )
}