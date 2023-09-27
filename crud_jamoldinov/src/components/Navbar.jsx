import { Link } from "react-router-dom";
import { BiSun } from "react-icons/bi";
import { BsMoonStars } from "react-icons/bs";
import { useEffect, useState } from "react";

    const themes = {
        dark: "forest",
        light: "retro",
      };
    

      
   
      const getThemeFromLocalStorage  = () => {
          return localStorage.getItem('theme' || themes.halloween)
        }
       
      
      
      function Navbar() {
        // const [theme, setTheme] = useState(getThemeFromLocalStorage())
      // const {numItemInCart} = useSelector((state) => state.cartState)
      
      
      const [theme, setTheme] = useState(getThemeFromLocalStorage());
       
      
       
      const handleTheme = () => {
          const {dark, light} = themes
          const newTheme = theme === light ? dark : light
          document.documentElement.setAttribute('data-theme', theme)
          setTheme(newTheme)
        }
        useEffect(() => {
          document.documentElement.setAttribute('data-theme', theme)
          localStorage.setItem('theme', theme)
        }, [theme])
        
  return (
    <div className='flex items-center justify-between my-5'>
    <Link to="/" className='text-2xl font-bold'> crud</Link>
    <label className="swap swap-rotate">
        <input type="checkbox" onClick={handleTheme} />
        <BiSun className="swap-on h-6 w-6" />
        <BsMoonStars className="swap-off h-6 w-6" />
      </label>
    </div>
  )
}

export default Navbar