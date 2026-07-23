// Slideshow data for client/partner logos
// Maps slide images to their corresponding client names

import hero_slide1 from '../../assets/slides/hero_slide1.png';
import hero_slide2 from '../../assets/slides/hero_slide2.png';
import hero_slide3 from '../../assets/slides/hero_slide3.png';
import hero_slide4 from '../../assets/slides/hero_slide4.png';
import hero_slide5 from '../../assets/slides/hero_slide5.png';
import hero_slide6 from '../../assets/slides/hero_slide6.png';
import hero_slide7 from '../../assets/slides/hero_slide7.png';
import hero_slide8 from '../../assets/slides/hero_slide8.png';
import hero_slide9 from '../../assets/slides/hero_slide9.png';

export interface SlideData {
	id: number;
	image: ImageMetadata;
	clientName: string;
}

export const slideshowData: SlideData[] = [
	{
		id: 1,
		image: hero_slide1,
		clientName: 'Avietho Digital'
	},
	{
		id: 2,
		image: hero_slide2,
		clientName: 'CSG - Cavite State University - Imus'
	},
	{
		id: 3,
		image: hero_slide3,
		clientName: 'Pamahalaang Barangay ng Cupang, Lungsod ng Muntinlupa'
	},
	{
		id: 4,
		image: hero_slide4,
		clientName: 'Man of the World 2025'
	},
	{
		id: 5,
		image: hero_slide5,
		clientName: 'MII Batangas'
	},
	{
		id: 6,
		image: hero_slide6,
		clientName: 'R-18 Responsible 18 Level Up'
	},
	{
		id: 7,
		image: hero_slide7,
		clientName: 'Lungsod ng Tanauan, Lalawigan ng Batangas'
	},
	{
		id: 8,
		image: hero_slide8,
		clientName: 'Team Aquila'
	},
	{
		id: 9,
		image: hero_slide9,
		clientName: 'Landco Pacific'
	}
];
