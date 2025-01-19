import React from 'react';
import * as Dialog from "@radix-ui/react-dialog";

function Media() {
    return (
        <div className='pb-12 md:pb-24 px-5 md:px-12' >
            <h1 className="text-[#203354] text-center md:ps-4 md:border-s-4 md:border-[#203354] md:w-fit font-semibold  md:text-5xl mb-10 text-3xl leading-tight">
                Media Releases
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <img src="https://ik.imagekit.io/vituepzjm/Santech/Learn%20Hub.png?updatedAt=1737316366372" className='rounded-md w-full hover:brightness-95 transition-all cursor-pointer' alt="Santech Working Model" />
                    </Dialog.Trigger>
                    <Dialog.Portal>
                        <Dialog.Overlay className="bg-blackA6 z-[100] data-[state=open]:animate-overlayShow fixed inset-0" />
                        <Dialog.Content
                            className={`data-[state=open]:animate-contentShow flex items-center justify-center bg-transparent z-[1000] fixed top-[50%] left-[50%]  
                                   translate-x-[-50%] translate-y-[-50%] max-h-[80vh] w-[90vw] max-w-[1000px] rounded-[6px] focus:outline-none`}
                        >
                            <img
                                src="https://ik.imagekit.io/vituepzjm/Santech/Learn%20Hub.png?updatedAt=1737316366372"
                                alt="Demo"
                                className="object-contain rounded-md md:min-w-[1000px] border-b-4 border-gray-100 w-[80vw]"
                            />
                            <Dialog.Close asChild>
                                <button className="bg-black hidden lg:block bg-opacity-25 px-[10px] py-[3px] rounded-full absolute top-1 right-2">
                                    <i className="text-white fas fa-times"></i>
                                </button>
                            </Dialog.Close>
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>
                <iframe width="100%" className='rounded-md h-[315px] md:h-[360px]' src="https://www.youtube.com/embed/ULQqSYihvdk?si=Nc4mw32jETctItL0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe width="100%" className='rounded-md h-[315px] md:h-[500px]' src="https://www.youtube.com/embed/RgMmZlUhV2Y?si=xvilCIf3rv2BBGlS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <img src="https://ik.imagekit.io/vituepzjm/Santech/SANTECH%20ARCHITECTURE2.png?updatedAt=1737316365317" className='rounded-md w-full hover:brightness-95 transition-all cursor-pointer' alt="Santech Working Model" />
                    </Dialog.Trigger>
                    <Dialog.Portal>
                        <Dialog.Overlay className="bg-blackA6 z-[100] data-[state=open]:animate-overlayShow fixed inset-0" />
                        <Dialog.Content
                            className={`data-[state=open]:animate-contentShow flex items-center justify-center bg-transparent z-[1000] fixed top-[50%] left-[50%]  
                                   translate-x-[-50%] translate-y-[-50%] max-h-[80vh] w-[90vw] max-w-[800px] rounded-[6px] focus:outline-none`}
                        >
                            <img
                                src="https://ik.imagekit.io/vituepzjm/Santech/SANTECH%20ARCHITECTURE2.png?updatedAt=1737316365317"
                                alt="Demo"
                                className="object-contain rounded-md border-b-4 border-gray-100 w-[80vw]"
                            />
                            <Dialog.Close asChild>
                                <button className="bg-black hidden lg:block bg-opacity-25 px-[10px] py-[3px] rounded-full absolute top-1 right-2">
                                    <i className="text-white fas fa-times"></i>
                                </button>
                            </Dialog.Close>
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <video
                            className="w-full hover:brightness-95 transition-all cursor-pointer h-auto mb-5 rounded-lg"
                            controls={false}
                            autoPlay
                            loop
                            muted
                        >
                            <source
                                src="https://ik.imagekit.io/vituepzjm/Untitled%20design.mp4?updatedAt=1712578428827"
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video>
                    </Dialog.Trigger>
                    <Dialog.Portal>
                        <Dialog.Overlay className="bg-blackA6 z-[100] data-[state=open]:animate-overlayShow fixed inset-0" />
                        <Dialog.Content
                            className={`data-[state=open]:animate-contentShow flex items-center justify-center bg-transparent z-[1000] fixed top-[50%] left-[50%]  
                                   translate-x-[-50%] translate-y-[-50%] max-h-[80vh] w-[90vw] max-w-[800px] rounded-[6px] focus:outline-none`}
                        >
                            <video
                                className="w-full h-auto mb-5 rounded-lg"
                                controls={false}
                                autoPlay
                                loop
                                muted
                            >
                                <source
                                    src="https://ik.imagekit.io/vituepzjm/Untitled%20design.mp4?updatedAt=1712578428827"
                                    type="video/mp4"
                                />
                                Your browser does not support the video tag.
                            </video>
                            <Dialog.Close asChild>
                                <button className="bg-black hidden lg:block bg-opacity-25 px-[10px] py-[3px] rounded-full absolute top-2 right-2">
                                    <i className="text-white fas fa-times"></i>
                                </button>
                            </Dialog.Close>
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>

            </div>
        </div>
    )
}

export default Media