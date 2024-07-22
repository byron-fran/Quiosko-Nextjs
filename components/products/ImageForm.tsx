"use client"
import { CldUploadWidget } from 'next-cloudinary';
import Image from 'next/image';
import { useState } from 'react';
import { TbPhotoPlus } from 'react-icons/tb';

const ImageForm = () => {
    const [imageUrl, setImageUrl] = useState<string>('');

    return (
        <CldUploadWidget
            uploadPreset='b8ckjqz3'
            onSuccess={(success, { widget }) => {
                // @ts-ignore
                setImageUrl(success.info?.secure_url)
            }}
            options={{
                maxFiles: 1
            }}
        >
            {({ open }) => (
                <>
                    <div className="space-y-2">
                        <label className='text-slate-800'>
                            Imagen producto
                        </label>
                        <div
                            onClick={() => open()}
                            className='relative cursor-pointer hover:opacity-70 transition-all p-10 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600 bg-slate-100'>
                            <TbPhotoPlus
                                size={50}
                            />
                            <p className="text-lg font-semibold">
                                Agregar foto
                            </p>
                            {imageUrl && (
                                <div className=' absolute inset-0 w-full h-full'>
                                    <Image

                                        fill
                                        src={imageUrl}
                                        alt='image-url'
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                    <input type="hidden" value={imageUrl} name='image' />
                </>
            )}
        </CldUploadWidget>
    )
}

export default ImageForm
