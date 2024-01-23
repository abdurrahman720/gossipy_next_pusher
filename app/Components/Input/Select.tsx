"use client"

import ReactSelect from "react-select";
import makeAnimated from 'react-select/animated';


interface SelectProps{
    label: string;
    value?: Record<string, any>,
    onChange: (value: Record<string, any>) => void,
    options: Record<string, any>[],
    disabled?: boolean
}

const Select: React.FC<SelectProps> = ({ label, value, onChange, options, disabled }) => {
    const animatedComponents = makeAnimated();
    return ( 
        <div className="z-[100]">
            <label className="block text-sm font-medium leading-6 text-gray-900">
                {label}
            </label>
            <div className="mt-2">
                <ReactSelect components={animatedComponents} isDisabled={disabled} value={value} onChange={onChange} options={options} isMulti menuPortalTarget={document.body} 
                    styles={{
                        menuPortal: (base) => ({
                            ...base,
                            zIndex:999
                    })
                    }}
                    classNames={{
                        control: ()=> 'text-sm'
                    }}
                />
            </div>
      </div>
     );
}
 
export default Select;