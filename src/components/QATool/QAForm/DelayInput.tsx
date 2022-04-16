import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';

export const DelayInput = () => {
  const [delay] = useState();
  const { register } = useFormContext();

  return (
    <div className="col-auto my-2">
      <div className="custom-control custom-checkbox mr-sm-2">
        <input type="checkbox" className="custom-control-input mx-2" value={delay} {...register('delay')} />
        <label className="custom-control-label" htmlFor="customControlAutosizing">
          Introduce 5 second delay
        </label>
      </div>
    </div>
  );
};
