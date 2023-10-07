// import { createTheme } from "@mui/material";
// import { useMemo, useState } from "react";

// export default function ToggleColorMode() {
//     const [mode, setMode] = useState<'light' | 'dark'>('light');
//     const colorMode = useMemo(
//         () => ({
//             toggleColorMode: () => {
//                 setMode((prevMode) =>
//                     prevMode === 'light' ? 'dark' : 'light'
//                 );
//             },
//         }),
//         []
//     );

//     const theme = useMemo(
//         () =>
//             createTheme({
//                 palette: {
//                     mode,
//                 },
//             }),
//         [mode]
//     );

//     return (
//         <ColorModeContext.Provider value={colorMode}>
//             <ThemeProvider theme={theme}>
//                 <MyApp />
//             </ThemeProvider>
//         </ColorModeContext.Provider>
//     );
// }
