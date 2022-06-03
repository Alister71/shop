import {Injectable} from '@angular/core';
import { HttpEventType } from '@angular/common/http';
import type {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import type { Observable } from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {interceptorTOKEN} from '../../components/cart/service/cart-observable.service';
@Injectable()
export class TsInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clonedRequest = req;
    return next.handle(clonedRequest).pipe(
      filter((event: HttpEvent<any>) => event.type === HttpEventType.Response),
      map((event: HttpEvent<any>) => {
        // tslint:disable-next-line:no-non-null-assertion
        if ((event as HttpResponse<any>).url!.includes('cart-products')) {
          const contextValue = req.context.get(interceptorTOKEN);
          if (contextValue) {
            console.log('Request duration in ms: ' + (new Date().getTime() - contextValue));
          }
        }
        return event;
      })
    );
  }
}
