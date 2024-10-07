import React, { useEffect, useState } from 'react';
import AppLogo from "../appLogo/AppLogo.jsx";
import { Globe, Search } from 'lucide-react';
import Login from "../login/Login.jsx";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carouselCategory.jsx";
import { Card, CardContent } from "../ui/card.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryValue, setFilterToggle } from "../../redux/slice/CategorySlice.js";
import FilterModal from "./filterModal/FilterModal.jsx";
import MapModal from "../../location/MapModal.jsx";
import CalendarModal from "../calander/CalendarModal.jsx";
import AddGuestsModal from "../addGuests/AddGuestsModal.jsx";
import {CategoryListRequest} from "../../apiRequest/CategoryApiRequest.js";

const Header = () => {
    const [inputChecked, setInputChecked] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const dispatch = useDispatch();
    const CategoryValue = useSelector((state) => state.category.categoryValue);

    useEffect(() => {
        (async () => {
            await CategoryListRequest();
        })();
        const element = document.querySelector('.parent-container');
        function handleScroll() {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 3) {
                element?.classList.add('show-item');
            } else {
                element?.classList.remove('show-item');
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);
    const CategoryList = useSelector((state) => state.category.categoryList);
    const setCatToSessionStorage = (cat) => {
        sessionStorage.setItem("cat", cat);
        dispatch(setCategoryValue(cat));
    };

    const setToogle = (tg) => {
        setInputChecked(tg);
        dispatch(setFilterToggle(tg));
    };

    return (
        <>
            <MapModal />
            <CalendarModal />
            <AddGuestsModal />
            <div className="main-header border-b-[1px] border-solid pb-6 pl-10 pr-10 ">
                <div className="hidden md:flex h-20 items-center justify-between">
                    <AppLogo />
                    <div className="flex gap-6 justify-center primary-header">
                        <div className="font-medium">Stays</div>
                        <div className='text-muted-foreground'>Experiences</div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className='cursor-pointer z-[2]'>Airbnb your home</div>
                        <div><Globe /></div>
                        <Login />
                    </div>
                </div>
                <div className="primary-header hidden z-0 md:flex flex-col w-full justify-center gap-5 items-center">
                    <div className="flex w-full max-w-[850px] rounded-full border-[1px] border-solid pb-2 pl-6 pt-2 shadow-lg">

                        <div className='flex-1 border-solid border-r-2 cursor-pointer' onClick={() => document.getElementById('my_modal_2').showModal()}>
                            <div className="font-medium text-sm">Where</div>
                            <div className='text-muted-foreground'>Search destinations</div>
                        </div>

                        <div className='pl-4 pr-4 border-solid border-r-2 cursor-pointer' onClick={() => document.getElementById('my_modal_3').showModal()}>
                            <div className="font-medium text-sm">Check in</div>
                            <div className='text-muted-foreground'>Add dates</div>
                        </div>
                        <div className='pl-4 pr-4 border-solid border-r-2 cursor-pointer' onClick={() => document.getElementById('my_modal_3').showModal()}>
                            <div className="font-medium text-sm">Check out</div>
                            <div className='text-muted-foreground'>Add dates</div>
                        </div>

                        <div className='flex-1 pl-4' onClick={() => document.getElementById('my_modal_4').showModal()}>
                            <div className="font-medium text-sm">Who</div>
                            <div className='text-muted-foreground'>Add guests</div>
                        </div>
                        <div className="mr-3 h-12 w-12 rounded-full bg-red-500 flex justify-center items-center text-white">
                            <Search />
                        </div>
                    </div>
                </div>

                <div className="secondary-header hidden md:flex w-full justify-center">
                    <div className="flex w-fit justify-between items-center gap-10 rounded-full border-[1px] border-solid pb-2 pl-6 pt-2 hover:shadow-lg">
                        <div className="font-medium cursor-pointer border-r-[1px] pr-3 border-gray-500" onClick={() => document.getElementById('my_modal_2').showModal()}>Anywhere</div>
                        <div className="font-medium cursor-pointer border-r-[1px] pr-3 border-gray-500" onClick={() => document.getElementById('my_modal_3').showModal()}>Any week</div>
                        <div className="font-medium cursor-pointer " onClick={() => document.getElementById('my_modal_4').showModal()}>Add guests</div>
                        <div className="mr-3 aspect-square h-9 w-9 rounded-full bg-red-500 flex justify-center items-center text-white">
                            <Search />
                        </div>
                    </div>
                </div>

                <div className="md:hidden flex justify-between items-center p-4">
                    <AppLogo />
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-lg font-medium">
                        Menu
                    </button>
                </div>

                {isMobileMenuOpen && (
                    <div className="mobile-menu md:hidden flex flex-col gap-4 bg-white p-4 shadow-md">
                        <div className="font-medium cursor-pointer"
                             onClick={() => document.getElementById('my_modal_2').showModal()}>Anywhere
                        </div>
                        <div className="font-medium cursor-pointer"
                             onClick={() => document.getElementById('my_modal_3').showModal()}>Any week
                        </div>
                        <div className="font-medium cursor-pointer"
                             onClick={() => document.getElementById('my_modal_4').showModal()}>Add guests
                        </div>
                        <FilterModal/>
                        <div className="flex gap-2 border border-gray-500 p-3 rounded-md cursor-pointer"
                             onClick={() => setToogle(!inputChecked)}>
                            <p className="w-max">Display total before taxes</p>
                            <input type="checkbox" className="toggle" checked={inputChecked}
                                   onChange={(e) => setToogle(e.target.checked)}/>
                        </div>
                    </div>
                )}
            </div>
            <div
                className={`filter-header pl-4 md:pl-24 ${CategoryValue !== "Icons" ? `pr-4 md:pr-[483px]` : "pr-4 md:pr-24"} h-20 border-solid border-t-[1px]`}>
                <Carousel className="w-full ">
                    <CarouselContent className="-ml-1">
                        {CategoryList && CategoryList.map((item, index) => (
                            <CarouselItem key={index} className="pl-1 basis-auto">
                                <div className="p-1">
                                    <Card className='shadow-none border-0 bg-transparent'>
                                        <CardContent onClick={() => setCatToSessionStorage(item.title)}
                                                     className={`flex flex-col items-center justify-center px-4 pt-4 
                                                     pb-1 opacity-75 hover:opacity-100 hover:border-b-[2px] 
                                                     hover:border-black cursor-pointer font-medium 
                                                     ${sessionStorage.getItem("cat") === item.title && 
                                                     'border-b-[2px] border-black font-bold opacity-100'}`}>
                                            <img style={{ width: 30, height: 30 }} src={item.imageUrl} alt={item.title} />
                                            <span className={`text-sm mb-2`}>{item.title}</span>
                                            <hr/>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex" />
                    <CarouselNext className="hidden md:flex"/>
                </Carousel>
                {CategoryValue !== "Icons" && (
                    <div className="hidden md:flex gap-4 ml-16 items-center">
                        <FilterModal />
                        <div className="flex gap-2 border border-gray-500 p-3 rounded-md cursor-pointer"
                             onClick={() => setToogle(!inputChecked)}>
                            <p className="w-max">Display total before taxes</p>
                            <input type="checkbox" className="toggle" checked={inputChecked} onChange={(e) => setToogle(e.target.checked)} />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Header;
