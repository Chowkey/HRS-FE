// UploadWidget.tsx
import { useEffect, useRef } from 'react';
import { HiPhoto, HiPaperClip } from 'react-icons/hi2';

declare global {
   interface Window {
      cloudinary: any;
   }
}

interface Widget {
   open: () => void;
}

const UploadWidget = () => {
   const widgetRef = useRef<Widget | null>(null);

   useEffect(() => {
      widgetRef.current = window.cloudinary.createUploadWidget({
         cloudName: 'deti1cdkl',
         uploadPreset: 'ecniaqdp'
      }, (error: any, result: { event: string; info: any; }) => {
         if (!error && result && result.event === "success") {
            console.log('Done! Here is the image info: ', result.info);
         }
      });
   }, []);

   return (
      <button onClick={() => widgetRef.current?.open()}>
         <HiPhoto size={30} className='text-sky-500 hover:text-sky-600' />
      </button>

   )
}

export default UploadWidget;

{/* <button onClick={() => widgetRef.current?.open()}>
            <HiPaperClip size={30} className='text-sky-500' />
         </button> */}