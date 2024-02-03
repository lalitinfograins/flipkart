import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSidebarStatus, setSidebarOff } from '../../redux/SidebarSlice';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
import {
  fetchAsyncCategories,
  getAllCategories,
} from '../../redux/categorySlice';

const Sidebar = () => {
  const dispatch = useDispatch();
  const isSidebarOn = useSelector(getSidebarStatus);
  const categories = useSelector(getAllCategories);

  useEffect(() => {
    dispatch(fetchAsyncCategories());
  }, [dispatch]);

  const handleCategoryClick = () => {
    // Close the sidebar when a category is clicked
    dispatch(setSidebarOff());
  };

  return (
    <>
      <aside className={`sidebar ${isSidebarOn ? 'hide-sidebar' : ''}`}>
        <button
          type='button'
          className='sidebar-hide-btn'
          onClick={() => dispatch(setSidebarOff())}
        >
          <IoMdClose className='sidebar-hide-icon' />
        </button>

        <div className='sidebar-cnt'>
          <div className='cat-title fs-17 text-uppercase fw-6 ls-1h '>
            All Categories
          </div>
          <ul className='cat-list'>
            {categories.map((category, ind) => {
              return (
                <li key={ind}>
                  {/* Use React Router Link to navigate to category pages */}
                  <Link
                    to={`category/${category}`}
                    className='cat-list-link text-capitalize'
                    onClick={handleCategoryClick}
                  >
                    {category}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
