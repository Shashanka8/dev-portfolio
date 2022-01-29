import { FunctionComponent } from 'react';
import { Category } from '../types';

const NavItem: FunctionComponent<{
  value: Category | 'all';
  handleFilterCategory: Function;
  active: string;
}> = ({ value, handleFilterCategory, active }) => {
  let listClasses = 'capitalize cursor-pointer hover:text-green';

  if (active === value) {
    listClasses += ' text-green';
  }

  return (
    <li className={listClasses} onClick={() => handleFilterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectsNavbar: FunctionComponent<{
  handleFilterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <div className='flex px-3 py-2 space-x-3 overflow-x-auto list-none'>
      <NavItem value='all' {...props} />
      <NavItem value='react' {...props} />
      <NavItem value='mongo' {...props} />
      <NavItem value='django' {...props} />
      <NavItem value='node' {...props} />
      <NavItem value='express' {...props} />
    </div>
  );
};

export default ProjectsNavbar;
