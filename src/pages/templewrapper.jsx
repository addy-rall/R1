// src/pages/templedetailspage.jsx (The file used in App.jsx Route)

import React from 'react';
import { useParams } from 'react-router-dom';
// IMPORT DATA from the Temples.jsx file (sibling in the pages folder)
import { temples } from '../pages/Temples'; 
// Import the reusable detail component (up one level, then into components folder)
import TempleDetailPage from '../pages/templedetailspage'; 

const TemplePageWrapper = () => {
  // Get the slug from the URL defined as :templeSlug in App.jsx
  const { templeSlug } = useParams(); 

  // Find the matching temple object
  const selectedTemple = temples.find(
    t => t.detailsUrl === templeSlug
  );

  // Pass the data to the component
  return (
    <TempleDetailPage temple={selectedTemple} />
  );
};

export default TemplePageWrapper;