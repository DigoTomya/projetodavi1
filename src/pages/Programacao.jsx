import './Programacao.css'
import { register } from 'swiper/element/bundle'
register();
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/scrollbar"
import { Swiper, SwiperSlide } from 'swiper/react';
const data = [
    { id: '1', image:'src\componentes\MoviePoster-f223d9c5-2a2e-4a4c-9161-0e779f5d9d70.webp'},
    { id: '2', image:'src\componentes\MoviePoster-97376958-dc2b-4049-9bf5-cc7d322e6b76.webp'},
    { id: '3', image:'src\componentes\MoviePoster-605b11fb-ebcf-438d-ab94-ffcc481d4237.webp'},
    { id: '4', image:'src\componentes\MoviePoster-7d3be42e-b110-4721-937f-05e7fcdb84a7.webp'},
]
function Programacao(){
    return(
        <div>
            <Swiper slidesPerView={1} navigation>
                {data.map( (item) =>(
                    <SwiperSlide key={item.id}>
                        <img src={item.image} alt="Slider" className='slide-item'/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
export default Programacao