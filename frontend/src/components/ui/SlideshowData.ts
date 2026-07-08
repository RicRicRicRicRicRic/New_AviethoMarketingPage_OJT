// Slideshow data for client/partner logos
// Maps slide images to their corresponding client names

export interface SlideData {
	id: number;
	image: string;
	clientName: string;
}

export const slideshowData: SlideData[] = [
	{
		id: 1,
		image: '/src/assets/slides/hero_slide1.png',
		clientName: 'Avietho Digital'
	},
	{
		id: 2,
		image: '/src/assets/slides/hero_slide2.png',
		clientName: 'CSG - Cavite State University - Imus'
	},
	{
		id: 3,
		image: '/src/assets/slides/hero_slide3.png',
		clientName: 'Pamahalaang Barangay ng Cupang, Lungsod ng Muntinlupa'
	},
	{
		id: 4,
		image: '/src/assets/slides/hero_slide4.png',
		clientName: 'Man of the World 2025'
	},
	{
		id: 5,
		image: '/src/assets/slides/hero_slide5.png',
		clientName: 'MII Batangas'
	},
	{
		id: 6,
		image: '/src/assets/slides/hero_slide6.png',
		clientName: 'R-18 Responsible 18 Level Up'
	},
	{
		id: 7,
		image: '/src/assets/slides/hero_slide7.png',
		clientName: 'Lungsod ng Tanauan, Lalawigan ng Batangas'
	},
	{
		id: 8,
		image: '/src/assets/slides/hero_slide8.png',
		clientName: 'Team Aquila'
	},
	{
		id: 9,
		image: '/src/assets/slides/hero_slide9.png',
		clientName: 'Landco Pacific'
	}
];