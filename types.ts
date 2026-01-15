
export type ApartmentType = '1PN' | '2PN' | '3PN' | 'Penthouse';

export interface LeadFormData {
  fullName: string;
  phone: string;
  email: string;
  interest: ApartmentType;
}

export type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';
