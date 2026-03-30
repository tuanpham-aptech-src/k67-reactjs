import "./buttons.css";

// Destructoring
export default function Button( {color, children, onClick= ()=>{}} ) {
  const getColorClass = () => {
    switch (color) {
      case "primary":
        return "btn-primary";
      case "success":
        return "btn-success";
      case "secondary":
        return "btn-secondary";
      default:
        return ""
    }
  };

  return <button onClick={onClick} className={getColorClass()}>{children}</button>;
}
