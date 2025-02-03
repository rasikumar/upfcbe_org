import { Link } from "react-router-dom";
import { headerSection, icons } from "../data";

const Header = () => {
  const headerleft = headerSection[0];
  const headerright = headerSection[1].rightSide;

  return (
    <div className="bg-upforangecrayola h-10 m-auto rounded-b-xl flex items-center justify-between px-4">
      <div className="flex items-center gap-2">
        <headerleft.icon />
        {/* <Icon  {headerleft.icon}/> */}
        <p className="text-white font-medium">{headerleft.title}</p>
        <Link
          to={headerleft.link}
          className="hover:underline transition-all ease-in-out font-semibold"
        >
          {headerleft.text}
        </Link>
      </div>
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-6 font-medium ">
          {headerright.map((right) => (
            <span className="flex items-center gap-2" key={right.id}>
              <right.icon />
              {right.content}
            </span>
          ))}
        </div>
        <div className="flex">
          {icons.map((Icon, index) => (
            <Icon className="text-white mr-3" key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
