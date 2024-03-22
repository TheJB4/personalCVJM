import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Blog Recetas',
        description: "In this project I perform the functions of a CRUD to be able to create recipes and be able to delete them, also to be able to log in and register users",
        tools: ['Express', 'MongoDB', 'Moongose', 'React', 'Node JS','Tailwind CSS'],
        role: 'Full stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Rolling Coffe',
        description: 'In this project I perform the functions of a CRUD to be able to create recipes and be able to delete them, also to be able to log in and register users',
        tools: ['Express', 'MongoDB', 'Moongose', 'React', 'Node JS','Tailwind CSS','JWT'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Personal Page',
        description: 'Just a demo page of a company',
        tools: ['Nextjs', 'Tailwind CSS'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },