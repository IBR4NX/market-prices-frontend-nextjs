import { LOCALE } from "@/lib/constants";

export function formatNumber(value: string | number): string {
  const number = Number(value);

  return Number.isFinite(number)
    ? number.toLocaleString(LOCALE, {
      maximumFractionDigits: 2,
    })
    : String(value);
}

export function formatDateTime(value: string): string {
  const date = new Date(value);

  return Number.isNaN(date.getTime())
    ? value
    : date.toLocaleString(LOCALE, {
      dateStyle: "medium",
      timeStyle: "short",
    });
}
export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString(LOCALE, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatTime(date: string): string { 
  return new Date(date).toLocaleString(LOCALE, {
    timeStyle: "short"
  });
}

export function formatPrice(price: number | string): string {
  return `${Number(price).toLocaleString(LOCALE)} ريال`;
}

