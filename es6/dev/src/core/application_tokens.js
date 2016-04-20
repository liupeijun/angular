import { OpaqueToken, Provider } from 'angular2/src/core/di';
import { CONST_EXPR, Math, StringWrapper } from 'angular2/src/facade/lang';
/**
 *  @internal
 */
export const APP_COMPONENT_REF_PROMISE = CONST_EXPR(new OpaqueToken('Promise<ComponentRef>'));
/**
 * An {@link OpaqueToken-class.html} representing the application root type in the {@link
 * Injector}.
 *
 * ```
 * @Component(...)
 * class MyApp {
 *   ...
 * }
 *
 * bootstrap(MyApp).then((appRef:ApplicationRef) {
 *   expect(appRef.injector.get(appComponentTypeToken)).toEqual(MyApp);
 * });
 *
 * ```
 */
export const APP_COMPONENT = CONST_EXPR(new OpaqueToken('AppComponent'));
/**
 * A DI Token representing a unique string id assigned to the application by Angular and used
 * primarily for prefixing application attributes and CSS styles when
 * {@link ViewEncapsulation#Emulated} is being used.
 *
 * If you need to avoid randomly generated value to be used as an application id, you can provide
 * a custom value via a DI provider <!-- TODO: provider --> configuring the root {@link Injector}
 * using this token.
 */
export const APP_ID = CONST_EXPR(new OpaqueToken('AppId'));
function _appIdRandomProviderFactory() {
    return `${_randomChar()}${_randomChar()}${_randomChar()}`;
}
/**
 * Providers that will generate a random APP_ID_TOKEN.
 */
export const APP_ID_RANDOM_PROVIDER = CONST_EXPR(new Provider(APP_ID, { useFactory: _appIdRandomProviderFactory, deps: [] }));
function _randomChar() {
    return StringWrapper.fromCharCode(97 + Math.floor(Math.random() * 25));
}
/**
 * A function that will be executed when a platform is initialized.
 */
export const PLATFORM_INITIALIZER = CONST_EXPR(new OpaqueToken("Platform Initializer"));
/**
 * A function that will be executed when an application is initialized.
 */
export const APP_INITIALIZER = CONST_EXPR(new OpaqueToken("Application Initializer"));
/**
 * A token which indicates the root directory of the application
 */
