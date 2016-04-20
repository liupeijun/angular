import { AsyncPipe } from './async_pipe';
import { UpperCasePipe } from './uppercase_pipe';
import { LowerCasePipe } from './lowercase_pipe';
import { JsonPipe } from './json_pipe';
import { SlicePipe } from './slice_pipe';
import { DatePipe } from './date_pipe';
import { DecimalPipe, PercentPipe, CurrencyPipe } from './number_pipe';
import { ReplacePipe } from './replace_pipe';
import { I18nPluralPipe } from './i18n_plural_pipe';
import { I18nSelectPipe } from './i18n_select_pipe';
import { CONST_EXPR } from 'angular2/src/facade/lang';
/**
 * A collection of Angular core pipes that are likely to be used in each and every
 * application.
 *
 * This collection can be used to quickly enumerate all the built-in pipes in the `pipes`
 * property of the `@Component` decorator.
 */
export const COMMON_PIPES = CONST_EXPR([
    AsyncPipe,
    UpperCasePipe,
    LowerCasePipe,
    JsonPipe,
    SlicePipe,
    DecimalPipe,
    PercentPipe,
    CurrencyPipe,
    DatePipe,
    ReplacePipe,
    I18nPluralPipe,
    I18nSelectPipe
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uX3BpcGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlmZmluZ19wbHVnaW5fd3JhcHBlci1vdXRwdXRfcGF0aC1TVTdXdDJRRS50bXAvYW5ndWxhcjIvc3JjL2NvbW1vbi9waXBlcy9jb21tb25fcGlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BS08sRUFBQyxTQUFTLEVBQUMsTUFBTSxjQUFjO09BQy9CLEVBQUMsYUFBYSxFQUFDLE1BQU0sa0JBQWtCO09BQ3ZDLEVBQUMsYUFBYSxFQUFDLE1BQU0sa0JBQWtCO09BQ3ZDLEVBQUMsUUFBUSxFQUFDLE1BQU0sYUFBYTtPQUM3QixFQUFDLFNBQVMsRUFBQyxNQUFNLGNBQWM7T0FDL0IsRUFBQyxRQUFRLEVBQUMsTUFBTSxhQUFhO09BQzdCLEVBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUMsTUFBTSxlQUFlO09BQzdELEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCO09BQ25DLEVBQUMsY0FBYyxFQUFDLE1BQU0sb0JBQW9CO09BQzFDLEVBQUMsY0FBYyxFQUFDLE1BQU0sb0JBQW9CO09BQzFDLEVBQUMsVUFBVSxFQUFDLE1BQU0sMEJBQTBCO0FBRW5EOzs7Ozs7R0FNRztBQUNILE9BQU8sTUFBTSxZQUFZLEdBQUcsVUFBVSxDQUFDO0lBQ3JDLFNBQVM7SUFDVCxhQUFhO0lBQ2IsYUFBYTtJQUNiLFFBQVE7SUFDUixTQUFTO0lBQ1QsV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osUUFBUTtJQUNSLFdBQVc7SUFDWCxjQUFjO0lBQ2QsY0FBYztDQUNmLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQG1vZHVsZVxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIG1vZHVsZSBwcm92aWRlcyBhIHNldCBvZiBjb21tb24gUGlwZXMuXG4gKi9cbmltcG9ydCB7QXN5bmNQaXBlfSBmcm9tICcuL2FzeW5jX3BpcGUnO1xuaW1wb3J0IHtVcHBlckNhc2VQaXBlfSBmcm9tICcuL3VwcGVyY2FzZV9waXBlJztcbmltcG9ydCB7TG93ZXJDYXNlUGlwZX0gZnJvbSAnLi9sb3dlcmNhc2VfcGlwZSc7XG5pbXBvcnQge0pzb25QaXBlfSBmcm9tICcuL2pzb25fcGlwZSc7XG5pbXBvcnQge1NsaWNlUGlwZX0gZnJvbSAnLi9zbGljZV9waXBlJztcbmltcG9ydCB7RGF0ZVBpcGV9IGZyb20gJy4vZGF0ZV9waXBlJztcbmltcG9ydCB7RGVjaW1hbFBpcGUsIFBlcmNlbnRQaXBlLCBDdXJyZW5jeVBpcGV9IGZyb20gJy4vbnVtYmVyX3BpcGUnO1xuaW1wb3J0IHtSZXBsYWNlUGlwZX0gZnJvbSAnLi9yZXBsYWNlX3BpcGUnO1xuaW1wb3J0IHtJMThuUGx1cmFsUGlwZX0gZnJvbSAnLi9pMThuX3BsdXJhbF9waXBlJztcbmltcG9ydCB7STE4blNlbGVjdFBpcGV9IGZyb20gJy4vaTE4bl9zZWxlY3RfcGlwZSc7XG5pbXBvcnQge0NPTlNUX0VYUFJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5cbi8qKlxuICogQSBjb2xsZWN0aW9uIG9mIEFuZ3VsYXIgY29yZSBwaXBlcyB0aGF0IGFyZSBsaWtlbHkgdG8gYmUgdXNlZCBpbiBlYWNoIGFuZCBldmVyeVxuICogYXBwbGljYXRpb24uXG4gKlxuICogVGhpcyBjb2xsZWN0aW9uIGNhbiBiZSB1c2VkIHRvIHF1aWNrbHkgZW51bWVyYXRlIGFsbCB0aGUgYnVpbHQtaW4gcGlwZXMgaW4gdGhlIGBwaXBlc2BcbiAqIHByb3BlcnR5IG9mIHRoZSBgQENvbXBvbmVudGAgZGVjb3JhdG9yLlxuICovXG5leHBvcnQgY29uc3QgQ09NTU9OX1BJUEVTID0gQ09OU1RfRVhQUihbXG4gIEFzeW5jUGlwZSxcbiAgVXBwZXJDYXNlUGlwZSxcbiAgTG93ZXJDYXNlUGlwZSxcbiAgSnNvblBpcGUsXG4gIFNsaWNlUGlwZSxcbiAgRGVjaW1hbFBpcGUsXG4gIFBlcmNlbnRQaXBlLFxuICBDdXJyZW5jeVBpcGUsXG4gIERhdGVQaXBlLFxuICBSZXBsYWNlUGlwZSxcbiAgSTE4blBsdXJhbFBpcGUsXG4gIEkxOG5TZWxlY3RQaXBlXG5dKTtcbiJdfQ==