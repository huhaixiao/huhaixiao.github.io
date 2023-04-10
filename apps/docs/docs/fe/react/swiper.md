- [Swiper React Components](https://swiperjs.com/react)
- [Swiper](https://swiperjs.com/)
- [Swiper API](https://swiperjs.com/swiper-api)

```bash
npm install --save swiper
```

```jsx
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};
```

# Parameters

- `spaceBetween`
    
    Distance between slides in px.
    
- `slidesPerView`
    
    Number of slides per view (slides visible at the same time on slider's container).
    

# Events

- `slideChange`
    
    

# React Props

## Swiper Props

- `tag`
- `wrapperTag`
- `onSwiper`
    
    
- `on{Eventname}`
    
    `onSlideChange`
    
    `onReachEnd`
    
- 

## SwiperSlide Props