export const PACKAGE_ROOT_URL = CONST_EXPR(new OpaqueToken("Application Packages Root URL"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb25fdG9rZW5zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlmZmluZ19wbHVnaW5fd3JhcHBlci1vdXRwdXRfcGF0aC1TVTdXdDJRRS50bXAvYW5ndWxhcjIvc3JjL2NvcmUvYXBwbGljYXRpb25fdG9rZW5zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJPQUFPLEVBQUMsV0FBVyxFQUFFLFFBQVEsRUFBQyxNQUFNLHNCQUFzQjtPQUNuRCxFQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFDLE1BQU0sMEJBQTBCO0FBRXhFOztHQUVHO0FBQ0gsT0FBTyxNQUFNLHlCQUF5QixHQUFHLFVBQVUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7QUFFOUY7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBQ0gsT0FBTyxNQUFNLGFBQWEsR0FBZ0IsVUFBVSxDQUFDLElBQUksV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7QUFFdEY7Ozs7Ozs7O0dBUUc7QUFDSCxPQUFPLE1BQU0sTUFBTSxHQUFnQixVQUFVLENBQUMsSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUV4RTtJQUNFLE1BQU0sQ0FBQyxHQUFHLFdBQVcsRUFBRSxHQUFHLFdBQVcsRUFBRSxHQUFHLFdBQVcsRUFBRSxFQUFFLENBQUM7QUFDNUQsQ0FBQztBQUVEOztHQUVHO0FBQ0gsT0FBTyxNQUFNLHNCQUFzQixHQUMvQixVQUFVLENBQUMsSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFLEVBQUMsVUFBVSxFQUFFLDJCQUEyQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUM7QUFFMUY7SUFDRSxNQUFNLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN6RSxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxPQUFPLE1BQU0sb0JBQW9CLEdBQzdCLFVBQVUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7QUFFeEQ7O0dBRUc7QUFDSCxPQUFPLE1BQU0sZUFBZSxHQUFnQixVQUFVLENBQUMsSUFBSSxXQUFXLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDO0FBRW5HOztHQUVHO0FBQ0gsT0FBTyxNQUFNLGdCQUFnQixHQUN6QixVQUFVLENBQUMsSUFBSSxXQUFXLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPcGFxdWVUb2tlbiwgUHJvdmlkZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2RpJztcbmltcG9ydCB7Q09OU1RfRVhQUiwgTWF0aCwgU3RyaW5nV3JhcHBlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcblxuLyoqXG4gKiAgQGludGVybmFsXG4gKi9cbmV4cG9ydCBjb25zdCBBUFBfQ09NUE9ORU5UX1JFRl9QUk9NSVNFID0gQ09OU1RfRVhQUihuZXcgT3BhcXVlVG9rZW4oJ1Byb21pc2U8Q29tcG9uZW50UmVmPicpKTtcblxuLyoqXG4gKiBBbiB7QGxpbmsgT3BhcXVlVG9rZW4tY2xhc3MuaHRtbH0gcmVwcmVzZW50aW5nIHRoZSBhcHBsaWNhdGlvbiByb290IHR5cGUgaW4gdGhlIHtAbGlua1xuICogSW5qZWN0b3J9LlxuICpcbiAqIGBgYFxuICogQENvbXBvbmVudCguLi4pXG4gKiBjbGFzcyBNeUFwcCB7XG4gKiAgIC4uLlxuICogfVxuICpcbiAqIGJvb3RzdHJhcChNeUFwcCkudGhlbigoYXBwUmVmOkFwcGxpY2F0aW9uUmVmKSB7XG4gKiAgIGV4cGVjdChhcHBSZWYuaW5qZWN0b3IuZ2V0KGFwcENvbXBvbmVudFR5cGVUb2tlbikpLnRvRXF1YWwoTXlBcHApO1xuICogfSk7XG4gKlxuICogYGBgXG4gKi9cbmV4cG9ydCBjb25zdCBBUFBfQ09NUE9ORU5UOiBPcGFxdWVUb2tlbiA9IENPTlNUX0VYUFIobmV3IE9wYXF1ZVRva2VuKCdBcHBDb21wb25lbnQnKSk7XG5cbi8qKlxuICogQSBESSBUb2tlbiByZXByZXNlbnRpbmcgYSB1bmlxdWUgc3RyaW5nIGlkIGFzc2lnbmVkIHRvIHRoZSBhcHBsaWNhdGlvbiBieSBBbmd1bGFyIGFuZCB1c2VkXG4gKiBwcmltYXJpbHkgZm9yIHByZWZpeGluZyBhcHBsaWNhdGlvbiBhdHRyaWJ1dGVzIGFuZCBDU1Mgc3R5bGVzIHdoZW5cbiAqIHtAbGluayBWaWV3RW5jYXBzdWxhdGlvbiNFbXVsYXRlZH0gaXMgYmVpbmcgdXNlZC5cbiAqXG4gKiBJZiB5b3UgbmVlZCB0byBhdm9pZCByYW5kb21seSBnZW5lcmF0ZWQgdmFsdWUgdG8gYmUgdXNlZCBhcyBhbiBhcHBsaWNhdGlvbiBpZCwgeW91IGNhbiBwcm92aWRlXG4gKiBhIGN1c3RvbSB2YWx1ZSB2aWEgYSBESSBwcm92aWRlciA8IS0tIFRPRE86IHByb3ZpZGVyIC0tPiBjb25maWd1cmluZyB0aGUgcm9vdCB7QGxpbmsgSW5qZWN0b3J9XG4gKiB1c2luZyB0aGlzIHRva2VuLlxuICovXG5leHBvcnQgY29uc3QgQVBQX0lEOiBPcGFxdWVUb2tlbiA9IENPTlNUX0VYUFIobmV3IE9wYXF1ZVRva2VuKCdBcHBJZCcpKTtcblxuZnVuY3Rpb24gX2FwcElkUmFuZG9tUHJvdmlkZXJGYWN0b3J5KCkge1xuICByZXR1cm4gYCR7X3JhbmRvbUNoYXIoKX0ke19yYW5kb21DaGFyKCl9JHtfcmFuZG9tQ2hhcigpfWA7XG59XG5cbi8qKlxuICogUHJvdmlkZXJzIHRoYXQgd2lsbCBnZW5lcmF0ZSBhIHJhbmRvbSBBUFBfSURfVE9LRU4uXG4gKi9cbmV4cG9ydCBjb25zdCBBUFBfSURfUkFORE9NX1BST1ZJREVSOiBQcm92aWRlciA9XG4gICAgQ09OU1RfRVhQUihuZXcgUHJvdmlkZXIoQVBQX0lELCB7dXNlRmFjdG9yeTogX2FwcElkUmFuZG9tUHJvdmlkZXJGYWN0b3J5LCBkZXBzOiBbXX0pKTtcblxuZnVuY3Rpb24gX3JhbmRvbUNoYXIoKTogc3RyaW5nIHtcbiAgcmV0dXJuIFN0cmluZ1dyYXBwZXIuZnJvbUNoYXJDb2RlKDk3ICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjUpKTtcbn1cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBleGVjdXRlZCB3aGVuIGEgcGxhdGZvcm0gaXMgaW5pdGlhbGl6ZWQuXG4gKi9cbmV4cG9ydCBjb25zdCBQTEFURk9STV9JTklUSUFMSVpFUjogT3BhcXVlVG9rZW4gPVxuICAgIENPTlNUX0VYUFIobmV3IE9wYXF1ZVRva2VuKFwiUGxhdGZvcm0gSW5pdGlhbGl6ZXJcIikpO1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIHdoZW4gYW4gYXBwbGljYXRpb24gaXMgaW5pdGlhbGl6ZWQuXG4gKi9cbmV4cG9ydCBjb25zdCBBUFBfSU5JVElBTElaRVI6IE9wYXF1ZVRva2VuID0gQ09OU1RfRVhQUihuZXcgT3BhcXVlVG9rZW4oXCJBcHBsaWNhdGlvbiBJbml0aWFsaXplclwiKSk7XG5cbi8qKlxuICogQSB0b2tlbiB3aGljaCBpbmRpY2F0ZXMgdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoZSBhcHBsaWNhdGlvblxuICovXG5leHBvcnQgY29uc3QgUEFDS0FHRV9ST09UX1VSTDogT3BhcXVlVG9rZW4gPVxuICAgIENPTlNUX0VYUFIobmV3IE9wYXF1ZVRva2VuKFwiQXBwbGljYXRpb24gUGFja2FnZXMgUm9vdCBVUkxcIikpO1xuIl19