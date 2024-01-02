// import { TRANSLATION_KEYS } from '@/common/locales';
// import dayjs, { Dayjs } from 'dayjs';
// import duration from 'dayjs/plugin/duration';
// import relativeTime from 'dayjs/plugin/relativeTime';

// dayjs.extend(duration);
// dayjs.extend(relativeTime);

// export default class DateTimeUtils {
//   static durationTimeHumanize(endDate: Date | string) {
//     const start = dayjs();
//     const end = dayjs(endDate);
//     const diff = end.diff(start);
//     if (diff <= 0) {
//       return TRANSLATION_KEYS.DASHBOARD_API_KEY.EXPIRED;
//     }
//     const durations = dayjs.duration(diff);
//     if (durations.asDays() >= 1) {
//       return `${TRANSLATION_KEYS.DASHBOARD_API_KEY.EXPIRATION_TIME}: ${durations.humanize()}`;
//     }
//     if (durations.asHours() >= 1) {
//       return `${TRANSLATION_KEYS.DASHBOARD_API_KEY.EXPIRATION_TIME}: ${durations.humanize()}`;
//     }
//     if (durations.asMinutes() >= 1) {
//       return `${TRANSLATION_KEYS.DASHBOARD_API_KEY.EXPIRATION_TIME}: ${durations.humanize()}`;
//     }
//     return `${TRANSLATION_KEYS.DASHBOARD_API_KEY.EXPIRATION_TIME}: ${durations.humanize()}`;
//   }

//   static checkExpiredDate = (date: Dayjs | string): boolean => {
//     const diff = dayjs(date).diff(dayjs());
//     return diff <= 0;
//   };

//   static disabledPastDate = (current: Dayjs): boolean => {
//     const currentDate = new Date().setHours(0, 0, 0, 0);
//     return current && current.valueOf() < currentDate;
//   };
// }

export {};
