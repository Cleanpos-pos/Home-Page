/**
 * Phone number validation for UK, Europe, USA, and Canada only.
 * Filters spam from non-allowed regions.
 */

/** Clean a phone number: strip non-digits (except +), normalise prefixes */
export function cleanPhone(phone: string): string {
  // Keep only + and digits
  phone = phone.replace(/[^\d+]/g, '');

  // Convert 00 prefix to +
  if (phone.startsWith('00')) {
    phone = '+' + phone.slice(2);
  }

  // Convert UK 07 → +447
  if (phone.startsWith('07')) {
    phone = '+44' + phone.slice(1);
  }

  // Convert UK 01/02/03/08 → +441/+442/+443/+448
  if (/^0[1-35-9]/.test(phone)) {
    phone = '+44' + phone.slice(1);
  }

  // If no + prefix and 10+ digits, assume needs +
  if (!phone.startsWith('+') && phone.length >= 10) {
    // Check if it looks like a UK number without prefix
    if (phone.startsWith('44')) {
      phone = '+' + phone;
    }
  }

  return phone;
}

/** Validate a cleaned phone number: E.164 format, UK/Europe/USA/Canada only */
export function isValidPhone(phone: string): boolean {
  // E.164 format: + followed by 8–15 digits
  const e164 = /^\+[1-9]\d{7,14}$/;

  if (!e164.test(phone)) return false;

  // Allowed calling codes:
  // +1   — USA / Canada
  // +3x  — Europe (France +33, Italy +39, Spain +34, etc.)
  // +4x  — Europe (UK +44, Germany +49, Ireland +353, etc.)
  // +2x  — Not allowed (Africa, Middle East)
  // +5x  — Not allowed (South America)
  // +6x  — Not allowed (Southeast Asia, Oceania)
  // +7x  — Not allowed (Russia, Kazakhstan)
  // +8x  — Not allowed (East Asia)
  // +9x  — Not allowed (South Asia, Middle East)
  if (
    phone.startsWith('+1') ||   // USA / Canada
    phone.startsWith('+3') ||   // Europe (30-39)
    phone.startsWith('+4')      // Europe (40-49, includes UK +44)
  ) {
    return true;
  }

  return false;
}

/** Combined: clean + validate. Returns { valid, cleaned, error? } */
export function validatePhone(rawPhone: string): { valid: boolean; cleaned: string; error?: string } {
  const cleaned = cleanPhone(rawPhone);

  if (!cleaned || cleaned.length < 8) {
    return { valid: false, cleaned, error: 'Please enter a valid phone number.' };
  }

  if (!isValidPhone(cleaned)) {
    return { valid: false, cleaned, error: 'Please enter a UK, European, USA, or Canadian phone number.' };
  }

  return { valid: true, cleaned };
}
