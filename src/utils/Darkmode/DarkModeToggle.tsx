// // DarkModeToggle.tsx
// import React, { useContext } from 'react';
// import IconButton from '@mui/material/IconButton';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';
// import { ThemeContext } from './ThemeProvider'; // Create this context in the next step

// function DarkModeToggle() {
//     const { toggleDarkMode, isDarkMode } = useContext(ThemeContext);

//     return (
//         <IconButton
//             onClick={toggleDarkMode}
//             color="inherit"
//         >
//             {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
//         </IconButton>
//     );
// }

// export default DarkModeToggle;
