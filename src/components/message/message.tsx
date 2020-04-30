import React, { FC } from 'react';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { AiOutlineWarning } from 'react-icons/ai';

import Portal from '../portal';

import './message.scss';

interface Props {
  message: string;
  success: boolean;
  clear: () => void;
}

const Message: FC<Props> = ({ message, success, clear }): JSX.Element => {
  return (
    <Portal>
      <div className={success ? 'success message' : 'message'}>
        <span>
          {success ? <IoMdCheckmarkCircleOutline /> : <AiOutlineWarning />}
        </span>
        <p>{message}</p>

        <button type="button" onClick={clear}>
          OK
        </button>
      </div>
    </Portal>
  );
};

export default React.memo(Message);
