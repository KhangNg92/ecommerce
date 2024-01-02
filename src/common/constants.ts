import type { IOption } from '@/interfaces/common.interfaces';

import { Gender } from './enums';

/* ------------------------------- PAGINATION ------------------------------- */
export const PAGE_SIZE = 10;
/* -------------------------------- DATE TIME ------------------------------- */
export const DATE_FORMAT = 'YYYY-MM-DD';
export const DAY_FORMAT = 'DD MMM';
export const TIME_FORMAT = 'HH:mm';
export const MONTH_YEAR_FORMAT = 'MMM YYYY';
export const DATE_TIME_FORMAT = `${DATE_FORMAT} ${TIME_FORMAT}`;
export const DATE_TIME_READABLE = 'MMM DD, YYYY';
export const DATE_TIME_FORMAT_HAS_SECOND = 'YYYY-MM-DD HH:mm:ss';
export const MAXIMUM_MONTH_RANGE = 12;
export const MAXIMUM_DAY_RANGE = 14;
export const MAXIMUM_HOUR_RANGE = 24;
export const TIME_SECOND_FORMAT = 'HH:mm:ss';
export const MONTH_FORMAT = 'MMM';

/* ---------------------------------- FILE ---------------------------------- */
export const LIMIT_FILE_AVATAR_SIZE = 2; // MB
export const BASE64_PREFIX = 'data:image/jpeg;base64,';

/* ---------------------------------- regex --------------------------------- */
export const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
export const GET_FILE_NAME_REGEX = /\/([^/]+)$/;

/* -------------------------------- TIME OUT -------------------------------- */
export const TIME_OUT_LOADING = 500; // ms
export const TIME_FOR_ENROLL_INTRODUCTION = 3; // sec
export const TIME_FOR_ENROLL_FACE_AND_PIN = 15 * 1000 * 60; // ms

/* --------------------------------- OPTIONS -------------------------------- */

export const GENDER: IOption<Gender>[] = [
  {
    label: 'Male',
    value: Gender.Male,
  },
  {
    label: 'Female',
    value: Gender.Female,
  },
];

/* -------------------------- MONEY TRANSFER LIMIT -------------------------- */
export const MONEY_TRANSFER_LIMIT = 10000000;

/* --------------------------------- COOKIES -------------------------------- */
export const ACCOUNT_ID_LOGIN_BY_FACE_ID = 'accountIDCookie';
