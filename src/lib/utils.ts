import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { parseISO, format } from 'date-fns';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(datetimeStr: string) {
  // Parse the datetime string
  const parsedDate = parseISO(datetimeStr);
  
  // Format the date into a specific string format
  const formattedDate = format(parsedDate, 'yyyy-MM-dd HH:mm:ss');
  return formattedDate;
  }
  