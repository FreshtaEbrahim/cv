import React from 'react';
import './CVHeader.css';
import { profileLinks } from '../../globalVariables/CVHeaderVariables';
import avatar from './avatar.jpg';

export default function CVHeader() {
  return (
    <div className='CVHeader'>
      <div className='CVHeader-avatar-section'>
        <img className='CVHeader-avatar' alt="Freshta's avatar" src={avatar} />
      </div>

      <div className='CVHeader-fullname'>Freshta Ebrahim</div>

      <ul className='CVHeader-profile-links'>
        {profileLinks.map((item) => {
          return (
            <li>
              <a href={item.href}>
                <span className='CVHeader-icon-list'>{item.icon}</span>
                {item.text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
