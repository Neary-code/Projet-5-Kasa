// import React from 'react';
// import { useParams } from 'react-router-dom';
// import Datas from '../datas/logements.json';
// // import Modal from '../components/Modal';
// // import Tags from '../components/Tags';
// // import Error from "./pages/Error-404.jsx";

// const House = () => {
//     <h1>Welcom to House Page</h1>
//     const { id } = useParams();

//     const house = Datas.find(item => item.id === id);

//     if (!house) {
//         return <Error />
//     }

    // return (
//         <div className="housePage">
//             <Modal slides={house.pictures} />
            
//             <div className="Description-container">
//                 <h1>{house.title}</h1>
                
//                 <p>{house.location}</p>
                
//                 <Tags tags={house.tags} />
//             </div>

//             <span className="Host-rating">
//                 <div className="host-name">{house.host.name}</div>
//                 <div className="avatar">
//                     <img src={house.host.picture} alt={house.host.name} />
//                 </div>
//             </span>

//             <div className="stars">
//                 {Array.from({ length: house.rating }).map((_, index) => (
//                     <span key={index} className="star">⭐</span>
//                 ))}
//             </div>

//             <collaps className="collapsDescription">
//                 <p>{house.description}</p>
//             </collaps>

//             <collaps className="collapsEquipements">
//                 <ul>
//                     {house.equipments.map((equip, index) => (
//                         <li key={index}>{equip}</li>
//                     ))}
//                 </ul>
//             </collaps>
//         </div>
// );
// };

// export default House;
