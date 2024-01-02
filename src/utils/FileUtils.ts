// import { ImageFileType } from '@/common/enums';
// import { TRANSLATION_KEYS } from '@/common/locales';
// import { message } from 'antd';
// import { RcFile } from 'antd/es/upload';
// import dayjs from 'dayjs';
// import duration from 'dayjs/plugin/duration';
// import relativeTime from 'dayjs/plugin/relativeTime';
// import uuid4 from 'uuid4';
// import Resizer from 'react-image-file-resizer';

// dayjs.extend(duration);
// dayjs.extend(relativeTime);

// export default class FileUtils {
//   static beforeUpload = (file: RcFile, limitSize: number) => {
//     const isJpgOrPng =
//       file.type === ImageFileType.JPEG ||
//       file.type === ImageFileType.PNG ||
//       file.type === ImageFileType.JPG;
//     if (!isJpgOrPng) {
//       message.error(TRANSLATION_KEYS.ERROR_MESSAGE.YOU_CAN_ONLY_UPLOAD_JPG_OR_PNG);
//     }
//     const isLt2M = file.size / 1024 / 1024 < limitSize;
//     if (!isLt2M) {
//       message.error(TRANSLATION_KEYS.ERROR_MESSAGE.IMAGE_MUST_SMALLER_THAN(limitSize));
//     }
//     return isJpgOrPng && isLt2M;
//   };

//   static getBase64 = (img: RcFile, callback: (url: string) => void) => {
//     const reader = new FileReader();
//     reader.addEventListener('load', () => callback(reader.result as string));
//     reader.readAsDataURL(img);
//   };

//   static namingFileConvention = ({
//     domainName,
//     organizationId,
//     ext,
//   }: {
//     domainName: string;
//     organizationId: number;
//     ext: string;
//   }) => {
//     return `${domainName}-${organizationId}-${uuid4()}.${ext}`;
//   };

//   static resizeFile = (file: RcFile) =>
//     new Promise((resolve) => {
//       Resizer.imageFileResizer(
//         file,
//         128,
//         128,
//         'JPEG',
//         100,
//         0,
//         (uri) => {
//           resolve(uri);
//         },
//         'file',
//       );
//     });
// }

export {};
