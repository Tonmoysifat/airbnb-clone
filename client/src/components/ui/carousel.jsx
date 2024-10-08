import * as React from "react"
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons"
import useEmblaCarousel from "embla-carousel-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const CarouselContext = React.createContext(null)

function useCarousel() {
    const context = React.useContext(CarouselContext)

    if (!context) {
        throw new Error("useCarousel must be used within a <Carousel />")
    }

    return context
}

const Carousel = React.forwardRef(
    (
        {
            orientation = "horizontal",
            opts,
            setApi,
            plugins,
            className,
            children,
            ...props
        },
        ref
    ) => {
        const [carouselRef, api] = useEmblaCarousel(
            {
                ...opts,
                axis: orientation === "horizontal" ? "x" : "y",
            },
            plugins
        )

        const [canScrollPrev, setCanScrollPrev] = React.useState(false)
        const [canScrollNext, setCanScrollNext] = React.useState(false)
        const [selectedIndex, setSelectedIndex] = React.useState(0)
        const [slidesCount, setSlidesCount] = React.useState(0)

        const onSelect = React.useCallback((api) => {
            if (!api) return

            setSelectedIndex(api.selectedScrollSnap())
            setCanScrollPrev(api.canScrollPrev())
            setCanScrollNext(api.canScrollNext())
        }, [])

        const scrollPrev = React.useCallback(() => {
            api?.scrollPrev()
        }, [api])

        const scrollNext = React.useCallback(() => {
            api?.scrollNext()
        }, [api])

        const scrollTo = React.useCallback(
            (index) => {
                api?.scrollTo(index)
            },
            [api]
        )

        const handleKeyDown = React.useCallback(
            (event) => {
                if (event.key === "ArrowLeft") {
                    event.preventDefault()
                    scrollPrev()
                } else if (event.key === "ArrowRight") {
                    event.preventDefault()
                    scrollNext()
                }
            },
            [scrollPrev, scrollNext]
        )

        React.useEffect(() => {
            if (!api || !setApi) return
            setApi(api)
        }, [api, setApi])

        React.useEffect(() => {
            if (!api) return

            onSelect(api)
            setSlidesCount(api.slideNodes().length)

            api.on("reInit", onSelect)
            api.on("select", onSelect)

            return () => {
                api?.off("select", onSelect)
            }
        }, [api, onSelect])

        return (
            <CarouselContext.Provider
                value={{
                    carouselRef,
                    api: api,
                    opts,
                    orientation:
                        orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
                    scrollPrev,
                    scrollNext,
                    scrollTo,
                    canScrollPrev,
                    canScrollNext,
                    selectedIndex,
                    slidesCount,
                }}>
                <div
                    ref={ref}
                    onKeyDownCapture={handleKeyDown}
                    className={cn("relative group", className)} // Add `group` here to enable hover functionality
                    role="region"
                    aria-roledescription="carousel"
                    {...props}>
                    {children}
                    <CarouselIndicators/>
                </div>
            </CarouselContext.Provider>
        )
    }
)
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef(({className, ...props}, ref) => {
    const {carouselRef, orientation} = useCarousel()

    return (
        <div ref={carouselRef} className="overflow-hidden">
            <div
                ref={ref}
                className={cn(
                    "flex",
                    orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
                    className
                )}
                {...props}
            />
        </div>
    )
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef(({ className, ...props }, ref) => {
    const { orientation } = useCarousel()

    return (
        <div
            ref={ref}
            role="group"
            aria-roledescription="slide"
            className={cn(
                "min-w-0 shrink-0 grow-0 basis-full",
                orientation === "horizontal" ? "pl-4" : "pt-4",
                className
            )}
            {...props}
        />
    )
})
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef(
    ({ className, variant = "outline", size = "icon", ...props }, ref) => {
        const { orientation, scrollPrev, canScrollPrev } = useCarousel()

        return (
            <Button
                ref={ref}
                variant={variant}
                size={size}
                className={cn(
                    "absolute h-8 w-8 rounded-full transition-opacity",
                    canScrollPrev ? "opacity-0 group-hover:opacity-100" : "opacity-0 cursor-not-allowed", // Custom opacity handling
                    orientation === "horizontal"
                        ? "left-5 top-1/2 -translate-y-1/2"
                        : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
                    className
                )}
                disabled={!canScrollPrev}
                style={{
                    opacity: !canScrollPrev ? 0 : undefined,  // Ensure opacity is 0 when disabled
                    pointerEvents: !canScrollPrev ? "none" : "auto", // Disable pointer events if not scrollable
                }}
                onClick={scrollPrev}
                {...props}
            >
                <ArrowLeftIcon className="h-4 w-4" />
                <span className="sr-only">Previous slide</span>
            </Button>
        )
    }
)
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef(
    ({ className, variant = "outline", size = "icon", ...props }, ref) => {
        const { orientation, scrollNext, canScrollNext } = useCarousel()

        return (
            <Button
                ref={ref}
                variant={variant}
                size={size}
                className={cn(
                    "absolute h-8 w-8 rounded-full transition-opacity",
                    canScrollNext ? "opacity-0 group-hover:opacity-100" : "opacity-0 cursor-not-allowed", // Custom opacity handling
                    orientation === "horizontal"
                        ? "right-5 top-1/2 -translate-y-1/2"
                        : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
                    className
                )}
                disabled={!canScrollNext}
                style={{
                    opacity: !canScrollNext ? 0 : undefined,  // Ensure opacity is 0 when disabled
                    pointerEvents: !canScrollNext ? "none" : "auto", // Disable pointer events if not scrollable
                }}
                onClick={scrollNext}
                {...props}
            >
                <ArrowRightIcon className="h-4 w-4" />
                <span className="sr-only">Next slide</span>
            </Button>
        )
    }
)
CarouselNext.displayName = "CarouselNext"



const CarouselIndicators = () => {
    const { selectedIndex, slidesCount, scrollTo } = useCarousel()

    return (
        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 space-x-2">
            {[...Array(slidesCount)].map((_, index) => (
                <button
                    key={index}
                    className={cn(
                        "h-2 w-2 rounded-full",
                        index === selectedIndex ? "bg-white" : "bg-white opacity-25"
                    )}
                    onClick={() => scrollTo(index)}
                />
            ))}
        </div>
    )
}

export {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
}
