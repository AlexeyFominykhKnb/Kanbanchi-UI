import React, {useState} from 'react';
import {PropTypes, ClassNames} from '../utils';
import {Label} from '../../ui';
import '../../../src/ui/switch/switch.module.scss';

export const Switch = (props) => {
    let {
        children,
        className,
        checked,
        onChange,
        ...attributes
    } = props;
    let labelItem = null;

    const [isChecked, setIsChecked] = useState(checked);

    className = ClassNames(
        'kui-switch',
        className
    );

    if (children) {
        labelItem = (<span className="kui-switch__label">{children}</span>);
    }

    attributes.type = 'checkbox';
    attributes.className = 'kui-switch__input';
    attributes.onChange = e => {
        setIsChecked(!isChecked);
        if (onChange) onChange(e);
    };

    return (
        <Label className={className}>
            <input checked={isChecked} {...attributes}/>
            {labelItem}
        </Label>
    );
};

Switch.propTypes = {
    checked: PropTypes.bool
};

Switch.defaultProps = {
    checked: false
};

export default Switch;