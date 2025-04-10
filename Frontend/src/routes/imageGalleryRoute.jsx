import ImageGalleryDetailPage from "../features/dashboard/flightLog/imageGallery/pages/ImageGalleryDetailPage";
import ImageGalleryLisPage from "../features/dashboard/flightLog/imageGallery/pages/ImageGalleryLisPage";
import ImageGalleryRegisterPage from "../features/dashboard/flightLog/imageGallery/pages/ImageGalleryRegisterPage";




const imageGalleryRoute=[
   
       
          {
            path: "imageGallery-register",
            element: <ImageGalleryRegisterPage/>
          },
          {
            path: "imageGallery-overview",
            element: <ImageGalleryLisPage/>,
          },
          {
            path: "imageGallery-detail/:id",
            element: <ImageGalleryDetailPage />,
          },
         
      
        ]
 


export default imageGalleryRoute;