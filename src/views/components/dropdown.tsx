
import { Dropdown, Menu, } from 'antd';
import 'antd/dist/antd.css';
import { FC } from 'react';


const DropdownLogOut: FC<{onClickHandler?: any}> = ({onClickHandler}) => (

        <Dropdown
          overlay={(
            <Menu>
              <Menu.Item key="0" onClick={onClickHandler}>
                LogOut
              </Menu.Item>
              
            </Menu>
          )}
          trigger={['click']}>
          <button className="ant-dropdown-link">
            <span role="img" aria-label="caret-down" className="anticon anticon-caret-down">
                <svg viewBox="0 0 1024 1024" focusable="false" className="" data-icon="caret-down" 
                width="1em" height="1em" fill="currentColor" aria-hidden="true">
                <path 
                d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 
                10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z">
                </path>
                </svg>
            </span>
          </button>
        </Dropdown>

);

export default DropdownLogOut;