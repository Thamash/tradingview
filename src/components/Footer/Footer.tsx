
import Icons from './Icons';
import Info from './Info';
import Links from './Links';


const Footer = () => {
  return (
    <footer className="relative bg-[#1C1C1C] min-h-[500px] text-white overflow-hidden bg-footer bg-footer">
      <div className="relative z-10 p-8 mx-auto text-center">
        <Icons />
        <Info />
        <Links />
      </div>
    </footer>
  );
};

export default Footer;
