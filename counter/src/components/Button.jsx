
function Button({label , text , className , onClick}){
 
    // function handleClick(){
    //     alert(text)
    // }

    const handleClick = () => {
        if (onClick) {
          onClick();
        } else {
          alert(text);
        }
      };
    return ( 
    <button 
    onClick={handleClick} 
    // onClick={onClick}
    className={`font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 ${className}`}>
    
        {label}

    </button>
    );
}
export default Button