import { useContext, useState, useEffect, createContext } from "react";
import { useLocalStorage } from "react-use-storage";
import { useWindowEventListener } from "rooks";

const Context = createContext();
const mqlDark = window.matchMedia('(prefers-color-scheme: dark)');
const defaultTheme = mqlDark.matches ? 'dark' : 'light';

export function useGeneral() {
    return useContext(Context);
}

const GeneralProvider = props => {
    const [navOpen, setNavOpen] = useState(false);
    const [visibilityState, setVisibilityState] = useState(window.document.visibilityState);
    const [osColorScheme, setOsColorScheme] = useState(defaultTheme);
    const [selectedTheme, setSelectedTheme, removeSelectedTheme] = useLocalStorage('bb_theme', );
    
    const theme = selectedTheme || osColorScheme;
    
    useWindowEventListener('visibilitychange', () => {
        setVisibilityState(window.document.visibilityState);        
    });

    useEffect(() => {
        setOsColorScheme(defaultTheme);

        mqlDark.addEventListener('change', e => {
            setOsColorScheme(e.matches ? 'dark' : 'light');
        });
    }, []);

    function toggleTheme() {
        if (selectedTheme === 'light') {
            setSelectedTheme('dark');
        } else if (selectedTheme === 'dark') {
            removeSelectedTheme();
        } else {
            selectedTheme('light');
        }
    }

    const value = {
        navOpen,
        setNavOpen,
        theme,
        selectedTheme,
        toggleTheme,
        windowState: {
            visibilityState,
            isVisible: visibilityState === 'visible',
        },
    };

    return (
        <Context.Provider value = { value }>
            { props.children }
        </Context.Provider>
    )   
}

export default GeneralProvider