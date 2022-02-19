import soda from '../../assets/soda.jpg'
import floyd from '../../assets/floyd.jpg'
import guns from '../../assets/guns.jpg'
import queen from '../../assets/queen.jpg'

const productos = [
	{
        id: 1, 
        title: 'Soda Stereo', 
        description: 'Nuevo', 
        price: 5900,
        stock: 5, 
        pictureUrl: soda
    },
    {
        id: 2, 
        title: 'Pink Floyd', 
        description: 'Nuevo', 
        price: 9800, 
        stock: 2, 
        pictureUrl: floyd
    },
        {id: 3, 
        title: 'Guns n Roses', 
        description: 'Nuevo', 
        price: 7500,
        stock: 6,
        pictureUrl: guns
    },
        {id: 4, 
        title: 'Queen', 
        description: 'Nuevo', 
        price: 8900, 
        stock: 4,
        pictureUrl: queen
    }
]

export default productos