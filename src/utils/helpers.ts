/* eslint-disable @typescript-eslint/no-explicit-any */
import { parameterDescriptions } from '@/config/translations';

export   const getTranslation = (path: string, lang?: string) => {
      if (!path) {
        return undefined;
      }
      const locale: string = lang || 'en';
      const keys = path.split('.');
      let current =
        (parameterDescriptions as Record<string, any>)[locale] ??
        ('' as string);

      for (let i = 0; i < keys.length; i++) {
        if (
          current === null ||
          current === undefined ||
          typeof current !== 'object'
        ) {
          return undefined;
        }

        current = current[keys[i]];
      }

      return current;
    }