import React from 'react';
import {useSelector} from "react-redux";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Loader from "../loader/Loader.jsx";

const Listings = ({PropertyList,CategoryValue,FilterToggle}) => {
    const loader = useSelector((state) => state.loaderAnimation.loader);
    return (
        <>{
            loader?<Loader/>:(PropertyList.map((item,index) => (
                <div key={index} className="relative bg-white rounded-lg">
                    <Carousel className="w-full">
                        <CarouselContent>
                            {Array.from(item.images).map((img, index) => (
                                <CarouselItem key={index} className={"fg"}>
                                    <img style={{height: 284.281, marginBottom:12}} src={img} alt={""}
                                         className="w-full h-48 object-cover rounded-2xl object-fit"/>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                    <div className="">
                        {CategoryValue==="Icons"?(
                            <>
                                <h3 className="font-bold">{item.title}</h3>
                                <p className="text-base text-gray-500">{item.hosts}</p>
                                {item.price && <p className="font-medium">$ {item.price} per guest</p>}
                            </>
                        ):(
                            <>
                                <h3 className="font-bold">{item.location.name}</h3>
                                <p className="text-base text-gray-500">{item.view}</p>
                                <p className="text-base text-gray-500">{item.stayDate}</p>
                                <p className="font-medium">${FilterToggle? item.priceWithOutTax+" total before taxes":item.price+" night"} </p>
                            </>
                        )}

                    </div>
                </div>
            )))
        }
        </>
    );
};

export default Listings;
