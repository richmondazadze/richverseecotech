import type { SelectHTMLAttributes } from 'react';
import Icon from './Icon';

/** Keep the platform picker and keyboard model; only the closed control is styled. */
export default function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return <span className="select-wrap"><select {...props}/><Icon name="chevron-down" size={18}/></span>;
}
