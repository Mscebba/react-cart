import React, { useState, useEffect, useRef } from 'react';
import { BackDrop } from 'ui';

import classes from './drop-down.module.scss';

export const DropDownItem = ({ children, onClick }) => {
  return (
    <li
      className={classes['dropdown-item']}
      onClick={() => {
        onClick();
      }}
    >
      {children}
    </li>
  );
};

export const DropDown = ({ dropdownLink, dropdownTitle, children }) => {
  const [show, setShow] = useState(false);
  const node = useRef();

  function handleClickOutside(e) {
    if (node.current.contains(e.target)) {
      // inside click
      // setShow(!show);
      return;
    }
    // outside click
    setShow(false);
    document.body.removeAttribute('style');
  }

  // function showHide() {
  //   setShow(!show);
  // }

  useEffect(() => {
    if (show) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [show]);

  return (
    <>
      <BackDrop show={show} />
      <div ref={node} className={classes['dropdown']}>
        <span
          className={classes['dropdown__trigger']}
          onClick={() => {
            setShow(!show);
            document.body.style.overflow = 'hidden';
          }}
        >
          {dropdownLink}
        </span>
        {show && (
          <div className={classes['menu']}>
            {dropdownTitle && (
              <h3 className={classes['dropdown__title']}>{dropdownTitle}</h3>
            )}
            <ul
              onClick={() => {
                setShow(!show);
                document.body.removeAttribute('style');
              }}
            >
              {children}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
