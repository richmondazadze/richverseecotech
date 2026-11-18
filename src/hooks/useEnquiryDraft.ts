import type { MutableRefObject } from 'react';
import { useOutletContext } from 'react-router-dom';

export type EnquiryDraft = { name?: string; email?: string; message?: string; topic?: string; from?: string };

// The layout owns this ref for one tab visit. No form content enters storage,
// the address bar, analytics, or the server until the visitor submits it.
export function useEnquiryDraft() {
  return useOutletContext<{ enquiry: MutableRefObject<EnquiryDraft> }>().enquiry;
}
