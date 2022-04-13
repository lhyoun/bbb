import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../carouselStyle.css';
import Mapmodal from './Mapmodal';

const CarouselTest = ({ imageList, getKeyNum }) => {
	const [menuon, setMenuon] = useState(true);

	var panoramaList = [];
	for (let image of imageList) {
		panoramaList.push(image);
	}
console.log('test');

	return (
		<>
		{menuon == true ?
			<div style={{ position: 'absolute', width: '40%', height: '11%', bottom: '6%', left: '30%', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '10px' }}>
				<OwlCarousel className='owl-theme' dots={false} margin={10} items={5} loop>
					{panoramaList.map(function (img) {
						return <div className={'item'} style={{ color: 'white', cursor: 'pointer'}} onClick={(e) =>{ 
							console.log('사랑해은주');
							getKeyNum(img.key)}}>
							<img src={img.image} />
							<span>{img.contents}</span>
						</div>
					})}
				</OwlCarousel>
			</div> : null
}
			<div style={{ position: 'absolute', float: 'left', width: '40%', height: '4%', bottom: '2%', left: '30%', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '5px' }}>
				<Mapmodal />
				<span className="material-icons" style={{ color: 'white', fontSize: '30px' }} onClick={(e)=> (setMenuon(!menuon))}>
					sort
				</span>
			</div>
		</>
	);
};

export default React.memo(CarouselTest);